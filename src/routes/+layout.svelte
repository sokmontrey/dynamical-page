<script>
  import "../app.css";
  import { onMount } from 'svelte';
  import { GetBlock, CheckCurrentSection, UpdateVisual } from '$lib/util/dom.js'; 
  import Visual from './visual.svelte';
  import TableContent from '$lib/component/ui/TableContent.svelte';

  let block;
  let block_i = 0;
  onMount(()=>{
    block = GetBlock();

    const _updateBlockIndex = ()=>{
      block_i = CheckCurrentSection(block);
      UpdateVisual(block, block_i);
    }

    _updateBlockIndex();
    window.addEventListener('scroll', _updateBlockIndex);

    Array.from(document.getElementsByClassName('section-eft-btn')).forEach(
      ele=>ele.addEventListener('click', _updateBlockIndex)
    );
  });

  let table_show_limit = 3;
</script>

<div class='fixed top-0 left-0 py-5 pl-5 z-20'>
  <h1 class='text-[1.5rem] opacity-50'>
    Dynamical <span class='ac-color mn-font'>JS</span>
  </h1>
  <h2 class='text-[1rem] opacity-50 mn-font p-0'>By Sokmontrey</h2>

  <nav>
  <!-- Icons -->
  </nav>

  {#if block}
    <TableContent block={block} block_i={block_i} show_limit={table_show_limit} />
  {/if}
</div>

<div class='z-10 fixed h-[100vh] w-1/2 flex items-center justify-end'>
  <Visual />
  <div class='h-[100vh] opacity-20 w-[1px] mr-5'></div>
</div>

<div class='w-1/2 ml-[50%]'>
  <slot />
</div>
