import { r as registerInstance, h } from './index-f66713bc.js';

const pageHomeCss = ":root{--stick-color:black}#stickman:hover{cursor:none}#stickman .leg1{position:relative;top:380px;left:112px;height:20px;width:100px;background:var(--stick-color);transform:rotate(50deg)}#stickman .leg2{position:relative;top:360px;left:38px;height:20px;width:90px;background:var(--stick-color);transform:rotate(125deg)}#stickman .body{position:relative;top:-200px;left:50px;height:40px;width:140px;background:var(--stick-color);transform:rotate(90deg)}#stickman .arm1{position:relative;top:200px;left:130px;height:15px;width:100px;background:var(--stick-color);transform:rotate(50deg);animation:wave2 1s alternate infinite ease-in-out;transform-origin:0%}#stickman .head:before,#stickman .head:after{content:\"\";position:absolute;top:30px;height:25px;width:8px;background:white;border-radius:100%}#stickman .head:before{left:35px}#stickman .head:after{right:35px;animation:wink 3s}.wink-animation{animation:wink 2s}@keyframes wink{0%{height:20px}9%{margin-top:5px;height:0px}18%{margin-top:0;height:20px}}@keyframes wave2{0%{transform:rotate(-45deg)}100%{transform:rotate(0deg)}}#stickman .arm2{position:relative;top:213px;left:30px;height:15px;width:100px;background:var(--stick-color);transform:rotate(130deg)}#stickman .head{background-color:var(--stick-color);border-radius:100px;padding:60px;margin:140px;width:5px;position:relative;top:-105px;left:-82px}#stickman{height:300px;width:300px;top:-90px;margin-left:10%;position:relative;transform-origin:0% 0%}";

let PageHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    // componentDidLoad() {
    //   new Tank();
    this.p1Score = 0;
    this.p2Score = 0;
  }
  componentDidLoad() {
    setInterval(() => {
      // 1. Get all the bullets on the board
      const bullets = document.querySelectorAll(".bullet");
      bullets.forEach((bullet) => {
        // 2. Check their position
        // console.log(this.p1.x, bullet.offsetLeft, bullet.classList);
        if (bullet.offsetLeft > this.p1.x && bullet.offsetLeft < this.p1.x + 60
          && bullet.offsetTop > this.p1.y && bullet.offsetTop < this.p1.y + 60
          && !bullet.classList.contains("bullet-stick")) {
          this.p2Score = this.p2Score + 1;
        }
        if (bullet.offsetLeft > this.p2.x && bullet.offsetLeft < this.p2.x + 60
          && bullet.offsetTop > this.p2.y && bullet.offsetTop < this.p2.y + 60
          && !bullet.classList.contains("bullet-1")) {
          this.p1Score = this.p1Score + 1;
        }
      });
      // 3. See if it intersects a tank
      // 4. See if it's an enemy bullet
    }, 1000 / 400);
  }
  render() {
    return [
      h("div", { class: "scoreboard" }, h("span", null, "P1: ", this.p1Score), h("span", null, "P2: ", this.p2Score)),
      h("div", { class: "map" }, h("stick-tank", { ref: (p1) => this.p1 = p1 }), h("tank-1", { ref: (p2) => this.p2 = p2 }))
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
