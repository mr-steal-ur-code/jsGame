import { Component, h, Listen, State, Prop } from '@stencil/core';

@Component({
  tag: 'tank-1',
  styleUrl: 'tank-1.css',
})
export class Tank1 {
  movementSpeed = 15;
  el = null;
  orientation = 0;

  @Prop({ mutable: true }) x = 0;
  @Prop({ mutable: true }) y = 0;

  @Listen("keydown", { target: "body"})
  onKeydown(event) {
    if (event.key === "ArrowUp") {
      this.setOrientation(0);
      this.move(0, -this.movementSpeed);
    } else if (event.key === "ArrowDown") {
      this.setOrientation(180);
      this.move(0, this.movementSpeed);
    } else if (event.key === "ArrowLeft") {
      this.setOrientation(270);
      this.move(-this.movementSpeed, 0);
    } else if (event.key === "ArrowRight") {
      this.setOrientation(90);
      this.move(this.movementSpeed, 0);
    }else if (event.key === " ") {
      this.fire();
    }else if (event.key === "q") {
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

    return this;
  }

  fire() {
    const bulletEl = document.createElement("span");
    bulletEl.classList.add("bullet", "bullet-1");
    setTimeout(() => {
      let bulletDirection: "move-up" | "move-down" | "move-left" | "move-right";
      if (this.orientation === 0) {
        bulletDirection = "move-up";
      } else if (this.orientation === 180) {
        bulletDirection = "move-down";
      } else if (this.orientation === 90) {
        bulletDirection = "move-right"
      } else if (this.orientation === 270) {
        bulletDirection = "move-left"
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
      let bulletDirection: "move-up" | "move-down" | "move-left" | "move-right";
      if (this.orientation === 0) {
        bulletDirection = "move-up";
      } else if (this.orientation === 180) {
        bulletDirection = "move-down";
      } else if (this.orientation === 90) {
        bulletDirection = "move-right"
      } else if (this.orientation === 270) {
        bulletDirection = "move-left"
      }
      lazerEl.classList.add(bulletDirection);
    }, 0);
    lazerEl.style.top = `${this.y}px`;
    lazerEl.style.left = `${this.x}px`;
    document.querySelector(".map").append(lazerEl);
  }



  render() {
    return (
      <span 
      ref={(el) => this.el = el}
      style={{
        position: "absolute",
        transition: ".3s linear all",
        background: "url('http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/3ec6486c3f26301.png') center center / cover no-repeat",
        backgroundSize: "300%",
        height: "60px",
        width: "60px",
        left: `${this.x}px`,
        top: `${this.y}px`,
      }} />
    ); 
  }
}
