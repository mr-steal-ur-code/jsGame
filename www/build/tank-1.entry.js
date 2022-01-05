import { r as registerInstance, h } from './index-db708e0d.js';

const tank1Css = ":host{display:block}.bullet{position:absolute;top:0;left:0;display:block;height:10px;width:13px;border-bottom-right-radius:70%;border-top-right-radius:70%;background:blue}";

let Tank1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.movementSpeed = 15;
    this.el = null;
    this.orientation = 0;
    this.x = 0;
    this.y = 0;
  }
  onKeydown(event) {
    if (event.key === "ArrowUp") {
      this.setOrientation(0);
      this.move(0, -this.movementSpeed);
    }
    else if (event.key === "ArrowDown") {
      this.setOrientation(180);
      this.move(0, this.movementSpeed);
    }
    else if (event.key === "ArrowLeft") {
      this.setOrientation(270);
      this.move(-this.movementSpeed, 0);
    }
    else if (event.key === "ArrowRight") {
      this.setOrientation(90);
      this.move(this.movementSpeed, 0);
    }
    else if (event.key === " ") {
      this.fire();
    }
  }
  setOrientation(degrees) {
    this.orientation = degrees;
    this.el.style.transform = `rotate(${degrees}deg)`;
    return this;
  }
  move(x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
    return this;
  }
  fire() {
    const bulletEl = document.createElement("span");
    bulletEl.classList.add("bullet");
    bulletEl.style.top = `${this.y}px`;
    bulletEl.style.left = `${this.x}px`;
    document.body.append(bulletEl);
  }
  render() {
    return (h("span", { ref: (el) => this.el = el, style: {
        position: "absolute",
        transition: ".3s linear all",
        background: "url('https://forum.cosmoteer.net/assets/files/2020-03-07/1583581655-976459-alien-tank-1.gif') center center / contain no-repeat",
        height: "60px",
        width: "60px",
        left: `${this.x}px`,
        top: `${this.y}px`,
      } }));
  }
};
Tank1.style = tank1Css;

export { Tank1 as tank_1 };
