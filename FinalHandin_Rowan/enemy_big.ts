namespace FinalHandin_Rowan {
  import ƒ = FudgeCore;

  export class Enemy_Big extends Enemy {

    constructor(_name: string) {
      super(_name, new ƒ.Vector3(3, 2, 0));

      this.speed = 0.05; 
      this.health = 0.7;

      this.mtxLocal.scale(new ƒ.Vector3(0.8, 0.8, 0.8));
    }


  }
}