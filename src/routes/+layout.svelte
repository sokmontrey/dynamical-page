<script>
  import "../app.css";
  import { onMount } from 'svelte';
  import { GetSectionVisual } from '$lib/util/dom.js'; 
  import Visual from './visual.svelte';

  let section;
  onMount(()=>{
    section = GetSectionVisual();
  })
</script>

<div class='fixed h-[100vh] w-1/2 flex items-center justify-end'>
  <Visual />
  <div class='h-[100vh] bg-white opacity-20 w-[1px] mr-5'></div>
</div>


<div class='w-1/2 ml-[50%]'>
  <slot />
</div>
