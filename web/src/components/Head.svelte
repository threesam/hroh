<script>
  let BASE_URL = "https://hardroadofhope.com"
  export let title = 'Hard Road of Hope'
  export let excerpt = "A radical and independent film setting the record straight and inspiring the road ahead..."
  export let image = "https://cdn.sanity.io/images/8baclurv/production/f8cb4d7eae497365e7952de6766d0b7a34db4147-3024x3024.jpg?w=640&h=442"
  export let alt = "A picture of a paved forest road"
  export let slug = ""
</script>

<svelte:head>
  <slot />
  <meta property="og:title" content={title}>
  <meta property="og:description" content={excerpt}>
  <meta name="description" content={excerpt}>
  <meta property="og:image" content={image}>
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:secure_url" content={image}>
  <meta property="og:image:width" content="640">
  <meta property="og:image:height" content="442">
  <meta property="og:url" content={`${BASE_URL}/${slug}`}>
  <meta name="twitter:card" content="summary_large_image">
  <meta property="og:site_name" content="Hard Road of Hope">
  <meta name="twitter:image:alt" content={alt}>
</svelte:head>