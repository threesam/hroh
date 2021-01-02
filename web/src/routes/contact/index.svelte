<script>
    import {onMount} from 'svelte'
    import {fade, fly} from 'svelte/transition'

    // import SubscribeButton from "../_SubscribeButton.svelte"		

    import sketch from './sketch.js'
    import Head from '../../components/Head.svelte'

    let P5Sketch
    onMount(async () => {
        const mod = await import("../../components/CanvasP5.svelte")
        P5Sketch = mod.default
    })
</script>

<style>
    .social-links {
        margin: 2rem;
    }

    @media (min-width: 800px) {
        article {
            border: 1px solid #444;
            padding: 2rem 2rem 0 2rem;
        }
    }
</style>

<Head slug="contact" title="Contact" />

<div in:fade={{delay: 500, duration: 1500}} id="brand-ctn">
    <svelte:component this={P5Sketch} {sketch} id="contact-sketch"/>
    <noscript><img id="logo" src="images/actOut.png" alt="brand symbol for ActOut!"></noscript>
</div>
<article in:fly={{y: -100, duration: 1000}} class="contact-article container">
    <div>
        <p>“Hard Road of Hope” is available for screenings and educational purposes. Please
            contact us at
            <a class="aka" href="https://artkillingapathy.com/contact" target="_blank">ArtKillingApathy</a> to
            discuss.</p>
        <br>
        <p>The order form on this site is for Personal Use only. If you need financial assistance to access this content, please <a class="aka"
                href="mailto:eleanor@artkillingapathy.com?subject=HROHfinancialAid">contact me</a> and we can
            work something
            out.</p>
    </div>

    <!-- <SubscribeButton/> -->
    
    <div class="social-links">
        <h4>Follow us here</h4>
        <a target="_blank" title="follow me on Twitter" href="https://www.twitter.com/radicaleleanor"><img
                alt="follow me on twitter" src="icons/twitterIcon.png"></a>
        <a target="_blank" title="follow me on instagram" href="https://www.instagram.com/radicaleleanor"><img
                alt="follow me on instagram" src="icons/instagramIcon.png"></a>
    </div>
</article>
