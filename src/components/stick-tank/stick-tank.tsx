import { Component, h, Prop, Listen, State, Method } from '@stencil/core';

@Component({
  tag: 'stick-tank',
  styleUrl: 'stick-tank.css',
})
export class StickTank {
  movementSpeed = 15;
  el = null;
  orientation = 0;
  @Prop({ mutable: true }) size = 60;
  @Prop({ mutable: true }) x = 0;
  @Prop({ mutable: true }) y = 0;
  @State() opacity = "1";
  @State() isBlocked = false;

  @Listen("keydown", { target: "body" })
  onKeydown(event) {
    if (event.key === "ArrowUp" && !(this.isBlocked && this.orientation === 0)) {
      this.setOrientation(0);
      this.move(0, -this.movementSpeed);
    } else if (event.key === "ArrowDown" && !(this.isBlocked && this.orientation === 180)) {
      this.setOrientation(180);
      this.move(0, this.movementSpeed);
    } else if (event.key === "ArrowLeft" && !(this.isBlocked && this.orientation === 270)) {
      this.setOrientation(270);
      this.move(-this.movementSpeed, 0);
    } else if (event.key === "ArrowRight" && !(this.isBlocked && this.orientation === 90)) {
      this.setOrientation(90);
      this.move(this.movementSpeed, 0);
    } else if (event.key === "1") {
      this.fire();
    } else if (event.key === "z") {
      this.special();
    }
  }

  setOrientation(degrees) {
    // Set orientation in degrees
    this.orientation = degrees;
    // Update the HTML element styles
    this.el.style.transform = `rotate(${degrees}deg)`;

    return this;
  }
  move(x, y) {
    // Change the positioning
    this.x = this.x + x;
    this.y = this.y + y;
    this.isBlocked = false;

    return this;
  }

  fire() {
    const bulletEl = document.createElement("span");
    bulletEl.classList.add("bullet", "bullet-stick");
    setTimeout(() => {
      let bulletDirection: "move-up" | "move-down" | "move-left" | "move-right";

      if (this.orientation === 0) {
        bulletDirection = "move-up";
      } else if (this.orientation === 180) {
        bulletDirection = "move-down";
      } else if (this.orientation === 270) {
        bulletDirection = "move-left";
      } else if (this.orientation === 90) {
        bulletDirection = "move-right";
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

  @Method()
  async isColliding(blocked: boolean) {
    this.isBlocked = blocked;
  }

  @Method()
  async isHit() {
    // Make tank flash
    this.opacity = "0";
    setTimeout(() => {
      this.opacity = "1";
    }, 400);
  }

  render() {
    return (
      <span
        ref={(el) => this.el = el} 
        style={{
            opacity: this.opacity,
          position: "absolute",
          transition: "0.3s linear all",
          background: "url('https://forum.cosmoteer.net/assets/files/2020-03-07/1583581655-976459-alien-tank-1.gif') center center / contain no-repeat",
          height: "60px",
          width: "60px",
          left: `${this.x}px`,
          top: `${this.y}px`
        }} />
    );
  }

}
