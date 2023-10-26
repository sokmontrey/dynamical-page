<script>
    import LeftCol from '$lib/components/LeftCol.svelte';
    import RightCol from '$lib/components/RightCol.svelte';
    import Block from '$lib/components/Block.svelte'
    import IntroSimulation from '$lib/components/visualization/IntroSimulation.svelte';
</script>

<Block h='100vh' w='50%'>
    <p>
        A JavaScript 2D physic 
        <span class='text-[#dd5555]'><s>Engine</s></span> 
        library created for fun.
    </p> <br />

    <a href="https://github.com/sokmontrey/dynamical-js" target="_blank">
        <i class="fa-brands fa-github"></i> <label>GitHub</label>
    </a> <br />

    <a class='text-[gray] hover:text-[gray]' target="_blank">
        <i class="fa-solid fa-cube"></i> <label>Example</label>
    </a> <br />

    <a id='to-doc' target="_blank">
        <i class="fa-solid fa-book"></i> <label>How does this works?</label>
    </a> <br />
</Block>
<!-- 
<Block h='100vh'>
    <h2>Point</h2>
    
    <p>
        This is a point. ✨<span class='text-[#efad06]'>Boring</span>✨.
    </p>
</Block> -->