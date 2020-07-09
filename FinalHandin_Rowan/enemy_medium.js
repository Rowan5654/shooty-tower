"use strict";
var FinalHandin_Rowan;
(function (FinalHandin_Rowan) {
    var ƒ = FudgeCore;
    class Enemy_Medium extends FinalHandin_Rowan.Enemy {
        constructor(_name) {
            super(_name, new ƒ.Vector3(0, 2, 0));
            this.speed = 0.1;
            this.health = 0.3;
            this.mtxLocal.scale(new ƒ.Vector3(0.6, 0.6, 0.6));
        }
    }
    FinalHandin_Rowan.Enemy_Medium = Enemy_Medium;
})(FinalHandin_Rowan || (FinalHandin_Rowan = {}));
//# sourceMappingURL=enemy_medium.js.map