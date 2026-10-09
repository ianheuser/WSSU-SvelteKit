
<script>
	import ProgramHero from '$lib/components/ProgramHero.svelte';
	import InnovatorsCareerPaths from '$lib/components/InnovatorsCareerPaths.svelte';
    import StatRow from '$lib/components/StatRow.svelte';
    import RealWorldApplication from '$lib/components/RealWorldApplication.svelte';
    import PromoBoxColumns from '$lib/components/PromoBoxColumns.svelte';
    import FinancialAid from '$lib/components/FinancialAid.svelte';
    import FindAPath from '$lib/components/FindAPath.svelte';
	import { asset } from '$app/paths';
	import InquiryFormMAT from '$lib/components/InquiryFormMAT.svelte';

	import { programs } from '$lib/scripts/programs.js';
	let programCode = 'MAT';
	const program = programs.find((program) => program.label == programCode);
	
	if (!program) {
		throw new Error('MAT program data not found');
	}
</script>

<svelte:head>
	<title>{program.titleOverlay} | WSSU</title>
	<meta
		name = "description"
		content = {program.pageDescription}
	/>
</svelte:head>

<main>


	{#if !program}
		<h1>Program data not found</h1>
	{:else}

		<ProgramHero
			heading = { program.heading }
			subHeading = { program.subHeading }
			programCode = { program.label }
			image = { asset('/images/' + program.label.toLowerCase() + '-hero.webp') }
			reverse = { program.heroReverse }
			sectionColor = { program.sectionColor }
		></ProgramHero>
		
		<PromoBoxColumns 
			heading = { program.promoHeader }
			columns = { program.promoBoxColumns }
		></PromoBoxColumns>
		
		<InquiryFormMAT
			heading = { program.leadFormHeader }
			description = { program.leadFormCopy }
			buttonLabel = "Get Connected"
			image = { asset('/images/' + program.label.toLowerCase() + '-lead-form.webp') }
			imageAlt = { program.leadFormImageAlt }
			thanksMessage = { program.leadFormPostSubmitCopy }
			programCode={ programCode }
		></InquiryFormMAT>
			
		<InnovatorsCareerPaths
			image = { asset("/images/innovators.webp") }
			imageAlt = "Students collaborating in a lab"
			innovationBullets = {program.highlightsBullets}
			careerPathBullets = {program.careerPathBullets}
			sectionColor = { program.sectionColor }
		></InnovatorsCareerPaths>

		<StatRow
			stats = {program.statisticsBar}
			sectionColor = { program.sectionColor }
		></StatRow>
		
		<RealWorldApplication
			heading = { program.realWorldAppHeader }
			paragraph = { program.realWorldAppCopy }
			image = { asset('/images/' + program.label.toLowerCase() + '-real-world-application.webp') }
			sectionColor = { program.sectionColor }
		></RealWorldApplication>

		<FinancialAid
			heading = { program.affordabilityHeader }
			paragraph = { program.affordabilityCopy }
		></FinancialAid>

		<FindAPath
			heading = { program.mottoHeader }
			subHeading = { program.mottoSubHead }
			description = { program.mottoCopy }
			buttonLabel = "Let's Find a Path That Fits You"
			sectionColor = { program.sectionColor }
		></FindAPath>
		
	{/if}

</main>
