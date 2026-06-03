import{r as a}from"./index.C_gbJESl.js";function u(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function d(...e){return t=>{let r=!1;const n=e.map(s=>{const o=u(s,t);return!r&&typeof o=="function"&&(r=!0),o});if(r)return()=>{for(let s=0;s<n.length;s++){const o=n[s];typeof o=="function"?o():u(e[s],null)}}}}function k(...e){return a.useCallback(d(...e),e)}/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,r,n)=>n?n.toUpperCase():r.toLowerCase()),i=e=>{const t=w(e);return t.charAt(0).toUpperCase()+t.slice(1)},l=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim(),g=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=a.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:s="",children:o,iconNode:p,...c},f)=>a.createElement("svg",{ref:f,...y,width:t,height:t,stroke:e,strokeWidth:n?Number(r)*24/Number(t):r,className:l("lucide",s),...!o&&!g(c)&&{"aria-hidden":"true"},...c},[...p.map(([m,C])=>a.createElement(m,C)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=(e,t)=>{const r=a.forwardRef(({className:n,...s},o)=>a.createElement(A,{ref:o,iconNode:t,className:l(`lucide-${h(i(e))}`,`lucide-${e}`,n),...s}));return r.displayName=i(e),r};export{x as a,d as c,k as u};
