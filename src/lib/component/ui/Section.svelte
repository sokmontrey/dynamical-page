<script>
    export let section = '';
    export let notexist = false;
</script>

<div id={'s-'+section} section={section} notexist={notexist} />

<style>
    div{
        scroll-snap-align: center;
    }
</style>