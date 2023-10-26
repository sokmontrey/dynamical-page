<script>
    import "../app.css";
    import LeftCol from '$lib/components/LeftCol.svelte'
    import RightCol from '$lib/components/RightCol.svelte'
    import IntroSimulation from "$lib/components/visualization/IntroSimulation.svelte";
</script>

<LeftCol>
    <IntroSimulation />
</LeftCol>

<RightCol>
    <slot />
</RightCol>