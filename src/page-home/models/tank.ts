export default class Tank {
    movementSpeed = 15;
    el = null;
    x = 0;
    y = 0;
    orientation = 0;
  
    constructor() {
      // Create the element and save a reference to it
      this.el = document.createElement("span");
      // Setup the styles
      this.el.style.position = "absolute";
      // Use transition to make it animate CSS style changes
      this.el.style.transition = "0.3s linear all";
      // Set the image  with a background so that I don't have to worry about sizing the tank
      this.el.style.background =
        "url('https://forum.cosmoteer.net/assets/files/2020-03-07/1583581655-976459-alien-tank-1.gif') center center / contain no-repeat";
      this.el.style.height = "60px";
      this.el.style.width = "60px";
  
      // Add the element to the body as a child  <body><span /></body>
      document.body.appendChild(this.el);
  
      document.addEventListener("keydown", (event) => {
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
        }
      });
    }
  
    move(x, y) {
      // Change the positioning
      this.x = this.x + x;
      this.y = this.y + y;
      // Update the HTML element styles
      this.el.style.left = `${this.x}px`;
      this.el.style.top = `${this.y}px`;
  
      return this;
    }
  
    setOrientation(degrees) {
      // Set orientation in degrees
      this.orientation = degrees;
      // Update the HTML element styles
      this.el.style.transform = `rotate(${degrees}deg)`;
  
      return this;
    }
  }