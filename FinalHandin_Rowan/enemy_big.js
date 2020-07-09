"use strict";
var FinalHandin_Rowan;
(function (FinalHandin_Rowan) {
    var ƒ = FudgeCore;
    class Enemy_Big extends FinalHandin_Rowan.Enemy {
        constructor(_name) {
            super(_name, new ƒ.Vector3(3, 2, 0));
            this.speed = 0.05;
            this.health = 0.7;
            this.mtxLocal.scale(new ƒ.Vector3(0.8, 0.8, 0.8));
        }
    }
    FinalHandin_Rowan.Enemy_Big = Enemy_Big;
})(FinalHandin_Rowan || (FinalHandin_Rowan = {}));
//# sourceMappingURL=enemy_big.js.map