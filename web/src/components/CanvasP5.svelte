<script>
  export let id
  import p5 from 'p5'
  export let sketch

  import { onMount } from 'svelte'

  onMount(() => {
    let myp5 = new p5(sketch, id)
  })
</script>

<style>
  div {
    width: 100%;
    height: 100%;
  }
  </style>

<div {id} />
