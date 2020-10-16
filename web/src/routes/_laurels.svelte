<script>
    export let laurels
    console.log(laurels)
</script>

<style>
    div {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1rem;
    }
    img {
        filter: invert();
    }
</style>

<div>
    {#each laurels as {image: src, alt}}
        <img src="{src}?w=100" {alt}>
    {/each}
</div>