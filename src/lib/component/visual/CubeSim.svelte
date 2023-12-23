<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { Collider, Vector, CircleContainer, Rectangle, Renderer, Input } from 'dynamicaljs';

  onMount(()=>{
    const canvas = document.getElementById('canvas2');
    const renderer = new Renderer(canvas);
    const w = canvas.parentElement.clientWidth;
    const h = canvas.parentElement.clientHeight;
    renderer.canvas.width = w;
    renderer.canvas.height = h;

    const ctx = renderer.context;
    const input = new Input(renderer);
    input.listenMousePosition();
    input.listenMouseButton();

    renderer.setBackground("#0C0E0F");

    const cubes = [];
    const container = new CircleContainer();

    const palette = ["#ef476f", "#ffd166", "#06d6a0", "#118ab2"];

    const addCube = () => {
      const cube = new Rectangle(
        Math.random()*(w-100) + 50,
        Math.random()*(h-100) + 50,
        Math.random()*50+50,Math.random()*50+50,
        Math.PI*2*Math.random()
      );
      cube.graphic.fill(palette[Math.floor(Math.random()*palette.length)]);
      cubes.push(cube);
    }

    document.getElementById('spawn-cube-button').addEventListener('click', addCube);

    renderer.update((delta_time)=>{

      renderer.clear();
      // cubes.sort((a,b)=>a.position.x-b.position.x);
      for (let i=0; i<5; i++){
        for (let i=0; i<cubes.length; i++){
          for (let j=i+1; j<cubes.length; j++){
            Collider.check(cubes[i], cubes[j]);
          }
        }

        for (let cube of cubes) {
          cube.applyGravity();
          cube.updatePosition(delta_time/5);
          cube.applyConnections();
          container.check(cube);
        }
      }
      for (let cube of cubes){
        renderer.draw(cube);
      }

      renderer.draw(container);

      // if(cube.isInBound(input.mouse_position)
      //   && Vector.isPointInBounds(input.mouse_position, {
      //     lx: 0, ly: 0, ux: w, uy: h
      //   }) && input.is_mousedown){
      //   cube.setPosition(input.mouse_position);
      // }

    });
  });
</script>

<canvas id="canvas2" in:fade={{duration:300}}></canvas>
