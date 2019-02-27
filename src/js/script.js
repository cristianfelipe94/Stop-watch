
const timerSecondsDom = document.getElementById('js-seconds-timer');
const timerMinutesDom = document.getElementById('js-minutes-timer');
const btnDom = document.getElementById('js-btn');
const timerStopped = document.getElementById('js-times-stopped');
const watchContainer = document.getElementById('container');

const runningState = true;
const secondsVal = 0;
const minutesVal = 0;
let intervalState;

class Timer {
  constructor(secondsValKey,
    minutesValKey,
    runningStateKey,
    watchContainerKey) {
    this.secondsValKey = secondsValKey;
    this.minutesValKey = minutesValKey;
    this.watchContainerKey = watchContainerKey;
    this.runningStateKey = runningStateKey;

    this.secondsDomKey = document.createElement('h3');
    this.minutesDomKey = document.createElement('h3');

    this.secondsDomKey.innerHTML = this.secondsValKey;
    this.minutesDomKey.innerHTML = this.minutesValKey;

    this.titleWatch = document.createElement('h2');
    this.titleWatch.innerHTML = 'Stop Watch';

    this.listStopped = document.createElement('ul');

    this.btnActionKey = document.createElement('button');
    this.btnActionKey.innerText = 'Start/Stop';
    this.btnActionKey.addEventListener('click', () => {
      if (this.runningStateKey) {
        this.btnActionKey.innerText = '';
        this.btnActionKey.innerText = 'Stop';
        this.run();
        this.runningStateKey = false;
      } else if (!this.runningStateKey) {
        this.btnActionKey.innerText = '';
        this.btnActionKey.innerText = 'Keep on running';
        this.stop();
        this.runningStateKey = true;
      }
    });

    this.btnResetAll = document.createElement('button');
    this.btnResetAll.innerText = 'Reset All';
    this.btnResetAll.addEventListener('click', () => {
      this.listStopped.innerText = '';
      this.secondsValKey = 0;
      this.minutesValKey = 0;
      this.secondsDomKey.innerHTML = this.secondsValKey;
      this.minutesDomKey.innerHTML = this.minutesValKey;
    });

    this.btnResetTimer = document.createElement('button');
    this.btnResetTimer.innerText = 'Reset Timer';
    this.btnResetTimer.addEventListener('click', () => {
      this.secondsValKey = 0;
      this.minutesValKey = 0;
      this.secondsDomKey.innerHTML = this.secondsValKey;
      this.minutesDomKey.innerHTML = this.minutesValKey;
    });
    this.render();
  }

  increaseTimer() {
    if (this.secondsValKey < 60) {
      this.secondsValKey += 1;
      this.secondsDomKey.innerHTML = this.secondsValKey;
      this.minutesDomKey.innerHTML = this.minutesValKey;
    } else if (this.secondsValKey === 60) {
      this.secondsValKey = 1;
      this.minutesValKey += 1;
      this.secondsDomKey.innerHTML = this.secondsValKey;
      this.minutesDomKey.innerHTML = this.minutesValKey;
    }
  }

  run() {
    intervalState = setInterval(this.increaseTimer.bind(this), 10);
  }

  addTime() {
    const timeItem = document.createElement('li');
    timeItem.innerText = `Minuto: ${this.minutesValKey} con ${this.secondsValKey} segundos.`;
    this.listStopped.appendChild(timeItem);
  }

  stop() {
    clearInterval(intervalState);
    this.addTime();
  }

  render() {
    const elementsRender = [
      this.titleWatch,
      this.secondsDomKey,
      this.minutesDomKey,
      this.listStopped,
      this.btnActionKey,
      this.btnResetAll,
      this.btnResetTimer,
    ];
    elementsRender.forEach((element) => {
      this.watchContainerKey.appendChild(element);
    });
  }
}

const newPerson = new Timer(secondsVal, minutesVal, runningState, watchContainer);
