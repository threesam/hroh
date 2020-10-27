<script>
	export let segment;
</script>

<nav id="navbar">
	<a href="." class='{segment === undefined ? "selected-tab" : ""} nav-link'>Home</a>
	<a href="about" class="{segment === "about" ? "selected-tab" : ""} nav-link">About</a>
	<a rel="prefetch" href="press" class="{segment === "press" ? "selected-tab" : ""} nav-link">Press</a>
	<a rel="prefetch" href="contact" class="{segment === "contact" ? "selected-tab" : ""} nav-link">Contact</a>
</nav>