<script>
    import "../app.css";

    import LeftCol from '$lib/components/LeftCol.svelte'
    import RightCol from '$lib/components/RightCol.svelte'

    import IntroSimulation from "$lib/components/visualization/IntroSimulation.svelte";
    import Test from "$lib/components/Test.svelte";

    import section_index from "$lib/section_index";

    const visuals = [
        IntroSimulation,
        Test
    ];

    $: currentVisual = visuals[$section_index];
</script>

<LeftCol>
    <div>
        <svelte:component this={currentVisual} />
    </div>
</LeftCol>

<RightCol>
    <slot />
</RightCol>