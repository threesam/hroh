<script>
    import BlockContent from '@movingbrands/svelte-portable-text'
    import serializers from '../components/serializers'

    export let praise
    const {body, reviewer, href, publication} = praise[0]
    console.log(praise[0])
</script>
			
<style>
			
</style>
<div class="card">
            <BlockContent blocks={body} {serializers} />
            <!-- <p>
                "A workhorse documentary that's blue collar in presentation yet fiercely strong in its voice of
                advocacy and truth."
                <br>
                <br>
                "Hard Road of Hope doesn't speak for West Virginians but with West Virginians and, perhaps most
                refreshingly, the film avoids the histrionic stereotypes so often found in this type of film and
                instead presents West Virginians who are well informed, passionate, educated, and passionately proud
                of their West Virginia roots."
                <br>
                <br>
                "Grassroots activists, including Goldfield herself, are uniting for the sake of basic human rights
                amidst the beauty of the hills of Southern Appalachia so beautifully captured by Goldfield's lens.
                It's a beauty that remains even amidst, as Goldfield writes, "the methane-streaked highways of the
                fracking corridor" and the "decapitated peaks to the winding holler roads.""
            </p> -->
            {#if href}
                <a style="display:block; margin-top: 1rem; text-decoration: underline;"
                {href} target="_blank" rel="noopener noreferrer">
                    <p class="aka" style="color: var(--main-font-col);">full review</p>
                </a>            
            {/if}
            <p><span>- {reviewer}</span> {publication}</p>
        </div>