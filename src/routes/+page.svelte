<script>
    import Section from '$lib/components/Section.svelte';
    import { onMount } from 'svelte';

    /**
     * @param {string} query_selector
     */
    function toElement(query_selector){
        const ele = document.querySelector(query_selector);
        if (!ele) return;

        ele.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'center'
        });
    }
</script>

<Section h='100vh' w='50%' center id='intro'>
    <p id='intro'>
        A JavaScript 2D physic 
        <span class='text-[#dd5555]'><s>Engine</s></span> 
        library created for no reason whatsoever.
    </p> <br />

    <a href="https://github.com/sokmontrey/dynamical-js" target="_blank"
    class='hover:text-[#efad06]'>

        <i class="fa-brands fa-github"></i> 
        <label>GitHub</label>

    </a> <br />

    <a target="_blank"
    class='text-[gray] hover:text-[gray]'>

        <i class="fa-solid fa-cube"></i> 
        <label>Example</label>

    </a> <br />

    <button id='to-doc' target="_blank" 
    class='hover:text-[#efad06]'
    on:click={()=>toElement('#point p')}>

        <i class="fa-solid fa-book"></i> 
        <label>How does this works?</label>

    </button> <br />
</Section>

<Section h='100vh' title='Point' id='point'>
    <p>
        This is a point. ✨<span class='text-[#efad06]'>Boring</span>✨.
    </p> 
</Section> 
