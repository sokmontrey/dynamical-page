<script>
    import { fade } from 'svelte/transition';

    export let section_index = 0;
    export let section_names;
</script>

{#if section_index > 0}

    <div class='fixed left-0 text-[#ffffffaa] h-[100vh] p-20 flex flex-col'
        in:fade={{duration: 300}}
    >
        <div>
            <p class='text-md'>
                Dynamical JS 
            </p>
            <p class='text-[1rem] font-mono'>
                By Sokmontrey Sythat
            </p>
        </div>

        <nav class='flex-1 flex flex-col justify-end list-none'>
            {#each section_names as name, i}
                <li style={`color: ${
                    section_index===i ?'var(--pm-color)' : '#ffffffaa'
                };`}>
                    {@html (section_index === i ? "> " : "&nbsp;&nbsp;") + name}
                </li>
            {/each}
        </nav>
    </div>

{/if}
