<script>
    import "../app.css";
    import LeftCol from '$lib/components/LeftCol.svelte'
    import RightCol from '$lib/components/RightCol.svelte'
    import IntroSimulation from "$lib/components/visualization/IntroSimulation.svelte";

    const sections = [
        IntroSimulation,
    ];

    let CurrentVisual = sections[0];
</script>

<LeftCol>
    <svelte:component this={CurrentVisual} />
</LeftCol>

<RightCol>
    <slot />
</RightCol>