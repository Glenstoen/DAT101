/*"use strict";
import { TSprite } from "libSprite";
import { EGameStatus } from "./FlappyBird.mjs";


export class TBait extends TSprite {
    #speed
    constructor(aSpcvs, aSPI) {
        super(aSpcvs, aSPI, 200, 100);
        this.animationSpeed = 20;
        this.#speed = 0.3;
    }

    animate(){
        if(EGameStatus.state === EGameStatus.gaming){
            this.x -= this.#speed;
        }else{
            this.x += this.#speed;
        }
    }
}
*/

"use strict";
import { TSprite } from "libSprite";
import { EGameStatus } from "./FlappyBird.mjs";
import { TSineWave } from "lib2d";

export class TBait extends TSprite {
  #speed;
  #wave;
  constructor(aSpcvs, aSPI) {
    super(aSpcvs, aSPI, 200, 0);
    const amp = Math.ceil(Math.random() * 3);
    this.#wave = new TSineWave(amp, 1);
    this.#speed = Math.ceil(Math.random() * 10) / 10;
    this.y += this.#wave.value;
    this.animationSpeed = this.#speed * 50;
    this.debug = true;
  }

  animate() {
    if (EGameStatus.state === EGameStatus.gaming) {
      this.translate(-this.#speed, this.#wave.value);
    } else {
      this.translate(this.#speed, this.#wave.value);
    }
  }

  distanceTo(aPoint) {
    const dx = Math.pow(this.center.x - aPoint.x, 2);
    const dy = Math.pow(this.center.y - aPoint.y, 2);
    return Math.sqrt(dx + dy);
  }
} // End of class TBait
