namespace FinalHandin_Rowan {
  import ƒ = FudgeCore;

  export class Enemy_Small extends Enemy {

    constructor(_name: string) {
      super(_name, new ƒ.Vector3(-3, 2, 0));

      this.speed = 0.15;
      this.health = 0.1;

      this.mtxLocal.scale(new ƒ.Vector3(0.4, 0.4, 0.4));
    }
  }
}