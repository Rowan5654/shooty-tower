"use strict";
var FinalHandin_Rowan;
(function (FinalHandin_Rowan) {
    var ƒAid = FudgeAid;
    let Player = /** @class */ (() => {
        class Player extends ƒ.Node {
            constructor(_name) {
                super(_name);
                this.health = 1;
                this.speed = 0.1;
                this.rate = 0.5;
                let playerMaterial = new ƒ.ComponentMaterial(Player.material);
                playerMaterial.clrPrimary = ƒ.Color.CSS("green");
                this.body = new ƒAid.Node("body", ƒ.Matrix4x4.IDENTITY(), Player.material, Player.bodyMesh);
                this.gun = new ƒAid.Node("gun", ƒ.Matrix4x4.IDENTITY(), Player.material, Player.gunMesh);
                let bodyMatrix = this.body.getComponent(ƒ.ComponentMesh).pivot;
                bodyMatrix.scale(new ƒ.Vector3(0.5, 0.5, 0.5));
                let gunMatrix = this.gun.getComponent(ƒ.ComponentMesh).pivot;
                gunMatrix.scale(new ƒ.Vector3(0.1, 0.3, 0.1));
                gunMatrix.translateY(0.9);
                this.addComponent(new ƒ.ComponentTransform(ƒ.Matrix4x4.TRANSLATION(ƒ.Vector3.ZERO())));
                this.addChild(this.body);
                this.addChild(this.gun);
                this.body.addChild(this.gun);
            }
            update() {
                this.move();
            }
            lookTowards(x, y) {
                let ray = FinalHandin_Rowan.viewport.getRayFromClient(new ƒ.Vector2(x, y));
                this.bulletDirection = ray.intersectPlane(ƒ.Vector3.ZERO(), new ƒ.Vector3(0, 0, 1));
                let gunAimDirection = this.mtxWorld.translation.copy;
                gunAimDirection.subtract(this.bulletDirection);
                this.body.mtxLocal.lookAt(gunAimDirection);
                this.body.mtxLocal.rotateX(-90);
            }
            move() {
                let position = this.mtxLocal;
                if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.W])) {
                    //move up
                    position.translateY(this.speed);
                }
                if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.A])) {
                    //move left
                    position.translateX(-this.speed);
                }
                if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.D])) {
                    //move right
                    position.translateX(this.speed);
                }
                if (ƒ.Keyboard.isPressedOne([ƒ.KEYBOARD_CODE.S])) {
                    //move down
                    position.translateY(-this.speed);
                }
            }
        }
        Player.material = new ƒ.Material("player", ƒ.ShaderFlat, new ƒ.CoatColored());
        Player.bodyMesh = new ƒ.MeshSphere(40, 16);
        Player.gunMesh = new ƒ.MeshCube();
        return Player;
    })();
    FinalHandin_Rowan.Player = Player;
})(FinalHandin_Rowan || (FinalHandin_Rowan = {}));
//# sourceMappingURL=player.js.map