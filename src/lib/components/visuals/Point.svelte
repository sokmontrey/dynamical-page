<script>
    import { scale } from "svelte/transition";
    import Container from '$lib/components/Container.svelte';
    import Circle from '$lib/components/Circle.svelte';
</script>

<Container style={{
    width: '300px',
    height: '200px',
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
    'align-items': 'center',
}}>
    <Circle r={8}/>

    <p class='font-mono text-[var(--gr-color)]'>&#8593;</p>

    <p id='just-a-point'>
        Just a point. ✨<span class='text-[#efad06]'>Boring</span>✨.
    </p> 
</Container>

<style>
    #just-a-point{
        animation: typing 2s steps(23, end),
            blink 4s step-start 0s;
        overflow: hidden;
        white-space: nowrap;
        border-right: solid transparent 13px;
        border-left: solid transparent 13px;
        display: inline-block;
    }
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }
    @keyframes blink {
        from { border-right-color: transparent; }
        20% { border-right-color: white; }
        40% { border-right-color: transparent; }
        60% { border-right-color: white; }
        80% { border-right-color: transparent; }
        90% { border-right-color: white; }
        to { border-right-color: transparent; }
    }
</style>

<!-- <svg in:scale={{duration: 200}}> -->
<!--     <circle cy="50%" cx={a} fill="white" r="10px" /> -->
<!-- </svg> -->
