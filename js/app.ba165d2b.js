(function(e){function t(t){for(var r,i,n=t[0],c=t[1],u=t[2],d=0,m=[];d<n.length;d++)i=n[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,n=1;n<a.length;n++){var c=a[n];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},o={app:0},s=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=t,n=n.slice();for(var u=0;u<n.length;u++)t(n[u]);var l=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},3953:function(e,t,a){"use strict";a("564a")},"41f9":function(e,t,a){e.exports=a.p+"img/acc05.c8168b4d.png"},"47b1":function(e,t,a){},"564a":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Form"),a("Footer")],1)},s=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[e._m(0),e._m(1),a("form-wizard",{attrs:{color:"green","error-color":"#a94442",title:"",subtitle:".","back-button-text":"Voltar","next-button-text":"Avançar","finish-button-text":"Enviar"},on:{"on-complete":e.onComplete}},[a("tab-content",{attrs:{title:"Introdução","before-change":e.validateIntroductionTab,icon:"ti-info-alt"}},[a("div",{staticClass:"container h-100"},[a("vue-form-generator",{ref:"introductionTab",attrs:{model:e.model,schema:e.introductionTabSchema,options:e.formOptions}})],1)]),a("tab-content",{attrs:{title:"Coleta de informações","before-change":e.validatePersonalInformationTab,icon:"ti-user"}},[a("div",{staticClass:"container h-100"},[a("vue-form-generator",{ref:"personalInformationTab",attrs:{model:e.model,schema:e.personalInformationTabSchema,options:e.formOptions}})],1)]),a("tab-content",{attrs:{title:"Instruções para as gravações",icon:"ti-help-alt"}},[a("div",{staticClass:"container h-100"},[a("RecordInstructions")],1)]),a("tab-content",{attrs:{title:"Gravações",icon:"ti-microphone"}},[a("div",{staticClass:"container h-100"},[a("AudioRecorder",{attrs:{model:e.model}}),a("div",{staticStyle:{display:"inline-block"}},[a("div",{staticStyle:{position:"relative",margin:"auto auto auto auto"}},[a("vue-recaptcha",{ref:"recaptcha",attrs:{size:"invisible",sitekey:"6LcIfxocAAAAANzwga4Y1d_HLwrYbQJLlxgENqsU"},on:{verify:e.onCaptchaVerified,expired:e.onCaptchaExpired}})],1)])],1)])],1)],1)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-xs-12"},[a("h1",[e._v("Sotaque Brasileiro")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-xs-12"},[a("h3",[e._v(" Uma base de dados para estudo de regionalismos brasileiros através da voz. ")])])}],c=a("5530"),u=(a("d3b7"),a("ddb0"),a("2ee4")),l=a("4309"),d=a.n(l),m=(a("da93"),a("92bd"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",[a("div",{staticClass:"col-xs-12"},[a("div",{staticClass:"row"},[a("h4",[e._v("Grave sua voz dizendo a seguinte frase:")]),a("h2",[e._v(e._s(e.store_sentence))])]),a("div",{staticClass:"row"},[a("vue-record-audio",{attrs:{mode:"hold"},on:{result:e.onResult,stream:e.onStream}})],1)]),"granted"!==e.record_state?a("div",{staticClass:"col-md-12 col-xs-12"},[a("h4",[e._v("Para gravar sua voz, você precisa permitir o uso de microfone.")])]):e._e(),e.recording?a("div",{staticClass:"col-md-12 col-xs-12"},[a("h4",[e._v("Gravando...")])]):e._e(),this.audioBlob?a("div",{staticClass:"col-md-12 col-xs-12"},[a("h4",[e._v("Confira a sua gravação aqui:")]),a("audio",{attrs:{src:e.audioSrc,type:"audio/wav",controls:""}})]):e._e()])}),p=[],f=(a("3ca3"),a("2b3d"),a("c9d0")),v=a.n(f),h=a("2f62");r["a"].use(v.a);var b={methods:{onResult:function(e){this.recording=!1,this.audioBlob=e,this.$store.dispatch("form/setAudioBlob",e)},onStream:function(){this.recording=!0}},data:function(){return{audioSrc:null,audioBlob:null,recording:!1,recordState:""}},props:{model:{type:Object,required:!0}},computed:Object(c["a"])({},Object(h["b"])({store_audio_blob:function(e){return e.form.audioBlob},store_sentence:function(e){return e.form.sentence},record_state:function(e){return e.form.recordState}})),watch:{store_audio_blob:{handler:function(e){null==e?(this.audioSrc=null,this.audioBlob=null):this.audioSrc=URL.createObjectURL(e)}}},mounted:function(){this.$store.dispatch("form/fetchRecordState")}},_=b,g=a("2877"),y=Object(g["a"])(_,m,p,!1,null,null,null),C=y.exports,x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},q=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-xs-12"},[r("p",[e._v(" Na próxima etapa, você poderá iniciar as gravações de áudio. Escolha, de preferência, um ambiente silencioso ou com pouco ruído, para tentar adquirir a melhor qualidade de áudio possível. Assim que abrir, você verá uma frase e um botão para iniciar a gravação, como na imagem abaixo: ")]),r("img",{staticClass:"img-responsive",attrs:{src:a("e4c9")}}),r("p",[e._v(' Você poderá iniciar a gravação clicando e segurando o botão. Assim que você iniciar a gravação, ele mudará de cor para vermelho e será escrito "Gravando", como a imagem abaixo. Caso o botão não fique vermelho e a mensagem "Para gravar sua voz, você precisa permitir o uso de microfone." esteja aparecendo, você deve permitir o acesso ao microfone, que está bloqueado. ')]),r("img",{staticClass:"img-responsive",attrs:{src:a("b0b8")}}),r("p",[e._v(" Quando você terminar a gravação, basta soltar o botão para parar a gravação. Assim que o fizer, ele mudará de cor para verde e será exibido um reprodutor de áudio, para que você possa conferir o que foi gravado. ")]),r("img",{staticClass:"img-responsive",attrs:{src:a("c70d")}}),r("p",[e._v(' Caso o áudio esteja de acordo com o esperado, você poderá clicar no botão "Enviar" para enviar o áudio para o servidor. Assim que você clicar, uma mensagem de confirmação será exibida. Caso o áudio esteja incorreto, você poderá regravá-lo, clicando novamente no mesmo botão. ')]),r("img",{staticClass:"img-responsive",attrs:{src:a("a8f8")}}),r("p",[e._v(' Quando clicar em "Ok" na mensagem de confirmação, outra frase será exibida. Você poderá gravar quantas quiser. Quando quiser parar, é só fechar essa janela. ')]),r("img",{staticClass:"img-responsive",attrs:{src:a("41f9")}})])}],S={},L=S,E=(a("a680"),Object(g["a"])(L,x,q,!1,null,"4bc6f792",null)),O=E.exports,A=a("e096"),j=(a("dca8"),Object.freeze({api:{createRecordUrl:"https://api-sotaque-v2.gabriel-milan.com/create_record/",getGendersUrl:"https://api-sotaque-v2.gabriel-milan.com/genders/",getCitiesUrl:"https://api-sotaque-v2.gabriel-milan.com/cities/",getStatesUrl:"https://api-sotaque-v2.gabriel-milan.com/states/",getSentenceUrl:"https://api-sotaque-v2.gabriel-milan.com/sentences/"}}));r["a"].use(d.a);var T={components:{FormWizard:u["FormWizard"],TabContent:u["TabContent"],AudioRecorder:C,RecordInstructions:O,VueRecaptcha:A["a"]},computed:Object(c["a"])(Object(c["a"])({},Object(h["b"])({store_model:function(e){return e.form.model},store_audio_blob:function(e){return e.form.audioBlob},store_gender_list:function(e){return e.form.genderList},store_birth_city_list:function(e){return e.form.birthCityList},store_current_city_list:function(e){return e.form.currentCityList},store_parents_city_list:function(e){return e.form.parentsCityList},store_states_list:function(e){return e.form.stateList},store_sentence:function(e){return e.form.sentence}})),{},{introductionTabSchema:function(){var e={fields:[{type:"label",label:'A "Sotaque Brasileiro" é uma base de dados contendo gravações de voz de diversos indivíduos brasileiros, esses não identificáveis, e informações como idade, regiões que viveram e profissão. O propósito de construir essa base de dados é realizar estudos sobre a regionalidade brasileira através da voz. As frases selecionadas para esse estudo foram extraídas de [1]. Essa base ficará disponível publicamente em [2] por tempo indeterminado, com atualizações diárias automáticas. Não há nenhum interesse por parte dos criadores da base de dados em identificar os participantes. Não são coletados dados que permitam a identificação dos participantes. A veracidade dos dados informados durante a pesquisa, assim como o conteúdo dos áudios gravados, é de total responsabilidade do participante. Visto que não é possível identificar os participantes, também não é possível remover gravações realizadas para essa pesquisa. O participante deve ler e concordar com esses termos para participar da pesquisa.'},{type:"checkbox",label:"Eu li e aceito as condições descritas acima",model:"accept_terms",required:!0,validator:function(e){if(!1===e)return"Você deve aceitar as condições para continuar."}}]};return e},personalInformationTabSchema:function(){var e=this,t={fields:[{type:"input",inputType:"number",label:"Qual a sua idade?",model:"age",required:!0,styleClasses:"col-md-6 col-xs-12",validator:function(e){return e?e<1||e>120?"Sua idade deve estar entre 1 e 120 anos.":void 0:"Você deve informar sua idade."}},{type:"select",label:"Qual seu gênero?",model:"gender",required:!0,values:this.store_gender_list,styleClasses:"col-md-6 col-xs-12",validator:function(e){if(!e)return"Você deve selecionar uma das opções de gênero"}},{type:"select",label:"Em que estado você nasceu?",model:"birth_state",required:!0,values:this.store_states_list,styleClasses:"col-md-6 col-xs-12",validator:function(t){if(!t)return"Você deve informar o estado onde nasceu.";e.birth_state=t}},{type:"select",label:"Em que cidade você nasceu?",model:"birth_city",required:!0,values:this.store_birth_city_list,styleClasses:"col-md-6 col-xs-12",validator:function(e){if(!e)return"Você deve informar a cidade onde nasceu."}},{type:"select",label:"Em qual estado você mora atualmente?",model:"current_state",required:!0,values:this.store_states_list,styleClasses:"col-md-6 col-xs-12",validator:function(t){if(!t)return"Você deve informar o estado onde mora atualmente.";e.current_state=t}},{type:"select",label:"Em qual cidade você mora atualmente?",model:"current_city",required:!0,values:this.store_current_city_list,styleClasses:"col-md-6 col-xs-12",validator:function(e){if(!e)return"Você deve informar a cidade onde mora atualmente."}},{type:"input",inputType:"number",label:"Há quantos anos você mora nessa cidade?",model:"years_on_current_city",required:!0,styleClasses:"col-md-6 col-xs-12",validator:function(e){return e?e<0||e>120?"O tempo em que você mora na cidade deve estar entre 0 e 120 anos.":void 0:"Você deve informar há quantos anos mora nessa cidade."}},{type:"input",inputType:"text",label:"Qual sua profissão? (OPCIONAL)",model:"profession",required:!1,styleClasses:"col-md-6 col-xs-12"},{type:"select",inputType:"select",label:"Em que estado seus pais nasceram? Caso sejam de estados diferentes, informe apenas uma de sua escolha.",model:"parents_original_state",required:!0,values:this.store_states_list,styleClasses:"col-md-6 col-xs-12",validator:function(t){if(!t)return"Você deve informar o estado onde seus pais nasceram.";e.parents_original_state=t}},{type:"select",inputType:"select",label:"Em que cidade seus pais nasceram? Caso sejam de cidades diferentes, informe apenas uma de sua escolha.",model:"parents_original_city",required:!0,values:this.store_parents_city_list,styleClasses:"col-md-6 col-xs-12",validator:function(e){if(!e)return"Você deve informar o estado onde seus pais nasceram."}}]};return t}}),mounted:function(){this.$store.dispatch("form/fetchGenderList"),this.$store.dispatch("form/fetchStateList")},watch:{store_city_list:{handler:function(e){null!=e&&(this.personalInformationTabSchema.fields[3].values=e,this.personalInformationTabSchema.fields[4].values=e,this.personalInformationTabSchema.fields[6].values=e)}},birth_state:{handler:function(e){null!=e&&(this.$store.dispatch("form/fetchBirthCityList",e),this.$store.dispatch("form/fetchSentence",e))}},current_state:{handler:function(e){null!=e&&this.$store.dispatch("form/fetchCurrentCityList",e)}},parents_original_state:{handler:function(e){null!=e&&this.$store.dispatch("form/fetchParentsCityList",e)}}},data:function(){return{birth_state:"",current_state:"",parents_original_state:"",model:{accept_terms:!1,age:null,gender:null,profession:"",birth_state:null,birth_city:null,current_state:null,current_city:null,years_on_current_city:null,parents_original_state:null,parents_original_city:null},formOptions:{validationErrorClass:"has-error",validationSuccessClass:"has-success",validateAfterChanged:!0}}},methods:{onComplete:function(){null!=this.store_audio_blob?this.store_model.accept_terms?this.$refs.recaptcha.execute():alert("Você deve aceitar as condições para continuar."):alert("Você deve gravar um áudio antes de enviar!")},onCaptchaVerified:function(e){var t=this;this.$refs.recaptcha.reset();var a=new FormData;a.append("audio_blob",this.store_audio_blob),a.append("age",this.store_model.age),a.append("gender",this.store_model.gender),a.append("profession",this.store_model.profession),a.append("birth_city",this.store_model.birth_city+"/"+this.store_model.birth_state),a.append("current_city",this.store_model.current_city+"/"+this.store_model.current_state),a.append("years_on_current_city",this.store_model.years_on_current_city),a.append("parents_original_city",this.store_model.parents_original_city+"/"+this.store_model.parents_original_state),a.append("recaptcha_token",e),a.append("sentence",this.store_sentence),fetch(j.api.createRecordUrl,{headers:{Accept:"application/json"},method:"POST",body:a}).then((function(e){200===e.status?(t.$store.dispatch("form/setAudioBlob",null),alert("Áudio publicado com sucesso! Muito obrigado! Caso queira gravar mais, continue à vontade."),t.$store.dispatch("form/fetchSentence",t.birth_state)):alert("Erro ao publicar áudio, tente novamente por favor.")})).catch((function(e){function a(e){var t;return t=e.response,t=t?e.response.data||t:e,t.message||JSON.stringify(t)}t.serverError=a(e)}))},onCaptchaExpired:function(){this.$refs.recaptcha.reset()},validateIntroductionTab:function(){var e=this.$refs.introductionTab.validate();return e&&this.$store.dispatch("form/setModel",this.model),e},validatePersonalInformationTab:function(){var e=this.$refs.personalInformationTab.validate();return e&&this.$store.dispatch("form/setModel",this.model),e}}},$=T,B=(a("3953"),Object(g["a"])($,i,n,!1,null,null,null)),w=B.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},I=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"container"}},[a("div",{staticClass:"col-xs-12 col-md-9 col-xl-6",attrs:{id:"mentions"}},[a("p",[a("b",[e._v("[1]")]),e._v(" BATISTA, Nathalia Alves Rocha. "),a("b",[e._v("Estudo sobre Identificação Automática de Sotaques Regionais Brasileiros baseada em Modelagens Estatísticas e Técnicas de Aprendizado de Máquina")]),e._v(". 2019. Dissertação (Mestrado em Engenharia Elétrica) - Faculdade de Engenharia Elétrica e de Computação da Universidade Estadual de Campinas, ["),a("i",[e._v("S. l.")]),e._v("], 2019. Disponível em: http://repositorio.unicamp.br/jspui/bitstream/REPOSIP/334048/1/Batista_NathaliaAlvesRocha_M.pdf. Acesso em: 4 set. 2021. ")]),a("p",[a("b",[e._v("[2]")]),a("a",{attrs:{href:"https://github.com/sotaque-brasileiro/sotaque-brasileiro/releases"}},[e._v("Releases Sotaque Brasileiro")])]),a("p",[a("i",{staticClass:"devicon-github-original"}),a("a",{attrs:{href:"https://github.com/sotaque-brasileiro/sotaque-brasileiro"}},[e._v("sotaque-brasileiro/sotaque-brasileiro")])])])])}],P={},V=P,z=(a("925d"),Object(g["a"])(V,R,I,!1,null,"e94eaa88",null)),U=z.exports,M={name:"App",components:{Form:w,Footer:U}},G=M,k=(a("034f"),Object(g["a"])(G,o,s,!1,null,null,null)),N=k.exports,F=a("bc3a"),Q=a.n(F),J=a("2106"),D=a.n(J),H=(a("159b"),a("b0c0"),function(){return{model:null,audioBlob:null,genderList:[],birthCityList:[],currentCityList:[],parentsCityList:[],stateList:[],sentence:"",recordState:""}}),W={model:function(e){return e.model},audioBlob:function(e){return e.audioBlob},genderList:function(e){return e.genderList},birthCityList:function(e){return e.birthCityList},currentCityList:function(e){return e.currentCityList},parentsCityList:function(e){return e.parentsCityList},stateList:function(e){return e.stateList},sentence:function(e){return e.sentence},recordState:function(e){return e.recordState}},Y={setModel:function(e,t){var a=e.commit;return a("setModel",t)},setAudioBlob:function(e,t){var a=e.commit;return a("setAudioBlob",t)},fetchGenderList:function(e){var t=e.commit;function a(e){Q.a.get(e).then((function(e){var t=e.data;t.results.forEach((function(e){r.push(e.radio_text)})),t.next&&a(t.next)}))}var r=[],o=j.api.getGendersUrl;a(o),t("setGenderList",r)},fetchBirthCityList:function(e,t){var a=e.commit;function r(e){Q.a.get(e).then((function(e){var t=e.data;t.results.forEach((function(e){o.push(e.name)})),t.next&&r(t.next)}))}var o=[],s=j.api.getCitiesUrl+"?state="+t;r(s),a("setBirthCityList",o)},fetchCurrentCityList:function(e,t){var a=e.commit;function r(e){Q.a.get(e).then((function(e){var t=e.data;t.results.forEach((function(e){o.push(e.name)})),t.next&&r(t.next)}))}var o=[],s=j.api.getCitiesUrl+"?state="+t;r(s),a("setCurrentCityList",o)},fetchParentsCityList:function(e,t){var a=e.commit;function r(e){Q.a.get(e).then((function(e){var t=e.data;t.results.forEach((function(e){o.push(e.name)})),t.next&&r(t.next)}))}var o=[],s=j.api.getCitiesUrl+"?state="+t;r(s),a("setParentsCityList",o)},fetchStateList:function(e){var t=e.commit;function a(e){Q.a.get(e).then((function(e){var t=e.data;t.results.forEach((function(e){r.push(e.abbreviation)})),t.next&&a(t.next)}))}var r=[],o=j.api.getStatesUrl;a(o),t("setStateList",r)},fetchSentence:function(e,t){var a=e.commit;function r(e){Q.a.get(e).then((function(e){var t=e.data;a("setSentence",t.results[0].text)}))}var o=j.api.getSentenceUrl+"?state="+t;r(o)},fetchRecordState:function(e){var t=e.commit;navigator.permissions.query({name:"microphone"}).then((function(e){t("setRecordState",e.state),console.log(e.state),e.onchange=function(){t("setRecordState",e.state),console.log("Permission changed to "+this.state)}}))}},K={setModel:function(e,t){e.model=t},setAudioBlob:function(e,t){e.audioBlob=t},setGenderList:function(e,t){e.genderList=t},setBirthCityList:function(e,t){e.birthCityList=t},setCurrentCityList:function(e,t){e.currentCityList=t},setParentsCityList:function(e,t){e.parentsCityList=t},setStateList:function(e,t){e.stateList=t},setSentence:function(e,t){e.sentence=t},setRecordState:function(e,t){e.recordState=t}},X={namespaced:!0,state:H,getters:W,actions:Y,mutations:K};r["a"].use(h["a"]);var Z=new h["a"].Store({modules:{form:X}});r["a"].config.productionTip=!1,r["a"].use(D.a,Q.a),new r["a"]({el:"#app",store:Z,render:function(e){return e(N)}})},"85ec":function(e,t,a){},"925d":function(e,t,a){"use strict";a("47b1")},a680:function(e,t,a){"use strict";a("b757")},a8f8:function(e,t,a){e.exports=a.p+"img/acc04.f9e7b356.png"},b0b8:function(e,t,a){e.exports=a.p+"img/acc02.3c54eb57.png"},b757:function(e,t,a){},c70d:function(e,t,a){e.exports=a.p+"img/acc03.ff35b179.png"},e4c9:function(e,t,a){e.exports=a.p+"img/acc01.114be2a0.png"}});
//# sourceMappingURL=app.ba165d2b.js.map