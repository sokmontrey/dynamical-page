<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import { PointMass, Renderer, DistanceConstraint, AngleConstraint, Vector } from "dynamicaljs";

  onMount(() => {
    const canvas = document.getElementById("canvas");
    const renderer = new Renderer(canvas);
    renderer.setBackgroundColor("#0C0E0F");
    const w = renderer.width;
    const h = renderer.height;

    const ctx = renderer.ctx;
    const g = new Vector(0, 9.8);

    ctx.font = "1.5rem 'Tiro Gurmukhi'";
    ctx.fillStyle = "#ffffff";

    const text = "Dynamical-JS";
    const anchor_position = new Vector(w / 2, 50);

    const points = [
      new PointMass(
        new Vector(
          anchor_position.x - ctx.measureText(text).width - 5,
          anchor_position.y - 70,
        )
      ),
      new PointMass(
        new Vector(
          anchor_position.x - ctx.measureText(text).width,
          anchor_position.y,
        )
      ),
      new PointMass(
        new Vector(
          anchor_position.x, anchor_position.y
        )
      ).lock(),
    ];

    let connections = [
      new DistanceConstraint(points[0], points[1]),
      new DistanceConstraint(points[1], points[2]),
    ];
    connections[0].graphic.setStrokeColor("#325151");

    let is_mousedown = false;
    let mouse_position = new Vector(0, 0);

    window.addEventListener("mousedown", (e) => {
      is_mousedown = true;
    });

    window.addEventListener("mouseup", (e) => {
      is_mousedown = false;
    });

    window.addEventListener("mousemove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse_position.x = e.clientX - rect.left;
      mouse_position.y = e.clientY - rect.top;
    });

    let is_close = false;
    renderer.loop(() => {
      renderer.clear();

      let d = Math.max(10, Vector.dist(points[0].position, mouse_position));
      if (d < 50) {
        is_close = true;
        if (is_mousedown) points[0].setPosition(mouse_position);
      } else {
        is_close = false;
      }

      for (let i=0; i<10; i++){
        points.forEach((each) => {
          each.applyAcceleration(g);
        });

        connections.forEach((each) => {
          each.update(10);
        });

        points[0].update(0.25, 10);
        points[1].update(0.25, 10);
      }

      renderer
        .drawLine(points[0].position, points[1].position)
        .setStrokeColor("#2E4949")
        .stroke();
      renderer
        .drawCircle(points[0].position, Math.max(10, ((500 - d) / 500) * 20))
        .setFillColor(is_close ? "white" : "#2097CA")
        .fill();

      const angle = Math.atan2(
        points[2].position.y - points[1].position.y,
        points[2].position.x - points[1].position.x,
      );

      ctx.translate(points[1].position.x, points[1].position.y);
      ctx.rotate(angle);
      ctx.fillStyle = "white";
      ctx.fillText(text, 0, 0);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    });
  });
</script>

<canvas id="canvas" width="500" height="300" in:fade={{ duration: 300 }}></canvas>
