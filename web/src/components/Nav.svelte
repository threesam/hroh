<script>
	export let segment;
</script>

<style>
	nav {
		font-weight: 300;
		background: rgba(0,0,0,0.9);
		color: white;
		height: var(--nav-height);
	}

	ul {
		display: flex;
		flex-flow: row;
		height: 100%;
	}

	li {
		display: grid;
		place-content: center;
		list-style-type: none;
		margin: 0 1rem;
		height: 3rem;
	}
	a {
		height: 100%;
		text-decoration: none;
	}

	.selected {
		position: relative;
		border-bottom: 2px solid orange;
	}
</style>

<nav>
	<ul>
		<li class='{segment === undefined ? "selected" : ""}'><a href='.'>home</a></li>
		<li class='{segment === "about" ? "selected" : ""}'><a href='about'>about</a></li>
		<li class='{segment === "credits" ? "selected" : ""}'><a href='credits'>credits</a></li>
		<li class='{segment === "press" ? "selected" : ""}'><a href='press'>press</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li class='{segment === "blog" ? "selected" : ""}'><a rel="prefetch" href='blog'>blog</a></li>
	</ul>
</nav>