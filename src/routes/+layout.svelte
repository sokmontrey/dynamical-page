<script>
    import "../app.css";
    import { onMount } from 'svelte';

    import LeftCol from '$lib/components/LeftCol.svelte';
    import LeftBar from '$lib/components/LeftBar.svelte';
    import RightCol from '$lib/components/RightCol.svelte';

    import IntroSimulation from "$lib/components/visuals/IntroSimulation.svelte";
    import Point from "$lib/components/visuals/Point.svelte";
    import PointMass from "$lib/components/visuals/PointMass.svelte";

    import section_index from "$lib/section_index";

    const visuals = [
        IntroSimulation,
        Point,
        PointMass,
    ];

    const section_names = [
        "Introduction",
        "Point",
        "Point Mass"
    ];

    const sections = [
        "#intro",
        "#point",
        "#pointmass"
    ];

    function checkSection(){
        let lower_bound = window.innerHeight / 1.8;
        
        for(let i=sections.length-1; i>=0; i--){
            const ele_selector = sections[i];
            const ele = document.querySelector(ele_selector);

            if(!ele) continue;

            const view_port_offset = ele.getBoundingClientRect();

            const top = view_port_offset.top;
            if(top >= lower_bound) continue;

            if($section_index != i){
                $section_index = i;
            }
            break;
        }
    }

    onMount(()=>{
        checkSection();
        window.addEventListener('scroll', ()=>{
            checkSection();
        });
    });

    $: currentVisual = visuals[$section_index] || IntroSimulation;
</script>

<LeftBar section_names={section_names} section_index={$section_index}/>

<LeftCol>
    <svelte:component this={currentVisual} />
</LeftCol>

<RightCol>
    <slot />
</RightCol>

