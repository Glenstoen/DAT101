"use strict";
import { TSprite } from "libSprite";
import { EGameStatus, menu, soundMuted } from "./FlappyBird.mjs";
import { TSineWave } from "lib2d";
import { TSoundFile } from "libSound";

const fnFood = "./Media/food.mp3";
const fnHeroIsDead = "./Media/heroIsDead.mp3";
const fnGameOver = "./Media/gameOver.mp3";

export class THero extends TSprite {
  #gravity;
  #speed;
  #wave;
  #sfFood;
  #sfHeroIsDead;
  #sfGameOver;

  constructor(aSpvcs, aSPI) {
    //const xPos = this.spriteBackground.height/this.spriteBackground.width;

    super(aSpvcs, aSPI, 100, 150);
    this.animationSpeed = 20;
    this.#gravity = 9.81 / 100;
    this.#speed = 0;
    this.debug = false;
    this.#wave = new TSineWave(1, 1);
    this.#sfFood = null;
    this.#sfHeroIsDead = null;
    this.#sfGameOver = null;
  }

  animate() {
  const hasGravity = EGameStatus.state === EGameStatus.gaming || EGameStatus.state === EGameStatus.heroIsDead;

  if (hasGravity) {
    if (this.y < 400 - this.height) {
      this.#speed += this.#gravity;
      this.y += this.#speed;
      if (this.rotation < 90) {
        this.rotation = this.#speed * 25;
      }
    } else {
      EGameStatus.state = EGameStatus.gameOver;
      this.animationSpeed = 0;
      if (this.#sfGameOver === null) {
        this.#sfGameOver = new TSoundFile(fnGameOver);
      }
      if (!soundMuted) {
        this.#sfGameOver.play();
      }
      menu.stopSound();
      this.dead();
    }
  } else if (EGameStatus.state === EGameStatus.idle) {
    this.y += this.#wave.value;
  }
}

  eat() {
    if (this.#sfFood === null) {
      this.#sfFood = new TSoundFile(fnFood);
    } else {
      this.#sfFood.stop();
    }
    if (!soundMuted){
      this.#sfFood.play();
    }
  }

  dead() {
    if (this.#sfHeroIsDead === null) {
      this.#sfHeroIsDead = new TSoundFile(fnHeroIsDead);
    }
    if (!soundMuted) {
      this.#sfHeroIsDead.play();
    }
    menu.gameOverMenu();
    menu.highScore();
  }

  flap() {
    this.#speed = -3;
    this.rotation = 0;
  }
  resetHero() {
    this.#speed = 0;
    this.y = 150;
    this.rotation = 0;
    this.#sfHeroIsDead = null;
    this.#sfGameOver = null;
  }
}