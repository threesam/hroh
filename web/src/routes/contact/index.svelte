<script>
    import {onMount} from 'svelte'
    import {fade} from 'svelte/transition'

    import sketch from './sketch.js'

   let P5Sketch
  onMount(async () => {
    const mod = await import("../../components/CanvasP5.svelte")
    P5Sketch = mod.default
  })
</script>

<main class="container box-shadow">
    <article class="contact-article">
        <div>
            <p>“Hard Road of Hope” is available for screenings and educational purposes. The order form on this site is for Personal Use only. Please
                contact us at
                <a class="aka" href="https://artkillingapathy.com/contact" target="_blank">ArtKillingApathy</a> to
                discuss.</p>
            <br>
        </div>

        
        <div in:fade={{duration: 1000, delay: 300}} id="brand-ctn">
            <svelte:component this={P5Sketch} {sketch} id="contact-sketch"/>
            <noscript><img id="logo" src="images/actOut.png" alt="brand symbol for ActOut!"></noscript>
        </div>
        <div class="social-links">
            <h4>Follow us here</h4>
            <a target="_blank" title="follow me on Twitter" href="https://www.twitter.com/activisteleanor"><img
                    alt="follow me on twitter" src="icons/twitterIcon.png"></a>
            <a target="_blank" title="follow me on instagram" href="https://www.instagram.com/activisteleanor"><img
                    alt="follow me on instagram" src="icons/instagramIcon.png"></a>
        </div>
        <div class="disclaimer">
            <p>If you need financial assistance to access this content, please <a class="aka"
                    href="mailto:eleanor@artkillingapathy.com?subject=HROHfinancialAid">contact me</a> and we can
                work something
                out.</p>
        </div>
    </article>
</main>