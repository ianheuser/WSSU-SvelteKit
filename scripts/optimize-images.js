// Converts ../original-images/*.jpg|jpeg|png into static/images as WebP (+ JPEG fallback),
// resized down to a max width based on how the image is used.
//
//   node scripts/optimize-images.js            # only writes files that are missing or stale
//   node scripts/optimize-images.js --force    # rewrite everything
//   node scripts/optimize-images.js --dry      # just report what it would do

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, '../../original-images');
const OUT = path.resolve(__dirname, '../static/images');

const force = process.argv.includes('--force');
const dry = process.argv.includes('--dry');

// Max width (px) by role, matched against the filename. Order matters: first match wins.
// Heroes are full-bleed so they get room for 2x displays; everything else sits in a column.
const RULES = [
	{ match: /-hero\./,                   maxWidth: 2100, quality: 70 },
	{ match: /real-world-application/,    maxWidth: 1600, quality: 70 },
	{ match: /[-_]lead[-_]form/,          maxWidth: 1200, quality: 70 },
	{ match: /highlights|innovators/,     maxWidth: 1600, quality: 70 },
	{ match: /./,                         maxWidth: 1600, quality: 70 } // default
];

const normalizeName = (file) =>
	path.parse(file).name.toLowerCase().replace(/_/g, '-'); // msot_lead_form -> msot-lead-form

const kb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;

async function isStale(src, out) {
	if (force) return true;
	try {
		const [s, o] = await Promise.all([stat(src), stat(out)]);
		return s.mtimeMs > o.mtimeMs;
	} catch {
		return true; // output missing
	}
}

async function run() {
	await mkdir(OUT, { recursive: true });
	const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f));

	let totalIn = 0, totalOut = 0;

	for (const file of files) {
		const src = path.join(SRC, file);
		const name = normalizeName(file);
		const rule = RULES.find((r) => r.match.test(file.toLowerCase()));
		const webpOut = path.join(OUT, `${name}.webp`);
		const jpgOut = path.join(OUT, `${name}.jpg`);

		const inSize = (await stat(src)).size;
		totalIn += inSize;

		if (!(await isStale(src, webpOut))) {
			console.log(`skip   ${name} (up to date)`);
			totalOut += (await stat(webpOut)).size;
			continue;
		}

		const meta = await sharp(src).metadata();
		const targetWidth = Math.min(meta.width, rule.maxWidth);

		if (dry) {
			const targetHeight = Math.round((meta.height * targetWidth) / meta.width);
			console.log(`would  ${name}: ${meta.width}x${meta.height} -> ${targetWidth}x${targetHeight}  (${kb(inSize)})`);
			continue;
		}

		// .rotate() with no args applies EXIF orientation, then strips it (sharp drops metadata by default)
		const base = sharp(src).rotate().resize({ width: targetWidth, withoutEnlargement: true });

		const [webp, jpg] = await Promise.all([
			base.clone().webp({ quality: rule.quality, effort: 5 }).toFile(webpOut),
			base.clone().jpeg({ quality: rule.quality, mozjpeg: true, progressive: true }).toFile(jpgOut)
		]);

		totalOut += webp.size;
		console.log(
			`wrote  ${name}: ${meta.width}x${meta.height} -> ${webp.width}x${webp.height}  ` +
			`${kb(inSize)} -> webp ${kb(webp.size)} / jpg ${kb(jpg.size)}`
		);
	}

	if (!dry) console.log(`\n${files.length} images: ${kb(totalIn)} -> ${kb(totalOut)} (webp)`);
}

run().catch((err) => {
	console.error(err);
	process.exit(1);
});
