if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let a={};const t=e=>i(e,c),d={module:{uri:c},exports:a,require:t};s[c]=Promise.all(n.map((e=>d[e]||t(e)))).then((e=>(r(...e),a)))}}define(["./workbox-dffe52ba"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/images/450.jpg",revision:"454ec59230cda0e38b80c9c5f7a2ed83"},{url:"assets/images/empty-list.png",revision:"36f9ce6791c01c798d83d771f5a22723"},{url:"assets/images/girlie.png",revision:"f2f565cac055668370bb3407020d9bd0"},{url:"assets/images/icon-192.png",revision:"45f0e9513ee33bdb3ff8879f7c2fc268"},{url:"assets/images/icon-384.png",revision:"3cf251a83522d13e74d40f753556f2a0"},{url:"assets/images/icon-512.png",revision:"69cea7d072d7e42f2bad8b6b1a562b09"},{url:"assets/images/login.png",revision:"865a442063a35e035a44c11815d497f6"},{url:"assets/images/tip-2.png",revision:"3c04104c681d7c13f027440b918821dc"},{url:"assets/images/tip-3.png",revision:"e643f697dc80c75a9dbdff84c5cb3074"},{url:"assets/images/tip-one.png",revision:"54063c7ddf80a42c1ca8f798fa20322e"},{url:"css/animate.min.css",revision:"b3d5b75898f1ed885c7d2b538faa8b81"},{url:"css/style.css",revision:"831a7de72f31941714e85b443467439c"},{url:"index.html",revision:"91551a9d984d75b1649efaa926d7d745"},{url:"scripts/dexie.min.js",revision:"1e4a91f5cf779986845a7281859d8355"},{url:"scripts/main.js",revision:"83d6cc8e9eb5131db45fc1f8df75e4b4"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
