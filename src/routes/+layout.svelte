<script>
  import "../app.css";
  import { onMount } from 'svelte';
  import { GetSectionVisual, CheckCurrentSection, ScrollTo, UpdateVisual } from '$lib/util/dom.js'; 
  import Visual from './visual.svelte';

  let section;
  let section_index = 0;
  onMount(()=>{
    section = GetSectionVisual();

    const _updateSectionIndex = ()=>{
      section_index = CheckCurrentSection(
        Object.values(section).map(
          v=>v.section
        )
      );
    }

    _updateSectionIndex();
    window.addEventListener('scroll', ()=>{
      _updateSectionIndex();
    });
  });

  $: section_index, section 
    ? (()=>{
      const section_list = Object.values(section);
      const current_section = section_list[section_index];

      ScrollTo(current_section.section);
      UpdateVisual(
        section_list.map(v=>v.visual),
        current_section.visual
      );
    })()
    : null;

</script>

<div class='fixed h-[100vh] w-1/2 flex items-center justify-end'>
  <Visual />
  <div class='h-[100vh] opacity-20 w-[1px] mr-5'></div>
</div>


<div class='w-1/2 ml-[50%]'>
  <slot />
</div>
