export class Symbol {
  characters = "01 ";
  x: number;
  y: number;
  fontSize: number;
  canvasHeight: number;
  text = "";

  constructor(x: number, y: number, fontSize: number, canvasHeight: number) {
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.text = this.characters.charAt(Math.floor(Math.random() * this.characters.length));
    ctx.fillText(this.text, this.x * this.fontSize, this.y * this.fontSize);

    if (this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
      this.y = 0;
    } else {
      this.y += 1;
    }
  }
}
