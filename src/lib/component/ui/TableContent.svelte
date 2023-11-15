<script>
    import { ScrollTo } from '$lib/util/dom.js';
    import { IsInArrayWindow } from '$lib/util/array.js';

    export let block;
    export let block_i = 0;
    export let show_limit = 3;

    let window_length = show_limit;
</script>

{#key block_i}
<ul on:mouseenter={()=>window_length=block.length}
    on:mouseleave={()=>window_length=show_limit}>
    {#key show_limit}

        {#each block as blk,i}
            {#if IsInArrayWindow(i,block,block_i,window_length)}

                {#if blk.section.getAttribute('notexist')==='false'}
                    <li class='mn-font text-base' 
                    style={i===block_i?'color:var(--ac-color);':''}>
                        <button on:click={
                            ()=>ScrollTo(blk.section)
                        } class='hover:text-[var(--pm-color)]'>
                            {blk.name.replace('-',' ')}
                        </button>
                    </li>
                {:else}
                    <li class='mn-font text-base opacity-20'>
                        {blk.name.replace('-',' ')}
                    </li>
                {/if}

            {/if}
        {/each}

    {/key}
</ul>
{/key}
