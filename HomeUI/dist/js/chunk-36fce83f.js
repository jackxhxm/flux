(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36fce83f"],{"25f0":function(t,e,i){"use strict";var a=i("5e77").PROPER,n=i("cb2d"),r=i("825a"),c=i("577e"),o=i("d039"),s=i("90d8"),u="toString",p=RegExp.prototype,l=p[u],d=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),h=a&&l.name!=u;(d||h)&&n(RegExp.prototype,u,(function(){var t=r(this),e=c(t.source),i=c(s(t));return"/"+e+"/"+i}),{unsafe:!0})},2616:function(t,e,i){"use strict";i.d(e,"a",(function(){return N}));var a=i("c637"),n=i("e863"),r=i("0056"),c=i("2326"),o=i("2f79"),s=i("228e"),u=i("be29"),p=i("6c06"),l=i("4e53"),d=i("7b1e"),h=i("3c21"),b=i("3a58"),f=i("d82f"),O=i("39ad"),g=i("8df8");function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function j(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach((function(e){v(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var y="__BV_Tooltip__",k="hover focus",C={focus:!0,hover:!0,click:!0,blur:!0,manual:!0},w=/^html$/i,P=/^noninteractive$/i,G=/^nofade$/i,A=/^(auto|top(left|right)?|bottom(left|right)?|left(top|bottom)?|right(top|bottom)?)$/i,z=/^(window|viewport|scrollParent)$/i,x=/^d\d+$/i,S=/^ds\d+$/i,$=/^dh\d+$/i,_=/^o-?\d+$/i,L=/^v-.+$/i,D=/\s+/,F=function(t,e){var i={title:void 0,trigger:"",placement:"top",fallbackPlacement:"flip",container:!1,animation:!0,offset:0,id:null,html:!1,interactive:!0,disabled:!1,delay:Object(s["c"])(a["Cb"],"delay",50),boundary:String(Object(s["c"])(a["Cb"],"boundary","scrollParent")),boundaryPadding:Object(b["c"])(Object(s["c"])(a["Cb"],"boundaryPadding",5),0),variant:Object(s["c"])(a["Cb"],"variant"),customClass:Object(s["c"])(a["Cb"],"customClass")};if(Object(d["m"])(t.value)||Object(d["g"])(t.value)||Object(d["e"])(t.value)?i.title=t.value:Object(d["j"])(t.value)&&(i=j(j({},i),t.value)),Object(d["n"])(i.title)){var n=o["d"]?e.props:(e.data||{}).attrs;i.title=n&&!Object(d["o"])(n.title)?n.title:void 0}Object(d["j"])(i.delay)||(i.delay={show:Object(b["c"])(i.delay,0),hide:Object(b["c"])(i.delay,0)}),t.arg&&(i.container="#".concat(t.arg)),Object(f["h"])(t.modifiers).forEach((function(t){if(w.test(t))i.html=!0;else if(P.test(t))i.interactive=!1;else if(G.test(t))i.animation=!1;else if(A.test(t))i.placement=t;else if(z.test(t))t="scrollparent"===t?"scrollParent":t,i.boundary=t;else if(x.test(t)){var e=Object(b["c"])(t.slice(1),0);i.delay.show=e,i.delay.hide=e}else S.test(t)?i.delay.show=Object(b["c"])(t.slice(2),0):$.test(t)?i.delay.hide=Object(b["c"])(t.slice(2),0):_.test(t)?i.offset=Object(b["c"])(t.slice(1),0):L.test(t)&&(i.variant=t.slice(2)||null)}));var r={};return Object(c["b"])(i.trigger||"").filter(p["a"]).join(" ").trim().toLowerCase().split(D).forEach((function(t){C[t]&&(r[t]=!0)})),Object(f["h"])(t.modifiers).forEach((function(t){t=t.toLowerCase(),C[t]&&(r[t]=!0)})),i.trigger=Object(f["h"])(r).join(" "),"blur"===i.trigger&&(i.trigger="focus"),i.trigger||(i.trigger=k),i},E=function(t,e,i){if(n["g"]){var a=F(e,i);if(!t[y]){var c=Object(l["a"])(i,e);t[y]=Object(O["a"])(c,g["a"],{_scopeId:Object(u["a"])(c,void 0)}),t[y].__bv_prev_data__={},t[y].$on(r["N"],(function(){Object(d["e"])(a.title)&&t[y].updateData({title:a.title(t)})}))}var o={title:a.title,triggers:a.trigger,placement:a.placement,fallbackPlacement:a.fallbackPlacement,variant:a.variant,customClass:a.customClass,container:a.container,boundary:a.boundary,delay:a.delay,offset:a.offset,noFade:!a.animation,id:a.id,interactive:a.interactive,disabled:a.disabled,html:a.html},s=t[y].__bv_prev_data__;if(t[y].__bv_prev_data__=o,!Object(h["a"])(o,s)){var p={target:t};Object(f["h"])(o).forEach((function(e){o[e]!==s[e]&&(p[e]="title"===e&&Object(d["e"])(o[e])?o[e](t):o[e])})),t[y].updateData(p)}}},R=function(t){t[y]&&(t[y].$destroy(),t[y]=null),delete t[y]},N={bind:function(t,e,i){E(t,e,i)},componentUpdated:function(t,e,i){Object(o["e"])((function(){E(t,e,i)}))},unbind:function(t){R(t)}}},"90d8":function(t,e,i){var a=i("c65b"),n=i("1a2d"),r=i("3a9b"),c=i("ad6d"),o=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in o||n(t,"flags")||!r(o,t)?e:a(c,t)}},a953:function(t,e,i){"use strict";i.d(e,"b",(function(){return c})),i.d(e,"a",(function(){return o}));var a=i("2f79"),n=i("a723"),r=i("cf75"),c=Object(r["d"])({plain:Object(r["c"])(n["g"],!1)},"formControls"),o=Object(a["c"])({props:c,computed:{custom:function(){return!this.plain}}})},b86b:function(t,e,i){"use strict";i("e9c4"),i("99af");var a=i("b4c0");e["a"]={listRunningApps:function(){return Object(a["a"])().get("/apps/listrunningapps")},listAllApps:function(){return Object(a["a"])().get("/apps/listallapps")},installedApps:function(){return Object(a["a"])().get("/apps/installedapps")},availableApps:function(){return Object(a["a"])().get("/apps/availableapps")},stopApp:function(t,e){var i={headers:{zelidauth:t}};return Object(a["a"])().get("/apps/appstop/".concat(e),i)},startApp:function(t,e){var i={headers:{zelidauth:t}};return Object(a["a"])().get("/apps/appstart/".concat(e),i)},pauseApp:function(t,e){var i={headers:{zelidauth:t}};return Object(a["a"])().get("/apps/apppause/".concat(e),i)},unpauseApp:function(t,e){var i={headers:{zelidauth:t}};return Object(a["a"])().get("/apps/appunpause/".concat(e),i)},restartApp:function(t,e){var i={headers:{zelidauth:t}};return Object(a["a"])().get("/apps/apprestart/".concat(e),i)},removeApp:function(t,e){var i={headers:{zelidauth:t},onDownloadProgress:function(t){console.log(t)}};return Object(a["a"])().get("/apps/appremove/".concat(e),i)},registerApp:function(t,e){var i={headers:{zelidauth:t}};return Object(a["a"])().post("/apps/appregister",JSON.stringify(e),i)},updateApp:function(t,e){var i={headers:{zelidauth:t}};return Object(a["a"])().post("/apps/appupdate",JSON.stringify(e),i)},checkCommunication:function(){return Object(a["a"])().get("/flux/checkcommunication")},checkDockerExistance:function(t,e){var i={headers:{zelidauth:t}};return Object(a["a"])().post("/apps/checkdockerexistance",JSON.stringify(e),i)},appsRegInformation:function(){return Object(a["a"])().get("/apps/registrationinformation")},appsDeploymentInformation:function(){return Object(a["a"])().get("/apps/deploymentinformation")},getAppLocation:function(t){return Object(a["a"])().get("/apps/location/".concat(t))},globalAppSpecifications:function(){return Object(a["a"])().get("/apps/globalappsspecifications")},getInstalledAppSpecifics:function(t){return Object(a["a"])().get("/apps/installedapps/".concat(t))},getAppSpecifics:function(t){return Object(a["a"])().get("/apps/appspecifications/".concat(t))},getAppOwner:function(t){return Object(a["a"])().get("/apps/appowner/".concat(t))},getAppLogsTail:function(t,e){var i={headers:{zelidauth:t}};return Object(a["a"])().get("/apps/applog/".concat(e,"/100"),i)},getAppTop:function(t,e){var i={headers:{zelidauth:t}};return Object(a["a"])().get("/apps/apptop/".concat(e),i)},getAppInspect:function(t,e){var i={headers:{zelidauth:t}};return Object(a["a"])().get("/apps/appinspect/".concat(e),i)},getAppStats:function(t,e){var i={headers:{zelidauth:t}};return Object(a["a"])().get("/apps/appstats/".concat(e),i)},getAppChanges:function(t,e){var i={headers:{zelidauth:t}};return Object(a["a"])().get("/apps/appchanges/".concat(e),i)},getAppExec:function(t,e,i,n){var r={headers:{zelidauth:t}},c={appname:e,cmd:JSON.parse(i),env:JSON.parse(n)};return Object(a["a"])().post("/apps/appexec",JSON.stringify(c),r)},reindexGlobalApps:function(t){return Object(a["a"])().get("/apps/reindexglobalappsinformation",{headers:{zelidauth:t}})},reindexLocations:function(t){return Object(a["a"])().get("/apps/reindexglobalappslocation",{headers:{zelidauth:t}})},rescanGlobalApps:function(t,e,i){return Object(a["a"])().get("/apps/rescanglobalappsinformation/".concat(e,"/").concat(i),{headers:{zelidauth:t}})},getAppPirce:function(t){return Object(a["a"])().post("/apps/calculateprice",JSON.stringify(t))},getFolder:function(t,e){return Object(a["a"])().get("/apps/fluxshare/getfolder/".concat(e),{headers:{zelidauth:t}})},createFolder:function(t,e){return Object(a["a"])().get("/apps/fluxshare/createfolder/".concat(e),{headers:{zelidauth:t}})},getFile:function(t,e){return Object(a["a"])().get("/apps/fluxshare/getfile/".concat(e),{headers:{zelidauth:t}})},removeFile:function(t,e){return Object(a["a"])().get("/apps/fluxshare/removefile/".concat(e),{headers:{zelidauth:t}})},shareFile:function(t,e){return Object(a["a"])().get("/apps/fluxshare/sharefile/".concat(e),{headers:{zelidauth:t}})},unshareFile:function(t,e){return Object(a["a"])().get("/apps/fluxshare/unsharefile/".concat(e),{headers:{zelidauth:t}})},removeFolder:function(t,e){return Object(a["a"])().get("/apps/fluxshare/removefolder/".concat(e),{headers:{zelidauth:t}})},fileExists:function(t,e){return Object(a["a"])().get("/apps/fluxshare/fileexists/".concat(e),{headers:{zelidauth:t}})},storageStats:function(t){return Object(a["a"])().get("/apps/fluxshare/stats",{headers:{zelidauth:t}})},renameFileFolder:function(t,e,i){return Object(a["a"])().get("/apps/fluxshare/rename/".concat(e,"/").concat(i),{headers:{zelidauth:t}})},appPrice:function(t){return Object(a["a"])().post("/apps/calculateprice",JSON.stringify(t))},appRegistrationVerificaiton:function(t){return Object(a["a"])().post("/apps/verifyappregistrationspecifications",JSON.stringify(t))},appUpdateVerification:function(t){return Object(a["a"])().post("/apps/verifyappupdatespecifications",JSON.stringify(t))},getAppMonitoring:function(t,e){var i={headers:{zelidauth:t}};return Object(a["a"])().get("/apps/appmonitor/".concat(e),i)},startAppMonitoring:function(t,e){var i={headers:{zelidauth:t}};return e?Object(a["a"])().get("/apps/startmonitoring/".concat(e),i):Object(a["a"])().get("/apps/startmonitoring",i)},stopAppMonitoring:function(t,e,i){var n={headers:{zelidauth:t}};return e&&i?Object(a["a"])().get("/apps/stopmonitoring/".concat(e,"/").concat(i),n):e?Object(a["a"])().get("/apps/stopmonitoring/".concat(e),n):i?Object(a["a"])().get("/apps/stopmonitoring?deletedata=".concat(i),n):Object(a["a"])().get("/apps/stopmonitoring",n)},justAPI:function(){return Object(a["a"])()}}},c3e6:function(t,e,i){"use strict";i.d(e,"a",(function(){return J}));var a,n,r=i("2f79"),c=i("c637"),o=i("0056"),s=i("a723"),u=i("7b1e"),p=i("3c21"),l=function(t,e){for(var i=0;i<t.length;i++)if(Object(p["a"])(t[i],e))return i;return-1},d=i("d82f"),h=i("cf75"),b=i("906c"),f=i("58f2"),O=i("493b"),g=i("dde7"),m=i("a953"),j=i("ad47"),v=i("d520"),y=i("90ef"),k=i("8c18");function C(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function w(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?C(Object(i),!0).forEach((function(e){P(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):C(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function P(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var G,A=Object(f["a"])("checked",{defaultValue:null}),z=A.mixin,x=A.props,S=A.prop,$=A.event,_=Object(h["d"])(Object(d["m"])(w(w(w(w(w(w(w({},y["b"]),x),g["b"]),j["b"]),v["b"]),m["b"]),{},{ariaLabel:Object(h["c"])(s["t"]),ariaLabelledby:Object(h["c"])(s["t"]),button:Object(h["c"])(s["g"],!1),buttonVariant:Object(h["c"])(s["t"]),inline:Object(h["c"])(s["g"],!1),value:Object(h["c"])(s["a"])})),"formRadioCheckControls"),L=Object(r["c"])({mixins:[O["a"],y["a"],z,k["a"],g["a"],j["a"],v["a"],m["a"]],inheritAttrs:!1,props:_,data:function(){return{localChecked:this.isGroup?this.bvGroup[S]:this[S],hasFocus:!1}},computed:{computedLocalChecked:{get:function(){return this.isGroup?this.bvGroup.localChecked:this.localChecked},set:function(t){this.isGroup?this.bvGroup.localChecked=t:this.localChecked=t}},isChecked:function(){return Object(p["a"])(this.value,this.computedLocalChecked)},isRadio:function(){return!0},isGroup:function(){return!!this.bvGroup},isBtnMode:function(){return this.isGroup?this.bvGroup.buttons:this.button},isPlain:function(){return!this.isBtnMode&&(this.isGroup?this.bvGroup.plain:this.plain)},isCustom:function(){return!this.isBtnMode&&!this.isPlain},isSwitch:function(){return!(this.isBtnMode||this.isRadio||this.isPlain)&&(this.isGroup?this.bvGroup.switches:this.switch)},isInline:function(){return this.isGroup?this.bvGroup.inline:this.inline},isDisabled:function(){return this.isGroup&&this.bvGroup.disabled||this.disabled},isRequired:function(){return this.computedName&&(this.isGroup?this.bvGroup.required:this.required)},computedName:function(){return(this.isGroup?this.bvGroup.groupName:this.name)||null},computedForm:function(){return(this.isGroup?this.bvGroup.form:this.form)||null},computedSize:function(){return(this.isGroup?this.bvGroup.size:this.size)||""},computedState:function(){return this.isGroup?this.bvGroup.computedState:Object(u["b"])(this.state)?this.state:null},computedButtonVariant:function(){var t=this.buttonVariant;return t||(this.isGroup&&this.bvGroup.buttonVariant?this.bvGroup.buttonVariant:"secondary")},buttonClasses:function(){var t,e=this.computedSize;return["btn","btn-".concat(this.computedButtonVariant),(t={},P(t,"btn-".concat(e),e),P(t,"disabled",this.isDisabled),P(t,"active",this.isChecked),P(t,"focus",this.hasFocus),t)]},computedAttrs:function(){var t=this.isDisabled,e=this.isRequired;return w(w({},this.bvAttrs),{},{id:this.safeId(),type:this.isRadio?"radio":"checkbox",name:this.computedName,form:this.computedForm,disabled:t,required:e,"aria-required":e||null,"aria-label":this.ariaLabel||null,"aria-labelledby":this.ariaLabelledby||null})}},watch:(a={},P(a,S,(function(){this["".concat(S,"Watcher")].apply(this,arguments)})),P(a,"computedLocalChecked",(function(){this.computedLocalCheckedWatcher.apply(this,arguments)})),a),methods:(n={},P(n,"".concat(S,"Watcher"),(function(t){Object(p["a"])(t,this.computedLocalChecked)||(this.computedLocalChecked=t)})),P(n,"computedLocalCheckedWatcher",(function(t,e){Object(p["a"])(t,e)||this.$emit($,t)})),P(n,"handleChange",(function(t){var e=this,i=t.target.checked,a=this.value,n=i?a:null;this.computedLocalChecked=a,this.$nextTick((function(){e.$emit(o["d"],n),e.isGroup&&e.bvGroup.$emit(o["d"],n)}))})),P(n,"handleFocus",(function(t){t.target&&("focus"===t.type?this.hasFocus=!0:"blur"===t.type&&(this.hasFocus=!1))})),P(n,"focus",(function(){this.isDisabled||Object(b["d"])(this.$refs.input)})),P(n,"blur",(function(){this.isDisabled||Object(b["c"])(this.$refs.input)})),n),render:function(t){var e=this.isRadio,i=this.isBtnMode,a=this.isPlain,n=this.isCustom,r=this.isInline,c=this.isSwitch,o=this.computedSize,s=this.bvAttrs,u=this.normalizeSlot(),p=t("input",{class:[{"form-check-input":a,"custom-control-input":n,"position-static":a&&!u},i?"":this.stateClass],directives:[{name:"model",value:this.computedLocalChecked}],attrs:this.computedAttrs,domProps:{value:this.value,checked:this.isChecked},on:w({change:this.handleChange},i?{focus:this.handleFocus,blur:this.handleFocus}:{}),key:"input",ref:"input"});if(i){var l=t("label",{class:this.buttonClasses},[p,u]);return this.isGroup||(l=t("div",{class:["btn-group-toggle","d-inline-block"]},[l])),l}var d=t();return a&&!u||(d=t("label",{class:{"form-check-label":a,"custom-control-label":n},attrs:{for:this.safeId()}},u)),t("div",{class:[P({"form-check":a,"form-check-inline":a&&r,"custom-control":n,"custom-control-inline":n&&r,"custom-checkbox":n&&!e&&!c,"custom-switch":c,"custom-radio":n&&e},"b-custom-control-".concat(o),o&&!i),s.class],style:s.style},[p,d])}});function D(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function F(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?D(Object(i),!0).forEach((function(e){E(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):D(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function E(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var R="indeterminate",N=o["W"]+R,I=Object(h["d"])(Object(d["m"])(F(F({},_),{},(G={},E(G,R,Object(h["c"])(s["g"],!1)),E(G,"switch",Object(h["c"])(s["g"],!1)),E(G,"uncheckedValue",Object(h["c"])(s["a"],!1)),E(G,"value",Object(h["c"])(s["a"],!0)),G))),c["A"]),J=Object(r["c"])({name:c["A"],mixins:[L],inject:{getBvGroup:{from:"getBvCheckGroup",default:function(){return function(){return null}}}},props:I,computed:{bvGroup:function(){return this.getBvGroup()},isChecked:function(){var t=this.value,e=this.computedLocalChecked;return Object(u["a"])(e)?l(e,t)>-1:Object(p["a"])(e,t)},isRadio:function(){return!1}},watch:E({},R,(function(t,e){Object(p["a"])(t,e)||this.setIndeterminate(t)})),mounted:function(){this.setIndeterminate(this[R])},methods:{computedLocalCheckedWatcher:function(t,e){if(!Object(p["a"])(t,e)){this.$emit($,t);var i=this.$refs.input;i&&this.$emit(N,i.indeterminate)}},handleChange:function(t){var e=this,i=t.target,a=i.checked,n=i.indeterminate,r=this.value,c=this.uncheckedValue,s=this.computedLocalChecked;if(Object(u["a"])(s)){var p=l(s,r);a&&p<0?s=s.concat(r):!a&&p>-1&&(s=s.slice(0,p).concat(s.slice(p+1)))}else s=a?r:c;this.computedLocalChecked=s,this.$nextTick((function(){e.$emit(o["d"],s),e.isGroup&&e.bvGroup.$emit(o["d"],s),e.$emit(N,n)}))},setIndeterminate:function(t){Object(u["a"])(this.computedLocalChecked)&&(t=!1);var e=this.$refs.input;e&&(e.indeterminate=t,this.$emit(N,t))}}})}}]);