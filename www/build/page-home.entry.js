import { r as registerInstance, h } from './index-fedadd70.js';

class Tank {
  constructor() {
    this.movementSpeed = 15;
    this.el = null;
    this.x = 0;
    this.y = 0;
    this.orientation = 0;
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

const pageHomeCss = ":root{--stick-color:black}#stickman:hover{cursor:none}#stickman .leg1{position:relative;top:380px;left:112px;height:20px;width:100px;background:var(--stick-color);transform:rotate(50deg)}#stickman .leg2{position:relative;top:360px;left:38px;height:20px;width:90px;background:var(--stick-color);transform:rotate(125deg)}#stickman .body{position:relative;top:-200px;left:50px;height:40px;width:140px;background:var(--stick-color);transform:rotate(90deg)}#stickman .arm1{position:relative;top:200px;left:130px;height:15px;width:100px;background:var(--stick-color);transform:rotate(50deg);animation:wave2 1s alternate infinite ease-in-out;transform-origin:0%}#stickman .head:before,#stickman .head:after{content:\"\";position:absolute;top:30px;height:25px;width:8px;background:white;border-radius:100%}#stickman .head:before{left:35px}#stickman .head:after{right:35px;animation:wink 3s}.wink-animation{animation:wink 2s}@keyframes wink{0%{height:20px}9%{margin-top:5px;height:0px}18%{margin-top:0;height:20px}}@keyframes wave2{0%{transform:rotate(-45deg)}100%{transform:rotate(0deg)}}#stickman .arm2{position:relative;top:213px;left:30px;height:15px;width:100px;background:var(--stick-color);transform:rotate(130deg)}#stickman .head{background-color:var(--stick-color);border-radius:100px;padding:60px;margin:140px;width:5px;position:relative;top:-105px;left:-82px}#stickman{height:300px;width:300px;top:-90px;margin-left:10%;position:relative;transform-origin:0% 0%}";

let PageHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  //     stickmanEl: any;
  //     @Prop() color = "#f50000"
  //     @State() isWinking = false;
  //     @Listen("keydown", { target: "window" })
  //     onKeydown(event) {
  //         if (event.code === "Space") {
  //             if (!this.isWinking) {
  //                 this.isWinking = true;
  //             }
  //             setTimeout(() => {
  //                 this.isWinking = false;
  //             }, 500);
  //             console.log(event);
  //     }
  // }
  componentDidLoad() {
    new Tank();
  }
  render() {
    return [
      h("div", null),
      h("tank-1", null)
      // <div
      //     id="stickman"
      //     class={{
      //         "wink-animation": this.isWinking
      //     }}
      //     ref={(el) => this.stickmanEl = el}
      //     style={{
      //         "--stick-color": this.color,
      //     }}
      // >
      //     <div class="leg1"></div>
      //     <div class="leg2"></div>
      //     <div class="arm1"></div>
      //     <div class="arm2"></div>
      //     <div class="head"></div>
      //     <div class="body"></div>
      // </div>
    ];
  }
};
PageHome.style = pageHomeCss;

export { PageHome as page_home };
