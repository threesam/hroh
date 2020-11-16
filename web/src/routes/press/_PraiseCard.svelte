<script>
    import BlockContent from '@movingbrands/svelte-portable-text'
    import serializers from '../../components/serializers'

    export let review
    const {body, reviewer, href, publication} = review
</script>
			
<style>
    .card {
        padding: 0.5rem 0;
        margin: 1rem 0 2rem 0;
    }
	span {
        font-size: 1.3rem;
        color: var(--emphasized-text);
    }	
    
    a {
        display: block;
        width: max-content;
        text-align: left;
        text-transform: lowercase;
        text-decoration: underline;
        opacity: 0.6;
        margin-bottom: 0.5rem;
    }
    a:hover {
        opacity: 0.9;
    }
    a, 
    p {
        font-size: 0.9rem;
    }
    p {
        line-height: 1.5;
        opacity: 0.69;
    }
</style>

<div class="card">
    <div class="block-content">
        <BlockContent blocks={body} {serializers} />
    </div>

    {#if href}
        <a {href} target="_blank" rel="noopener noreferrer">full review</a>            
    {/if}
    
    <p><span>- {reviewer}</span> {publication}</p>
</div>