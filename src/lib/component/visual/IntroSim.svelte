<script>
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    import { PointMass, Renderer, DistanceConstraint, Vector, Input } from 'dynamicaljs';

    onMount(()=>{
        const canvas = document.getElementById('canvas');
        const renderer = new Renderer(canvas);
        const w = canvas.parentElement.clientWidth;
        const h = canvas.parentElement.clientHeight;
        renderer.canvas.width = w;
        renderer.canvas.height = h;

        const ctx = renderer.context;
        const input = new Input(renderer);

        const g = new Vector(0,9.8);
        let acl;
        try{
            acl = new Accelerometer({ frequency: 60 });
            acl.addElementListener('reading', ()=>{
                g.x = acl.x;
                g.y = acl.y;
            });
        }catch{
            input.listenMousePosition();
            input.listenMouseButton();
        }

        renderer.setBackground("#0C0E0F");

        ctx.font = "2.8rem 'Tiro Gurmukhi'";
        ctx.fillStyle = "#ffffff";

        const text = "Dynamical-JS";
        const anchor_position = new Vector(w-20, h/2);

        const points = [
            new PointMass(
                anchor_position.x - ctx.measureText(text).width - 5,
                anchor_position.y - 70
            ),
            new PointMass(
                anchor_position.x - ctx.measureText(text).width,
                anchor_position.y
            ),
            new PointMass(
                anchor_position.x,
                anchor_position.y
            ).static(),
        ];

        const connections = [
            new DistanceConstraint(points[0], points[1]),
            new DistanceConstraint(points[1], points[2]).setAngleSpringConstant(0.2),
        ];
        connections[0].graphic.stroke("#325151");

        let is_close = false;
        renderer.update((delta_time)=>{
            ctx.clearRect(0, 0, w, h);

            points.forEach((each)=>{
                each.applyGravity(g);
            });

            connections.forEach((each)=>{
                each.check();
            });

            let d = 10;
            if(!acl.hasReading){
                d = Math.max(10, Vector.distance(points[0].position, input.mouse_position));
                if(d < 50){
                    is_close = true;
                    if(input.is_mousedown){
                        points[0].setPosition(input.mouse_position);
                    }
                }else{
                    is_close = false;
                }
            }

            points.forEach((each)=>{
                each.updatePosition(delta_time);
            });

            // renderer.draw(connections[0]);
            renderer.line(points[0].position, points[1].position)
                .setStrokeStyle("#2E4949")
                .stroke();
            renderer.circle(points[0].position, Math.max(10,(500-d)/500 * 20))
                .setFillStyle(is_close ? "white" : "#2097CA")
                .fill();

            const angle = Math.atan2(
                points[2].position.y - points[1].position.y, 
                points[2].position.x - points[1].position.x
            );
            ctx.translate(points[1].position.x, points[1].position.y);
            ctx.rotate(angle);
            ctx.fillStyle = "white";
            ctx.fillText(text, 0,0);
            ctx.setTransform(1, 0, 0, 1, 0, 0);
        });
    });
</script>

<canvas id="canvas" in:fade={{duration:300}}></canvas>