import { r as registerInstance, h } from './index-e73f1df9.js';

const pageHomeCss = ":root{--stick-color:black}#stickman:hover{cursor:none}#stickman .leg1{position:relative;top:380px;left:112px;height:20px;width:100px;background:var(--stick-color);transform:rotate(50deg)}#stickman .leg2{position:relative;top:360px;left:38px;height:20px;width:90px;background:var(--stick-color);transform:rotate(125deg)}#stickman .body{position:relative;top:-200px;left:50px;height:40px;width:140px;background:var(--stick-color);transform:rotate(90deg)}#stickman .arm1{position:relative;top:200px;left:130px;height:15px;width:100px;background:var(--stick-color);transform:rotate(50deg);animation:wave2 1s alternate infinite ease-in-out;transform-origin:0%}#stickman .head:before,#stickman .head:after{content:\"\";position:absolute;top:30px;height:25px;width:8px;background:white;border-radius:100%}#stickman .head:before{left:35px}#stickman .head:after{right:35px;}@keyframes wink{0%{height:20px}9%{margin-top:5px;height:0px}18%{margin-top:0;height:20px}}@keyframes wave2{0%{transform:rotate(-45deg)}100%{transform:rotate(0deg)}}#stickman .arm2{position:relative;top:213px;left:30px;height:15px;width:100px;background:var(--stick-color);transform:rotate(130deg)}#stickman .head{background-color:var(--stick-color);border-radius:100px;padding:60px;margin:140px;width:5px;position:relative;top:-105px;left:-82px}#stickman{height:300px;width:300px;top:-90px;margin-left:10%;position:relative;transform-origin:0% 0%}";

let PageHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  onInput(event) {
    console.log(event);
  }
  onKeydown(event) {
    console.log(event);
  }
  render() {
    return (h("div", { id: "stickman" }, h("div", { class: "leg1" }), h("div", { class: "leg2" }), h("div", { class: "arm1" }), h("div", { class: "arm2" }), h("div", { class: "head" }), h("div", { class: "body" })));
  }
};
PageHome.style = pageHomeCss;

export { PageHome as page_home };
