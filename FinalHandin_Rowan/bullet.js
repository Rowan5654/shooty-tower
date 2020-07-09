"use strict";
var FinalHandin_Rowan;
(function (FinalHandin_Rowan) {
    let Bullet = /** @class */ (() => {
        class Bullet extends ƒ.Node {
            constructor(_startPoint, direction) {
                super("bullet");
                this.speed = 0.2;
                this.direction = direction;
                this.addComponent(new ƒ.ComponentTransform(ƒ.Matrix4x4.TRANSLATION(_startPoint)));
                let bulletMaterial = new ƒ.ComponentMaterial(Bullet.material);
                bulletMaterial.clrPrimary = ƒ.Color.CSS("blue");
                this.addComponent(bulletMaterial);
                let bulletMesh = new ƒ.ComponentMesh(Bullet.mesh);
                this.addComponent(bulletMesh);
                bulletMesh.pivot.scale(ƒ.Vector3.ONE(0.1));
                this.mtxLocal.lookAt(direction);
                FinalHandin_Rowan.viewport.getGraph().addChild(this);
            }
            update() {
                //the bullet should move towards wherever the mouse was when the bullet was created       
                this.mtxLocal.translateZ(this.speed);
                if (this.mtxLocal.translation.z >= 20) {
                    FinalHandin_Rowan.viewport.getGraph().removeChild(this);
                }
            }
        }
        Bullet.material = new ƒ.Material("Projectile", ƒ.ShaderFlat, new ƒ.CoatColored());
        Bullet.mesh = new ƒ.MeshCube();
        return Bullet;
    })();
    FinalHandin_Rowan.Bullet = Bullet;
})(FinalHandin_Rowan || (FinalHandin_Rowan = {}));
//# sourceMappingURL=bullet.js.map