(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1dea9f4a"],{"057f":function(t,e,n){var i=n("fc6a"),r=n("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return r(t)}catch(e){return a.slice()}};t.exports.f=function(t){return a&&"[object Window]"==o.call(t)?s(t):r(i(t))}},"0587":function(t,e,n){},"159b":function(t,e,n){var i=n("da84"),r=n("fdbc"),o=n("17c2"),a=n("9112");for(var s in r){var c=i[s],u=c&&c.prototype;if(u&&u.forEach!==o)try{a(u,"forEach",o)}catch(f){u.forEach=o}}},"17c2":function(t,e,n){"use strict";var i=n("b727").forEach,r=n("a640"),o=n("ae40"),a=r("forEach"),s=o("forEach");t.exports=a&&s?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"1aaa":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"roulette bg-rouletteBg py-4 py-md-5"},[n("div",{staticClass:"container px-0"},[n("div",{staticClass:"circle"},[n("div",{ref:"hand",staticClass:"hand",style:{transform:"rotate("+t.pointerRotate+"deg)"}},[n("div",{staticClass:"pointer"})]),n("div",{staticClass:"startBtn"},[n("button",{staticClass:"btn btn-danger",on:{click:t.gameStart}},[t._v("開始")])]),t._l(t.lunchList,(function(e,i){return n("div",{key:e.text,staticClass:"fan",style:{transform:"rotate("+360/t.lunchList.length*i+"deg)"}},[n("div",{staticClass:"inner",style:{transform:"rotate("+360/t.lunchList.length+"deg)",background:"linear-gradient(to top, "+t.getHSL[0][i]+", "+t.getHSL[1][i]+")"}})])}))],2),n("div",{staticClass:"content"},t._l(t.lunchList,(function(e,i){return n("div",{key:e.text,staticClass:"text",style:{transform:"rotate("+(360/t.lunchList.length*i+180/t.lunchList.length)+"deg)"}},[n("h3",[t._v(t._s(e.text))]),n("div",{staticClass:"qtyLight bg-light"},[n("div",{staticClass:"light w-100 h-100",style:{opacity:""+.2*e.qty}}),n("h5",{staticClass:"m-0"},[t._v(t._s(e.qty))])])])})),0)]),n("rouletteList",{directives:[{name:"show",rawName:"v-show",value:t.editIsShow,expression:"editIsShow"}]}),n("winning",{directives:[{name:"show",rawName:"v-show",value:t.winningIsShow,expression:"winningIsShow"}]})],1)},r=[];n("99af"),n("c740"),n("4160"),n("159b"),n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("b64b");function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"roulletteList"},[n("div",{staticClass:"bg-light animate__animated animate__fadeInDown animate__faster py-4"},[n("h2",{staticClass:"text-center mb-3"},[t._v("我的清單")]),n("div",{staticClass:"input-group w-75 mx-auto mb-4"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newItem,expression:"newItem"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.newItem},on:{input:function(e){e.target.composing||(t.newItem=e.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("b-button",{attrs:{variant:"myorg text-light"},on:{click:t.addlist}},[t._v("新增")])],1)]),n("table",{staticClass:"tableList table d-block overflow-auto mx-auto mb-4"},t._l(t.lunchList,(function(e,i){return n("tr",{key:e.text},[n("td",{staticClass:"align-middle",attrs:{width:"120px"}},[n("h4",{staticClass:"text-break my-2"},[t._v(t._s(e.text))])]),n("td",{staticClass:"align-middle"},[n("b-form-rating",{staticClass:"bg-light",attrs:{id:"rating-inline",variant:"star",stars:"5",inline:""},model:{value:e.qty,callback:function(n){t.$set(e,"qty",n)},expression:"item.qty"}})],1),n("td",{staticClass:"align-middle"},[n("b-button",{staticClass:"text-secondary d-flex",attrs:{variant:"none"},on:{click:function(e){return t.delItem(i)}}},[n("b-icon",{attrs:{icon:"x"}}),n("h5",{staticClass:"d-none d-md-block m-0"},[t._v("刪除")])],1)],1)])})),0),n("div",{staticClass:"text-center"},[n("b-button",{staticClass:"px-4",attrs:{variant:"myorg text-light"},on:{click:t.close}},[t._v("OK!")])],1)])]),n("div",{staticClass:"bgDark"})])},u=[],f=n("2f62"),l={computed:s({},Object(f["b"])(["lunchList"])),data:function(){return{newItem:"",listQty:"3"}},methods:{close:function(){this.$store.commit("toggleEdit")},addlist:function(){var t={text:this.newItem,qty:"3"};this.$store.commit("addList",t),this.newItem=""},delItem:function(t){this.$store.commit("delItem",t)}},created:function(){}},d=l,h=(n("c580"),n("2877")),b=Object(h["a"])(d,c,u,!1,null,null,null),g=b.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"winning"},[n("div",{staticClass:"bg-light animate__animated animate__tada p-4"},[n("h3",[t._v(t._s(t.winningItem.text))]),n("button",{on:{click:t.close}},[t._v("確定")])])]),n("div",{staticClass:"bgDark"})])},v=[],p={computed:s({},Object(f["b"])(["winningItem"])),data:function(){return{}},methods:{close:function(){this.$store.commit("toggleShowWinning")}}},y=p,w=(n("a365"),Object(h["a"])(y,m,v,!1,null,null,null)),S=w.exports,L={components:{rouletteList:g,winning:S},computed:s(s({},Object(f["b"])(["lunchList","editIsShow","winningIsShow"])),{},{prizePool:function(){var t=[];return this.lunchList.forEach((function(e){for(var n=0;n<e.qty;n++)t.push(e)})),t},getHSL:function(){var t=[],e=[];return this.lunchList.forEach((function(n){var i=Math.random(),r=Math.random(),o=Math.random();t.push("hsl(".concat(360*i,",").concat(20+70*r,"%,").concat(85+10*o,"%)")),e.push("hsl(".concat(360*i,",").concat(20+60*r,"%,").concat(55+10*o,"%)"))})),[t,e]}}),data:function(){return{pointerRotate:"0"}},methods:{gameStart:function(){var t=this,e=~~(Math.random()*this.prizePool.length);this.$store.commit("sendWinningItem",this.prizePool[e]);var n=this.lunchList.findIndex((function(n){return n==t.prizePool[e]}));this.$refs.hand.style.transition="transform ".concat(Math.floor(4*Math.random())+8,"s"),this.pointerRotate=360/this.lunchList.length*n+180/this.lunchList.length+5400},spinning:function(){var t=this;this.pointerRotate&&(this.$refs.hand.style.transition="none",setTimeout((function(){t.$store.commit("toggleShowWinning"),t.pointerRotate="0"}),500))}},mounted:function(){this.$refs.hand.addEventListener("transitionend",this.spinning)},beforeDestroy:function(){this.$refs.hand.removeEventListener("transitionend",this.spinning)}},O=L,x=(n("54e3"),Object(h["a"])(O,i,r,!1,null,"35c9495c",null));e["default"]=x.exports},4160:function(t,e,n){"use strict";var i=n("23e7"),r=n("17c2");i({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"4de4":function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").filter,o=n("1dde"),a=n("ae40"),s=o("filter"),c=a("filter");i({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"54e3":function(t,e,n){"use strict";n("6202")},6202:function(t,e,n){},"746f":function(t,e,n){var i=n("428f"),r=n("5135"),o=n("e538"),a=n("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});r(e,t)||a(e,t,{value:o.f(t)})}},"99af":function(t,e,n){"use strict";var i=n("23e7"),r=n("d039"),o=n("e8b5"),a=n("861d"),s=n("7b0b"),c=n("50c4"),u=n("8418"),f=n("65f0"),l=n("1dde"),d=n("b622"),h=n("2d00"),b=d("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",v=h>=51||!r((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),p=l("concat"),y=function(t){if(!a(t))return!1;var e=t[b];return void 0!==e?!!e:o(t)},w=!v||!p;i({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,i,r,o,a=s(this),l=f(a,0),d=0;for(e=-1,i=arguments.length;e<i;e++)if(o=-1===e?a:arguments[e],y(o)){if(r=c(o.length),d+r>g)throw TypeError(m);for(n=0;n<r;n++,d++)n in o&&u(l,d,o[n])}else{if(d>=g)throw TypeError(m);u(l,d++,o)}return l.length=d,l}})},a365:function(t,e,n){"use strict";n("0587")},a4d3:function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),o=n("d066"),a=n("c430"),s=n("83ab"),c=n("4930"),u=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),h=n("861d"),b=n("825a"),g=n("7b0b"),m=n("fc6a"),v=n("c04e"),p=n("5c6c"),y=n("7c73"),w=n("df75"),S=n("241c"),L=n("057f"),O=n("7418"),x=n("06cf"),C=n("9bf2"),_=n("d1e7"),j=n("9112"),P=n("6eeb"),E=n("5692"),I=n("f772"),k=n("d012"),T=n("90e3"),M=n("b622"),D=n("e538"),$=n("746f"),N=n("d44e"),q=n("69f3"),R=n("b727").forEach,A=I("hidden"),H="Symbol",V="prototype",G=M("toPrimitive"),z=q.set,F=q.getterFor(H),J=Object[V],W=r.Symbol,B=o("JSON","stringify"),Q=x.f,K=C.f,U=L.f,X=_.f,Y=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),nt=E("wks"),it=r.QObject,rt=!it||!it[V]||!it[V].findChild,ot=s&&f((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var i=Q(J,e);i&&delete J[e],K(t,e,n),i&&t!==J&&K(J,e,i)}:K,at=function(t,e){var n=Y[t]=y(W[V]);return z(n,{type:H,tag:t,description:e}),s||(n.description=e),n},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},ct=function(t,e,n){t===J&&ct(Z,e,n),b(t);var i=v(e,!0);return b(n),l(Y,i)?(n.enumerable?(l(t,A)&&t[A][i]&&(t[A][i]=!1),n=y(n,{enumerable:p(0,!1)})):(l(t,A)||K(t,A,p(1,{})),t[A][i]=!0),ot(t,i,n)):K(t,i,n)},ut=function(t,e){b(t);var n=m(e),i=w(n).concat(bt(n));return R(i,(function(e){s&&!lt.call(n,e)||ct(t,e,n[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=v(t,!0),n=X.call(this,e);return!(this===J&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,A)&&this[A][e])||n)},dt=function(t,e){var n=m(t),i=v(e,!0);if(n!==J||!l(Y,i)||l(Z,i)){var r=Q(n,i);return!r||!l(Y,i)||l(n,A)&&n[A][i]||(r.enumerable=!0),r}},ht=function(t){var e=U(m(t)),n=[];return R(e,(function(t){l(Y,t)||l(k,t)||n.push(t)})),n},bt=function(t){var e=t===J,n=U(e?Z:m(t)),i=[];return R(n,(function(t){!l(Y,t)||e&&!l(J,t)||i.push(Y[t])})),i};if(c||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),n=function(t){this===J&&n.call(Z,t),l(this,A)&&l(this[A],e)&&(this[A][e]=!1),ot(this,e,p(1,t))};return s&&rt&&ot(J,e,{configurable:!0,set:n}),at(e,t)},P(W[V],"toString",(function(){return F(this).tag})),P(W,"withoutSetter",(function(t){return at(T(t),t)})),_.f=lt,C.f=ct,x.f=dt,S.f=L.f=ht,O.f=bt,D.f=function(t){return at(M(t),t)},s&&(K(W[V],"description",{configurable:!0,get:function(){return F(this).description}}),a||P(J,"propertyIsEnumerable",lt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:W}),R(w(nt),(function(t){$(t)})),i({target:H,stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=W(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:dt}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ht,getOwnPropertySymbols:bt}),i({target:"Object",stat:!0,forced:f((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(g(t))}}),B){var gt=!c||f((function(){var t=W();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}));i({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,n){var i,r=[t],o=1;while(arguments.length>o)r.push(arguments[o++]);if(i=e,(h(e)||void 0!==t)&&!st(t))return d(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!st(e))return e}),r[1]=e,B.apply(null,r)}})}W[V][G]||j(W[V],G,W[V].valueOf),N(W,H),k[A]=!0},a640:function(t,e,n){"use strict";var i=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&i((function(){n.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,n){var i=n("23e7"),r=n("7b0b"),o=n("df75"),a=n("d039"),s=a((function(){o(1)}));i({target:"Object",stat:!0,forced:s},{keys:function(t){return o(r(t))}})},b727:function(t,e,n){var i=n("0366"),r=n("44ad"),o=n("7b0b"),a=n("50c4"),s=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l;return function(h,b,g,m){for(var v,p,y=o(h),w=r(y),S=i(b,g,3),L=a(w.length),O=0,x=m||s,C=e?x(h,L):n?x(h,0):void 0;L>O;O++)if((d||O in w)&&(v=w[O],p=S(v,O,y),t))if(e)C[O]=p;else if(p)switch(t){case 3:return!0;case 5:return v;case 6:return O;case 2:c.call(C,v)}else if(f)return!1;return l?-1:u||f?f:C}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c580:function(t,e,n){"use strict";n("ea5a")},c740:function(t,e,n){"use strict";var i=n("23e7"),r=n("b727").findIndex,o=n("44d2"),a=n("ae40"),s="findIndex",c=!0,u=a(s);s in[]&&Array(1)[s]((function(){c=!1})),i({target:"Array",proto:!0,forced:c||!u},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),o(s)},dbb4:function(t,e,n){var i=n("23e7"),r=n("83ab"),o=n("56ef"),a=n("fc6a"),s=n("06cf"),c=n("8418");i({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,n,i=a(t),r=s.f,u=o(i),f={},l=0;while(u.length>l)n=r(i,e=u[l++]),void 0!==n&&c(f,e,n);return f}})},e439:function(t,e,n){var i=n("23e7"),r=n("d039"),o=n("fc6a"),a=n("06cf").f,s=n("83ab"),c=r((function(){a(1)})),u=!s||c;i({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},e538:function(t,e,n){var i=n("b622");e.f=i},ea5a:function(t,e,n){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-1dea9f4a.0786634b.js.map