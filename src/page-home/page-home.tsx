import { Component, h, Listen, Prop, State, } from '@stencil/core';
// import Tank from './models/tank';


@Component({
    tag: 'page-home',
    styleUrl: 'page-home.css'
})
export class PageHome {
       p1: any;
       p2: any;  
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

      @State() p1Score = 0;
      @State() p2Score = 0;

      componentDidLoad() {
        setInterval(() => {
  
            // 1. Get all the bullets on the board
            const bullets = document.querySelectorAll(".bullet");
            bullets.forEach((bullet: HTMLElement) => {
                // 2. Check their position
                // console.log(this.p1.x, bullet.offsetLeft, bullet.classList);
                if (
                    bullet.offsetLeft > this.p1.x && bullet.offsetLeft < this.p1.x + 60
                    && bullet.offsetTop > this.p1.y && bullet.offsetTop < this.p1.y + 60
                    && !bullet.classList.contains("bullet-stick")
                ) {
                      this.p2Score = this.p2Score + 1;
                }
                if (
                    bullet.offsetLeft > this.p2.x && bullet.offsetLeft < this.p2.x + 60
                    && bullet.offsetTop > this.p2.y && bullet.offsetTop < this.p2.y + 60
                    && !bullet.classList.contains("bullet-1")
                 ) {
                    this.p1Score = this.p1Score + 1;
                }
            });
            // 3. See if it intersects a tank
  
            // 4. See if it's an enemy bullet
        }, 1000 / 400);
    }
  
      

      render() {
          return [
            <div class="scoreboard">
            <span>
                P1: {this.p1Score}
            </span>
            <span>
                P2: {this.p2Score}
            </span>
        </div>,
        <div class="map">
            <stick-tank ref={(p1) => this.p1 = p1} />
            <tank-1 ref={(p2) => this.p2 = p2} />
        </div>
                    
      

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
}
