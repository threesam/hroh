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

    {#if href}
        <a style="display:block; margin-top: 1rem; text-decoration: underline;"
        {href} target="_blank" rel="noopener noreferrer">
            <p class="aka" style="color: var(--main-font-col);">full review</p>
        </a>            
    {/if}
    
    <p><span>- {reviewer}</span> {publication}</p>
</div>