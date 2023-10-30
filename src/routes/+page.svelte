<svelte:head>
    <meta name="description" content="Dynamical JS: A JavaScript 2D physic library" />
    <title>Dynamical JS</title>
</svelte:head>
<script>
    import Section from '$lib/components/Section.svelte';
    import { onMount } from 'svelte';
    import section_index from '$lib/section_index';

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

    const sections = [
        "#intro",
        "#point",
        "#pointmass"
    ];

    function checkSection(){
        let lower_bound = window.innerHeight / 1.2;
        for(let i=sections.length-1; i>=0; i--){
            const ele_selector = sections[i];
            const ele = document.querySelector(ele_selector);

            if(!ele) continue;

            const view_port_offset = ele.getBoundingClientRect();

            const top = view_port_offset.top;
            if(top >= lower_bound) continue;

            $section_index = i;
            break;
        }
    }

    onMount(()=>{
        checkSection();
        window.addEventListener('scroll', ()=>{
            checkSection();
        });
    });

    let point_title = "Point";
    let point_id = "point";
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

    <a href="https://google.com/" target="_blank"
    class='text-[gray] hover:text-[gray]'>

        <i class="fa-solid fa-cube"></i> 
        <label>Example</label>

    </a> <br />

    <button id='to-doc' target="_blank" 
    class='hover:text-[#efad06]'
    on:click={()=>toElement('#point h2')}>

        <i class="fa-solid fa-book"></i> 
        <label>How does this works?</label>

    </button> <br />
</Section>

<Section h='100vh' title={point_title} id={point_id}>
    {#if point_id != "pointmass"}
        <button on:click={()=>{
            point_title = "Point<span class='text-[var(--ac-color)]'>Mass</span>";
            point_id = "pointmass";
            $section_index = 2;
        }} class='primary-button'>Give it Physic!</button>
    {/if}

    {#if point_id === "pointmass"}
        <p>
            A point mass contains basic information for mechanic calculation.
        </p>
    {/if}
</Section> 
