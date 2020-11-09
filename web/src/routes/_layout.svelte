  <script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;

	const capitalize = (string) => {
		if (!string) return
		return string.replace(/^\w/, c => c.toUpperCase());
	}
</script>

<style>
	main {
		position: relative;
		min-height: calc(100vh - 2 * var(--nav-height));
	}
</style>

<svelte:head>
	<title>{capitalize(segment)}</title>
</svelte:head>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer />