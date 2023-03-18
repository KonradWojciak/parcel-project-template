const butSwitchStart = document.querySelector('button[data-start]');
const butSwitchStop = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');

let intervalId;

async function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

async function colorChange() {
  bodyColor.style.backgroundColor = getRandomHexColor();
}

async function startColorSwitch() {
  intervalId = setInterval(colorChange, 1000);
  butSwitchStop.disabled = false;
  butSwitchStart.disabled = true;
}

async function stopColorSwitch(intervalId) {
  clearInterval(intervalId);
}

butSwitchStart.addEventListener('click', async () => {
  try {
    startColorSwitch();
  } catch (error) {
    console.log(error.messege);
  }
});

butSwitchStop.addEventListener('click', async () => {
  try {
    stopColorSwitch();
  } catch (error) {
    console.log(error.messege);
  }
});
