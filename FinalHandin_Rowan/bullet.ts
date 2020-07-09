namespace FinalHandin_Rowan {
    export class Bullet extends ƒ.Node {
        private static material: ƒ.Material = new ƒ.Material("Projectile", ƒ.ShaderFlat, new ƒ.CoatColored());
        private static mesh: ƒ.MeshCube = new ƒ.MeshCube();
        
        private speed: number = 0.2;
        //private damage: number = 0.1;

        private direction: ƒ.Vector3;

        constructor(_startPoint: ƒ.Vector3, direction: ƒ.Vector3) {
            super("bullet");
    
            this.direction = direction;

            this.addComponent(new ƒ.ComponentTransform(ƒ.Matrix4x4.TRANSLATION(_startPoint)));

            let bulletMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(Bullet.material);
            bulletMaterial.clrPrimary = ƒ.Color.CSS("blue");
            this.addComponent(bulletMaterial);

            let bulletMesh: ƒ.ComponentMesh = new ƒ.ComponentMesh(Bullet.mesh);
            this.addComponent(bulletMesh);
            bulletMesh.pivot.scale(ƒ.Vector3.ONE(0.1));

            this.mtxLocal.lookAt(direction);

            viewport.getGraph().addChild(this);
        }

        public update(): void {
            //the bullet should move towards wherever the mouse was when the bullet was created       
            
            this.mtxLocal.translateZ(this.speed);

            if (this.mtxLocal.translation.z >= 20) {
              viewport.getGraph().removeChild(this);
            }
        }
    } 
}
