import { r as registerInstance, h } from './index-ad1d14b2.js';

const tankCjCss = ":host{display:block}.bullet{transition:all ease-out 0.5s;position:absolute;top:0;left:0;display:block;height:10px;width:10px;border-radius:100%;background:blue}.spec{transition:all ease-out 1.2s;position:absolute;top:0;left:0;display:block;height:50px;width:50px;border-radius:100%;background:red}.move-down{top:850px !important}.move-up{top:-200px !important}.move-left{left:-200px !important}.move-right{left:1050px !important}.map{position:relative;display:block;margin:0 auto;height:600px;width:800px;background-color:grey;overflow:hidden}.scoreboard{padding:30px;font-size:62px;display:flex;margin:0 auto;justify-content:space-between}.scoreboard span:first-of-type{color:red}.scoreboard span:last-of-type{color:blue}.obstacle{position:absolute;top:0;left:0;display:block;background-color:rgba(165, 42, 42, 0.363)}";

let Tank1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.movementSpeed = 15;
    this.el = null;
    this.orientation = 0;
    this.x = 0;
    this.y = 0;
    this.size = 60;
    this.opacity = "1";
    this.isBlocked = false;
  }
  onKeydown(event) {
    if (event.key === "w" && !(this.isBlocked && this.orientation === 0)) {
      this.setOrientation(0);
      this.move(0, -this.movementSpeed);
    }
    else if (event.key === "s" && !(this.isBlocked && this.orientation === 180)) {
      this.setOrientation(180);
      this.move(0, this.movementSpeed);
    }
    else if (event.key === "a" && !(this.isBlocked && this.orientation === 270)) {
      this.setOrientation(270);
      this.move(-this.movementSpeed, 0);
    }
    else if (event.key === "d" && !(this.isBlocked && this.orientation === 90)) {
      this.setOrientation(90);
      this.move(this.movementSpeed, 0);
    }
    else if (event.key === " ") {
      this.fire();
    }
    else if (event.key === "q") {
      this.special();
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
    this.isBlocked = false;
    return this;
  }
  fire() {
    const bulletEl = document.createElement("span");
    bulletEl.classList.add("bullet", "bullet-1");
    setTimeout(() => {
      let bulletDirection;
      if (this.orientation === 0) {
        bulletDirection = "move-up";
      }
      else if (this.orientation === 180) {
        bulletDirection = "move-down";
      }
      else if (this.orientation === 90) {
        bulletDirection = "move-right";
      }
      else if (this.orientation === 270) {
        bulletDirection = "move-left";
      }
      bulletEl.classList.add(bulletDirection);
    }, 0);
    bulletEl.style.top = `${this.y}px`;
    bulletEl.style.left = `${this.x}px`;
    document.querySelector(".map").append(bulletEl);
  }
  special() {
    const lazerEl = document.createElement("span");
    lazerEl.classList.add("spec");
    setTimeout(() => {
      let bulletDirection;
      if (this.orientation === 0) {
        bulletDirection = "move-up";
      }
      else if (this.orientation === 180) {
        bulletDirection = "move-down";
      }
      else if (this.orientation === 90) {
        bulletDirection = "move-right";
      }
      else if (this.orientation === 270) {
        bulletDirection = "move-left";
      }
      lazerEl.classList.add(bulletDirection);
    }, 0);
    lazerEl.style.top = `${this.y}px`;
    lazerEl.style.left = `${this.x}px`;
    document.querySelector(".map").append(lazerEl);
  }
  async isColliding(blocked) {
    this.isBlocked = blocked;
  }
  async isHit() {
    // Make tank flash
    this.opacity = "0";
    setTimeout(() => {
      this.opacity = "1";
    }, 400);
  }
  render() {
    return (h("span", { ref: (el) => this.el = el, style: {
        opacity: this.opacity,
        position: "absolute",
        transition: ".3s linear all",
        background: "url('http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/3ec6486c3f26301.png') center center / cover no-repeat",
        backgroundSize: "300%",
        height: "60px",
        width: "60px",
        left: `${this.x}px`,
        top: `${this.y}px`,
      } }));
  }
};
Tank1.style = tankCjCss;

export { Tank1 as tank_cj };
