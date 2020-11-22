<script>
  let BASE_URL = "https://hardroadofhope.com"
  export let title = 'Hard Road of Hope'
  export let excerpt = "A radical and independent film setting the record straight and inspiring the road ahead..."
  export let image = "https://hardroadofhope.com/images/backingIMG.JPG"
  export let alt = "A picture of a paved forest road"
  export let slug = ""
</script>

<svelte:head>
  <slot />
  <meta property="og:title" content={title}>
  <meta property="og:description" content={excerpt}>
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