<script>
  export let href;
</script>

<style>
  a {
		margin: 3rem 0;
		padding: 2rem;
		border: 0.125rem dashed var(--emphasized-text);
		border-radius: 13px;
		color: var(--emphasized-text);
		filter: grayscale(100%);
	}
	a:hover {
		filter: grayscale(0%);
		transition: all 0.3s ease-in-out;
	}
</style>

<a {href}>
  <slot />
</a>
