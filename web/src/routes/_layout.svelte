  <script>
	import {onMount, tick} from 'svelte'
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';

	export let segment;

	let testId = 'loading'
	onMount(()=> {
		tick().then(() => testId = 'loaded')
	})
</script>

<style>
	main {
		position: relative;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer />