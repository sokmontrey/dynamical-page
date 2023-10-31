<script>
    export let style;
    
	function styling (node, vars) {
		Object.entries(vars).forEach(([ p, v ]) => { node.style[p] = v })
	}
</script>

<div use:styling={style}> 
    <slot/>
</div>
