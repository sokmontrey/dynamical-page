<script>
    import styler from '$lib/util/styler.js';

    export let w='80%';
    export let style = {};
    export let className = '';
</script>

<article use:styler={{ ...style, width: w, 'box-sizing': 'border-box' }} class={className}>
    <slot />
</article>