<svelte:head>
    <title>Dynamical JS</title>
</svelte:head>

<script>
    import Section from '$lib/components/Section.svelte';
    import Article from '$lib/components/Article.svelte';
    import VisualContainer from '$lib/components/VisualContainer.svelte';
</script>

<Section>
    <VisualContainer>
        <div class='w-1/2 h-[350px] bg-[white]'></div>
    </VisualContainer>

    <Article>
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

        <button id='to-doc'
        class='hover:text-[#efad06]'
        on:click={()=>toElement('#point h2')}>

            <i class="fa-solid fa-book"></i> 
            <label>How does this works?</label>

        </button> <br />

        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue ipsum. Etiam venenatis bibendum ante, sit amet dignissim libero consequat vel. Nulla lorem nulla, feugiat et fringilla nec, dignissim vitae diam. Phasellus finibus purus ipsum. Cras ultricies sapien in eros tristique ornare. Fusce volutpat lacus lobortis felis sagittis, in tincidunt risus pretium. Aenean semper nisi sit amet risus venenatis pretium id eu eros. Integer augue ipsum, posuere non tristique in, pulvinar ut dolor. Donec ultricies nunc ornare ipsum pulvinar, ac auctor lacus dictum. In a tellus urna. Donec eu mauris bibendum, suscipit tellus laoreet, tincidunt est. Integer lobortis ligula ex, eu laoreet tortor dignissim ut. Praesent quis pulvinar risus, vitae ultrices dolor. Aenean pharetra eu nunc quis ullamcorper.

        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a augue ipsum. Etiam venenatis bibendum ante, sit amet dignissim libero consequat vel. Nulla lorem nulla, feugiat et fringilla nec, dignissim vitae diam. Phasellus finibus purus ipsum. Cras ultricies sapien in eros tristique ornare. Fusce volutpat lacus lobortis felis sagittis, in tincidunt risus pretium. Aenean semper nisi sit amet risus venenatis pretium id eu eros. Integer augue ipsum, posuere non tristique in, pulvinar ut dolor. Donec ultricies nunc ornare ipsum pulvinar, ac auctor lacus dictum. In a tellus urna. Donec eu mauris bibendum, suscipit tellus laoreet, tincidunt est. Integer lobortis ligula ex, eu laoreet tortor dignissim ut. Praesent quis pulvinar risus, vitae ultrices dolor. Aenean pharetra eu nunc quis ullamcorper.
    </Article>
</Section>

<!--
<script>
    import Section from '$lib/components/Section.svelte';
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import section_index from '$lib/section_index';

    function toElement(query_selector){
        const ele = document.querySelector(query_selector);
        if (!ele) return;

        ele.scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
            block: 'center'
        });
    }

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

    <button id='to-doc'
    class='hover:text-[#efad06]'
    on:click={()=>toElement('#point h2')}>

        <i class="fa-solid fa-book"></i> 
        <label>How does this works?</label>

    </button> <br />
</Section>

<Section h='100vh' title={point_title} id={point_id}>
    {#if point_id != "pointmass"}
        <button on:click={()=>{
            point_title = "Point <span class='text-[var(--ac-color)]'>Mass</span>";
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

    -->
