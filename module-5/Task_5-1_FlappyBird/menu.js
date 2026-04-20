"use strict";
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite";
import { EGameStatus, startGame, clearGame, hero, soundMuted } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu {
  #spTitle;
  #spPlayBtn;
  #spGetReady;
  #spGameOver;
  #spScoreBoard;
  #spGameScore;
  #spHighScore;
  #spMedal;
  #spCountDown;
  #sfCountDown;
  #sfRunning;

  constructor(aSpcvs, aSPI) {
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 230, 150);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spGetReady = new TSprite(aSpcvs, aSPI.infoText, 190, 100);
    this.#spGetReady.index = 0;
    this.#spGetReady.hidden = true;
    this.#spGameOver = new TSprite(aSpcvs, aSPI.infoText, 190, 100);
    this.#spGameOver.index = 1;
    this.#spGameOver.hidden = true;
    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10, undefined, 0);
    this.#spGameScore.alpha = 0.5;
    this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 350, 275);
    this.#spHighScore.value = 0;
    this.#spHighScore.visible = false;
    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 200, 245);
    this.#spMedal.hidden = true;
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#spScoreBoard = new TSprite(aSpcvs, aSPI.gameOver, 175, 200);
    this.#spScoreBoard.hidden = true;
  }

  draw() {
    this.#spTitle.draw();
    this.#spPlayBtn.draw();
    this.#spCountDown.draw();
    this.#spGetReady.draw();
    this.#spGameOver.draw();
    this.#spScoreBoard.draw();
    this.#spGameScore.draw();
    this.#spHighScore.draw();
    this.#spMedal.draw();
  }

  countDown() {
    if (this.#spCountDown.value > 1) {
      this.#spCountDown.value--;
      setTimeout(this.countDown.bind(this), 1000);
    } else {
      EGameStatus.state = EGameStatus.gaming;
      this.#spGetReady.hidden = true;
      this.#spCountDown.visible = false;
      this.#sfRunning = new TSoundFile(fnRunning);
      if (!soundMuted) {
        this.#sfRunning.play();
      }

startGame();
    }
  }

  highScore() {
    if (this.#spHighScore.value < this.#spGameScore.value) {
      this.#spHighScore.value = this.#spGameScore.value;
    }
    this.#spHighScore.visible = true;
  }

  incGameScore(aScore) {
    this.#spGameScore.value += aScore;
  }
  
  gameOverMenu() {
    this.#spGameOver.hidden = false;
    this.#spScoreBoard.hidden = false;
    this.#spGameScore.x = 350;
    this.#spGameScore.y = 235;
    
    switch (true) {
      case this.#spGameScore.value >= 50:
        this.#spMedal.index = 2;
        break;
      case this.#spGameScore.value >= 30:
        this.#spMedal.index = 1;
        break;
        case this.#spGameScore.value >=10:
            this.#spMedal.index = 3;
            break;
    }
    this.#spMedal.hidden = false;
    this.#spPlayBtn.hidden = false;
    this.#spPlayBtn.y = 350;
  }

  stopSound() {
  if (this.#sfRunning !== null) {
    this.#sfRunning.stop();
    }
  }

  setSoundMute(aIsMuted) {
  if (this.#sfRunning === null) {
    return;
  }

  if (aIsMuted) {
    this.#sfRunning.pause();
  } else if (EGameStatus.state === EGameStatus.gaming) {
    this.#sfRunning.play();
  }
}

  resetGame(){
    this.#spPlayBtn.hidden = true;
    this.#spGameOver.hidden = true;
    this.#spScoreBoard.hidden = true;
    this.#spMedal.hidden = true;
    this.#spGameScore.x=10;
    this.#spGameScore.y=10;
    this.#spGameScore.value = 0;
    this.#spHighScore.visible = false;
    hero.resetHero();
    clearGame();

  }

  spPlayBtnClick() {
    this.resetGame();
    console.log("Click!");
    EGameStatus.state = EGameStatus.countDown;
    this.#spPlayBtn.hidden = true;
    this.#spTitle.hidden = true;
    this.#spGetReady.hidden = false;
    this.#spCountDown.visible = true;
    this.#spCountDown.value = 3;
    this.#sfCountDown = new TSoundFile(fnCountDown);
    if (!soundMuted) {
      this.#sfCountDown.play();
    }
    setTimeout(this.countDown.bind(this), 1000);
  }
}