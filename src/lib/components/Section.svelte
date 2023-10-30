<script>
    export let h='auto', 
        w='60%', 
        center=false,
        title='',
        id='';
</script>

<section 
id={id}
class={'flex justify-start'}
style={`width: ${w}; height: ${h}; align-items: ${center?'center':'start'}`}>
    <div>
        {#if title}
            <h2 class='sticky section-header'>{@html title}</h2>
        {/if}

        <slot />
    </div>
</section>

<style>
    .section-header{
        background-color: #0C0E0Faa;
        background-image: radial-gradient(rgba(0, 0, 0, 0) 1px, #0C0E0F 4px);
        backdrop-filter: blur(3px);
        background-size: 10px 10px;
    }
</style>
