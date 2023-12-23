<script>
  import IntroSim from '$lib/component/visual/IntroSim.svelte';
  import CubeSim from '$lib/component/visual/CubeSim.svelte';
</script>

<div visual='intro'>
  <IntroSim />
</div>

<div visual='quick-note' class='w-1/2 pr-10'>
  <strong>
    <i class="fa-solid fa-triangle-exclamation mx-5"></i>
  </strong>
  <p>
    Please <strong>keep in mind</strong> that this was created for my learning purpose only. The engine is very unstable. I already spent too much time with it, so I had to move on. There are a lot of rooms for improvement.
  </p>
</div>

<div visual='getting-started'>
  <CubeSim />
</div>

<div visual='pointmass'>
  Development in progress
</div>
