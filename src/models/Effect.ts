import { Symbol } from "./Symbols";

export class Effect {
  canvasWidth: number;
  canvasHeight: number;
  fontSize: number = 16;
  columns: number;
  symbols: Symbol[];

  constructor(width: number, height: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = Math.floor(this.canvasWidth / this.fontSize);
    this.symbols = [];
    this.initialize();
  }

  private initialize() {
    for (let i = 0; i < this.columns; i++) {
      const y = Math.floor(Math.random() * (this.canvasHeight / this.fontSize));
      this.symbols[i] = new Symbol(i, y, this.fontSize, this.canvasHeight);
    }
  }

  resize(width: number, height: number) {
    this.canvasWidth = width;
    this.canvasHeight = height;
    this.columns = Math.floor(this.canvasWidth / this.fontSize);
    this.symbols = [];
    this.initialize();
  }
}
