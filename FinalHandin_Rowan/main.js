"use strict";
var FinalHandin_Rowan;
(function (FinalHandin_Rowan) {
    var ƒAid = FudgeAid;
    window.addEventListener("load", onLoad);
    let camera;
    let listOfBullets = [];
    let isShooting = false;
    let framesBetweenBullets = 0;
    function onLoad(_event) {
        const canvas = document.querySelector("canvas");
        let graph = new ƒ.Node("graph");
        camera = new ƒ.ComponentCamera();
        camera.pivot.translate(ƒ.Vector3.Z(20));
        camera.pivot.lookAt(ƒ.Vector3.ZERO());
        camera.backgroundColor = ƒ.Color.CSS("pink");
        FinalHandin_Rowan.viewport = new ƒ.Viewport();
        FinalHandin_Rowan.viewport.initialize("viewport", graph, camera, canvas);
        ƒ.Debug.log(FinalHandin_Rowan.viewport);
        ƒAid.addStandardLightComponents(graph, new ƒ.Color(0.5, 0.5, 0.5));
        graph.addChild(new ƒAid.NodeCoordinateSystem());
        graph.addChild(createTerrain());
        graph.addChild(new FinalHandin_Rowan.Player("player"));
        graph.addChild(new FinalHandin_Rowan.Enemy("enemy", new ƒ.Vector3(0, 2, 0)));
        FinalHandin_Rowan.viewport.draw();
        //I need this to run every loop frame. ======================
        FinalHandin_Rowan.viewport.activatePointerEvent("\u0192pointerdown" /* DOWN */, true);
        FinalHandin_Rowan.viewport.addEventListener("\u0192pointerdown" /* DOWN */, mouseDown);
        FinalHandin_Rowan.viewport.activatePointerEvent("\u0192pointerup" /* UP */, true);
        FinalHandin_Rowan.viewport.addEventListener("\u0192pointerup" /* UP */, mouseUp);
        ƒ.Loop.addEventListener("loopFrame" /* LOOP_FRAME */, update);
        ƒ.Loop.start(ƒ.LOOP_MODE.TIME_REAL, 30);
    }
    function update(_event) {
        //I need this to be a global variable =========================  
        let player = FinalHandin_Rowan.viewport.getGraph().getChildrenByName("player")[0];
        player.update();
        if (isShooting) {
            if (framesBetweenBullets == 0) {
                //NEED A NEW BULLET DIRECTION FOR EVERY BULLET ===============================================================================
                let bullet = new FinalHandin_Rowan.Bullet(player.getComponent(ƒ.ComponentTransform).local.translation, player.bulletDirection);
                listOfBullets.push(bullet);
                framesBetweenBullets++;
            }
            else {
                framesBetweenBullets++;
                if (framesBetweenBullets == 5) {
                    framesBetweenBullets = 0;
                }
            }
        }
        if (listOfBullets.length >= 1) {
            for (let i = 0; i < listOfBullets.length; i++) {
                let bullet = listOfBullets[i];
                bullet.update();
            }
        }
        camera.pivot.translation = new ƒ.Vector3(player.mtxLocal.translation.x, player.mtxLocal.translation.y, 20);
        FinalHandin_Rowan.viewport.draw();
    }
    function mouseDown(_event) {
        isShooting = true;
        //I need this to be a global variable =====================================================
        let player = FinalHandin_Rowan.viewport.getGraph().getChildrenByName("player")[0];
        //I need this information refreshed every time a bullet is fired ==========================
        player.lookTowards(_event.x, _event.y);
    }
    function mouseUp(_event) {
        isShooting = false;
        framesBetweenBullets = 0;
    }
    function createTerrain() {
        let planeMaterial = new ƒ.Material("plane", ƒ.ShaderFlat, new ƒ.CoatColored(ƒ.Color.CSS("lightblue")));
        let planeMesh = new ƒ.MeshQuad();
        let planeMatrix = new ƒ.Matrix4x4;
        planeMatrix.scale(ƒ.Vector3.ONE(10));
        let plane = new ƒAid.Node("plane", planeMatrix, planeMaterial, planeMesh);
        return plane;
    }
})(FinalHandin_Rowan || (FinalHandin_Rowan = {}));
//# sourceMappingURL=main.js.map