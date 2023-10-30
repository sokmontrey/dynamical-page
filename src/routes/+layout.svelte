<script>
    import "../app.css";

    import LeftCol from '$lib/components/LeftCol.svelte'
    import RightCol from '$lib/components/RightCol.svelte'

    import IntroSimulation from "$lib/components/visuals/IntroSimulation.svelte";
    import Point from "$lib/components/visuals/Point.svelte";
    import PointMass from "$lib/components/visuals/PointMass.svelte";

    import section_index from "$lib/section_index";

    const visuals = [
        IntroSimulation,
        Point,
        PointMass,
    ];

    $: currentVisual = visuals[$section_index] || IntroSimulation;
</script>

<LeftCol>
    <svelte:component this={currentVisual} />
</LeftCol>

<RightCol>
    <slot />
</RightCol>
