import img from '../img/goblin.png';

export default class Game {
  constructor(boardSize) {
    this.boardSize = boardSize;
    this.goblin = document.createElement('img');
    this.goblin.src = img;
    this.currentPos = 0;
  }

  generateRandPos() {
    return Math.floor(Math.random() * (this.boardSize ** 2 - 1));
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      const container = document.createElement('div');
      container.className = 'container';
      document.appendChild('container');
      let n = 0;
      for (let i = 0; i < this.boardSize; i += 1) {
        const row = document.createElement('div');
        row.className = 'row';
        container.insertAdjacentElement('afterbegin', row);
        for (let j = 0; j < this.boardSize; j += 1) {
          const cell = document.createElement('div');
          cell.className = 'cell';
          cell.id = `cell${n}`;
          row.insertAdjacentElement('beforeend', cell);
          n += 1;
        }
      }
    });

    setInterval(() => {
      document.getElementById(`cell${this.currentPos}`).innerHTML = '';
      this.currentPos = this.generateRandPos();
      document.insertAdjacentElement('afterbegin', this.goblin);
    }, 500);
  }
}
