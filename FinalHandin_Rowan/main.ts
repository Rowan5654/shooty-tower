namespace FinalHandin_Rowan {
    import ƒAid = FudgeAid;
    window.addEventListener("load", onLoad);

    export let viewport: ƒ.Viewport;
    let camera: ƒ.ComponentCamera;

    let listOfBullets: Bullet[] = [];

    let isShooting: boolean = false;
    let framesBetweenBullets: number = 0;

    function onLoad(_event: Event): void {
        const canvas: HTMLCanvasElement = document.querySelector("canvas");
        let graph: ƒ.Node = new ƒ.Node("graph");

        camera = new ƒ.ComponentCamera();
        camera.pivot.translate(ƒ.Vector3.Z(20));
        camera.pivot.lookAt(ƒ.Vector3.ZERO());
        camera.backgroundColor = ƒ.Color.CSS("pink");

        viewport = new ƒ.Viewport();
        viewport.initialize("viewport", graph, camera, canvas);
        ƒ.Debug.log(viewport);

        ƒAid.addStandardLightComponents(graph, new ƒ.Color(0.5, 0.5, 0.5));
        graph.addChild(new ƒAid.NodeCoordinateSystem());

        graph.addChild(createTerrain());
        graph.addChild(new Player("player"));

        graph.addChild(new Enemy("enemy", new ƒ.Vector3(0, 2, 0)));

        viewport.draw();
        //I need this to run every loop frame. ======================
        viewport.activatePointerEvent(ƒ.EVENT_POINTER.DOWN, true);
        viewport.addEventListener(ƒ.EVENT_POINTER.DOWN, mouseDown);

        viewport.activatePointerEvent(ƒ.EVENT_POINTER.UP, true);
        viewport.addEventListener(ƒ.EVENT_POINTER.UP, mouseUp);

        ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
        ƒ.Loop.start(ƒ.LOOP_MODE.TIME_REAL, 30); 
    }

    function update(_event: ƒ.Eventƒ): void {
      //I need this to be a global variable =========================  
        let player: Player = <Player>viewport.getGraph().getChildrenByName("player")[0];
        player.update();

        if (isShooting) {
          if (framesBetweenBullets == 0) {
            //NEED A NEW BULLET DIRECTION FOR EVERY BULLET ===============================================================================
            let bullet: Bullet = new Bullet(player.getComponent(ƒ.ComponentTransform).local.translation, player.bulletDirection);
            listOfBullets.push(bullet);
            framesBetweenBullets++;
          } else {
            framesBetweenBullets++;
            if (framesBetweenBullets == 5) {
              framesBetweenBullets = 0;
            }
        }
        
        }

        if (listOfBullets.length >= 1) {
            for (let i: number = 0; i < listOfBullets.length; i++) {
                let bullet: Bullet = listOfBullets[i];
                bullet.update();
            }
        }

        camera.pivot.translation = new ƒ.Vector3(player.mtxLocal.translation.x, player.mtxLocal.translation.y, 20);
        viewport.draw();
    }

    function mouseDown(_event: ƒ.EventPointer): void {
        isShooting = true;
        
        //I need this to be a global variable =====================================================
        let player: Player = <Player>viewport.getGraph().getChildrenByName("player")[0];
        
        //I need this information refreshed every time a bullet is fired ==========================
        player.lookTowards(_event.x, _event.y);
    }

    function mouseUp(_event: ƒ.EventPointer): void {
      isShooting = false;
      framesBetweenBullets = 0;
    }

    function createTerrain(): ƒ.Node {
        let planeMaterial: ƒ.Material = new ƒ.Material("plane", ƒ.ShaderFlat, new ƒ.CoatColored(ƒ.Color.CSS("lightblue")));
        let planeMesh: ƒ.MeshQuad = new ƒ.MeshQuad();
        let planeMatrix: ƒ.Matrix4x4 = new ƒ.Matrix4x4;
        planeMatrix.scale(ƒ.Vector3.ONE(10));
        let plane: ƒAid.Node = new ƒAid.Node("plane", planeMatrix, planeMaterial, planeMesh);
        return plane;
    }
}