import{r as t,h as e}from"./p-2eef720a.js";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let e=0;e<t.length;e+=3){const s=t[e],r=e+1<t.length,o=r?t[e+1]:0,a=e+2<t.length,h=a?t[e+2]:0;let c=(15&o)<<2|h>>6,u=63&h;a||(u=64,r||(c=64)),n.push(i[s>>2],i[(3&s)<<4|o>>4],i[c],i[u])}return n.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(function(t){const e=[];let i=0;for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);s<128?e[i++]=s:s<2048?(e[i++]=s>>6|192,e[i++]=63&s|128):55296==(64512&s)&&n+1<t.length&&56320==(64512&t.charCodeAt(n+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++n)),e[i++]=s>>18|240,e[i++]=s>>12&63|128,e[i++]=s>>6&63|128,e[i++]=63&s|128):(e[i++]=s>>12|224,e[i++]=s>>6&63|128,e[i++]=63&s|128)}return e}(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let i=0,n=0;for(;i<t.length;){const s=t[i++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[i++];e[n++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&t[i++])<<12|(63&t[i++])<<6|63&t[i++])-65536;e[n++]=String.fromCharCode(55296+(r>>10)),e[n++]=String.fromCharCode(56320+(1023&r))}else{const r=t[i++],o=t[i++];e[n++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const i=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let e=0;e<t.length;){const s=i[t.charAt(e++)],r=e<t.length?i[t.charAt(e)]:0;++e;const o=e<t.length?i[t.charAt(e)]:64;++e;const a=e<t.length?i[t.charAt(e)]:64;if(++e,null==s||null==r||null==o||null==a)throw Error();n.push(s<<2|r>>4),64!==o&&(n.push(r<<4&240|o>>2),64!==a&&n.push(o<<6&192|a))}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class n{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,i)=>{e?this.reject(e):this.resolve(i),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,i))}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function r(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}class o extends Error{constructor(t,e,i){super(e),this.code=t,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,o.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,a.prototype.create)}}class a{constructor(t,e,i){this.service=t,this.serviceName=e,this.errors=i}create(t,...e){const i=e[0]||{},n=`${this.service}/${t}`,s=this.errors[t],r=s?function(t,e){return t.replace(h,((t,i)=>{const n=e[i];return null!=n?String(n):`<${i}?>`}))}(s,i):"Error";return new o(n,`${this.serviceName}: ${r} (${n}).`,i)}}const h=/\{\$([^}]+)}/g;function c(t,e){if(t===e)return!0;const i=Object.keys(t),n=Object.keys(e);for(const s of i){if(!n.includes(s))return!1;const i=t[s],r=e[s];if(u(i)&&u(r)){if(!c(i,r))return!1}else if(i!==r)return!1}for(const t of n)if(!i.includes(t))return!1;return!0}function u(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(t){const e=[];for(const[i,n]of Object.entries(t))Array.isArray(n)?n.forEach((t=>{e.push(encodeURIComponent(i)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}class d{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,i){let n;if(void 0===t&&void 0===e&&void 0===i)throw new Error("Missing Observer.");n=function(t){if("object"!=typeof t||null===t)return!1;for(const e of["next","error","complete"])if(e in t&&"function"==typeof t[e])return!0;return!1}(t)?t:{next:t,error:e,complete:i},void 0===n.next&&(n.next=f),void 0===n.error&&(n.error=f),void 0===n.complete&&(n.complete=f);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(t){}})),this.observers.push(n),s}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function f(){}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,e=1e3,i=2){const n=e*Math.pow(i,t),s=Math.round(.5*n*(Math.random()-.5)*2);return Math.min(144e5,n+s)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m(t){return t&&t._delegate?t._delegate:t}class w{constructor(t,e,i){this.name=t,this.instanceFactory=e,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new n;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:e});i&&t.resolve(i)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const i=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),n=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(t){if(n)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:i});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:e});for(const[t,e]of this.instancesDeferred.entries())i===this.normalizeInstanceIdentifier(t)&&e.resolve(n);return n}onInit(t,e){var i;const n=this.normalizeInstanceIdentifier(e),s=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;s.add(t),this.onInitCallbacks.set(n,s);const r=this.instances.get(n);return r&&t(r,n),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const i=this.onInitCallbacks.get(e);if(i)for(const n of i)try{n(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(n=t,"[DEFAULT]"===n?void 0:n),options:e}),this.instances.set(t,i),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(t){}var n;return i||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:"[DEFAULT]":t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class g{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new y(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var v;!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(v||(v={}));const b={debug:v.DEBUG,verbose:v.VERBOSE,info:v.INFO,warn:v.WARN,error:v.ERROR,silent:v.SILENT},I=v.INFO,_={[v.DEBUG]:"log",[v.VERBOSE]:"log",[v.INFO]:"info",[v.WARN]:"warn",[v.ERROR]:"error"},k=(t,e,...i)=>{if(e<t.logLevel)return;const n=(new Date).toISOString(),s=_[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${n}]  ${t.name}:`,...i)};class T{constructor(t){this.name=t,this._logLevel=I,this._logHandler=k,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in v))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?b[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,v.DEBUG,...t),this._logHandler(this,v.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,v.VERBOSE,...t),this._logHandler(this,v.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,v.INFO,...t),this._logHandler(this,v.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,v.WARN,...t),this._logHandler(this,v.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,v.ERROR,...t),this._logHandler(this,v.ERROR,...t)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}const S="@firebase/app",O=new T("@firebase/app"),A={[S]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},N=new Map,D=new Map;function P(t,e){try{t.container.addComponent(e)}catch(i){O.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,i)}}function C(t){const e=t.name;if(D.has(e))return O.debug(`There were multiple attempts to register component ${e}.`),!1;D.set(e,t);for(const e of N.values())P(e,t);return!0}function R(t,e){return t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=new a("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class L{constructor(t,e,i){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new w("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw x.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t="[DEFAULT]"){const e=N.get(t);if(!e)throw x.create("no-app",{appName:t});return e}function j(t,e,i){var n;let s=null!==(n=A[t])&&void 0!==n?n:t;i&&(s+=`-${i}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const t=[`Unable to register library "${s}" with version "${e}":`];return r&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&t.push("and"),o&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void O.warn(t.join(" "))}C(new w(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */C(new w("platform-logger",(t=>new E(t)),"PRIVATE")),j(S,"0.7.13",""),j(S,"0.7.13","esm2017"),j("fire-js",""),
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
j("firebase","9.6.3","app"),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var M,F=(function(t){function e(t){return Array.prototype.slice.call(t)}function i(t){return new Promise((function(e,i){t.onsuccess=function(){e(t.result)},t.onerror=function(){i(t.error)}}))}function n(t,e,n){var s,r=new Promise((function(r,o){i(s=t[e].apply(t,n)).then(r,o)}));return r.request=s,r}function s(t,e,i){var s=n(t,e,i);return s.then((function(t){if(t)return new u(t,s.request)}))}function r(t,e,i){i.forEach((function(i){Object.defineProperty(t.prototype,i,{get:function(){return this[e][i]},set:function(t){this[e][i]=t}})}))}function o(t,e,i,s){s.forEach((function(s){s in i.prototype&&(t.prototype[s]=function(){return n(this[e],s,arguments)})}))}function a(t,e,i,n){n.forEach((function(n){n in i.prototype&&(t.prototype[n]=function(){return this[e][n].apply(this[e],arguments)})}))}function h(t,e,i,n){n.forEach((function(n){n in i.prototype&&(t.prototype[n]=function(){return s(this[e],n,arguments)})}))}function c(t){this._index=t}function u(t,e){this._cursor=t,this._request=e}function l(t){this._store=t}function d(t){this._tx=t,this.complete=new Promise((function(e,i){t.oncomplete=function(){e()},t.onerror=function(){i(t.error)},t.onabort=function(){i(t.error)}}))}function f(t,e,i){this._db=t,this.oldVersion=e,this.transaction=new d(i)}function p(t){this._db=t}r(c,"_index",["name","keyPath","multiEntry","unique"]),o(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),h(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),r(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(t){t in IDBCursor.prototype&&(u.prototype[t]=function(){var e=this,n=arguments;return Promise.resolve().then((function(){return e._cursor[t].apply(e._cursor,n),i(e._request).then((function(t){if(t)return new u(t,e._request)}))}))})})),l.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},r(l,"_store",["name","keyPath","indexNames","autoIncrement"]),o(l,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),h(l,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(l,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new l(this._tx.objectStore.apply(this._tx,arguments))},r(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new l(this._db.createObjectStore.apply(this._db,arguments))},r(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},r(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(t){[l,c].forEach((function(i){t in i.prototype&&(i.prototype[t.replace("open","iterate")]=function(){var i=e(arguments),n=i[i.length-1],s=this._store||this._index,r=s[t].apply(s,i.slice(0,-1));r.onsuccess=function(){n(r.result)}})}))})),[c,l].forEach((function(t){t.prototype.getAll||(t.prototype.getAll=function(t,e){var i=this,n=[];return new Promise((function(s){i.iterateCursor(t,(function(t){t?(n.push(t.value),void 0===e||n.length!=e?t.continue():s(n)):s(n)}))}))})})),t.openDb=function(t,e,i){var s=n(indexedDB,"open",[t,e]),r=s.request;return r&&(r.onupgradeneeded=function(t){i&&i(new f(r.result,t.oldVersion,r.transaction))}),s.then((function(t){return new p(t)}))},t.deleteDb=function(t){return n(indexedDB,"deleteDatabase",[t])},Object.defineProperty(t,"__esModule",{value:!0})}((M={path:void 0,exports:{},require:function(){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}}).exports),M.exports);const U="@firebase/installations",z=new a("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function V(t){return t instanceof o&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function K(t){return{token:t.token,requestStatus:2,expiresIn:(e=t.expiresIn,Number(e.replace("s","000"))),creationTime:Date.now()};var e}async function q(t,e){const i=(await e.json()).error;return z.create("request-failed",{requestName:t,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function G({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}async function J(t){const e=await t();return e.status>=500&&e.status<600?t():e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const W=/^[cdef][\w-]{21}$/;function X(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const e=function(t){return(e=t,btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);return W.test(e)?e:""}catch(t){return""}}function Y(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z=new Map;function Q(t,e){const i=Y(t);tt(i,e),function(t,e){const i=(!et&&"BroadcastChannel"in self&&(et=new BroadcastChannel("[Firebase] FID Change"),et.onmessage=t=>{tt(t.data.key,t.data.fid)}),et);i&&i.postMessage({key:t,fid:e}),0===Z.size&&et&&(et.close(),et=null)}(i,e)}function tt(t,e){const i=Z.get(t);if(i)for(const t of i)t(e)}let et=null;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const it="firebase-installations-store";let nt=null;function st(){return nt||(nt=F.openDb("firebase-installations-database",1,(t=>{switch(t.oldVersion){case 0:t.createObjectStore(it)}}))),nt}async function rt(t,e){const i=Y(t),n=(await st()).transaction(it,"readwrite"),s=n.objectStore(it),r=await s.get(i);return await s.put(e,i),await n.complete,r&&r.fid===e.fid||Q(t,e.fid),e}async function ot(t){const e=Y(t),i=(await st()).transaction(it,"readwrite");await i.objectStore(it).delete(e),await i.complete}async function at(t,e){const i=Y(t),n=(await st()).transaction(it,"readwrite"),s=n.objectStore(it),r=await s.get(i),o=e(r);return void 0===o?await s.delete(i):await s.put(o,i),await n.complete,!o||r&&r.fid===o.fid||Q(t,o.fid),o}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(t){let e;const i=await at(t,(i=>{const n=function(t){return lt(t||{fid:X(),registrationStatus:0})}(i),s=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine)return{installationEntry:e,registrationPromise:Promise.reject(z.create("app-offline"))};const i={fid:e.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:i,registrationPromise:async function(t,e){try{return rt(t,await
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,{fid:e}){const i=B(t),n={method:"POST",headers:G(t),body:JSON.stringify({fid:e,authVersion:"FIS_v2",appId:t.appId,sdkVersion:"w:0.5.5"})},s=await J((()=>fetch(i,n)));if(s.ok){const t=await s.json();return{fid:t.fid||e,registrationStatus:2,refreshToken:t.refreshToken,authToken:K(t.authToken)}}throw await q("Create Installation",s)}(t,e))}catch(i){throw V(i)&&409===i.customData.serverCode?await ot(t):await rt(t,{fid:e.fid,registrationStatus:0}),i}}(t,i)}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:ct(t)}:{installationEntry:e}}(t,n);return e=s.registrationPromise,s.installationEntry}));return""===i.fid?{installationEntry:await e}:{installationEntry:i,registrationPromise:e}}async function ct(t){let e=await ut(t);for(;1===e.registrationStatus;)await H(100),e=await ut(t);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:i}=await ht(t);return i||e}return e}function ut(t){return at(t,(t=>{if(!t)throw z.create("installation-not-found");return lt(t)}))}function lt(t){return 1===(e=t).registrationStatus&&e.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t;var e;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function dt({appConfig:t,platformLoggerProvider:e},i){const n=function(t,{fid:e}){return`${B(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,i),s=function(t,{refreshToken:e}){const i=G(t);return i.append("Authorization",function(t){return`FIS_v2 ${t}`}(e)),i}(t,i),r=e.getImmediate({optional:!0});r&&s.append("x-firebase-client",r.getPlatformInfoString());const o={method:"POST",headers:s,body:JSON.stringify({installation:{sdkVersion:"w:0.5.5"}})},a=await J((()=>fetch(n,o)));if(a.ok)return K(await a.json());throw await q("Generate Auth Token",a)}async function ft(t,e=!1){let i;const n=await at(t.appConfig,(n=>{if(!mt(n))throw z.create("not-registered");const s=n.authToken;if(!e&&(2===(r=s).requestStatus&&!function(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(r)))return n;var r;if(1===s.requestStatus)return i=async function(t,e){let i=await pt(t.appConfig);for(;1===i.authToken.requestStatus;)await H(100),i=await pt(t.appConfig);const n=i.authToken;return 0===n.requestStatus?ft(t,e):n}(t,e),n;{if(!navigator.onLine)throw z.create("app-offline");const e=function(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(n);return i=async function(t,e){try{const i=await dt(t,e),n=Object.assign(Object.assign({},e),{authToken:i});return await rt(t.appConfig,n),i}catch(i){if(!V(i)||401!==i.customData.serverCode&&404!==i.customData.serverCode){const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await rt(t.appConfig,i)}else await ot(t.appConfig);throw i}}(t,e),e}}));return i?await i:n.authToken}function pt(t){return at(t,(t=>{if(!mt(t))throw z.create("not-registered");return 1===(e=t.authToken).requestStatus&&e.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t;var e;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function mt(t){return void 0!==t&&2===t.registrationStatus}function wt(t){return z.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */C(new w("installations",(t=>{const e=t.getProvider("app").getImmediate();return{app:e,appConfig:
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t){if(!t||!t.options)throw wt("App Configuration");if(!t.name)throw wt("App Name");const e=["projectId","apiKey","appId"];for(const i of e)if(!t.options[i])throw wt(i);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),platformLoggerProvider:R(e,"platform-logger"),_delete:()=>Promise.resolve()}}),"PUBLIC")),C(new w("installations-internal",(t=>{const e=R(t.getProvider("app").getImmediate(),"installations").getImmediate();return{getId:()=>async function(t){const e=t,{installationEntry:i,registrationPromise:n}=await ht(e.appConfig);return n?n.catch(console.error):ft(e).catch(console.error),i.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),getToken:t=>async function(t,e=!1){const i=t;return await async function(t){const{registrationPromise:e}=await ht(t);e&&await e}(i.appConfig),(await ft(i,e)).token}(e,t)}}),"PRIVATE")),j(U,"0.5.5"),j(U,"0.5.5","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yt="https://www.googletagmanager.com/gtag/js",gt=new T("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vt(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const bt=new a("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'}),It=new class{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}};function _t(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function kt(t,e=It,i){const{appId:n,apiKey:s,measurementId:r}=t.options;if(!n)throw bt.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:n};throw bt.create("no-api-key")}const o=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Et;return setTimeout((async()=>{a.abort()}),void 0!==i?i:6e4),Tt({appId:n,apiKey:s,measurementId:r},o,a,e)}async function Tt(t,{throttleEndTimeMillis:e,backoffCount:i},n,s=It){const{appId:r,measurementId:a}=t;try{await function(t,e){return new Promise(((i,n)=>{const s=Math.max(e-Date.now(),0),r=setTimeout(i,s);t.addEventListener((()=>{clearTimeout(r),n(bt.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}(n,e)}catch(t){if(a)return gt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:r,measurementId:a};throw t}try{const e=await async function(t){var e;const{appId:i,apiKey:n}=t,s={method:"GET",headers:_t(n)},r="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",i),o=await fetch(r,s);if(200!==o.status&&304!==o.status){let t="";try{const i=await o.json();(null===(e=i.error)||void 0===e?void 0:e.message)&&(t=i.error.message)}catch(t){}throw bt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}(t);return s.deleteThrottleMetadata(r),e}catch(e){if(!function(t){if(!(t instanceof o&&t.customData))return!1;const e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(e)){if(s.deleteThrottleMetadata(r),a)return gt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:r,measurementId:a};throw e}const h=503===Number(e.customData.httpStatus)?p(i,s.intervalMillis,30):p(i,s.intervalMillis),c={throttleEndTimeMillis:Date.now()+h,backoffCount:i+1};return s.setThrottleMetadata(r,c),gt.debug(`Calling attemptFetch again in ${h} millis`),Tt(t,c,n,s)}}class Et{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function St(t,e,i,n,s,r,o){var a;const h=kt(t);h.then((e=>{i[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&gt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>gt.error(t))),e.push(h);const c=async function(){if("object"!=typeof indexedDB)return gt.warn(bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((t,e)=>{try{let i=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),i||self.indexedDB.deleteDatabase(n),t(!0)},s.onupgradeneeded=()=>{i=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}catch(t){return gt.warn(bt.create("indexeddb-unavailable",{errorInfo:t}).message),!1}return!0}().then((t=>t?n.getId():void 0)),[u,l]=await Promise.all([h,c]);(function(){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(yt))return e;return null})()||function(t,e){const i=document.createElement("script");i.src=`${yt}?l=${t}&id=${e}`,i.async=!0,document.head.appendChild(i)}(r,u.measurementId),s("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=l&&(d.firebase_id=l),s("config",u.measurementId,d),u.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.app=t}_delete(){return delete At[this.app.options.appId],Promise.resolve()}}let At={},Nt=[];const Dt={};let Pt,Ct,Rt=!1;function xt(t,e,i){!function(){const t=[];if(r()&&t.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),i=bt.create("invalid-analytics-context",{errorInfo:e});gt.warn(i.message)}}();const n=t.options.appId;if(!n)throw bt.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw bt.create("no-api-key");gt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=At[n])throw bt.create("already-exists",{id:n});if(!Rt){!function(){let t=[];Array.isArray(window.dataLayer)?t=window.dataLayer:window.dataLayer=t}();const{wrappedGtag:t,gtagCore:e}=function(t,e,i){let n=function(){window.dataLayer.push(arguments)};return window.gtag&&"function"==typeof window.gtag&&(n=window.gtag),window.gtag=function(t,e,i,n){return async function(s,r,o){try{"event"===s?await async function(t,e,i,n,s){try{let r=[];if(s&&s.send_to){let t=s.send_to;Array.isArray(t)||(t=[t]);const n=await vt(i);for(const i of t){const t=n.find((t=>t.measurementId===i)),s=t&&e[t.appId];if(!s){r=[];break}r.push(s)}}0===r.length&&(r=Object.values(e)),await Promise.all(r),t("event",n,s||{})}catch(t){gt.error(t)}}(t,e,i,r,o):"config"===s?await async function(t,e,i,n,s,r){const o=n[s];try{if(o)await e[o];else{const t=(await vt(i)).find((t=>t.measurementId===s));t&&await e[t.appId]}}catch(t){gt.error(t)}t("config",s,r)}(t,e,i,n,r,o):t("set",r)}catch(t){gt.error(t)}}}(n,t,e,i),{gtagCore:n,wrappedGtag:window.gtag}}(At,Nt,Dt);Ct=t,Pt=e,Rt=!0}return At[n]=St(t,Nt,Dt,e,Pt,"dataLayer",i),new Ot(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lt="@firebase/analytics";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function $t(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(i[n[s]]=t[n[s]])}return i}C(new w("analytics",((t,{options:e})=>xt(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),e)),"PUBLIC")),C(new w("analytics-internal",(function(t){try{const e=t.getProvider("analytics").getImmediate();return{logEvent:(t,i,n)=>function(t,e,i,n){t=m(t),async function(t,e,i,n,s){if(s&&s.global)t("event",i,n);else{const s=await e;t("event",i,Object.assign(Object.assign({},n),{send_to:s}))}}(Ct,At[t.app.options.appId],e,i,n).catch((t=>gt.error(t)))}(e,t,i,n)}}catch(t){throw bt.create("interop-component-reg-failed",{reason:t})}}),"PRIVATE")),j(Lt,"0.7.5"),j(Lt,"0.7.5","esm2017");const jt=function(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}},Mt=new a("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Ft=new T("@firebase/auth");function Ut(t,...e){Ft.logLevel<=v.ERROR&&Ft.error(`Auth (9.6.3): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(t,...e){throw Kt(t,...e)}function Vt(t,...e){return Kt(t,...e)}function Bt(t,e,i){const n=Object.assign(Object.assign({},jt()),{[e]:i});return new a("auth","Firebase",n).create(e,{appName:t.name})}function Kt(t,...e){if("string"!=typeof t){const i=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(i,...n)}return Mt.create(t,...e)}function qt(t,e,...i){if(!t)throw Kt(e,...i)}function Gt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ut(e),new Error(e)}function Jt(t,e){t||Gt(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=new Map;function Wt(t){Jt(t instanceof Function,"Expected a class definition");let e=Ht.get(t);return e?(Jt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ht.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xt(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function Yt(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zt{constructor(t,e){this.shortDelay=t,this.longDelay=e,Jt(e>t,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(s())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===Yt()||"https:"===Yt()||r()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,e){Jt(t.emulator,"Emulator should always be set here");const{url:i}=t.emulator;return e?`${i}${e.startsWith("/")?e.slice(1):e}`:i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{static initialize(t,e,i){this.fetchImpl=t,e&&(this.headersImpl=e),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Gt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Gt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Gt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},ie=new Zt(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(t,e,i,n,s={}){return se(t,s,(async()=>{let s={},r={};n&&("GET"===e?r=n:s={body:JSON.stringify(n)});const o=l(Object.assign({key:t.config.apiKey},r)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),te.fetch()(re(t,t.config.apiHost,i,o),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))}))}async function se(t,e,i){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},ee),e);try{const e=new oe(t),s=await Promise.race([i(),e.promise]);e.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw ae(t,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const e=s.ok?r.errorMessage:r.error.message,[i,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw ae(t,"credential-already-in-use",r);if("EMAIL_EXISTS"===i)throw ae(t,"email-already-in-use",r);const a=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw Bt(t,a,o);zt(t,a)}}catch(e){if(e instanceof o)throw e;zt(t,"network-request-failed")}}function re(t,e,i,n){const s=`${e}${i}?${n}`;return t.config.emulator?Qt(t.config,s):`${t.config.apiScheme}://${s}`}class oe{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(Vt(this.auth,"timeout"))),ie.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function ae(t,e,i){const n={appName:t.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);const s=Vt(t,e,n);return s.customData._tokenResponse=i,s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function he(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}function ce(t){return 1e3*Number(t)}function ue(t){const[e,n,s]=t.split(".");if(void 0===e||void 0===n||void 0===s)return Ut("JWT malformed, contained fewer than 3 sections"),null;try{const t=function(t){try{return i.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null}(n);return t?JSON.parse(t):(Ut("Failed to decode base64 JWT payload"),null)}catch(t){return Ut("Caught error parsing JWT payload as JSON",t),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function le(t,e,i=!1){if(i)return e;try{return await e}catch(e){throw e instanceof o&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class de{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===t.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=he(this.lastLoginAt),this.creationTime=he(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pe(t){var e;const i=t.auth,n=await t.getIdToken(),s=await le(t,async function(t,e){return ne(t,"POST","/v1/accounts:lookup",e)}(i,{idToken:n}));qt(null==s?void 0:s.users.length,i,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=(null===(e=r.providerUserInfo)||void 0===e?void 0:e.length)?r.providerUserInfo.map((t=>{var{providerId:e}=t,i=$t(t,["providerId"]);return{providerId:e,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})):[],a=(h=o,[...t.providerData.filter((t=>!h.some((e=>e.providerId===t.providerId)))),...h]);var h;const c=!!t.isAnonymous&&!(t.email&&r.passwordHash||(null==a?void 0:a.length)),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new fe(r.createdAt,r.lastLoginAt),isAnonymous:c};Object.assign(t,u)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){qt(t.idToken,"internal-error"),qt(void 0!==t.idToken,"internal-error"),qt(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=ue(t);return qt(e,"internal-error"),qt(void 0!==e.exp,"internal-error"),qt(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return qt(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:i,refreshToken:n,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const i=await se(t,{},(async()=>{const i=l({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:s}=t.config,r=re(t,n,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",te.fetch()(r,{method:"POST",headers:o,body:i})}));return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}(t,e);this.updateTokensAndExpiration(i,n,Number(s))}updateTokensAndExpiration(t,e,i){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(t,e){const{refreshToken:i,accessToken:n,expirationTime:s}=e,r=new me;return i&&(qt("string"==typeof i,"internal-error",{appName:t}),r.refreshToken=i),n&&(qt("string"==typeof n,"internal-error",{appName:t}),r.accessToken=n),s&&(qt("number"==typeof s,"internal-error",{appName:t}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new me,this.toJSON())}_performRefresh(){return Gt("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t,e){qt("string"==typeof t||void 0===t,"internal-error",{appName:e})}class ye{constructor(t){var{uid:e,auth:i,stsTokenManager:n}=t,s=$t(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new de(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new fe(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await le(this,this.stsTokenManager.getToken(this.auth,t));return qt(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const i=m(t),n=await i.getIdToken(e),s=ue(n);qt(s&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error");const r="object"==typeof s.firebase?s.firebase:void 0,o=null==r?void 0:r.sign_in_provider;return{claims:s,token:n,authTime:he(ce(s.auth_time)),issuedAtTime:he(ce(s.iat)),expirationTime:he(ce(s.exp)),signInProvider:o||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=m(t);await pe(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(qt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new ye(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){qt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let i=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),i=!0),e&&await pe(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await le(this,async function(t,e){return ne(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var i,n,s,r,o,a,h,c;const u=null!==(i=e.displayName)&&void 0!==i?i:void 0,l=null!==(n=e.email)&&void 0!==n?n:void 0,d=null!==(s=e.phoneNumber)&&void 0!==s?s:void 0,f=null!==(r=e.photoURL)&&void 0!==r?r:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,w=null!==(h=e.createdAt)&&void 0!==h?h:void 0,y=null!==(c=e.lastLoginAt)&&void 0!==c?c:void 0,{uid:g,emailVerified:v,isAnonymous:b,providerData:I,stsTokenManager:_}=e;qt(g&&_,t,"internal-error");const k=me.fromJSON(this.name,_);qt("string"==typeof g,t,"internal-error"),we(u,t.name),we(l,t.name),qt("boolean"==typeof v,t,"internal-error"),qt("boolean"==typeof b,t,"internal-error"),we(d,t.name),we(f,t.name),we(p,t.name),we(m,t.name),we(w,t.name),we(y,t.name);const T=new ye({uid:g,auth:t,email:l,emailVerified:v,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:w,lastLoginAt:y});return I&&Array.isArray(I)&&(T.providerData=I.map((t=>Object.assign({},t)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(t,e,i=!1){const n=new me;n.updateFromServerResponse(e);const s=new ye({uid:e.localId,auth:t,stsTokenManager:n,isAnonymous:i});return await pe(s),s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}ge.type="NONE";const ve=ge;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(t,e,i){return`firebase:${t}:${e}:${i}`}class Ie{constructor(t,e,i){this.persistence=t,this.auth=e,this.userKey=i;const{config:n,name:s}=this.auth;this.fullUserKey=be(this.userKey,n.apiKey,s),this.fullPersistenceKey=be("persistence",n.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?ye._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,i="authUser"){if(!e.length)return new Ie(Wt(ve),t,i);const n=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let s=n[0]||Wt(ve);const r=be(i,t.config.apiKey,t.name);let o=null;for(const i of e)try{const e=await i._get(r);if(e){const n=ye._fromJSON(t,e);i!==s&&(o=n),s=i;break}}catch(t){}const a=n.filter((t=>t._shouldAllowMigration));return s._shouldAllowMigration&&a.length?(s=a[0],o&&await s._set(r,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==s)try{await t._remove(r)}catch(t){}}))),new Ie(s,t,i)):new Ie(s,t,i)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Se(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ke(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ae(e))return"Blackberry";if(Ne(e))return"Webos";if(Te(e))return"Safari";if((e.includes("chrome/")||Ee(e))&&!e.includes("edge/"))return"Chrome";if(Oe(e))return"Android";{const e=t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if(2===(null==e?void 0:e.length))return e[1]}return"Other"}function ke(t=s()){return/firefox\//i.test(t)}function Te(t=s()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ee(t=s()){return/crios\//i.test(t)}function Se(t=s()){return/iemobile/i.test(t)}function Oe(t=s()){return/android/i.test(t)}function Ae(t=s()){return/blackberry/i.test(t)}function Ne(t=s()){return/webos/i.test(t)}function De(t=s()){return/iphone|ipad|ipod/i.test(t)}function Pe(t=s()){return De(t)||Oe(t)||Ne(t)||Ae(t)||/windows phone/i.test(t)||Se(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ce(t,e=[]){let i;switch(t){case"Browser":i=_e(s());break;case"Worker":i=`${_e(s())}-${t}`;break;default:i=t}return`${i}/JsCore/9.6.3/${e.length?e.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(t,e){this.app=t,this.config=e,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Le(this),this.idTokenSubscription=new Le(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=e.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Wt(e)),this._initializationPromise=this.queue((async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await Ie.create(this,t),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t):void 0}async initializeCurrentUser(t){var e;let i=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==i?void 0:i._redirectEventId,r=await this.tryRedirectSignIn(t);n&&n!==s||!(null==r?void 0:r.user)||(i=r.user)}return i?i._redirectEventId?(qt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)):this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await pe(t)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?m(t):null;return e&&qt(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&qt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Wt(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new a("auth","Firebase",t())}onAuthStateChanged(t,e,i){return this.registerStateListener(this.authStateSubscription,t,e,i)}onIdTokenChanged(t,e,i){return this.registerStateListener(this.idTokenSubscription,t,e,i)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const i=await this.getOrInitRedirectPersistenceManager(e);return null===t?i.removeCurrentUser():i.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Wt(t)||this._popupRedirectResolver;qt(e,this,"argument-error"),this.redirectPersistenceManager=await Ie.create(this,[Wt(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,i;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,i,n){if(this._deleted)return()=>{};const s="function"==typeof e?e:e.next.bind(e),r=this._isInitialized?Promise.resolve():this._initializationPromise;return qt(r,this,"internal-error"),r.then((()=>s(this.currentUser))),"function"==typeof e?t.addObserver(e,i,n):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return qt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ce(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const t={"X-Client-Version":this.clientVersion};return this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId),t}}function xe(t){return m(t)}class Le{constructor(t){this.auth=t,this.observer=null,this.addObserver=function(t){const e=new d(t,void 0);return e.subscribe.bind(e)}((t=>this.observer=t))}get next(){return qt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Gt("not implemented")}_getIdTokenResponse(t){return Gt("not implemented")}_linkToIdToken(t,e){return Gt("not implemented")}_getReauthenticationResolver(t){return Gt("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function je(t,e){return async function(t,e,i,n,s={}){const r=await ne(t,e,i,n,s);return"mfaPendingCredential"in r&&zt(t,"multi-factor-auth-required",{_serverResponse:r}),r}(t,"POST","/v1/accounts:signInWithIdp",function(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends $e{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Me(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):zt("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:i,signInMethod:n}=e,s=$t(e,["providerId","signInMethod"]);if(!i||!n)return null;const r=new Me(i,n);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(t){return je(t,this.buildRequest())}_linkToIdToken(t,e){const i=this.buildRequest();return i.idToken=e,je(t,i)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,je(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=l(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Fe{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends Ue{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Me._fromParams({providerId:ze.PROVIDER_ID,signInMethod:ze.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return ze.credentialFromTaggedObject(t)}static credentialFromError(t){return ze.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:i}=t;if(!e&&!i)return null;try{return ze.credential(e,i)}catch(t){return null}}}ze.GOOGLE_SIGN_IN_METHOD="google.com",ze.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,i,n=!1){const s=await ye._fromIdTokenResponse(t,i,n),r=Be(i);return new Ve({user:s,providerId:r,_tokenResponse:i,operationType:e})}static async _forOperation(t,e,i){await t._updateTokensIfNecessary(i,!0);const n=Be(i);return new Ve({user:t,providerId:n,_tokenResponse:i,operationType:e})}}function Be(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke extends o{constructor(t,e,i,n){var s;super(e.code,e.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,Ke.prototype),this.customData={appName:t.name,tenantId:null!==(s=t.tenantId)&&void 0!==s?s:void 0,_serverResponse:e.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(t,e,i,n){return new Ke(t,e,i,n)}}function qe(t,e,i,n){return("reauthenticate"===e?i._getReauthenticationResolver(t):i._getIdTokenResponse(t)).catch((i=>{if("auth/multi-factor-auth-required"===i.code)throw Ke._fromErrorAndOperation(t,i,e,n);throw i}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ge{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends Ge{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=s();return Te(t)||De(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=Pe(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const i=this.storage.getItem(e),n=this.localCache[e];i!==n&&t(e,n,i)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,i)=>{this.notifyListeners(t,i)}));const i=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(i);if(t.newValue!==n)null!==t.newValue?this.storage.setItem(i,t.newValue):this.storage.removeItem(i);else if(this.localCache[i]===t.newValue&&!e)return}const n=()=>{const t=this.storage.getItem(i);(e||this.localCache[i]!==t)&&this.notifyListeners(i,t)},r=this.storage.getItem(i);!function(){const t=s();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}()||10!==document.documentMode||r===t.newValue||t.newValue===t.oldValue?n():setTimeout(n,10)}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const t of Array.from(i))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:i}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Je.type="LOCAL";const He=Je;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends Ge{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}We.type="SESSION";const Xe=We;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const i=new Ye(t);return this.receivers.push(i),i}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:i,eventType:n,data:s}=e.data,r=this.handlersMap[n];if(!(null==r?void 0:r.size))return;e.ports[0].postMessage({status:"ack",eventId:i,eventType:n});const o=Array.from(r).map((async t=>t(e.origin,s))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:i,eventType:n,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ze(t="",e=10){let i="";for(let t=0;t<e;t++)i+=Math.floor(10*Math.random());return t+i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.receivers=[];class Qe{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,i=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let s,r;return new Promise(((o,a)=>{const h=Ze("",20);n.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),i);r={messageChannel:n,onMessage(t){const e=t;if(e.data.eventId===h)switch(e.data.status){case"ack":clearTimeout(c),s=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),o(e.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"))}}},this.handlers.add(r),n.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:t,eventId:h,data:e},[n.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ei(){return void 0!==ti().WorkerGlobalScope&&"function"==typeof ti().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ii="firebaseLocalStorageDb";class ni{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function si(t,e){return t.transaction(["firebaseLocalStorage"],e?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ri(){const t=indexedDB.open(ii,1);return new Promise(((e,i)=>{t.addEventListener("error",(()=>{i(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){i(t)}})),t.addEventListener("success",(async()=>{const i=t.result;i.objectStoreNames.contains("firebaseLocalStorage")?e(i):(i.close(),await function(){const t=indexedDB.deleteDatabase(ii);return new ni(t).toPromise()}(),e(await ri()))}))}))}async function oi(t,e,i){const n=si(t,!0).put({fbase_key:e,value:i});return new ni(n).toPromise()}function ai(t,e){const i=si(t,!0).delete(e);return new ni(i).toPromise()}class hi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ri()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ei()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ye._getInstance(ei()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async()=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Qe(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(null===(t=i[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=i[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ri();return await oi(t,"__sak","1"),await ai(t,"__sak"),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((i=>oi(i,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const i=si(t,!1).get(e),n=await new ni(i).toPromise();return void 0===n?null:n.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>ai(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=si(t,!1).getAll();return new ni(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],i=new Set;for(const{fbase_key:n,value:s}of t)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(s)&&(this.notifyListeners(n,s),e.push(n));for(const t of Object.keys(this.localCache))this.localCache[t]&&!i.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const i=this.listeners[t];if(i)for(const t of Array.from(i))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}hi.type="LOCAL";const ci=hi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ui(t,e){return e?Wt(e):(qt(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Zt(3e4,6e4);class li extends $e{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return je(t,this._buildIdpRequest())}_linkToIdToken(t,e){return je(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return je(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function di(t){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e,i=!1){const n="signIn",s=await qe(t,n,e),r=await Ve._fromIdTokenResponse(t,n,s);return i||await t._updateCurrentUser(r.user),r}(t.auth,new li(t),t.bypassAuthState)}function fi(t){const{auth:e,user:i}=t;return qt(i,e,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e,i=!1){const{auth:n}=t,s="reauthenticate";try{const r=await le(t,qe(n,s,e,t),i);qt(r.idToken,n,"internal-error");const o=ue(r.idToken);qt(o,n,"internal-error");const{sub:a}=o;return qt(t.uid===a,n,"user-mismatch"),Ve._forOperation(t,s,r)}catch(t){throw"auth/user-not-found"===(null==t?void 0:t.code)&&zt(n,"user-mismatch"),t}}(i,new li(t),t.bypassAuthState)}async function pi(t){const{auth:e,user:i}=t;return qt(i,e,"internal-error"),async function(t,e,i=!1){const n=await le(t,e._linkToIdToken(t.auth,await t.getIdToken()),i);return Ve._forOperation(t,"link",n)}(i,new li(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(t,e,i,n,s=!1){this.auth=t,this.resolver=i,this.user=n,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:i,postBody:n,tenantId:s,error:r,type:o}=t;if(r)return void this.reject(r);const a={auth:this.auth,requestUri:e,sessionId:i,tenantId:s||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return di;case"linkViaPopup":case"linkViaRedirect":return pi;case"reauthViaPopup":case"reauthViaRedirect":return fi;default:zt(this.auth,"internal-error")}}resolve(t){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Jt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new Zt(2e3,1e4);class yi extends mi{constructor(t,e,i,n,s){super(t,e,n,s),this.provider=i,this.authWindow=null,this.pollId=null,yi.currentPopupAction&&yi.currentPopupAction.cancel(),yi.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return qt(t,this.auth,"internal-error"),t}async onExecution(){Jt(1===this.filter.length,"Popup operations only handle one event");const t=Ze();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(Vt(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yi.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,i;this.pollId=(null===(i=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===i?void 0:i.closed)?window.setTimeout((()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))}),2e3):window.setTimeout(t,wi.get())};t()}}yi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gi=new Map;class vi extends mi{constructor(t,e,i=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,i),this.eventId=null}async execute(){let t=gi.get(this.auth._key());if(!t){try{const e=await async function(t,e){const i=function(t){return be("pendingRedirect",t.config.apiKey,t.name)}(e),n=function(t){return Wt(t._redirectPersistence)}(t);if(!await n._isAvailable())return!1;const s="true"===await n._get(i);return await n._remove(i),s}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}gi.set(this.auth._key(),t)}return this.bypassAuthState||gi.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function bi(t,e,i=!1){const n=xe(t),s=ui(n,e),r=new vi(n,s,i),o=await r.execute();return o&&!i&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((i=>{this.isEventForConsumer(t,i)&&(e=!0,this.sendToConsumer(t,i),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ki(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var i;if(t.error&&!ki(t)){const n=(null===(i=t.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";e.onError(Vt(this.auth,n))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const i=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&i}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(_i(t))}saveEventToCache(t){this.cachedEventUids.add(_i(t)),this.lastProcessedEventTime=Date.now()}}function _i(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function ki({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ti=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ei=/^https?/;function Si(t){const e=Xt(),{protocol:i,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return""===s.hostname&&""===n?"chrome-extension:"===i&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===i&&s.hostname===n}if(!Ei.test(i))return!1;if(Ti.test(t))return n===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Zt(3e4,6e4);function Ai(){const t=ti().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}function Ni(t){return new Promise(((e,i)=>{var n,s,r,o;function a(){Ai(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ai(),i(Vt(t,"network-request-failed"))},timeout:Oi.get()})}if(null===(s=null===(n=ti().gapi)||void 0===n?void 0:n.iframes)||void 0===s?void 0:s.Iframe)e(gapi.iframes.getContext());else{if(!(null===(r=ti().gapi)||void 0===r?void 0:r.load)){const e=`__iframefcb${Math.floor(1e6*Math.random())}`;return ti()[e]=()=>{gapi.load?a():i(Vt(t,"network-request-failed"))},(o=`https://apis.google.com/js/api.js?onload=${e}`,new Promise(((t,e)=>{const i=document.createElement("script");var n,s;i.setAttribute("src",o),i.onload=t,i.onerror=t=>{const i=Vt("internal-error");i.customData=t,e(i)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==s?s:document).appendChild(i)}))).catch((t=>i(t)))}a()}})).catch((t=>{throw Di=null,t}))}let Di=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pi=new Zt(5e3,15e3),Ci={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ri=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xi(t){const e=t.config;qt(e.authDomain,t,"auth-domain-config-required");const i=e.emulator?Qt(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,n={apiKey:e.apiKey,appName:t.name,v:"9.6.3"},s=Ri.get(t.config.apiHost);s&&(n.eid=s);const r=t._getFrameworks();return r.length&&(n.fw=r.join(",")),`${i}?${l(n).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Li={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class $i{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function ji(t,e,i,n,s,r){qt(t.config.authDomain,t,"auth-domain-config-required"),qt(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:i,redirectUrl:n,v:"9.6.3",eventId:s};if(e instanceof Fe){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",function(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(r||{}))o[t]=e}if(e instanceof Ue){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(o.scopes=t.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const t of Object.keys(a))void 0===a[t]&&delete a[t];return`${function({config:t}){return t.emulator?Qt(t,"emulator/auth/handler"):`https://${t.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${l(a).slice(1)}`}const Mi=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xe,this._completeRedirectFn=bi}async _openPopup(t,e,i,n){var r;return Jt(null===(r=this.eventManagers[t._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()"),function(t,e,i,n=500,r=600){const o=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let h="";const c=Object.assign(Object.assign({},Li),{width:n.toString(),height:r.toString(),top:o,left:a}),u=s().toLowerCase();i&&(h=Ee(u)?"_blank":i),ke(u)&&(e=e||"http://localhost",c.scrollbars="yes");const l=Object.entries(c).reduce(((t,[e,i])=>`${t}${e}=${i},`),"");if(function(t=s()){var e;return De(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(u)&&"_self"!==h)return function(t,e){const i=document.createElement("a");i.href=t,i.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",h),new $i(null);const d=window.open(e||"",h,l);qt(d,t,"popup-blocked");try{d.focus()}catch(t){}return new $i(d)}(t,ji(t,e,i,Xt(),n),Ze())}async _openRedirect(t,e,i,n){var s;return await this._originValidation(t),s=ji(t,e,i,Xt(),n),ti().location.href=s,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:i}=this.eventManagers[e];return t?Promise.resolve(t):(Jt(i,"If manager is not set, promise should be"),i)}const i=this.initAndGetManager(t);return this.eventManagers[e]={promise:i},i.catch((()=>{delete this.eventManagers[e]})),i}async initAndGetManager(t){const e=await async function(t){const e=await function(t){return Di=Di||Ni(t),Di}(t),i=ti().gapi;return qt(i,t,"internal-error"),e.open({where:document.body,url:xi(t),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ci,dontclear:!0},(e=>new Promise((async(i,n)=>{await e.restyle({setHideOnLeave:!1});const s=Vt(t,"network-request-failed"),r=ti().setTimeout((()=>{n(s)}),Pi.get());function o(){ti().clearTimeout(r),i(e)}e.ping(o).then(o,(()=>{n(s)}))}))))}(t),i=new Ii(t);return e.register("authEvent",(e=>(qt(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:i.onEvent(e.authEvent)?"ACK":"ERROR"})),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:i},this.iframes[t._key()]=e,i}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send("webStorageSupport",{type:"webStorageSupport"},(i=>{var n;const s=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n.webStorageSupport;void 0!==s&&e(!!s),zt(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=async function(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return ne(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(Si(t))return}catch(t){}zt(t,"unauthorized-domain")}(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Pe()||Te()||De()}};var Fi="@firebase/auth";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ui{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var i;t((null===(i=e)||void 0===i?void 0:i.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){qt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */C(new w("auth",((t,{options:e})=>{const i=t.getProvider("app").getImmediate(),{apiKey:n,authDomain:s}=i.options;return(t=>{qt(n&&!n.includes(":"),"invalid-api-key",{appName:t.name}),qt(!(null==s?void 0:s.includes(":")),"argument-error",{appName:t.name});const i={apiKey:n,authDomain:s,clientPlatform:"Browser",apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ce("Browser")},r=new Re(t,i);return function(t,e){const i=(null==e?void 0:e.persistence)||[],n=(Array.isArray(i)?i:[i]).map(Wt);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,null==e?void 0:e.popupRedirectResolver)}(r,e),r})(i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t=>{t.getProvider("auth-internal").initialize()}))),C(new w("auth-internal",(t=>{return e=xe(t.getProvider("auth").getImmediate()),new Ui(e);var e}),"PRIVATE").setInstantiationMode("EXPLICIT")),j(Fi,"0.19.5",void 0),j(Fi,"0.19.5","esm2017");let zi=class{constructor(e){t(this,e),this.p1Score=0,this.p2Score=0,this.obstacles=[],this.isLoggedIn=!1}getSize(t){return(null==t?void 0:t.size)||(null==t?void 0:t.offsetWidth)||(null==t?void 0:t.offsetHeight)}isColliding(t,e){return t.x<e.x+this.getSize(e)&&t.x+this.getSize(t)>e.x&&t.y<e.y+this.getSize(e)&&this.getSize(t)+t.y>e.y}signInWithGoogle(){const t=new ze;(async function(t,e,i){const n=xe(t);!function(t,e){if(!(e instanceof Fe))throw Fe.name!==e.constructor.name&&zt(t,"argument-error"),Bt(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(t,e);const s=ui(n,i);return new yi(n,"signInViaPopup",e,s).executeNotNull()})(this.auth,t).then((t=>{console.log(t.user)})).catch((t=>{console.log(t)}))}componentDidLoad(){this.app=function(t,e={}){"object"!=typeof e&&(e={name:e});const i=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),n=i.name;if("string"!=typeof n||!n)throw x.create("bad-app-name",{appName:String(n)});const s=N.get(n);if(s){if(c(t,s.options)&&c(i,s.config))return s;throw x.create("duplicate-app",{appName:n})}const r=new g(n);for(const t of D.values())r.addComponent(t);const o=new L(t,i,r);return N.set(n,o),o}({apiKey:"AIzaSyCHd7H2khO7gymnZWj1itUUnNg13H-JL0g",authDomain:"cj-tank-game.firebaseapp.com",databaseURL:"https://cj-tank-game-default-rtdb.firebaseio.com",projectId:"cj-tank-game",storageBucket:"cj-tank-game.appspot.com",messagingSenderId:"63758923627",appId:"1:63758923627:web:d3474be898b19186593e2e",measurementId:"G-8VQCCHE2J4"});const t=function(t=$()){const e=R(t=m(t),"analytics");return e.isInitialized()?e.getImmediate():function(t,e={}){const i=R(t,"analytics");if(i.isInitialized()){const t=i.getImmediate();if(c(e,i.getOptions()))return t;throw bt.create("already-initialized")}return i.initialize({options:e})}(t)}(this.app);this.auth=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t=$()){const e=R(t,"auth");return e.isInitialized()?e.getImmediate():function(t,e){const i=R(t,"auth");if(i.isInitialized()){const t=i.getImmediate();if(c(i.getOptions(),null!=e?e:{}))return t;zt(t,"already-initialized")}return i.initialize({options:e})}(t,{popupRedirectResolver:Mi,persistence:[ci,He,Xe]})}(this.app),console.log(this.app,t),this.gameLoop=setInterval((()=>{document.querySelectorAll(".bullet").forEach((t=>{t.offsetLeft>this.p1.x&&t.offsetLeft<this.p1.x+60&&t.offsetTop>this.p1.y&&t.offsetTop<this.p1.y+60&&!t.classList.contains("bullet-stick")&&(this.p2Score=this.p2Score+1,this.p1.isHit()),t.offsetLeft>this.p2.x&&t.offsetLeft<this.p2.x+60&&t.offsetTop>this.p2.y&&t.offsetTop<this.p2.y+60&&!t.classList.contains("bullet-1")&&(this.p1Score=this.p1Score+1,this.p2.isHit());for(const e of this.obstacles)this.isColliding(e,t)&&console.log(e,t)}));for(const t of this.obstacles)this.isColliding(t,this.p1)&&this.p1.isColliding(!0),this.isColliding(t,this.p2)&&this.p2.isColliding(!0)}),2.5),this.createObstacles()}createObstacles(){const t=[];for(let e=0;e<9;e++)t.push({health:5,x:700*Math.random()+100,y:500*Math.random()+100,size:100*Math.random()});this.obstacles=t}disconnectedCallback(){this.gameLoop()}async logout(){return this.isLoggedIn=!1,m(this.auth).signOut()}onSubmit(){console.log(this.emailInputEl.value,this.passwordInputEl.value)}render(){return[e("div",{class:"logins"},e("button",{onClick:()=>this.logout()},"logout"),!this.isLoggedIn&&e("button",{onClick:()=>this.signInWithGoogle()},"Login with Google"),e("form",null,e("input",{ref:t=>this.emailInputEl=t,type:"email",name:"email",placeholder:"Email Address"}),e("input",{ref:t=>this.passwordInputEl=t,type:"password",name:"password",placeholder:"Password"}),e("button",{type:"submit"},"Login"))),e("div",{class:"scoreboard"},e("span",null,"P1: ",this.p1Score),e("span",null,"P2: ",this.p2Score)),e("div",{class:"map"},e("stick-tank",{ref:t=>this.p1=t}),e("tank-cj",{ref:t=>this.p2=t}),this.obstacles.map((t=>t.health>0&&e("span",{class:"obstacle",style:{height:`${t.size}px`,width:`${t.size}px`,left:`${t.x}px`,top:`${t.y}px`}}))))]}};zi.style="";let Vi=class{constructor(e){t(this,e),this.movementSpeed=15,this.el=null,this.orientation=0,this.size=60,this.x=0,this.y=0,this.opacity="1",this.isBlocked=!1}onKeydown(t){"ArrowUp"!==t.key||this.isBlocked&&0===this.orientation?"ArrowDown"!==t.key||this.isBlocked&&180===this.orientation?"ArrowLeft"!==t.key||this.isBlocked&&270===this.orientation?"ArrowRight"!==t.key||this.isBlocked&&90===this.orientation?"1"===t.key?this.fire():"z"===t.key&&this.special():(this.setOrientation(90),this.move(this.movementSpeed,0)):(this.setOrientation(270),this.move(-this.movementSpeed,0)):(this.setOrientation(180),this.move(0,this.movementSpeed)):(this.setOrientation(0),this.move(0,-this.movementSpeed))}setOrientation(t){return this.orientation=t,this.el.style.transform=`rotate(${t}deg)`,this}move(t,e){return this.x=this.x+t,this.y=this.y+e,this.isBlocked=!1,this}fire(){const t=document.createElement("span");t.classList.add("bullet","bullet-stick"),setTimeout((()=>{let e;0===this.orientation?e="move-up":180===this.orientation?e="move-down":270===this.orientation?e="move-left":90===this.orientation&&(e="move-right"),t.classList.add(e)}),0),t.style.top=`${this.y}px`,t.style.left=`${this.x}px`,document.querySelector(".map").append(t)}special(){const t=document.createElement("span");t.classList.add("spec"),setTimeout((()=>{let e;0===this.orientation?e="move-up":180===this.orientation?e="move-down":90===this.orientation?e="move-right":270===this.orientation&&(e="move-left"),t.classList.add(e)}),0),t.style.top=`${this.y}px`,t.style.left=`${this.x}px`,document.querySelector(".map").append(t)}async isColliding(t){this.isBlocked=t}async isHit(){this.opacity="0",setTimeout((()=>{this.opacity="1"}),400)}render(){return e("span",{ref:t=>this.el=t,style:{opacity:this.opacity,position:"absolute",transition:"0.3s linear all",background:"url('https://forum.cosmoteer.net/assets/files/2020-03-07/1583581655-976459-alien-tank-1.gif') center center / contain no-repeat",height:"60px",width:"60px",left:`${this.x}px`,top:`${this.y}px`}})}};Vi.style=":host{display:block}.bullet.bullet-stick{background:red}";let Bi=class{constructor(e){t(this,e),this.movementSpeed=15,this.el=null,this.orientation=0,this.x=0,this.y=0,this.size=60,this.opacity="1",this.isBlocked=!1}onKeydown(t){"w"!==t.key||this.isBlocked&&0===this.orientation?"s"!==t.key||this.isBlocked&&180===this.orientation?"a"!==t.key||this.isBlocked&&270===this.orientation?"d"!==t.key||this.isBlocked&&90===this.orientation?" "===t.key?this.fire():"q"===t.key&&this.special():(this.setOrientation(90),this.move(this.movementSpeed,0)):(this.setOrientation(270),this.move(-this.movementSpeed,0)):(this.setOrientation(180),this.move(0,this.movementSpeed)):(this.setOrientation(0),this.move(0,-this.movementSpeed))}setOrientation(t){return this.orientation=t,this.el.style.transform=`rotate(${t}deg)`,this}move(t,e){return this.x=this.x+t,this.y=this.y+e,this.isBlocked=!1,this}fire(){const t=document.createElement("span");t.classList.add("bullet","bullet-1"),setTimeout((()=>{let e;0===this.orientation?e="move-up":180===this.orientation?e="move-down":90===this.orientation?e="move-right":270===this.orientation&&(e="move-left"),t.classList.add(e)}),0),t.style.top=`${this.y}px`,t.style.left=`${this.x}px`,document.querySelector(".map").append(t)}special(){const t=document.createElement("span");t.classList.add("spec"),setTimeout((()=>{let e;0===this.orientation?e="move-up":180===this.orientation?e="move-down":90===this.orientation?e="move-right":270===this.orientation&&(e="move-left"),t.classList.add(e)}),0),t.style.top=`${this.y}px`,t.style.left=`${this.x}px`,document.querySelector(".map").append(t)}async isColliding(t){this.isBlocked=t}async isHit(){this.opacity="0",setTimeout((()=>{this.opacity="1"}),400)}render(){return e("span",{ref:t=>this.el=t,style:{opacity:this.opacity,position:"absolute",transition:".3s linear all",background:"url('http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/3ec6486c3f26301.png') center center / cover no-repeat",backgroundSize:"300%",height:"60px",width:"60px",left:`${this.x}px`,top:`${this.y}px`}})}};Bi.style=":host{display:block}.bullet{transition:all ease-out 0.5s;position:absolute;top:0;left:0;display:block;height:10px;width:10px;border-radius:100%;background:blue}.spec{transition:all ease-out 1.2s;position:absolute;top:0;left:0;display:block;height:50px;width:50px;border-radius:100%;background:red}.map{position:relative;display:block;margin:0 auto;height:600px;width:800px;background-color:grey;overflow:hidden}.scoreboard{padding:30px;font-size:62px;display:flex;margin:0 auto;justify-content:space-between}.scoreboard span:first-of-type{color:red}.scoreboard span:last-of-type{color:blue}.obstacle{position:absolute;top:0;left:0;display:block;background-color:rgba(165, 42, 42, 0.363)}.logins{display:flex;margin:0 auto;justify-content:space-between}";export{zi as page_home,Vi as stick_tank,Bi as tank_cj}