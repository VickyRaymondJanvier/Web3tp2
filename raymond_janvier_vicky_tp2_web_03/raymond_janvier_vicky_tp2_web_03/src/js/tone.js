import * as Tone from "tonejs";

const player1 = new Tone.Player("../../assets/audio/chat1.mp3").toDestination();
const player2 = new Tone.Player("../../assets/audio/chat2.mp3").toDestination();
const player3 = new Tone.Player("../../assets/audio/chat3.mp3").toDestination();
const player4 = new Tone.Player("../../assets/audio/chat4.mp3").toDestination();

document.querySelector(".tone1").addEventListener("click", async () => {
  await Tone.start();

  Tone.loaded().then(() => {
    player1.start();
  });
});

document.querySelector(".tone2").addEventListener("click", async () => {
  await Tone.start();

  Tone.loaded().then(() => {
    player2.start();
  });
});

document.querySelector(".tone3").addEventListener("click", async () => {
  await Tone.start();

  Tone.loaded().then(() => {
    player3.start();
  });
});

document.querySelector(".tone4").addEventListener("click", async () => {
  await Tone.start();

  Tone.loaded().then(() => {
    player4.start();
  });
});
