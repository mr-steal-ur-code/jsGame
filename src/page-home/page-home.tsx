import { Component, h, Listen, Prop, State, } from '@stencil/core';
import Tank from './models/tank';


@Component({
    tag: 'page-home',
    styleUrl: 'page-home.css'
})
export class PageHome {
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
              <div></div>,
              <tank-1 />
                     
        

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
