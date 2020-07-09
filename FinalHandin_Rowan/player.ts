namespace FinalHandin_Rowan {
    import ƒAid = FudgeAid;

    export class Player extends ƒ.Node {
        
        private static material: ƒ.Material = new ƒ.Material("player", ƒ.ShaderFlat, new ƒ.CoatColored());
        private static bodyMesh: ƒ.MeshSphere = new ƒ.MeshSphere(40, 16);
        private static gunMesh: ƒ.MeshCube = new ƒ.MeshCube();
        
        public bulletDirection: ƒ.Vector3;

        public health: number = 1;
        public speed: number = 0.1;
        public rate: number = 0.5;

        private body: ƒ.Node;
        private gun: ƒ.Node;

        public constructor(_name: string) {
            super(_name);

            let playerMaterial: ƒ.ComponentMaterial = new ƒ.ComponentMaterial(Player.material);
            playerMaterial.clrPrimary = ƒ.Color.CSS("green");

            this.body = new ƒAid.Node("body", ƒ.Matrix4x4.IDENTITY(), Player.material, Player.bodyMesh);
            this.gun = new ƒAid.Node("gun", ƒ.Matrix4x4.IDENTITY(), Player.material, Player.gunMesh);
            
            let bodyMatrix: ƒ.Matrix4x4 = this.body.getComponent(ƒ.ComponentMesh).pivot;
            bodyMatrix.scale(new ƒ.Vector3(0.5, 0.5, 0.5));
            
            let gunMatrix: ƒ.Matrix4x4 = this.gun.getComponent(ƒ.ComponentMesh).pivot;
            gunMatrix.scale(new ƒ.Vector3(0.1, 0.3, 0.1));
            gunMatrix.translateY(0.9);

            this.addComponent(new ƒ.ComponentTransform(ƒ.Matrix4x4.TRANSLATION(ƒ.Vector3.ZERO())));
            this.addChild(this.body);
            this.addChild(this.gun);
            this.body.addChild(this.gun);
        }

        public update(): void {
            this.move();
        }

        public lookTowards(x: number, y: number): void {

            let ray: ƒ.Ray = viewport.getRayFromClient(new ƒ.Vector2(x, y));

            this.bulletDirection = ray.intersectPlane(ƒ.Vector3.ZERO(), new ƒ.Vector3(0, 0, 1));

            let gunAimDirection: ƒ.Vector3 = this.mtxWorld.translation.copy;

            gunAimDirection.subtract(this.bulletDirection);

            this.body.mtxLocal.lookAt(gunAimDirection);
            this.body.mtxLocal.rotateX(-90);
        }

        private move(): void {
            let position: ƒ.Matrix4x4 = this.mtxLocal;
            
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
}