<script>
    import styler from '$lib/util/styler.js';

    export let w='70%';
    export let style = {};
    export let className;
</script>

<article use:styler={{ ...style, width: w, 'box-sizing': 'border-box' }} class={className}>
    <slot />
</article>