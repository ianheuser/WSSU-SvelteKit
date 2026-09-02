<script>
	import { onMount } from 'svelte';
	import { asset } from '$app/paths';
	import RamAnimation from '$lib/components/RamAnimation.svelte';
	import InquiryForm from '$lib/components/InquiryForm.svelte';

	const programTypeCount = 3;

	let selectedProgramCode = $state('');
	let activeProgramTypeIndex = $state(0);
	/** @type {number | null} */
	let previousProgramTypeIndex = $state(null);

	onMount(() => {
		const rotationInterval = window.setInterval(() => {
			previousProgramTypeIndex = activeProgramTypeIndex;
			activeProgramTypeIndex = (activeProgramTypeIndex + 1) % programTypeCount;
		}, 4500);

		return () => {
			window.clearInterval(rotationInterval);
		};
	});

	/**
	 * @param {MouseEvent} event
	 * @param {string} programCode
	 */
	function selectProgram(event, programCode) {
		event.preventDefault();
		selectedProgramCode = programCode.toLowerCase();
		document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
	}

	/**
	 * @param {number} index
	 */
	function isHiddenProgramType(index) {
		return activeProgramTypeIndex !== index;
	}
</script>

<svelte:head>
	<title>Winston-Salem State University Graduate College</title>
	<meta
		name="description"
		content="Explore graduate degrees, certificates, and doctoral programs at Winston-Salem State University."
	/>
</svelte:head>

<main>
	<section class="flex column landing-hero">
		<div class="hero-art" aria-hidden="true"></div>
		<h1 class="hero-title">Be the Ram in the Room</h1>
	</section>

	<section class="flex column program-finder" id="programs">
		<h2>Find the program<br />that prepares you to lead</h2>

		<div
			class="program-type-grid program-type-slider"
			aria-label="Program types"
		>
		
			<div
				class="program-type"
				class:current={activeProgramTypeIndex === 0}
				class:previous={previousProgramTypeIndex === 0}
				id="certificatePrograms"
				aria-hidden={isHiddenProgramType(0) ? 'true' : undefined}
				inert={isHiddenProgramType(0)}
			>
				<h3 class="blue neon">
					Certificates
				</h3>
				<ul class="white program-list">
					<li>
						<a href="#contact" onclick={(event) => selectProgram(event, 'DA')}>
							Data Analytics
						</a>
					</li>
					<li>
						<a href="#contact" onclick={(event) => selectProgram(event, 'FNP')}>
							Family Nurse Practitioner Certificate | FNP
						</a>
					</li>
				</ul>
			</div>
			<div
				class="program-type"
				class:current={activeProgramTypeIndex === 1}
				class:previous={previousProgramTypeIndex === 1}
				id="masterPrograms"
				aria-hidden={isHiddenProgramType(1) ? 'true' : undefined}
				inert={isHiddenProgramType(1)}
			>
				<h3 class="gold neon">
					Masters Degrees
				</h3>
				<ul class="white program-list">
					<li>
						<a href="#contact" onclick={(event) => selectProgram(event, 'MAT')}>
							Master of Arts in Teaching | MAT
						</a>
					</li>
					<li>
						<a href="#contact" onclick={(event) => selectProgram(event, 'MBA')}>
							Master of Business Administration | MBA
						</a>
					</li>
					<li>
						<a href="#contact" onclick={(event) => selectProgram(event, 'MHA')}>
							Master of Healthcare Administration | MHA
						</a>
					</li>
					<li>
						<a href="#contact" onclick={(event) => selectProgram(event, 'MCST')}>
							Master of Science in Computer Science and Information Technology | MCST
						</a>
					</li>
					<li>
						<a href="#contact" onclick={(event) => selectProgram(event, 'MCST')}>
							5-Year (4+1) BS-MS Degree Computer Science and Information Technology | MCST
						</a>
					</li>
					<li>
						<a href="#contact" onclick={(event) => selectProgram(event, 'MSOT')}>
							Master of Science in Occupational Therapy | MSOT
						</a>
					</li>
					<li>
						<a href="#contact" onclick={(event) => selectProgram(event, 'MSRC')}>
							Master of Science in Rehabilitation Counseling | MSRC
						</a>
					</li>
					<li>
						<a href="#contact" onclick={(event) => selectProgram(event, 'MSN')}>
							Master of Science in Nursing | MSN
						</a>
					</li>
				</ul>
			</div>
			<div
				class="program-type"
				class:current={activeProgramTypeIndex === 2}
				class:previous={previousProgramTypeIndex === 2}
				id="doctoratePrograms"
				aria-hidden={isHiddenProgramType(2) ? 'true' : undefined}
				inert={isHiddenProgramType(2)}
			>
				<h3 class="neon green">
					Doctoral Degrees
				</h3>
				<ul class="white program-list">
					<li>
						<a href="#contact" onclick={(event) => selectProgram(event, 'DNP')}>
							Doctor of Nursing Practice | DNP
						</a>
					</li>
					<li>
						<a href="#contact" onclick={(event) => selectProgram(event, 'DPT')}>
							Doctor of Physical Therapy | DPT
						</a>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<InquiryForm
		heading = "Ready to Step Into the Room?"
		description = "Tell us a little about yourself and our graduate team can help you plan your next move."
		buttonLabel = "Submit"
		image = { asset('/images/landing-form-photo.jpg') }
		imageAlt = "Graduate student meeting with an advisor"
		thanksMessage = "A member of our admissions team will be in touch soon with details about our programs."
		programCode={selectedProgramCode}
	></InquiryForm>

	<section class="flex column aid-band" id="financial-aid">
		<h2>Affordable. Attainable. Achievable.</h2>
		<p>Through scholarships, grants, and financial aid, we make pursuing your graduate degree a reality.</p>
	</section>

	<RamAnimation />

	<section class="flex dean-quote">
		<img src={ asset("/images/dean-boykin.jpg") } alt="Montrale Boykin, Dean, Graduate College" />
		<blockquote>
			<p>
				At WSSU, you'll be prepared and ready to lead in any room you enter. If you're looking for real economic
				opportunity, social mobility, and a community of students and educators driving change, this is your
				university!
			</p>
			<cite>Montrale Boykin | Dean, Graduate College</cite>
		</blockquote>
	</section>
</main>

<style>
	.program-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}
</style>
