<script>
    export let h='auto', w='80%';
</script>

<div class='flex justify-start items-center' 
style={`width: ${w}; height: ${h};`}>
    <div>
        <slot />
    </div>
</div>