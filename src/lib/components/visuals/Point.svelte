<script>
    import { scale } from "svelte/transition";
</script>

<div>
    <p id='just-a-point'>
        Just a point. ✨<span class='text-[#efad06]'>Boring</span>✨.
    </p> 
</div>

<style>
    #just-a-point{
        animation: typing 2s steps(23, end),
            blink 4s step-start 0s;
        overflow: hidden;
        white-space: nowrap;
        border-right: solid transparent 2px;
    }
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }
    @keyframes blink {
        from { border-color: transparent; }
        20% { border-color: white; }
        40% { border-color: transparent; }
        60% { border-color: white; }
        80% { border-color: transparent; }
        90% { border-color: white; }
        to { border-color: transparent; }
    }
</style>

<!-- <svg in:scale={{duration: 200}}> -->
<!--     <circle cy="50%" cx={a} fill="white" r="10px" /> -->
<!-- </svg> -->
