import { getUnixTime } from './parsing';

function playSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();

  const osc = audioCtx.createOscillator();
  osc.frequency.value = 440;
  osc.type = 'sine';

  const gain = audioCtx.createGain();

  osc.connect(gain);

  gain.connect(audioCtx.destination);
  gain.gain.exponentialRampToValueAtTime( 0.00001, audioCtx.currentTime + 5 )

  osc.start();
}

function setSonar(dateTime) {
  const futureTime = getUnixTime(dateTime);
  const timeLeft = (futureTime - Date.now()) / 1000;
  const interval = (futureTime - Date.now()) / 60;
  console.log(timeLeft)

  playSound();
  if(timeLeft < 60) return;
  setTimeout( () => setSonar(dateTime), interval)
}

export default setSonar;