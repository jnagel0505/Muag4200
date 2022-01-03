/*This File creates the sound file players and their default properties
If you create a new player, be sure to import it at the top of index.js!
*/

//import * as Tone from "../lib/Tone.js";

class soundFile {
  constructor(file, deferPlay) {
    //this.deferPlay = false;
    this.player = new Tone.Player({
      url: "./sounds/" + file,
      loop: false,
      autostart: false
    }).toMaster();
  }
  //Play function also with pre-stop and deferred playing
  play() {
    //defer playback if sound isn't finished loading
    if (this.player.loaded === true) {
      this.deferPlay = false;
      this.player.stop();
      this.player.start();
    } else {
      this.deferPlay = true;
    }
  }
  //Stop function that may have easier syntax
  stop() {
    this.player.stop();
  }
}

//Try to play sounds that had their playback deferred
export function playDeferredSounds() {
  for (var i = 0; i < soundArray.length; i++) {
    if (soundArray[i].deferPlay === true) {
      soundArray[i].play();
    }
  }
}

export var soundArray = []; //list of sounds loaded

//Here is where all the Sound File Players Start

export var wallSound = new soundFile("WallHit.wav"); //load sound
soundArray.push(wallSound); //add sound to list of sounds
wallSound.player.volume.value = -16;

export var paddleSoundLeft = new soundFile("PongLightHit.mp3");
soundArray.push(paddleSoundLeft);

export var paddleSoundRight = new soundFile("PongDarkHit.mp3");
soundArray.push(paddleSoundRight);

export var scoreSoundLeft = new soundFile("PongLightScore.mp3");
soundArray.push(scoreSoundLeft);

export var scoreSoundRight = new soundFile("PongDarkScore.mp3");
soundArray.push(scoreSoundRight);
scoreSoundRight.player.volume.value = 10

export var ambientSound = new soundFile("Ambience.mp3");
soundArray.push(ambientSound);
ambientSound.player.loop = true; //turn on looping
ambientSound.player.volume.value = 0; //turn down volume

export var adventureMusic = new soundFile("Left.mp3");
soundArray.push(adventureMusic);
adventureMusic.player.loop = true;
adventureMusic.player.volume.value = -25;

export var villageMusic = new soundFile("Right.mp3");
soundArray.push(villageMusic);
villageMusic.player.loop = true;
villageMusic.player.volume.value = -20;
