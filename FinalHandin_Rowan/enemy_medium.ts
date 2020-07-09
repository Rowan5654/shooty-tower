namespace FinalHandin_Rowan {
  import ƒ = FudgeCore;

  export class Enemy_Medium extends Enemy {

    constructor(_name: string) {
      super(_name, new ƒ.Vector3(0, 2, 0));

      this.speed = 0.1; 
      this.health = 0.3;

      this.mtxLocal.scale(new ƒ.Vector3(0.6, 0.6, 0.6));
    }
  }
}