(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73b12f6b"],{"057f":function(e,t,r){var n=r("fc6a"),c=r("241c").f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],i=function(e){try{return c(e)}catch(t){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==o.call(e)?i(e):c(n(e))}},"428f":function(e,t,r){var n=r("da84");e.exports=n},"58a3":function(e,t,r){"use strict";r("7a03")},"68f9":function(e,t,r){"use strict";r.r(t);r("b0c0");var n=r("7a23"),c=function(e){return Object(n["pushScopeId"])("data-v-8515e2bc"),e=e(),Object(n["popScopeId"])(),e},o={key:0,class:"content-perfil"},a={class:"perfil"},i=c((function(){return Object(n["createElementVNode"])("div",{class:"user"},[Object(n["createElementVNode"])("div",{class:"perfil-img"},[Object(n["createElementVNode"])("i",{class:"fas fa-user-alt"})]),Object(n["createElementVNode"])("h2",null,"Perfil")],-1)})),s=c((function(){return Object(n["createElementVNode"])("h3",null,"Dados do usuário",-1)})),l={class:"user-data"},u={class:"inputs"},d={class:"footer-user-data"},f=c((function(){return Object(n["createElementVNode"])("h3",null,"Sistema",-1)})),b={class:"input system-black"},p=c((function(){return Object(n["createElementVNode"])("label",{for:"user-name"},"Nível de Acesso",-1)})),m={name:"lvAcess",id:"lvAcess",class:"select-lvAcess",disabled:""},v={value:"adm"},O={key:0,class:"btns btn-edit-false"},h={key:1,class:"content-perfil"},j={class:"perfil"},y=c((function(){return Object(n["createElementVNode"])("div",{class:"user"},[Object(n["createElementVNode"])("div",{class:"perfil-img"},[Object(n["createElementVNode"])("i",{class:"fas fa-user-alt"})]),Object(n["createElementVNode"])("h2",null,"Editar Usuário")],-1)})),E=c((function(){return Object(n["createElementVNode"])("h3",null,"Dados do usuário",-1)})),g={class:"inputs"},N={class:"input"},V=c((function(){return Object(n["createElementVNode"])("label",{for:""},"Nome",-1)})),S={class:"input"},w=c((function(){return Object(n["createElementVNode"])("label",{for:""},"Matrícula",-1)})),x={class:"input"},k=c((function(){return Object(n["createElementVNode"])("label",{for:""},"Email",-1)})),I={class:"input"},A=c((function(){return Object(n["createElementVNode"])("label",{for:""},"CPF",-1)})),D={class:"footer-user-data"},B=c((function(){return Object(n["createElementVNode"])("h3",null,"Sistema",-1)})),P={class:"input system-black"},$=c((function(){return Object(n["createElementVNode"])("label",{for:"user-name"},"Nível de Acesso",-1)})),U=["value"],C={class:"btns"},T=c((function(){return Object(n["createElementVNode"])("button",{class:"btn btn-save",type:"submit"},"Salvar",-1)}));function M(e,t,r,c,M,F){var L=Object(n["resolveComponent"])("InputPerfil");return M.editStatus?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createElementVNode"])("div",a,[i,s,Object(n["createElementVNode"])("form",l,[Object(n["createElementVNode"])("div",u,[Object(n["createVNode"])(L,{title:"Nome",value:M.user.name,type:e.text,placeholder:"Maria do Bairro",disabled:1},null,8,["value","type"]),Object(n["createVNode"])(L,{title:"Matricula",value:M.user.register,type:e.number,placeholder:"ex: 8946987",disabled:1},null,8,["value","type"]),Object(n["createVNode"])(L,{title:"Email",value:M.user.email,type:e.email,placeholder:"ex: joaozinho@tuti.com",disabled:1},null,8,["value","type","placeholder"]),Object(n["createVNode"])(L,{title:"CPF",value:M.user.cpf,type:e.text,placeholder:"ex: 03992355202",disabled:1},null,8,["value","type"])]),Object(n["createElementVNode"])("div",d,[f,Object(n["createElementVNode"])("div",b,[p,Object(n["createElementVNode"])("select",m,[Object(n["createElementVNode"])("option",v,Object(n["toDisplayString"])(M.user.cargo),1)])]),M.btnEdit?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",O,[Object(n["createElementVNode"])("button",{class:"btn btn-edit",onClick:t[0]||(t[0]=function(e){return M.editStatus=!1})}," Editar ")])):Object(n["createCommentVNode"])("",!0)])])])])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",h,[Object(n["createElementVNode"])("div",j,[y,E,Object(n["createElementVNode"])("form",{class:"user-data",onSubmit:t[7]||(t[7]=Object(n["withModifiers"])((function(){return F.UpdateUser&&F.UpdateUser.apply(F,arguments)}),["prevent"]))},[Object(n["createElementVNode"])("div",g,[Object(n["createElementVNode"])("div",N,[V,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",placeholder:"ex: João das Neves","onUpdate:modelValue":t[1]||(t[1]=function(e){return M.user.name=e})},null,512),[[n["vModelText"],M.user.name]])]),Object(n["createElementVNode"])("div",S,[w,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",placeholder:"Matrícula do usuário","onUpdate:modelValue":t[2]||(t[2]=function(e){return M.user.register=e})},null,512),[[n["vModelText"],M.user.register]])]),Object(n["createElementVNode"])("div",x,[k,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",placeholder:"ex: nome@tuti.com.br","onUpdate:modelValue":t[3]||(t[3]=function(e){return M.user.email=e})},null,512),[[n["vModelText"],M.user.email]])]),Object(n["createElementVNode"])("div",I,[A,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{type:"text",placeholder:"CPF do usuário","onUpdate:modelValue":t[4]||(t[4]=function(e){return M.user.cpf=e})},null,512),[[n["vModelText"],M.user.cpf]])])]),Object(n["createElementVNode"])("div",D,[B,Object(n["createElementVNode"])("div",P,[$,Object(n["withDirectives"])(Object(n["createElementVNode"])("select",{name:"lvAcess",id:"lvAcess",class:"select-lvAcess","onUpdate:modelValue":t[5]||(t[5]=function(e){return M.user.lvAccess=e})},[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(M.options,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("option",{value:e.value,key:t},Object(n["toDisplayString"])(e.text),9,U)})),128))],512),[[n["vModelSelect"],M.user.lvAccess]])]),Object(n["createElementVNode"])("div",C,[Object(n["createElementVNode"])("button",{class:"btn btn-cancel",onClick:t[6]||(t[6]=function(e){return M.editStatus=!0})}," Cancel "),T])])],32)])]))}var F=r("1da1"),L=(r("96cf"),r("4c53"),r("a4d3"),r("e01a"),r("14b7")),G=r.n(L),J=r("6cda"),_=r("a9cc"),R={components:{InputPerfil:J["a"]},name:"Perfil",data:function(){return{user:{id:"",name:"",email:"",register:"",cpf:"",cargo:"",lvAccess:""},isDisable:!0,editStatus:!0,btnEdit:!1,options:[{text:"Escolha",value:""},{text:"ADM",value:1},{text:"Gestor",value:2},{text:"Inspetor",value:3},{text:"Analista",value:4},{text:"Metrologista",value:5}]}},methods:{UpdateUser:function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(){var t,r,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$swal.mixin({toast:!0,position:"top-right",iconColor:"white",customClass:{popup:"colored-toast",title:"title-swal-text"},didOpen:function(e){e.addEventListener("mouseenter",n.$swal.stopTimer),e.addEventListener("mouseleave",n.$swal.resumeTimer)},showConfirmButton:!1,timer:2500,timerProgressBar:!0}),this.$store.commit("$SETISLOADING"),r={id:this.user.id,name:this.user.name,email:this.user.email,register:this.user.register,cpf:this.user.cpf,fk_role:this.user.lvAccess},e.next=5,_["a"].updateUserById(r).then((function(e){200===e.status&&(n.$store.commit("$SETISLOADING"),t.fire({icon:"success",title:"Usuário atualizado com sucesso",background:"#A8D4FF"}),n.editStatus=!n.editStatus)})).catch((function(e){return n.$store.commit("$SETISLOADING"),t.fire({icon:"warning",title:"Verifique se todos os campos estão corretos!, error: ".concat(e.response.data.message),background:"#E8EB7C",iconColor:"#545454"})}));case 5:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},created:function(){var e=Object(F["a"])(regeneratorRuntime.mark((function e(){var t,r,n,c,o=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t="cf2cf1732834hh4hsg657tvdbsi84732492ccF=2=eyfgewyf6329382¨&%$gydsu",r=sessionStorage.getItem("token"),!r){e.next=17;break}return e.prev=3,e.next=6,G.a.verify(r,t);case 6:return n=e.sent,c=n.sub,this.$store.commit("$SETISLOADING"),e.next=11,_["a"].findUserById(c).then((function(e){o.user.id=e.data.user.id,o.user.name=e.data.user.name,o.user.email=e.data.user.email,o.user.register=e.data.user.register,o.user.cpf=e.data.user.cpf,o.user.cargo=e.data.user.role.description,o.user.lvAccess=e.data.user.role.id;var t=e.data.user.role.id;1!==t&&2!==t||(o.btnEdit=!0)})).catch((function(e){return console.log("error",e)}));case 11:this.$store.commit("$SETISLOADING"),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](3),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[3,14]])})));function t(){return e.apply(this,arguments)}return t}()},z=(r("58a3"),r("6b0d")),q=r.n(z);const Q=q()(R,[["render",M],["__scopeId","data-v-8515e2bc"]]);t["default"]=Q},"6cda":function(e,t,r){"use strict";var n=r("7a23"),c={class:"input"},o={for:""},a=["type","placeholder","value","disabled"];function i(e,t,r,i,s,l){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",c,[Object(n["createElementVNode"])("label",o,Object(n["toDisplayString"])(r.title),1),Object(n["createElementVNode"])("input",{type:r.type,placeholder:r.placeholder,value:r.value,disabled:r.disabled},null,8,a)])}var s={name:"InputPerfil",props:["title","value","type","placeholder","disabled"],data:function(){return{}}},l=(r("ff2d"),r("6b0d")),u=r.n(l);const d=u()(s,[["render",i],["__scopeId","data-v-2df3a82a"]]);t["a"]=d},"746f":function(e,t,r){var n=r("428f"),c=r("5135"),o=r("e538"),a=r("9bf2").f;e.exports=function(e){var t=n.Symbol||(n.Symbol={});c(t,e)||a(t,e,{value:o.f(e)})}},"7a03":function(e,t,r){},a4d3:function(e,t,r){"use strict";var n=r("23e7"),c=r("da84"),o=r("d066"),a=r("c430"),i=r("83ab"),s=r("4930"),l=r("d039"),u=r("5135"),d=r("e8b5"),f=r("861d"),b=r("d9b5"),p=r("825a"),m=r("7b0b"),v=r("fc6a"),O=r("a04b"),h=r("577e"),j=r("5c6c"),y=r("7c73"),E=r("df75"),g=r("241c"),N=r("057f"),V=r("7418"),S=r("06cf"),w=r("9bf2"),x=r("d1e7"),k=r("9112"),I=r("6eeb"),A=r("5692"),D=r("f772"),B=r("d012"),P=r("90e3"),$=r("b622"),U=r("e538"),C=r("746f"),T=r("d44e"),M=r("69f3"),F=r("b727").forEach,L=D("hidden"),G="Symbol",J="prototype",_=$("toPrimitive"),R=M.set,z=M.getterFor(G),q=Object[J],Q=c.Symbol,W=o("JSON","stringify"),H=S.f,K=w.f,X=N.f,Y=x.f,Z=A("symbols"),ee=A("op-symbols"),te=A("string-to-symbol-registry"),re=A("symbol-to-string-registry"),ne=A("wks"),ce=c.QObject,oe=!ce||!ce[J]||!ce[J].findChild,ae=i&&l((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=H(q,t);n&&delete q[t],K(e,t,r),n&&e!==q&&K(q,t,n)}:K,ie=function(e,t){var r=Z[e]=y(Q[J]);return R(r,{type:G,tag:e,description:t}),i||(r.description=t),r},se=function(e,t,r){e===q&&se(ee,t,r),p(e);var n=O(t);return p(r),u(Z,n)?(r.enumerable?(u(e,L)&&e[L][n]&&(e[L][n]=!1),r=y(r,{enumerable:j(0,!1)})):(u(e,L)||K(e,L,j(1,{})),e[L][n]=!0),ae(e,n,r)):K(e,n,r)},le=function(e,t){p(e);var r=v(t),n=E(r).concat(pe(r));return F(n,(function(t){i&&!de.call(r,t)||se(e,t,r[t])})),e},ue=function(e,t){return void 0===t?y(e):le(y(e),t)},de=function(e){var t=O(e),r=Y.call(this,t);return!(this===q&&u(Z,t)&&!u(ee,t))&&(!(r||!u(this,t)||!u(Z,t)||u(this,L)&&this[L][t])||r)},fe=function(e,t){var r=v(e),n=O(t);if(r!==q||!u(Z,n)||u(ee,n)){var c=H(r,n);return!c||!u(Z,n)||u(r,L)&&r[L][n]||(c.enumerable=!0),c}},be=function(e){var t=X(v(e)),r=[];return F(t,(function(e){u(Z,e)||u(B,e)||r.push(e)})),r},pe=function(e){var t=e===q,r=X(t?ee:v(e)),n=[];return F(r,(function(e){!u(Z,e)||t&&!u(q,e)||n.push(Z[e])})),n};if(s||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?h(arguments[0]):void 0,t=P(e),r=function(e){this===q&&r.call(ee,e),u(this,L)&&u(this[L],t)&&(this[L][t]=!1),ae(this,t,j(1,e))};return i&&oe&&ae(q,t,{configurable:!0,set:r}),ie(t,e)},I(Q[J],"toString",(function(){return z(this).tag})),I(Q,"withoutSetter",(function(e){return ie(P(e),e)})),x.f=de,w.f=se,S.f=fe,g.f=N.f=be,V.f=pe,U.f=function(e){return ie($(e),e)},i&&(K(Q[J],"description",{configurable:!0,get:function(){return z(this).description}}),a||I(q,"propertyIsEnumerable",de,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:Q}),F(E(ne),(function(e){C(e)})),n({target:G,stat:!0,forced:!s},{for:function(e){var t=h(e);if(u(te,t))return te[t];var r=Q(t);return te[t]=r,re[r]=t,r},keyFor:function(e){if(!b(e))throw TypeError(e+" is not a symbol");if(u(re,e))return re[e]},useSetter:function(){oe=!0},useSimple:function(){oe=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!i},{create:ue,defineProperty:se,defineProperties:le,getOwnPropertyDescriptor:fe}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:be,getOwnPropertySymbols:pe}),n({target:"Object",stat:!0,forced:l((function(){V.f(1)}))},{getOwnPropertySymbols:function(e){return V.f(m(e))}}),W){var me=!s||l((function(){var e=Q();return"[null]"!=W([e])||"{}"!=W({a:e})||"{}"!=W(Object(e))}));n({target:"JSON",stat:!0,forced:me},{stringify:function(e,t,r){var n,c=[e],o=1;while(arguments.length>o)c.push(arguments[o++]);if(n=t,(f(t)||void 0!==e)&&!b(e))return d(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!b(t))return t}),c[1]=t,W.apply(null,c)}})}Q[J][_]||k(Q[J],_,Q[J].valueOf),T(Q,G),B[L]=!0},c410:function(e,t,r){},e01a:function(e,t,r){"use strict";var n=r("23e7"),c=r("83ab"),o=r("da84"),a=r("5135"),i=r("861d"),s=r("9bf2").f,l=r("e893"),u=o.Symbol;if(c&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};l(f,u);var b=f.prototype=u.prototype;b.constructor=f;var p=b.toString,m="Symbol(test)"==String(u("test")),v=/^Symbol\((.*)\)[^)]+$/;s(b,"description",{configurable:!0,get:function(){var e=i(this)?this.valueOf():this,t=p.call(e);if(a(d,e))return"";var r=m?t.slice(7,-1):t.replace(v,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},e538:function(e,t,r){var n=r("b622");t.f=n},ff2d:function(e,t,r){"use strict";r("c410")}}]);
//# sourceMappingURL=chunk-73b12f6b.6db9f74f.js.map