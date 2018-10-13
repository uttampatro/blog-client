webpackJsonp([13],{279:function(e,t,r){"use strict";function s(e){r(766)}Object.defineProperty(t,"__esModule",{value:!0});var i=r(723),a=r(769),o=r(82),n=s,l=o(i.a,a.a,!1,n,null,null);t.default=l.exports},723:function(e,t,r){"use strict";var s=r(768);t.a=s.a},766:function(e,t,r){var s=r(767);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);r(14)("ce9c1268",s,!0,{})},767:function(e,t,r){t=e.exports=r(13)(!1),t.push([e.i,"#registerPage{background-size:cover;min-height:100vh}#registerPage #registerBox{width:70%;min-height:70vh;margin:auto;margin-top:5vh;background:#fff;border-radius:5px}#registerPage #registerBox .marketing{background-size:cover;border-radius:5px 0 0 5px;padding:20px;text-align:center}#registerPage #registerBox .marketing .header{font-size:25px;color:#444;padding-top:25px}#registerPage #registerBox .marketing .bannerImg{width:100%;padding:20px}#registerPage #registerBox .marketing .points{color:#777;font-size:12px;text-align:left;line-height:30px}#registerPage #registerBox .registerContainer{padding-top:0;padding-bottom:20px;border-left:1px dashed #eee}#registerPage #registerBox .registerContainer .logoContainer{text-align:center;width:100%;margin-top:20px;font-size:40px}#registerPage #registerBox .registerContainer .logoContainer .logoIcon{height:50px}#registerPage #registerBox .registerContainer .registerHeader{font-size:17px;text-align:center;margin-top:10px;color:#555}#registerPage #registerBox .registerContainer .errorDiv{padding-top:20px;text-align:center;width:100%;color:red}#registerPage #registerBox .registerContainer .successDiv{padding-top:20px;text-align:center;width:100%;color:green}#registerPage #registerBox .registerContainer .registerForm{padding-left:30px;padding-right:30px;padding-top:25px}#registerPage #registerBox .registerContainer .registerForm .form-group{margin-bottom:20px}#registerPage #registerBox .registerContainer .registerForm .form-group label{color:#777;margin-bottom:-10px;font-size:13px}#registerPage #registerBox .registerContainer .registerForm .buttonContainer{text-align:center;padding-top:0}#registerPage #registerBox .registerContainer .registerForm .buttonContainer button{display:inline-block;width:100px;font-weight:400;text-align:center}",""])},768:function(e,t,r){"use strict";var s=r(268);r.n(s),r(267);t.a={name:"register",data:function(){return{companyCode:"",email:"",password:"",errorMsg:"",successMsg:"",mobile:"",first_name:"",last_name:""}},methods:{onRegisterSubmit:function(e){var t=this;this.errorMsg="",this.successMsg="";var r={first_name:this.first_name,last_name:this.last_name,email:this.email,password:this.password,mobile:this.mobile,companyCode:this.companyCode};e.preventDefault(),Object(s.registerUser)(r).then(function(e){e.data.success?(t.$store.dispatch("setLoginStatus",!0),t.$store.dispatch("setUserInfo",{first_name:e.data.userInfo.first_name,last_name:e.data.userInfo.last_name,companyCode:t.companyCode}),t.successMsg="Registered! Contact connect@growlytics.in to get started with "+t.companyCode+" projects setup."):t.errorMsg=e.data.message}).catch(function(e){console.log(e),t.errorMsg="Internal Error."})}}}},769:function(e,t,r){"use strict";var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row",attrs:{id:"registerPage"}},[r("div",{staticClass:"row",attrs:{id:"registerBox"}},[e._m(0),e._v(" "),r("div",{staticClass:"col-md-5 col-sm-12 col-xs-12  registerContainer"},[e._m(1),e._v(" "),r("div",{staticClass:"registerHeader"},[e._v("Create New Account")]),e._v(" "),""!=e.successMsg?r("div",{staticClass:"successDiv"},[e._v("\n        "+e._s(e.successMsg)+"\n      ")]):e._e(),e._v(" "),""!=e.errorMsg?r("div",{staticClass:"errorDiv"},[e._v("\n        "+e._s(e.errorMsg)+"\n      ")]):e._e(),e._v(" "),r("b-form",{staticClass:"registerForm",on:{submit:e.onRegisterSubmit}},[r("div",{staticClass:"flex",staticStyle:{display:"flex"}},[r("b-form-group",{attrs:{id:"nameInputGroup",label:"First Name","label-for":"nameInput"}},[r("el-input",{attrs:{id:"nameInput",size:"small",type:"text",required:""},model:{value:e.first_name,callback:function(t){e.first_name=t},expression:"first_name"}})],1),e._v(" "),r("b-form-group",{staticStyle:{"padding-left":"10px"},attrs:{id:"nameInputGroup",label:"Last Name","label-for":"nameInput"}},[r("el-input",{attrs:{id:"nameInput",size:"small",type:"text",required:""},model:{value:e.last_name,callback:function(t){e.last_name=t},expression:"last_name"}})],1)],1),e._v(" "),r("b-form-group",{attrs:{id:"companyInputGroup",label:"Organization Code","label-for":"companyInput"}},[r("el-input",{attrs:{id:"companyInput",size:"small",type:"text",required:""},model:{value:e.companyCode,callback:function(t){e.companyCode=t},expression:"companyCode"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"emailInputGroup",label:"Email Id","label-for":"emailInput"}},[r("el-input",{attrs:{id:"emailInput",size:"small",type:"text",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"mobileInputGroup",label:"Mobile Number(10 digits)","label-for":"mobileInput"}},[r("el-input",{attrs:{id:"mobileInput",size:"small",type:"text",required:""},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"passwordInputGroup",label:"Password","label-for":"passwordInput"}},[r("el-input",{attrs:{id:"passwordInput",size:"small",type:"password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),r("div",{staticClass:"buttonContainer"},[r("b-button",{staticClass:"el-button el-button--primary submitBtn",attrs:{type:"submit",variant:"primary"}},[e._v("Register")]),e._v(" "),r("el-button",{on:{click:function(t){e.$router.push({name:"Login"})}}},[e._v("Login")])],1)],1)],1)])])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col-md-7 col-sm-0 col-xs-0 marketing"},[r("div",{staticClass:"header"},[e._v("Get Product Insights Like Never Before")]),e._v(" "),r("img",{staticClass:"bannerImg",attrs:{src:"/static/img/login_bg.png"}}),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 points"},[r("i",{staticClass:"fas fa-video"}),e._v("   LIVE VIDEO OF CUSTOMER ACTIONS\n        ")]),e._v(" "),r("div",{staticClass:"col-md-6 points"},[r("i",{staticClass:"fas fa-bug"}),e._v("   DEBUG & RESOLVE ISSUES IN MINUTES\n        ")]),e._v(" "),r("div",{staticClass:"col-md-6 points"},[r("i",{staticClass:"fas fa-user-clock"}),e._v("   UNDERSTAND CUSTOMER BEHAVIOUR")]),e._v(" "),r("div",{staticClass:"col-md-6 points"},[r("i",{staticClass:"fas fa-server"}),e._v("   ANALYSE MICRO-SERVICE BEHAVIOURS\n        ")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logoContainer"},[r("img",{staticClass:"logoIcon",attrs:{src:"/static/img/logo/logo_dark_hr.png"}})])}],a={render:s,staticRenderFns:i};t.a=a}});
//# sourceMappingURL=13.build.js.map