(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45ca215a"],{"0fee":function(e,t,n){"use strict";n("bd96")},1586:function(e,t,n){},"19b0":function(e,t,n){"use strict";n("1586")},"1dde":function(e,t,n){var r=n("d039"),a=n("b622"),c=n("2d00"),o=a("species");e.exports=function(e){return c>=51||!r((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"49db":function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),a=function(e){return Object(r["pushScopeId"])("data-v-4be54c56"),e=e(),Object(r["popScopeId"])(),e},c={key:0,className:"tableContent"},o=a((function(){return Object(r["createElementVNode"])("legend",null,"Análise de Startup - Aprovadas",-1)})),i={cellpadding:"0",cellspacing:"0"},l=a((function(){return Object(r["createElementVNode"])("thead",null,[Object(r["createElementVNode"])("th",null,"Cod. OP"),Object(r["createElementVNode"])("th",null,"Cod. Cliente"),Object(r["createElementVNode"])("th",null,"Máquina"),Object(r["createElementVNode"])("th",null,"Data"),Object(r["createElementVNode"])("th",null,"Inspetor"),Object(r["createElementVNode"])("th",null,"Opções")],-1)})),u=a((function(){return Object(r["createElementVNode"])("td",{style:{display:"none"}},null,-1)})),d={"data-title":"Cod.OP"},s={"data-title":"Cod. Cliente"},p={"data-title":"Maquina"},b={"data-title":"Data"},f={"data-title":"Técnico"},m={class:"lastTd","data-title":"Opcoes"},O={className:"opcoes"},h=a((function(){return Object(r["createElementVNode"])("i",{class:"fas fa-file-alt"},null,-1)})),v={key:1,class:"tableContent"},j={class:"legenda-warning"},N=Object(r["createTextVNode"])("Não há Startups para serem listadas"),E=a((function(){return Object(r["createElementVNode"])("br",null,null,-1)}));function V(e,t,n,a,V,g){var y=this,w=Object(r["resolveComponent"])("ModalNovaOp");return!0===V.isOp?(Object(r["openBlock"])(),Object(r["createElementBlock"])("fieldset",c,[o,Object(r["createElementVNode"])("table",i,[l,Object(r["createElementVNode"])("tbody",null,[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(V.listAproveds,(function(e){return Object(r["openBlock"])(),Object(r["createElementBlock"])("tr",{key:e.id},[u,Object(r["createElementVNode"])("td",d,Object(r["toDisplayString"])(e.op.code_product),1),Object(r["createElementVNode"])("td",s,Object(r["toDisplayString"])(e.op.code_client),1),Object(r["createElementVNode"])("td",p,Object(r["toDisplayString"])(e.op.machine),1),Object(r["createElementVNode"])("td",b,Object(r["toDisplayString"])(g.formatDate(e.day)),1),Object(r["createElementVNode"])("td",f,Object(r["toDisplayString"])(e.userThatCreate.name),1),Object(r["createElementVNode"])("td",m,[Object(r["createElementVNode"])("div",O,[Object(r["createVNode"])(w,{modalNovaOp:V.modalNovaOp,onOpenModalNovaOp:g.openModalNovaOp},null,8,["modalNovaOp","onOpenModalNovaOp"]),h])])])})),128))])])])):(Object(r["openBlock"])(),Object(r["createElementBlock"])("fieldset",v,[Object(r["createElementVNode"])("h2",j,[N,E,Object(r["createElementVNode"])("button",{onClick:t[0]||(t[0]=function(){return y.$router.push({name:"Startup"})}),class:"btn-back"},"Voltar")])]))}var g=n("1da1"),y=(n("96cf"),n("fb6a"),n("99af"),n("b20f")),w=function(e){return Object(r["pushScopeId"])("data-v-62d2b71d"),e=e(),Object(r["popScopeId"])(),e},k={key:0},S={class:"modal_mask"},x={class:"modal_content"},C={class:"modal_header"},R={class:"title_modal"},D=w((function(){return Object(r["createElementVNode"])("h4",null,"Adicionar nova OP",-1)})),M={class:"content-modal-op"},B={class:"info-modal-op"},I={class:"input"},_=w((function(){return Object(r["createElementVNode"])("label",{for:"op"},"Cód. Startup",-1)})),T=w((function(){return Object(r["createElementVNode"])("div",{class:"input"},[Object(r["createElementVNode"])("label",{for:"op"},"Máquina"),Object(r["createElementVNode"])("input",{type:"text",name:"client",id:"op",placeholder:"Digite o código OP"})],-1)})),A={class:"input"},P=w((function(){return Object(r["createElementVNode"])("label",{for:"op"},"Cód. Produto",-1)})),$={class:"input"},q=w((function(){return Object(r["createElementVNode"])("label",{for:"op"},"Nova OP",-1)})),L={class:"save-btn"},U=w((function(){return Object(r["createElementVNode"])("button",{class:"btn btn-save"},"salvar",-1)})),z=w((function(){return Object(r["createElementVNode"])("div",{class:"historic-op"},[Object(r["createElementVNode"])("span",null,"Histórico de Op's desta startup"),Object(r["createElementVNode"])("li",null,[Object(r["createElementVNode"])("i",{class:"fa fa-calendar-check"}),Object(r["createTextVNode"])(),Object(r["createElementVNode"])("span",null,"123-234-200-4322-01")]),Object(r["createElementVNode"])("li",null,[Object(r["createElementVNode"])("i",{class:"fa fa-calendar-check"}),Object(r["createTextVNode"])(),Object(r["createElementVNode"])("span",null,"123-234-200-4322-02")])],-1)}));function F(e,t,n,a,c,o){return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[n.modalNovaOp?(Object(r["openBlock"])(),Object(r["createElementBlock"])("div",k,[Object(r["createVNode"])(r["Transition"],{name:"model"},{default:Object(r["withCtx"])((function(){return[Object(r["createElementVNode"])("div",S,[Object(r["createElementVNode"])("div",x,[Object(r["createElementVNode"])("div",C,[Object(r["createElementVNode"])("div",R,[D,Object(r["createElementVNode"])("input",{type:"button",value:"X",colorButton:"red",onClick:t[0]||(t[0]=function(t){return e.$emit("openModalNovaOp")})})])]),Object(r["createElementVNode"])("div",M,[Object(r["createElementVNode"])("div",B,[Object(r["createElementVNode"])("div",I,[_,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",name:"client",id:"op",placeholder:"Digite o código OP","onUpdate:modelValue":t[1]||(t[1]=function(t){return e.code_op=t})},null,512),[[r["vModelText"],e.code_op]])]),T,Object(r["createElementVNode"])("div",A,[P,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",name:"client",id:"op",placeholder:"Digite o código OP","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.headerInfo.codeProduct=e})},null,512),[[r["vModelText"],c.headerInfo.codeProduct,void 0,{lazy:!0}]])]),Object(r["createElementVNode"])("div",$,[q,Object(r["withDirectives"])(Object(r["createElementVNode"])("input",{type:"text",name:"client",id:"op",placeholder:"Digite o código OP","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.code_op=t})},null,512),[[r["vModelText"],e.code_op,void 0,{lazy:!0}]])]),Object(r["createElementVNode"])("div",L,[Object(r["createElementVNode"])("button",{class:"btn btn-cancel",onClick:t[4]||(t[4]=function(t){return e.$emit("openModalNovaOp")})},"cancelar"),U])]),z])])])]})),_:1})])):Object(r["createCommentVNode"])("",!0),Object(r["createElementVNode"])("i",{class:"fas fa-plus-circle",onClick:t[5]||(t[5]=function(t){return e.$emit("openModalNovaOp")})})],64)}n("a9e3");var G={components:{},name:"Modal",emits:["openModalNovaOp"],data:function(){return{headerInfo:{client:"",codeClient:"",product:"",codeProduct:"",quantity:"",date:"",startTime:"",endTime:""}}},props:{titleModal:String,id:Number,modalNovaOp:String},methods:{ReturnCodeOp:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y["a"].listDataByCodeOp(t);case 2:n=e.sent,r=n.data.data_op,this.headerInfo.client=r.client,this.headerInfo.codeClient=r.code_client,this.headerInfo.product=r.product,this.headerInfo.codeProduct=r.code_product;case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},J=(n("19b0"),n("6b0d")),Q=n.n(J);const H=Q()(G,[["render",F],["__scopeId","data-v-62d2b71d"]]);var X=H,K={components:{ModalNovaOp:X},emits:["modalNovaOp"],setup:function(){},name:"Table",methods:{openModalNovaOp:function(){this.modalNovaOp=!this.modalNovaOp},formatDate:function(e){return e=e.slice(0,-14),this.year=e.slice(0,-6),this.month=e.slice(5,-3),this.day=e.slice(-2),"".concat(this.day,"/").concat(this.month,"/").concat(this.year)},verifyOP:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(t),0!=t){e.next=5;break}return e.abrupt("return",!1);case 5:return e.abrupt("return",!0);case 6:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()},created:function(){var e=Object(g["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.$store.commit("$SETISLOADING"),e.next=3,y["a"].listCountOfStartupsByStatus();case 3:return t=e.sent,this.listAproveds=t.data.reportStartups.approved,e.next=7,this.verifyOP(this.listAproveds.length);case 7:this.isOp=e.sent,this.$store.commit("$SETISLOADING");case 9:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),data:function(){return{listAproveds:[],modalNovaOp:!1,isOp:!1}}};n("0fee");const W=Q()(K,[["render",V],["__scopeId","data-v-4be54c56"]]);t["default"]=W},8418:function(e,t,n){"use strict";var r=n("a04b"),a=n("9bf2"),c=n("5c6c");e.exports=function(e,t,n){var o=r(t);o in e?a.f(e,o,c(0,n)):e[o]=n}},"99af":function(e,t,n){"use strict";var r=n("23e7"),a=n("d039"),c=n("e8b5"),o=n("861d"),i=n("7b0b"),l=n("50c4"),u=n("8418"),d=n("65f0"),s=n("1dde"),p=n("b622"),b=n("2d00"),f=p("isConcatSpreadable"),m=9007199254740991,O="Maximum allowed index exceeded",h=b>=51||!a((function(){var e=[];return e[f]=!1,e.concat()[0]!==e})),v=s("concat"),j=function(e){if(!o(e))return!1;var t=e[f];return void 0!==t?!!t:c(e)},N=!h||!v;r({target:"Array",proto:!0,forced:N},{concat:function(e){var t,n,r,a,c,o=i(this),s=d(o,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(c=-1===t?o:arguments[t],j(c)){if(a=l(c.length),p+a>m)throw TypeError(O);for(n=0;n<a;n++,p++)n in c&&u(s,p,c[n])}else{if(p>=m)throw TypeError(O);u(s,p++,c)}return s.length=p,s}})},b20f:function(e,t,n){"use strict";var r=n("1da1"),a=(n("96cf"),n("bc3a")),c=n.n(a),o=n("e4f4");t["a"]={listDataByCodeOp:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("http://192.168.7.212:3300/api/v1/sap/tutilabs/ops/".concat(t));case 2:return n=e.sent,console.log(n),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),listAllStartups:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o["http"].get("/reportStartup");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),listAllDefaultQuestions:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",o["http"].get("/reportStartup/defaultQuestions"));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),createNewStartup:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",o["http"].post("/reportStartup/",t));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),fillReportStartup:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",o["http"].post("/reportStartup/fill/".concat(t),n));case 1:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),listCountOfStartupsByStatus:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",o["http"].get("/reportStartup/management/count"));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),findReportStartupById:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",o["http"].get("/reportStartup/".concat(t)));case 1:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}()}},bd96:function(e,t,n){},fb6a:function(e,t,n){"use strict";var r=n("23e7"),a=n("861d"),c=n("e8b5"),o=n("23cb"),i=n("50c4"),l=n("fc6a"),u=n("8418"),d=n("b622"),s=n("1dde"),p=s("slice"),b=d("species"),f=[].slice,m=Math.max;r({target:"Array",proto:!0,forced:!p},{slice:function(e,t){var n,r,d,s=l(this),p=i(s.length),O=o(e,p),h=o(void 0===t?p:t,p);if(c(s)&&(n=s.constructor,"function"!=typeof n||n!==Array&&!c(n.prototype)?a(n)&&(n=n[b],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return f.call(s,O,h);for(r=new(void 0===n?Array:n)(m(h-O,0)),d=0;O<h;O++,d++)O in s&&u(r,d,s[O]);return r.length=d,r}})}}]);
//# sourceMappingURL=chunk-45ca215a.991bc000.js.map