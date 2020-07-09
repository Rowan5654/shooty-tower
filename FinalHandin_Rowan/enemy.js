"use strict";
var FinalHandin_Rowan;
(function (FinalHandin_Rowan) {
    var ƒ = FudgeCore;
    let Enemy = /** @class */ (() => {
        class Enemy extends ƒ.Node {
            constructor(_name, _startPoint) {
                super(_name);
                this.addComponent(new ƒ.ComponentTransform(ƒ.Matrix4x4.TRANSLATION(_startPoint)));
                let enemyMaterial = new ƒ.ComponentMaterial(Enemy.material);
                enemyMaterial.clrPrimary = ƒ.Color.CSS("red");
                this.addComponent(enemyMaterial);
                let enemyMesh = new ƒ.ComponentMesh(Enemy.mesh);
                this.addComponent(enemyMesh);
                FinalHandin_Rowan.viewport.getGraph().addChild(this);
            }
            update(playerLocation) {
                console.log(this.mtxLocal);
                console.log(playerLocation);
                this.mtxLocal.lookAt(playerLocation);
                this.mtxLocal.translateZ(this.speed);
                //attack player if collision
            }
        }
        Enemy.material = new ƒ.Material("Enemy", ƒ.ShaderFlat, new ƒ.CoatColored());
        Enemy.mesh = new ƒ.MeshCube();
        return Enemy;
    })();
    FinalHandin_Rowan.Enemy = Enemy;
})(FinalHandin_Rowan || (FinalHandin_Rowan = {}));
//# sourceMappingURL=enemy.js.map