<script>
	export let segment;
</script>

<style>
	nav {
		max-width: 500px;
		margin: 0 auto;
		top: 0;
		left: 0;
		height: var(--nav-height);
		width: 100%;
		padding: 0 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: center;
		z-index: 100;
	}

	a {
		font-size: 1rem;
		min-width: 60px;
		font-family: 'norwester';
		font-weight: 100;
	}

	a:hover {
		color: var(--emphasized-text);
		text-shadow: 2px 2px 5px var(--nav-color);
		opacity: 1;
		-webkit-transition: all 0.1s ease-in;
		-moz-transition: all 0.1s ease-in;
		-o-transition: all 0.1s ease-in;
		transition: all 0.1s ease-in;
	}

	.selected-tab {
		color: var(--emphasized-text);
		opacity: 0.9;
	}
</style>

<nav>
	<a rel="prefetch" href="blog" class="{segment === "blog" ? "selected-tab" : ""}">Blog</a>
	<a rel="prefetch" href="press" class="{segment === "press" ? "selected-tab" : ""}">Press</a>
	<a href="." class='{segment === undefined ? "selected-tab" : ""}'>
		<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="22" height="22"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5a7.5 7.5 0 1115 0 7.5 7.5 0 01-15 0zm6.249-2.432a.5.5 0 01.5-.002l3.5 2a.5.5 0 010 .868l-3.5 2A.5.5 0 016 9.5v-4a.5.5 0 01.249-.432z" fill="currentColor"></path></svg>
	</a>
	<a href="about" class="{segment === "about" ? "selected-tab" : ""}">About</a>
	<a rel="prefetch" href="contact" class="{segment === "contact" ? "selected-tab" : ""}">Contact</a>
</nav>