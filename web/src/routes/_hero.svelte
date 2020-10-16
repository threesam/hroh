<script>
    import {fade} from 'svelte/transition'
    export let src
    export let alt
</script>

<style>
    div {
        position: relative;
        display: grid;
        place-content: center;
        width: 100%;
        height: calc(100vh - 3rem);
        background: rgba(0,0,0,0.69);
        color: orange;
    }
    img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: -10;
    }
    h1 {
        font-size: 3.5rem;
    }
</style>

<div>
    <img {src} {alt} />
    <h1 in:fade>Hard Road of Hope</h1>
    <slot />
</div>