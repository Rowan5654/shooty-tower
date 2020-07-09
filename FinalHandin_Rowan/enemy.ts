namespace FinalHandin_Rowan {
  import ƒ = FudgeCore;
  
  export class Enemy extends ƒ.Node {
        private static material: ƒ.Material = new ƒ.Material("Enemy", ƒ.ShaderFlat, new ƒ.CoatColored());
        private static mesh: ƒ.MeshCube = new ƒ.MeshCube();

        protected speed: number;
        protected health: number;

        constructor(_name: string, _startPoint: ƒ.Vector3) {
            super(_name);
    
            this.addComponent(new ƒ.ComponentTransform(ƒ.Matrix4x4.TRANSLATION(_startPoint)));

            let enemyMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(Enemy.material);
            enemyMaterial.clrPrimary = ƒ.Color.CSS("red");
            this.addComponent(enemyMaterial);

            let enemyMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(Enemy.mesh);
            this.addComponent(enemyMesh);

            viewport.getGraph().addChild(this);
        }

        public update(playerLocation: ƒ.Vector3): void {
          console.log(this.mtxLocal);
          console.log(playerLocation);

          this.mtxLocal.lookAt(playerLocation);
          
          this.mtxLocal.translateZ(this.speed);
          
          //attack player if collision
        }
    }
}