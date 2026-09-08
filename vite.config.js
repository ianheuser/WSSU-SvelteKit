// vite.config.js
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

const dev = process.argv.includes('dev');
const base = dev ? '' : process.env.BASE_PATH || '';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit({
			compilerOptions: {
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},

			adapter: adapter({
				fallback: '404.html'
			}),
			prerender: {
				handleMissingId: 'ignore', 
			},
			// Inline stylesheets under this size into the HTML instead of linking them
			// (global styles.css is ~11 KB; the font-face CSS is smaller still)
			inlineStyleThreshold: 16 * 1024,
			paths: {
				base
			}
		})
	]
});