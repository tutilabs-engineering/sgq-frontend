(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d8be360"],{"1dde":function(e,t,r){var n=r("d039"),a=r("b622"),c=r("2d00"),o=a("species");e.exports=function(e){return c>=51||!n((function(){var t=[],r=t.constructor={};return r[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},8418:function(e,t,r){"use strict";var n=r("a04b"),a=r("9bf2"),c=r("5c6c");e.exports=function(e,t,r){var o=n(t);o in e?a.f(e,o,c(0,r)):e[o]=r}},"99af":function(e,t,r){"use strict";var n=r("23e7"),a=r("d039"),c=r("e8b5"),o=r("861d"),i=r("7b0b"),u=r("50c4"),s=r("8418"),l=r("65f0"),p=r("1dde"),d=r("b622"),f=r("2d00"),b=d("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",O=f>=51||!a((function(){var e=[];return e[b]=!1,e.concat()[0]!==e})),v=p("concat"),j=function(e){if(!o(e))return!1;var t=e[b];return void 0!==t?!!t:c(e)},g=!O||!v;n({target:"Array",proto:!0,forced:g},{concat:function(e){var t,r,n,a,c,o=i(this),p=l(o,0),d=0;for(t=-1,n=arguments.length;t<n;t++)if(c=-1===t?o:arguments[t],j(c)){if(a=u(c.length),d+a>h)throw TypeError(m);for(r=0;r<a;r++,d++)r in c&&s(p,d,c[r])}else{if(d>=h)throw TypeError(m);s(p,d++,c)}return p.length=d,p}})},a245:function(e,t,r){},a7fa:function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23"),a=function(e){return Object(n["pushScopeId"])("data-v-6e117ed0"),e=e(),Object(n["popScopeId"])(),e},c={key:0,className:"tableContent"},o=a((function(){return Object(n["createElementVNode"])("legend",null,"Análise de Startup - Reprovadas",-1)})),i={cellpadding:"0",cellspacing:"0"},u=a((function(){return Object(n["createElementVNode"])("thead",null,[Object(n["createElementVNode"])("th",null,"Cod. OP"),Object(n["createElementVNode"])("th",null,"Cod. Cliente"),Object(n["createElementVNode"])("th",null,"Máquina"),Object(n["createElementVNode"])("th",null,"Data"),Object(n["createElementVNode"])("th",null,"Inspetor"),Object(n["createElementVNode"])("th",null,"Opções")],-1)})),s=a((function(){return Object(n["createElementVNode"])("td",{style:{display:"none"}},null,-1)})),l={"data-title":"Cod.OP"},p={"data-title":"Cod. Cliente"},d={"data-title":"Maquina"},f={"data-title":"Data"},b={"data-title":"Técnico"},h=a((function(){return Object(n["createElementVNode"])("td",{class:"lastTd","data-title":"Opcoes"},[Object(n["createElementVNode"])("div",{class:"opcoes"},[Object(n["createElementVNode"])("button",{className:"btn_visualizar"},[Object(n["createElementVNode"])("i",{class:"fas fa-eye"}),Object(n["createTextVNode"])(" Visualizar ")])])],-1)})),m={key:1,class:"tableContent"},O={class:"legenda-warning"},v=Object(n["createTextVNode"])("Não há Startups para serem listadas"),j=a((function(){return Object(n["createElementVNode"])("br",null,null,-1)}));function g(e,t,r,a,g,y){var w=this;return!0===g.isOp?(Object(n["openBlock"])(),Object(n["createElementBlock"])("fieldset",c,[o,Object(n["createElementVNode"])("table",i,[u,Object(n["createElementVNode"])("tbody",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(g.listDisapproved,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("tr",{key:e.id},[s,Object(n["createElementVNode"])("td",l,Object(n["toDisplayString"])(e.op.code_product),1),Object(n["createElementVNode"])("td",p,Object(n["toDisplayString"])(e.op.code_client),1),Object(n["createElementVNode"])("td",d,Object(n["toDisplayString"])(e.op.machine),1),Object(n["createElementVNode"])("td",f,Object(n["toDisplayString"])(y.formatDate(e.day)),1),Object(n["createElementVNode"])("td",b,Object(n["toDisplayString"])(e.userThatCreate.name),1),h])})),128))])])])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("fieldset",m,[Object(n["createElementVNode"])("h2",O,[v,j,Object(n["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(){return w.$router.push({name:"Startup"})}),class:"btn-back"},"Voltar")])]))}var y=r("1da1"),w=(r("96cf"),r("fb6a"),r("99af"),r("b20f")),E={setup:function(){},name:"Table",props:["titleTable","iconeAdicionar","iconeFile","iconeEdit"],data:function(){return{listDisapproved:[],isOp:!1}},methods:{formatDate:function(e){return e=e.slice(0,-14),this.year=e.slice(0,-6),this.month=e.slice(5,-3),this.day=e.slice(-2),"".concat(this.day,"/").concat(this.month,"/").concat(this.year)},verifyOP:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(t),0!=t){e.next=5;break}return e.abrupt("return",!1);case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},created:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$store.commit("$SETISLOADING"),e.next=3,w["a"].listCountOfStartupsByStatus();case 3:return t=e.sent,this.listDisapproved=t.data.reportStartups.disapproved,e.next=7,this.verifyOP(this.listDisapproved.length);case 7:this.isOp=e.sent,this.$store.commit("$SETISLOADING");case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},N=(r("f7de"),r("6b0d")),S=r.n(N);const V=S()(E,[["render",g],["__scopeId","data-v-6e117ed0"]]);t["default"]=V},b20f:function(e,t,r){"use strict";var n=r("1da1"),a=(r("96cf"),r("bc3a")),c=r.n(a),o=r("e4f4");t["a"]={listDataByCodeOp:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("http://192.168.7.212:3300/api/v1/sap/tutilabs/ops/".concat(t));case 2:return r=e.sent,console.log(r),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),listAllStartups:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["http"].get("/reportStartup");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),listAllDefaultQuestions:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",o["http"].get("/reportStartup/defaultQuestions"));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),createNewStartup:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",o["http"].post("/reportStartup/",t));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),fillReportStartup:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",o["http"].post("/reportStartup/fill/".concat(t),r));case 1:case"end":return e.stop()}}),e)})));function t(t,r){return e.apply(this,arguments)}return t}(),listCountOfStartupsByStatus:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",o["http"].get("/reportStartup/management/count"));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),findReportStartupById:function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",o["http"].get("/reportStartup/".concat(t)));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}},f7de:function(e,t,r){"use strict";r("a245")},fb6a:function(e,t,r){"use strict";var n=r("23e7"),a=r("861d"),c=r("e8b5"),o=r("23cb"),i=r("50c4"),u=r("fc6a"),s=r("8418"),l=r("b622"),p=r("1dde"),d=p("slice"),f=l("species"),b=[].slice,h=Math.max;n({target:"Array",proto:!0,forced:!d},{slice:function(e,t){var r,n,l,p=u(this),d=i(p.length),m=o(e,d),O=o(void 0===t?d:t,d);if(c(p)&&(r=p.constructor,"function"!=typeof r||r!==Array&&!c(r.prototype)?a(r)&&(r=r[f],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return b.call(p,m,O);for(n=new(void 0===r?Array:r)(h(O-m,0)),l=0;m<O;m++,l++)m in p&&s(n,l,p[m]);return n.length=l,n}})}}]);
//# sourceMappingURL=chunk-2d8be360.bbc8a988.js.map