(function watchIife() {
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

      this.clickValKey = 0;

      this.titleWatch = document.createElement('h2');
      this.titleWatch.innerHTML = 'Stop Watch';

      this.secondsDomKey = document.createElement('h3');
      this.secondsDomKey.setAttribute('class', 'seconds-wrapper-color');

      this.minutesDomKey = document.createElement('h3');
      this.minutesDomKey.setAttribute('class', 'minutes-wrapper-color');

      this.secondsDomKey.innerHTML = this.secondsValKey;
      this.minutesDomKey.innerHTML = this.minutesValKey;

      this.listStopped = document.createElement('ul');
      this.listStopped.setAttribute('class', 'list-wrapper-color');

      this.watchTitleWrapKey = document.createElement('div');
      this.watchTitleWrapKey.setAttribute('class', 'title-wrapper-color');

      this.watchWrapperPosition = document.createElement('div');
      this.watchWrapperPosition.setAttribute('class', 'watch-wrapper-color');

      this.watchBackgrounKey = document.createElement('div');
      this.watchBackgrounKey.setAttribute('class', 'watch-background-color');

      this.lineMarkWrapperKey = document.createElement('div');
      this.lineMarkWrapperKey.setAttribute('class', 'watch-mark-position');

      this.watchLineMarkKey = document.createElement('span');
      this.watchLineMarkKey.setAttribute('class', 'watch-mark-color');

      this.btnActionKey = document.createElement('button');
      this.btnActionKey.innerText = 'Start/Stop';
      this.btnActionKey.setAttribute('class', 'action-btn-color');
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
      this.btnResetAll.setAttribute('class', 'clear-btn-color');
      this.btnResetAll.addEventListener('click', () => {
        this.btnActionKey.innerText = '';
        this.btnActionKey.innerText = 'Start';
        this.listStopped.innerText = '';
        this.secondsValKey = 0;
        this.minutesValKey = 0;
        this.clickValKey = 0;
        this.secondsDomKey.innerHTML = this.secondsValKey;
        this.minutesDomKey.innerHTML = this.minutesValKey;
      });

      this.btnResetTimer = document.createElement('button');
      this.btnResetTimer.innerText = 'Reset Timer';
      this.btnResetTimer.setAttribute('class', 'reset-btn-color');
      this.btnResetTimer.addEventListener('click', () => {
        this.secondsValKey = 0;
        this.minutesValKey = 0;
        this.clickValKey = 0;
        this.secondsDomKey.innerHTML = this.secondsValKey;
        this.minutesDomKey.innerHTML = this.minutesValKey;
      });
      this.render();
    }

    increaseTimer() {
      if (this.secondsValKey < 60) {
        this.clickValKey += 1;
        this.secondsValKey += 1;
        this.secondsDomKey.innerHTML = this.secondsValKey;
        this.minutesDomKey.innerHTML = this.minutesValKey;
        this.mathSeconds = this.clickValKey * (360 / 60);
        this.lineMarkWrapperKey.style.transform = `rotateZ(${this.mathSeconds}deg)`;
      } else if (this.secondsValKey === 60) {
        this.clickValKey += 1;
        this.secondsValKey = 1;
        this.minutesValKey += 1;
        this.secondsDomKey.innerHTML = this.secondsValKey;
        this.minutesDomKey.innerHTML = this.minutesValKey;
        this.mathSeconds = this.clickValKey * (360 / 60);
        this.lineMarkWrapperKey.style.transform = `rotateZ(${this.mathSeconds}deg)`;
      }
    }

    run() {
      intervalState = setInterval(this.increaseTimer.bind(this), 1000);
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
      const atomsRender = [
        this.minutesDomKey,
        this.secondsDomKey,
        this.listStopped,
        this.btnActionKey,
        this.btnResetAll,
        this.btnResetTimer,
      ];
      atomsRender.forEach((element) => {
        this.watchWrapperPosition.appendChild(element);
      });

      const moleculesRender = [
        this.watchTitleWrapKey,
        this.watchWrapperPosition,
        this.lineMarkWrapperKey,
      ];
      moleculesRender.forEach((element) => {
        this.watchBackgrounKey.appendChild(element);
      });

      this.watchTitleWrapKey.appendChild(this.titleWatch);
      this.lineMarkWrapperKey.appendChild(this.watchLineMarkKey);
      this.watchContainerKey.appendChild(this.watchBackgrounKey);
    }
  }

  const stopWatchers = 1;
  for (let e = 0; e < stopWatchers; e += 1) {
    const newStopWatch = new Timer(secondsVal, minutesVal, runningState, watchContainer);
  }
}());
