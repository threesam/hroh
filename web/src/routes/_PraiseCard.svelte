<script>
    import BlockContent from '@movingbrands/svelte-portable-text'
    import serializers from '../components/serializers'

    export let review
    const {body, reviewer, href, publication} = review
</script>
			
<style>
	span {
        font-size: 1rem;
        color: var(--emphasized-text);
    }	
    
    a {
        display: block;
        width: max-content;
        margin: 0.75rem 0;
        text-align: left;
        text-transform: lowercase;
        font-size: 0.6rem;
        text-decoration: underline;
        opacity: 0.6;
    }
    a:hover {
        opacity: 0.9;
    }

    p {
        font-size: 0.75rem;
        line-height: 1.5;
    }
</style>

<div class="card">
    <BlockContent blocks={body} {serializers} />

    {#if href}
        <a {href} target="_blank" rel="noopener noreferrer">full review</a>            
    {/if}
    
    <p><span>- {reviewer}</span> {publication}</p>
</div>