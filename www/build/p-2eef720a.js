let e=!1;const t="undefined"!=typeof window?window:{},n=t.document||{head:{}},l={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},s=e=>Promise.resolve(e),o=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),i=(e,t,n)=>{n&&n.map((([n,s,o])=>{const i=r(e,n),a=c(t,o),f=u(n);l.ael(i,s,a,f),(t.o=t.o||[]).push((()=>l.rel(i,s,a,f)))}))},c=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){z(e)}},r=(e,t)=>16&t?n.body:e,u=e=>0!=(2&e),a=new WeakMap,f=e=>"sc-"+e.h,h={},$=e=>"object"==(e=typeof e)||"function"===e,d=(e,t,...n)=>{let l=null,s=!1,o=!1,i=[];const c=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!$(l))&&(l+=""),s&&o?i[i.length-1].$+=l:i.push(s?y(null,l):l),o=s)};if(c(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}const r=y(e,null);return r.p=t,i.length>0&&(r.m=i),r},y=(e,t)=>({t:0,S:e,$:t,g:null,m:null,p:null}),p={},m=(e,n,s,o,i,c)=>{if(s!==o){let r=_(e,n),u=n.toLowerCase();if("class"===n){const t=e.classList,n=w(s),l=w(o);t.remove(...n.filter((e=>e&&!l.includes(e)))),t.add(...l.filter((e=>e&&!n.includes(e))))}else if("style"===n){for(const t in s)o&&null!=o[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in o)s&&o[t]===s[t]||(t.includes("-")?e.style.setProperty(t,o[t]):e.style[t]=o[t])}else if("ref"===n)o&&o(e);else if(r||"o"!==n[0]||"n"!==n[1]){const t=$(o);if((r||t&&null!==o)&&!i)try{if(e.tagName.includes("-"))e[n]=o;else{let t=null==o?"":o;"list"===n?r=!1:null!=s&&e[n]==t||(e[n]=t)}}catch(e){}null==o||!1===o?!1===o&&""!==e.getAttribute(n)||e.removeAttribute(n):(!r||4&c||i)&&!t&&e.setAttribute(n,o=!0===o?"":o)}else n="-"===n[2]?n.slice(3):_(t,u)?u.slice(2):u[2]+n.slice(3),s&&l.rel(e,n,s,!1),o&&l.ael(e,n,o,!1)}},b=/\s/,w=e=>e?e.split(b):[],S=(e,t,n,l)=>{const s=11===t.g.nodeType&&t.g.host?t.g.host:t.g,o=e&&e.p||h,i=t.p||h;for(l in o)l in i||m(s,l,o[l],void 0,n,t.t);for(l in i)m(s,l,o[l],i[l],n,t.t)},g=(e,t,l)=>{let s,o,i=t.m[l],c=0;if(null!==i.$)s=i.g=n.createTextNode(i.$);else if(s=i.g=n.createElement(i.S),S(null,i,!1),i.m)for(c=0;c<i.m.length;++c)o=g(e,i,c),o&&s.appendChild(o);return s},j=(e,t,n,l,s,o)=>{let i,c=e;for(;s<=o;++s)l[s]&&(i=g(null,n,s),i&&(l[s].g=i,c.insertBefore(i,t)))},v=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.g,C(l),s.remove())},M=(e,t)=>e.S===t.S,k=(e,t)=>{const n=t.g=e.g,l=e.m,s=t.m,o=t.$;null===o?(S(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,i=0,c=t.length-1,r=t[0],u=t[c],a=l.length-1,f=l[0],h=l[a];for(;o<=c&&i<=a;)null==r?r=t[++o]:null==u?u=t[--c]:null==f?f=l[++i]:null==h?h=l[--a]:M(r,f)?(k(r,f),r=t[++o],f=l[++i]):M(u,h)?(k(u,h),u=t[--c],h=l[--a]):M(r,h)?(k(r,h),e.insertBefore(r.g,u.g.nextSibling),r=t[++o],h=l[--a]):M(u,f)?(k(u,f),e.insertBefore(u.g,r.g),u=t[--c],f=l[++i]):(s=g(t&&t[i],n,i),f=l[++i],s&&r.g.parentNode.insertBefore(s,r.g));o>c?j(e,null==l[a+1]?null:l[a+1].g,n,l,i,a):i>a&&v(t,o,c)})(n,l,t,s):null!==s?(null!==e.$&&(n.textContent=""),j(n,null,t,s,0,s.length-1)):null!==l&&v(l,0,l.length-1)):e.$!==o&&(n.data=o)},C=e=>{e.p&&e.p.ref&&e.p.ref(null),e.m&&e.m.map(C)},O=(e,t)=>{t&&!e.j&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.j=t)))},P=(e,t)=>{if(e.t|=16,!(4&e.t))return O(e,e.v),ee((()=>x(e,t)));e.t|=512},x=(e,t)=>{const n=e.i;return t&&(e.t|=256,e.u&&(e.u.map((([e,t])=>F(n,e,t))),e.u=null)),R(void 0,(()=>E(e,n,t)))},E=async(e,t,l)=>{const s=e.M,o=s["s-rc"];l&&(e=>{const t=e.k;((e,t)=>{let l=f(t),s=I.get(l);if(e=11===e.nodeType?e:n,s)if("string"==typeof s){let t,o=a.get(e=e.head||e);o||a.set(e,o=new Set),o.has(l)||(t=n.createElement("style"),t.innerHTML=s,e.insertBefore(t,e.querySelector("link")),o&&o.add(l))}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s])})(e.M.getRootNode(),t)})(e);L(e,t),o&&(o.map((e=>e())),s["s-rc"]=void 0);{const t=s["s-p"],n=()=>T(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},L=(e,t)=>{try{t=t.render(),e.t&=-17,e.t|=2,((e,t)=>{const n=e.M,l=e.C||y(null,null),s=(e=>e&&e.S===p)(t)?t:d(null,null,t);s.S=null,s.t|=4,e.C=s,s.g=l.g=n,k(l,s)})(e,t)}catch(t){z(t,e.M)}return null},T=e=>{const t=e.M,n=e.i,l=e.v;64&e.t||(e.t|=64,U(t),F(n,"componentDidLoad"),e.O(t),l||A()),e.P(t),e.j&&(e.j(),e.j=void 0),512&e.t&&Z((()=>P(e,!1))),e.t&=-517},A=()=>{U(n.documentElement),Z((()=>(e=>{const t=l.ce("appload",{detail:{namespace:"app"}});return e.dispatchEvent(t),t})(t)))},F=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){z(e)}},R=(e,t)=>e&&e.then?e.then(t):t(),U=e=>e.classList.add("hydrated"),W=(e,t,n)=>{if(t.L){const s=Object.entries(t.L),o=e.prototype;if(s.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>H(this).T.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=H(e),o=s.T.get(t),i=s.t,c=s.i;n=((e,t)=>null==e||$(e)?e:2&t?parseFloat(e):e)(n,l.L[t][0]),8&i&&void 0!==o||n===o||(s.T.set(t,n),c&&2==(18&i)&&P(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=H(this);return n.A.then((()=>n.i[e](...t)))}})})),1&n){const t=new Map;o.attributeChangedCallback=function(e,n,s){l.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))s=this[n],delete this[n];else if(o.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==s)return;this[n]=(null!==s||"boolean"!=typeof this[n])&&s}))},e.observedAttributes=s.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},q=(e,s={})=>{const c=[],r=s.exclude||[],u=t.customElements,a=n.head,h=a.querySelector("meta[charset]"),$=n.createElement("style"),d=[];let y,p=!0;Object.assign(l,s),l.l=new URL(s.resourcesUrl||"./",n.baseURI).href,e.map((e=>{e[1].map((t=>{const n={t:t[0],h:t[1],L:t[2],F:t[3]};n.L=t[2],n.F=t[3];const s=n.h,a=class extends HTMLElement{constructor(e){super(e),V(e=this,n)}connectedCallback(){y&&(clearTimeout(y),y=null),p?d.push(this):l.jmp((()=>(e=>{if(0==(1&l.t)){const t=H(e),n=t.k,l=()=>{};if(1&t.t)i(e,t,n.F);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){O(t,t.v=n);break}}n.L&&Object.entries(n.L).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=G(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(W(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){z(e)}t.t&=-9,e()}if(s.style){let e=s.style;const t=f(n);if(!I.has(t)){const l=()=>{};((e,t,n)=>{let l=I.get(e);o&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,I.set(e,l)})(t,e,!!(1&n.t)),l()}}}const i=t.v,c=()=>P(t,!0);i&&i["s-rc"]?i["s-rc"].push(c):c()})(0,t,n)}l()}})(this)))}disconnectedCallback(){l.jmp((()=>(()=>{if(0==(1&l.t)){const e=H(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),F(t,"disconnectedCallback")}})()))}componentOnReady(){return H(this).R}};n.U=e[0],r.includes(s)||u.get(s)||(c.push(s),u.define(s,W(a,n,1)))}))})),$.innerHTML=c+"{visibility:hidden}.hydrated{visibility:inherit}",$.setAttribute("data-styles",""),a.insertBefore($,h?h.nextSibling:a.firstChild),p=!1,d.length?d.map((e=>e.connectedCallback())):l.jmp((()=>y=setTimeout(A,30)))},D=new WeakMap,H=e=>D.get(e),N=(e,t)=>D.set(t.i=e,t),V=(e,t)=>{const n={t:0,M:e,k:t,T:new Map};return n.A=new Promise((e=>n.P=e)),n.R=new Promise((e=>n.O=e)),e["s-p"]=[],e["s-rc"]=[],i(e,n,t.F),D.set(e,n)},_=(e,t)=>t in e,z=(e,t)=>(0,console.error)(e,t),B=new Map,G=e=>{const t=e.h.replace(/-/g,"_"),n=e.U,l=B.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(B.set(n,e),e[t])),z)},I=new Map,J=[],K=[],Q=(t,n)=>s=>{t.push(s),e||(e=!0,n&&4&l.t?Z(Y):l.raf(Y))},X=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){z(e)}e.length=0},Y=()=>{X(J),X(K),(e=J.length>0)&&l.raf(Y)},Z=e=>s().then(e),ee=Q(K,!0);export{q as b,d as h,s as p,N as r}