<script context="module">
	import client from '../../sanityClient'
	export function preload({ params }) {
		const query = `{
			"laurels": *[_type == 'laurel'],
			"praise": *[_type == 'praise'],
			"press": *[_type == 'press'],
		}`
		return client
		.fetch(query)
		.then((data) => {
			return { data }
		})
		.catch((err) => this.error(500, err))
	}
</script>

<script>
    export let data
    console.log(data)
</script>

<h1>Laurels</h1>
<h2>Praise</h2>
<h3>Press</h3>