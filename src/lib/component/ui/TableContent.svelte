<script>
    import { ScrollTo } from '$lib/util/dom.js';
    import { IsInArrayWindow } from '$lib/util/array.js';

    export let block;
    export let block_i = 0;
    export let show_limit = 3;
</script>

{#key block_i}
<ul>
    {#each block as blk, i}
        {#if 
            blk.section.getAttribute('notexist')!='true' 
            && 
            IsInArrayWindow(i,block,block_i,show_limit)
        }
            <button on:click={
                ()=>ScrollTo(document.getElementById('s-'+blk.name))
            }>
                <li class='mn-font text-base' 
                style={i===block_i?'color:var(--ac-color);':''}>
                    {blk.name.replace('-',' ')}
                </li>
            </button> <br />
        {/if}
    {/each}
</ul>
{/key}
