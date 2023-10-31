<script>
    import Container from '$lib/components/Container.svelte';
    export let r = 15;
    export let color = 'white';
    export let style = {};
</script>

<Container style={{...style,
    width: r * 2 + 'px',
    height: r * 2 + 'px',
    'background-color': color,
    'border-radius': '100%',
}}/>
