"use strict";
var FinalHandin_Rowan;
(function (FinalHandin_Rowan) {
    var ƒ = FudgeCore;
    class Enemy_Small extends FinalHandin_Rowan.Enemy {
        constructor(_name) {
            super(_name, new ƒ.Vector3(-3, 2, 0));
            this.speed = 0.15;
            this.health = 0.1;
            this.mtxLocal.scale(new ƒ.Vector3(0.4, 0.4, 0.4));
        }
    }
    FinalHandin_Rowan.Enemy_Small = Enemy_Small;
})(FinalHandin_Rowan || (FinalHandin_Rowan = {}));
//# sourceMappingURL=enemy_small.js.map