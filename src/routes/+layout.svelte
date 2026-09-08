<script>
	import { onDestroy } from 'svelte';
	import { afterNavigate } from '$app/navigation';
	import favicon from '$lib/assets/favicon.svg';

	// Global styles + self-hosted fonts. Vite bundles these, and with
	// kit.inlineStyleThreshold set the CSS is inlined into the HTML so nothing
	// on the critical path is a separate request.
	import '../styles.css';
	import '@fontsource/tilt-neon/latin-400.css';
	import '@fontsource/open-sans/latin-400.css';
	import '@fontsource/open-sans/latin-600.css';
	import '@fontsource/open-sans/latin-800.css';
	// Same file the Tilt Neon @font-face points at, so the preload and the CSS share one URL
	import tiltNeonWoff2 from '@fontsource/tilt-neon/files/tilt-neon-latin-400-normal.woff2';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { initNeonEffects } from '$lib/scripts/neon.js';

	let { children } = $props();

	// The neon flicker watches elements on the current page, so it restarts
	// after every client-side navigation once the new page is in the DOM.
	let cleanupNeon;

	afterNavigate(() => {
		cleanupNeon?.();
		cleanupNeon = initNeonEffects();
	});

	onDestroy(() => {
		cleanupNeon?.();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preload" as="font" type="font/woff2" href={tiltNeonWoff2} crossorigin="anonymous" />
</svelte:head>

<Header />

{@render children()}

<Footer />
