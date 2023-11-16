<script>
    export let section = '';
    export let notexist = false;
    export let lower_bound = 1.3;
</script>

<div id={'s-'+section} section={section} notexist={notexist} lower_bound={lower_bound}>
    <slot />
</div>

<style>
    div{
        scroll-snap-align: center;
    }
</style>