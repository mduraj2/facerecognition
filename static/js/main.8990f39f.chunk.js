(this.webpackJsonpfacerecognitionbrain=this.webpackJsonpfacerecognitionbrain||[]).push([[0],{344:function(e,t,n){"use strict";n.r(t);var a=n(9),s=n.n(a),i=n(76),o=n.n(i),r=(n(83),n(20)),c=n(21),l=n(23),h=n(22),d=(n(84),n(2)),b=function(e){var t=e.onRouteChange;return e.isSignedIn?Object(d.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(d.jsx)("p",{onClick:function(){return t("signOut")},className:"f3 lik dim black underline pa3 pointer",children:"Sign Out"})}):Object(d.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(d.jsx)("p",{onClick:function(){return t("signIn")},className:"f3 lik dim black underline pa3 pointer",children:"Sign In"}),Object(d.jsx)("p",{onClick:function(){return t("register")},className:"f3 lik dim black underline pa3 pointer",children:"Register"})]})},u=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this)).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){fetch("http://localhost:3001/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={signInEmail:"",signInPassword:""},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this,t=this.props.onRouteChange;return Object(d.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(d.jsx)("main",{className:"pa4 black-80",children:Object(d.jsxs)("form",{className:"measure",children:[Object(d.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(d.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(d.jsxs)("div",{className:"mv3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange,onKeyPress:function(t){"Enter"===t.key&&e.onSubmitSignIn()}})]})]}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"button",value:"Sign in"})}),Object(d.jsx)("div",{className:"lh-copy mt3",children:Object(d.jsx)("p",{onClick:function(){return t("register")},className:"f6 link dim black db pointer",children:"Register"})})]})})})}}]),n}(s.a.Component),m=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this)).onNameChange=function(e){a.setState({name:e.target.value})},a.onEmailChange=function(e){a.setState({email:e.target.value})},a.onPasswordChange=function(e){a.setState({password:e.target.value})},a.onSubmitSignIn=function(){fetch("http://localhost:3001/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password,name:a.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home"))}))},a.state={email:"",password:"",name:""},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(d.jsx)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:Object(d.jsx)("main",{className:"pa4 black-80",children:Object(d.jsxs)("form",{className:"measure",children:[Object(d.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(d.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name",onChange:this.onNameChange})]}),Object(d.jsxs)("div",{className:"mt3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address",children:"Email"}),Object(d.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",onChange:this.onEmailChange})]}),Object(d.jsxs)("div",{className:"mv3",children:[Object(d.jsx)("label",{className:"db fw6 lh-copy f6",htmlFor:"password",children:"Password"}),Object(d.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange,onKeyPress:function(t){"Enter"===t.key&&e.onSubmitSignIn()}})]})]}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"button",value:"Register"})})]})})})}}]),n}(s.a.Component),g=(n(86),function(e){var t=e.imageUrl,n=e.box;return Object(d.jsx)("div",{className:"center na",children:Object(d.jsxs)("div",{className:"absolute mt2",children:[Object(d.jsx)("img",{id:"inputImage",alt:"",src:t,width:"500px",height:"auto"}),Object(d.jsx)("div",{className:"bounding-box",style:{top:n.topRow,right:n.rightCol,bottom:n.bottomRow,left:n.leftCol}})]})})}),j=n(77),p=(n(87),function(){return Object(d.jsx)("div",{className:"ma4 mt0",children:Object(d.jsx)(j.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:120,width:120},children:Object(d.jsx)("div",{className:"Tilt-inner pa3",children:Object(d.jsx)("img",{style:{paddingTop:"10px"},alt:"logo",src:"data:image/png;base64,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"})})})})}),f=(n(88),function(e){var t=e.onInputChange,n=e.onButtonSubmit;return Object(d.jsxs)("div",{className:"ma4 mt0",children:[Object(d.jsx)("p",{className:"f3",children:"This Magic Brain will detect faces in your picture. Give it a try"}),Object(d.jsx)("div",{className:"center",children:Object(d.jsxs)("div",{className:"form center pa4 br3 shadow-5",children:[Object(d.jsx)("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),Object(d.jsx)("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:n,children:"Detect"})]})})]})}),O=function(e){var t=e.name,n=e.entries;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"white f3",children:"".concat(t,", your current entry count is")}),Object(d.jsx)("div",{className:"white f1",children:"".concat(n)})]})},w=n(78),x=n.n(w),N={particles:{number:{value:40,density:{enable:!0,value_area:800}}}},A={input:"",imageUrl:"",box:{},route:"signIn",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},v=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputImage"),a=Number(n.width),s=Number(n.height);return{leftCol:t.left_col*a,topRow:t.top_row*s,rightCol:a-t.right_col*a,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),fetch("http://localhost:3001/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("http://localhost:3001/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signOut"===t?e.setState(A):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state=A,e}return Object(c.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(x.a,{className:"particles",params:{particlesOptions:N}}),Object(d.jsx)(b,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange}),"home"===this.state.route?Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{}),Object(d.jsx)(O,{name:this.state.user.name,entries:this.state.user.entries}),Object(d.jsx)(f,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),Object(d.jsx)(g,{box:this.state.box,imageUrl:this.state.imageUrl})]}):"signIn"===this.state.route||"signOut"===this.state.route?Object(d.jsx)(u,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):Object(d.jsx)(m,{loadUser:this.loadUser,onRouteChange:this.onRouteChange})]})}}]),n}(a.Component),C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,345)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};n(343);o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root")),C()},83:function(e,t,n){},84:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){}},[[344,1,2]]]);
//# sourceMappingURL=main.8990f39f.chunk.js.map