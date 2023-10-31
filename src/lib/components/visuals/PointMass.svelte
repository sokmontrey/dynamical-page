<script>
    import Circle from '$lib/components/Circle.svelte';
    import Container from '$lib/components/Container.svelte';

    import { tweened } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';
    import { onMount } from 'svelte';

    const y = tweened(200, {
        duration: 1000,
        easing: cubicOut
    });

    onMount(()=>{
        $y = 150;
    });
</script>

<Container style={{
    width: '80%',
    height: '500px',
    display: 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
}}>
    <!-- <Circle y={$y} r={8} /> -->
    <Container style={{
        position: 'relative',
        top: $y + 'px',
        padding: '1rem',
        'background-color': '#ffffff11',
        width: '50%',
        'border-radius': '10px',
    }}>
        <ul class='list-none'>
            <li>Position: (0,0)</li>
            <li>Velocity: (0,0)</li>
            <li>Acceleration: (0,0)</li>
        </ul>
    </Container>
</Container>

