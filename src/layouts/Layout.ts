import { Effect } from "../models/Effect";

(function startMatrixAnimation() {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvas) return;

  const ctx = canvas.getContext("2d")!;
  let lastTime = 0;
  let fps = 15;
  let nextFrame = 1000 / fps;
  let timer = 0;

  let effect: Effect | undefined;
  let gradient: CanvasGradient;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (effect) {
      effect.resize(canvas.width, canvas.height);
    }

    gradient = createGradient(ctx, canvas.width, canvas.height);
  }

  resizeCanvas();

  effect = new Effect(canvas.width, canvas.height);
  window.addEventListener("resize", resizeCanvas);

  function createGradient(ctx: CanvasRenderingContext2D, width: number, height: number): CanvasGradient {
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#00ffc83d");
    gradient.addColorStop(0.2, "#003300");
    gradient.addColorStop(0.3, "#1ba5003d");
    gradient.addColorStop(0.5, "transparent");
    gradient.addColorStop(0.7, "#1ba5003d");
    gradient.addColorStop(0.8, "#003300");
    gradient.addColorStop(1, "#00ffc83d");
    return gradient;
  }

  function animate(timeStamp: number) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    if (timer > nextFrame) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.075)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = gradient;
      ctx.font = effect?.fontSize + "px monospace";
      effect?.symbols.forEach((symbol) => symbol.draw(ctx));
      timer = 0;
    } else {
      timer += deltaTime;
    }

    requestAnimationFrame(animate);
  }

  animate(0);
})();
