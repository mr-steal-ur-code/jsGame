import { r as registerInstance, h } from './index-e0f2a7e6.js';

const pageHomeCss = "page-home p{font-size:50px}";

let PageHome = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h("p", null, "My name is Stencil"));
  }
};
PageHome.style = pageHomeCss;

export { PageHome as page_home };
