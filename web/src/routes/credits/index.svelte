<script context="module">
	import client from '../../sanityClient'
	export function preload({ params }) {
		const query = `{
			"cast": *[_type == 'cast'],
			"crew": *[_type == 'crew'],
			"patrons": *[_type == 'patrons'],
			"specialThanks": *[_type == 'specialThanks'],
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

<h1>Cast</h1>
<h2>Crew</h2>
<h3>Special Thanks</h3>
<h4>Patrons</h4>