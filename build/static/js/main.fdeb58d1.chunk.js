(this["webpackJsonpclient-niche-product-website-assignment-12"]=this["webpackJsonpclient-niche-product-website-assignment-12"]||[]).push([[0],{170:function(e,t,c){},171:function(e,t,c){},173:function(e,t,c){},183:function(e,t,c){},184:function(e,t,c){},185:function(e,t,c){},186:function(e,t,c){},207:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(44),a=c.n(i),r=(c(170),c(23)),l=c(24),o=(c(171),c(172),c(173),c.p+"static/media/team.2be7ce33.jpg"),j=c(254),d=c(243),b=c(255),h=c(7),u=c(58),x=c(145),O={apiKey:"AIzaSyAJzGvGkmb1w1cnm-9majAtQ2rRMe6w6RQ",authDomain:"car-mania-f1b76.firebaseapp.com",projectId:"car-mania-f1b76",storageBucket:"car-mania-f1b76.appspot.com",messagingSenderId:"583779582222",appId:"1:583779582222:web:32cebb8a0a62e510ac175f"},m=function(){Object(x.a)(O)},p=c(30),f=c.n(p);m();var v=function(){var e=Object(n.useState)({}),t=Object(h.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),a=Object(h.a)(i,2),r=a[0],l=a[1],o=Object(n.useState)(!0),j=Object(h.a)(o,2),d=j[0],b=j[1],x=Object(n.useState)(!1),O=Object(h.a)(x,2),m=O[0],p=O[1],v=Object(n.useState)(!1),g=Object(h.a)(v,2),y=g[0],N=g[1];console.log(c);var w=Object(u.c)(),S=new u.a,C=function(){Object(u.e)(w.currentUser).then((function(e){console.log(e)}))};Object(n.useEffect)((function(){var e=Object(u.d)(w,(function(e){s(e||{}),b(!1)}));return function(){return e}}),[]),Object(n.useEffect)((function(){fetch("https://rn-tech-valley-production.up.railway.app/users/".concat(c.email)).then((function(e){return e.json()})).then((function(e){return p(e.admin)}))}),[c.email]);var E=function(e,t,c){var n={email:e,displayName:t};fetch("https://rn-tech-valley-production.up.railway.app/users",{method:c,headers:{"content-type":"application/json"},body:JSON.stringify(n)}).then()};return{user:c,isLoading:d,authError:r,admin:m,registerUser:function(e,t,c,n){b(!0),Object(u.b)(w,e,t).then((function(t){l(""),s({email:e,displayName:c}),E(e,c,"POST"),Object(u.i)(w.currentUser,{displayName:c}).then((function(){})).catch((function(e){})),f()("REGESTERED SUCCESSFULLY"),n.replace("/login"),C()})).catch((function(e){l(e.message),console.log(e)})).finally((function(){return b(!1)}))},loginUser:function(e,t,c,n){b(!0),Object(u.f)(w,e,t).then((function(e){var t;N(!0);var s=(null===c||void 0===c||null===(t=c.state)||void 0===t?void 0:t.from)||"/";n.replace(s),f()("Login Succesfully"),l("")})).catch((function(e){l(e.message)})).finally((function(){return b(!1)}))},signInWithGoogle:function(e,t){b(!0),Object(u.g)(w,S).then((function(c){var n,s=c.user;console.log(s),N(!0),E(s.email,s.displayName,"PUT");var i=(null===e||void 0===e||null===(n=e.state)||void 0===n?void 0:n.from)||"/";t.replace(i),l("")})).catch((function(e){l(e.message)})).finally((function(){return b(!1)}))},login:y,logout:function(){b(!0),Object(u.h)(w).then((function(){N(!1)})).catch((function(e){})).finally((function(){return b(!1)}))}}},g=c(0),y=Object(n.createContext)(null),N=function(e){var t=e.children,c=v();return Object(g.jsx)(y.Provider,{value:c,children:t})},w=function(){return Object(n.useContext)(y)},S=function(){var e=w(),t=e.user,c=e.login,n=e.logout;return console.log(c),Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(j.a,{collapseOnSelect:!0,expand:"lg",bg:"black",variant:"dark",sticky:"top",children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(j.a.Brand,{href:"/home",children:Object(g.jsx)("h2",{children:"RN-Tech"})}),Object(g.jsx)(j.a.Toggle,{}),Object(g.jsxs)(j.a.Collapse,{className:"justify-content-end",children:[Object(g.jsx)(b.a.Link,{className:"text-white fw-bold fs-5",as:r.b,to:"/home",children:"Home"}),Object(g.jsx)(b.a.Link,{className:"text-white fw-bold fs-5",as:r.b,to:"/services",children:"Shop"}),c?Object(g.jsxs)("div",{className:"d-flex flex-row me-3",children:[Object(g.jsx)(b.a.Link,{className:"text-white fw-bold fs-5",as:r.b,to:"/dashboard",children:"Dashboard"}),Object(g.jsx)("button",{className:"btn btn-primary",onClick:n,children:"Logout"})]}):Object(g.jsx)(b.a.Link,{className:"text-white fw-bold fs-5",as:r.b,to:"/login",children:"Login"}),c?Object(g.jsxs)(j.a.Text,{children:["Signed in as: ",Object(g.jsx)("img",{src:null===t||void 0===t?void 0:t.photoURL,width:"50px",className:"img-fluid",style:{borderRadius:"50%"},alt:""})," ",null===t||void 0===t?void 0:t.displayName]}):""]})]})})})},C=(c(183),c(72)),E=c(148),k=c.n(E),D=c(93),P=c(123),T=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(k.a,{style:{backgroundColor:"blue"},color:"white",smooth:!0,top:"200"}),Object(g.jsx)("div",{className:"footer-container",children:Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-md-5",children:Object(g.jsxs)("div",{className:"left-container text-start",children:[Object(g.jsx)("h1",{children:"RN-Tech"}),Object(g.jsxs)("div",{className:"icons-container d-flex text-center ",children:[Object(g.jsx)("div",{className:"icon",children:Object(g.jsx)(C.a,{icon:D.b})}),Object(g.jsx)("div",{className:"icon",children:Object(g.jsx)(C.a,{icon:D.c})}),Object(g.jsx)("div",{className:"icon",children:Object(g.jsx)(C.a,{icon:D.d})}),Object(g.jsx)("div",{className:"icon",children:Object(g.jsx)(C.a,{icon:D.a})})]}),Object(g.jsx)("p",{className:"mt-4 "}),Object(g.jsx)("p",{className:"mt-5",children:Object(g.jsx)("small",{children:"RN-Tech \xa9 . All rights reserved."})})]})}),Object(g.jsx)("div",{className:"col-md-2",children:Object(g.jsx)("div",{className:"footer-menu-container",children:Object(g.jsxs)("ul",{children:[Object(g.jsx)(r.b,{className:"footer-menu text-decoration-none text-white pb-4",to:"/home",children:"Home"}),Object(g.jsx)("br",{}),Object(g.jsx)(r.b,{className:"footer-menu text-decoration-none text-white",to:"/services",children:"Shop"}),Object(g.jsx)("br",{}),Object(g.jsx)(r.b,{className:"footer-menu text-decoration-none text-white pb-4",to:"/login",children:"Login"}),Object(g.jsx)("br",{}),Object(g.jsx)(r.b,{className:"footer-menu text-decoration-none text-white pb-4",to:"/about",children:"About Us"})]})})}),Object(g.jsx)("div",{className:"col-md-5",children:Object(g.jsxs)("div",{className:"right-footer-container",children:[Object(g.jsxs)("h3",{children:["Sign up for ",Object(g.jsx)("br",{})," the RN-Tech"]}),Object(g.jsx)("input",{className:"footer-input",type:"text",placeholder:"Enter Email"}),Object(g.jsxs)("div",{className:"phone d-flex align-items-center mt-4",children:[Object(g.jsx)("div",{className:"footer-phone-icon",children:Object(g.jsx)(C.a,{icon:P.b})}),Object(g.jsx)("div",{children:Object(g.jsx)("h5",{children:"++1138303983722"})})]}),Object(g.jsxs)("div",{className:"map d-flex align-items-center",children:[Object(g.jsx)("div",{className:"footer-phone-icon",children:Object(g.jsx)(C.a,{icon:P.a})}),Object(g.jsx)("div",{children:Object(g.jsxs)("p",{children:["Tangail Sadar,",Object(g.jsx)("br",{}),"  Tangail-1902,Bangladesh"]})})]})]})})]})})})]})},R=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(S,{}),Object(g.jsxs)("div",{className:"container-fluid",children:[Object(g.jsx)("h1",{className:"text-center title",children:"About Us"}),Object(g.jsx)("div",{className:"general-info text-center",children:Object(g.jsxs)("div",{className:"row g-4",children:[Object(g.jsx)("div",{className:"col-md-1"}),Object(g.jsx)("div",{className:"col-md-5 ",children:Object(g.jsx)("h1",{children:"Hello. Our agency has been present for over 15 years in the market. We make the most of all our customers."})}),Object(g.jsx)("div",{className:"col-md-5"})]})}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-md-1"}),Object(g.jsxs)("div",{className:"col-md-5",children:[Object(g.jsx)("h3",{children:"Car-Mania team of guides"}),Object(g.jsx)("h1",{children:"Our dedicated"}),Object(g.jsx)("h1",{className:"about-title",children:"Holiday-Hype team"}),Object(g.jsx)("br",{}),Object(g.jsx)("p",{children:"Enthusiastically mesh long-term high-impact infrastructures vis-a-vis efficient customer service. Professionally fashion wireless leadership rather than prospective experiences."})]}),Object(g.jsx)("div",{className:"col-md-6 container-fluid",children:Object(g.jsx)("img",{src:o,width:"80%",alt:""})})]})]}),Object(g.jsx)(T,{})]})},L=c.p+"static/media/Screenshot 2021-11-18 025948.6067e967.png",A=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"mx-auto text-center m-4 py-4",children:Object(g.jsx)("h1",{style:{color:"goldenrod"},children:"Contact"})}),Object(g.jsx)("div",{className:"container contact-container container-fluid",children:Object(g.jsx)("div",{className:"contact-info",children:Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-md-6",children:[Object(g.jsx)("h2",{children:"Contact Info:"}),Object(g.jsx)("br",{}),Object(g.jsx)("hr",{}),Object(g.jsx)("h3",{children:"Postal Address:"}),Object(g.jsx)("p",{children:"466,East Goran, Dhaka ,Bangladesh"}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-md-6",children:[Object(g.jsx)("h3",{children:"Phone Number:"}),Object(g.jsx)("p",{children:"+9873645374"}),Object(g.jsx)("p",{children:"+9873645375"})]}),Object(g.jsxs)("div",{className:"col-md-6",children:[Object(g.jsx)("h3",{children:"Email:"}),Object(g.jsx)("p",{children:"rejaulhasanrasel28@gmail.com"}),Object(g.jsx)("p",{children:"car.mania01100@gmail.com"})]}),Object(g.jsx)("hr",{})]}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsxs)("div",{className:"col-md-6",children:[Object(g.jsx)("h3",{children:"Facebook :"}),Object(g.jsx)("p",{children:"www.faccebook.com/Car-Mania"})]}),Object(g.jsxs)("div",{className:"col-md-6",children:[Object(g.jsx)("h3",{children:"Skype:"}),Object(g.jsx)("p",{children:"www.skype.com/Car-Mania"})]}),Object(g.jsx)("hr",{})]})]}),Object(g.jsxs)("div",{className:"col-md-6",children:[Object(g.jsx)("h2",{className:"map",children:"Location Info :"}),Object(g.jsx)("br",{}),Object(g.jsx)("img",{className:"img-fluid",src:L,alt:""})]})]})})}),Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{className:"text-center bold",style:{color:"goldenrod"},children:"Contact With Us"}),Object(g.jsxs)("div",{className:"w-50 mt-4 mx-auto text-center",children:[Object(g.jsxs)("div",{class:"form-floating mt-3 mb-2",children:[Object(g.jsx)("input",{type:"email",name:"email",id:"floatingInput",placeholder:"name@example.com",class:"form-control"}),Object(g.jsx)("label",{for:"floatingInput",children:"Email address"})]}),Object(g.jsxs)("div",{class:"form-floating mb-2",children:[Object(g.jsx)("input",{type:"Name",name:"Name",id:"floatingName",placeholder:"Name",class:"form-control"}),Object(g.jsx)("label",{for:"floatingName",children:"Name"})]}),Object(g.jsx)("div",{children:Object(g.jsx)("textarea",{placeholder:"Type Your Problem",name:"instruction",id:"",cols:"40",rows:"4"})}),Object(g.jsx)("button",{class:" btn btn-lg btn-primary mb-4",type:"submit",children:"Submit "})]})]})]})},Y=c(272),I=c(266),U=c(263),M=c(271),B=c(260),W=function(e){var t=e.review;return Object(g.jsxs)(I.a,{sx:{mb:5},children:[Object(g.jsxs)(I.a,{className:"d-flex justify-content-start align-items-center gap-2",children:[Object(g.jsx)(U.a,{}),Object(g.jsx)(M.a,{children:null===t||void 0===t?void 0:t.name})]}),Object(g.jsxs)(I.a,{sx:{ml:2},children:[Object(g.jsxs)(M.a,{component:"legend",children:["Rating ",t.rating," out of 5"]}),Object(g.jsx)(B.a,{name:"read-only",value:null===t||void 0===t?void 0:t.rating,readOnly:!0,precision:.5})]}),Object(g.jsx)(I.a,{sx:{boxShadow:1},style:{width:"50%",padding:14,borderRadius:6,margin:8},children:Object(g.jsx)(M.a,{children:t.comment})})]})},F=(c(184),function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("https://rn-tech-valley-production.up.railway.app/user/review").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(Y.a,{className:"",style:{},children:[Object(g.jsxs)("h2",{children:["Customer Reviews ",c.length]}),Object(g.jsx)("hr",{className:"w-25"}),Object(g.jsx)(I.a,{style:{maxHeight:"50vh",overflow:"hidden",overflowY:"scroll"},className:"scrolling",children:c.map((function(e){return Object(g.jsx)(W,{review:e},e._id)}))})]})})}),H=c(257),_=c.p+"static/media/banner(3).d02b30b8.jpg",q=c.p+"static/media/banner (2).68f803cb.jpg",G=c.p+"static/media/banner (1).e00841a1.jpg",J=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)(H.a,{children:[Object(g.jsxs)(H.a.Item,{children:[Object(g.jsx)("img",{style:{height:"95vh"},className:"d-block w-100",src:_,alt:"Royal Enfield Classic 350"}),Object(g.jsxs)(H.a.Caption,{style:{color:"white"},children:[Object(g.jsx)("h1",{children:"JOIN OUR TECH WORLD"}),Object(g.jsx)("p",{children:"Originally launched in 2009, this Royal Enfield vehicle has since managed to find its way into the bucket list for most prospective bike buyers.the 5-speed manual gearbox of the bike provides plenty of freedom to riders."})]})]}),Object(g.jsxs)(H.a.Item,{children:[Object(g.jsx)("img",{style:{height:"80vh"},className:"d-block w-100",src:q,alt:"KTM RC 125"}),Object(g.jsxs)(H.a.Caption,{style:{color:"white"},children:[Object(g.jsx)("h1",{children:"BUY PRODUCTS AND MAKE YOUR TECH JOURNEY"}),Object(g.jsx)("p",{children:"Originally, the car was available in two primary colours. However, with the BS-VI variant rollout, KTM is offering three new livery colour options as well."})]})]}),Object(g.jsxs)(H.a.Item,{children:[Object(g.jsx)("img",{style:{height:"80vh"},className:"d-block w-100",src:G,alt:"Third slide"}),Object(g.jsxs)(H.a.Caption,{style:{color:"white"},children:[Object(g.jsx)("h1",{children:"QUALITY PRODUCT WITH BEST PRICE"}),Object(g.jsx)("p",{children:"The last name on the list is the Apache RTR 160 from TVS. In February 2020, the bike sold 32033 units. The single-cylinder, air-cooled and fuel-injected engine can generate a peak torque of 13.9Nm. "})]})]})]})})},V=(c(185),c(186),function(e){var t=e.service,c=e.handleDelete,n=e.admin,s=t._id,i=t.name,a=t.description,l=(t.Mileage,t.Engine,t.img),o=t.price;return Object(g.jsx)("div",{className:"col-12 col-md-4  mt-3 ",children:Object(g.jsxs)("div",{class:"card container ",children:[Object(g.jsx)("img",{src:l,class:"img-fluid ",alt:"..."}),Object(g.jsxs)("div",{class:"card-body",children:[Object(g.jsx)("h4",{class:"card-title text-center   ",children:i}),Object(g.jsx)("p",{class:"card-text",children:a.slice(0,150)}),Object(g.jsxs)("h3",{class:"text-center",children:[" Price: ",Object(g.jsxs)("span",{style:{color:"blue"},children:[o," Tk."]})]}),n?Object(g.jsx)("button",{onClick:function(){return c(s)},className:"rounded-pill px-3 py-2 btn text-white",style:{backgroundColor:"#ff6600"},children:"Remove"}):Object(g.jsx)(r.b,{to:"/booking/".concat(s),children:Object(g.jsx)("button",{className:"btn btn-danger",children:"Buy Now"})})]})]})})}),z=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("https://rn-tech-valley-production.up.railway.app/services").then((function(e){return e.json()})).then((function(e){s(e),console.log(e)}))}),[]),Object(g.jsxs)("div",{className:"mb-4 pt-5 bg",children:[Object(g.jsx)("h1",{className:"text-center text-warning",children:"OUR TECH-VALLEY"}),Object(g.jsx)("div",{className:"row container-fluid container mx-auto",children:c.slice(0,6).map((function(e){return Object(g.jsx)(V,{service:e},e._id)}))}),Object(g.jsx)(r.b,{to:"/services",children:Object(g.jsx)("div",{className:"mx-auto text-center",children:Object(g.jsx)("button",{className:"mb-5 btn btn-primary text-white",children:"See all Products"})})})]})},K=function(){return Object(g.jsxs)("div",{className:"overflow-hidden",children:[Object(g.jsx)(S,{}),Object(g.jsx)(J,{}),Object(g.jsx)(z,{}),Object(g.jsx)(F,{}),Object(g.jsx)(A,{}),Object(g.jsx)(T,{})]})},Q=c.p+"static/media/404.84e68107.jpg",$=function(){return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{className:"text-center",children:[Object(g.jsx)("img",{src:Q,className:"mx-auto text-center img-fluid",alt:""}),Object(g.jsx)("br",{}),Object(g.jsx)(r.b,{to:"/",children:Object(g.jsx)("button",{className:"btn btn-danger m-5",children:"Go Back"})})]})})},X=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("https://rn-tech-valley-production.up.railway.app/services").then((function(e){return e.json()})).then((function(e){s(e),console.log(e)}))}),[]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(S,{}),Object(g.jsxs)("div",{className:"my-4",children:[Object(g.jsx)("h1",{className:"text-center",children:"Choose Your Best One"}),Object(g.jsx)("div",{className:"row container mx-auto",children:c.map((function(e){return Object(g.jsx)(V,{service:e},e._id)}))})]}),Object(g.jsx)(T,{})]})},Z=c(9),ee=c(264),te=c(253),ce=c(265),ne=c(274),se=c(259),ie=c.p+"static/media/register.b9fc86dc.jpg",ae=function(){var e=Object(n.useState)({}),t=Object(h.a)(e,2),c=t[0],s=t[1],i=Object(l.g)(),a=w(),o=a.user,j=a.registerUser,d=a.isLoading,b=a.authError,u=function(e){var t=e.target.name,n=e.target.value,i=Object(Z.a)({},c);i[t]=n,s(i)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(S,{}),Object(g.jsx)(Y.a,{children:Object(g.jsxs)(ee.a,{container:!0,spacing:2,children:[Object(g.jsxs)(ee.a,{item:!0,sx:{mt:8},xs:12,md:6,children:[Object(g.jsx)(M.a,{variant:"body1",gutterBottom:!0,children:"Register"}),!d&&Object(g.jsxs)("form",{onSubmit:function(e){c.password===c.password2?(j(c.email,c.password,c.name,i),e.preventDefault()):f()("Oops","Password didn't match","error")},children:[Object(g.jsx)(te.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Name",name:"name",onBlur:u,variant:"standard"}),Object(g.jsx)(te.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Email",name:"email",type:"email",onBlur:u,variant:"standard"}),Object(g.jsx)(te.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Password",type:"password",name:"password",onBlur:u,variant:"standard"}),Object(g.jsx)(te.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"ReType Your Password",type:"password",name:"password2",onBlur:u,variant:"standard"}),Object(g.jsx)(ce.a,{sx:{width:"75%",m:1},type:"submit",variant:"contained",children:"Register"}),Object(g.jsx)(r.c,{style:{textDecoration:"none"},to:"/login",children:Object(g.jsx)(ce.a,{variant:"text",children:"Already Registered? Please Login"})})]}),d&&Object(g.jsx)(ne.a,{}),(null===o||void 0===o?void 0:o.email)&&Object(g.jsx)(se.a,{severity:"success",children:"User Created successfully!"}),b&&Object(g.jsx)(se.a,{severity:"error",children:b})]}),Object(g.jsx)(ee.a,{item:!0,xs:12,md:6,children:Object(g.jsx)("img",{className:"py-3",style:{width:"100%"},src:ie,alt:""})})]})}),Object(g.jsx)(T,{})]})},re=(c.p,function(){var e=Object(n.useState)({}),t=Object(h.a)(e,2),c=t[0],s=t[1],i=w(),a=(i.user,i.login),o=i.loginUser,j=i.signInWithGoogle,d=i.isLoading,b=i.authError,u=Object(l.h)(),x=Object(l.g)(),O=function(e){var t=e.target.name,n=e.target.value,i=Object(Z.a)({},c);i[t]=n,s(i)};return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(S,{}),Object(g.jsx)(Y.a,{children:Object(g.jsxs)(ee.a,{container:!0,spacing:2,children:[Object(g.jsxs)(ee.a,{item:!0,sx:{mt:8},xs:12,md:6,children:[Object(g.jsx)(M.a,{variant:"body1",gutterBottom:!0,children:"Login"}),Object(g.jsxs)("form",{onSubmit:function(e){o(c.email,c.password,u,x),e.preventDefault()},children:[Object(g.jsx)(te.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Email",name:"email",onChange:O,variant:"standard"}),Object(g.jsx)(te.a,{sx:{width:"75%",m:1},id:"standard-basic",label:"Your Password",type:"password",name:"password",onChange:O,variant:"standard"}),Object(g.jsx)(ce.a,{sx:{width:"75%",m:1},type:"submit",variant:"contained",children:"Login"}),Object(g.jsx)(r.c,{style:{textDecoration:"none"},to:"/register",children:Object(g.jsx)(ce.a,{variant:"text",children:"New User? Please Register"})}),d&&Object(g.jsx)(ne.a,{}),!a&&Object(g.jsx)(se.a,{severity:"success",children:"Please Login!"}),b&&Object(g.jsx)(se.a,{severity:"error",children:b})]}),Object(g.jsx)("p",{children:"------------------------"}),Object(g.jsx)(ce.a,{onClick:function(){j(u,x)},variant:"contained",children:"Google Sign In"})]}),Object(g.jsx)(ee.a,{item:!0,xs:12,md:6,children:Object(g.jsx)("img",{className:"py-3",style:{width:"100%"},src:a,alt:""})})]})}),Object(g.jsx)(T,{})]})}),le=c(109),oe=function(){var e,t=Object(n.useState)({}),c=Object(h.a)(t,2),s=c[0],i=c[1],a=Object(l.i)().serviceId,r=w().user,o=Object(l.g)();Object(n.useEffect)((function(){fetch("https://rn-tech-valley-production.up.railway.app/services/".concat(a)).then((function(e){return e.json()})).then((function(e){return i(e)}))}),[]);var j=Object(le.a)(),d=j.register,b=j.handleSubmit,u=j.reset;return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(S,{}),Object(g.jsxs)("div",{className:"container my-4",children:[Object(g.jsxs)("h2",{className:"my-4 text-center",children:["Order ",null===s||void 0===s?void 0:s.name]}),Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col-md-6",children:Object(g.jsxs)("div",{className:"card",style:{width:"18rem"},children:[Object(g.jsx)("img",{src:null===s||void 0===s?void 0:s.img,className:"card-img-top",alt:"..."}),Object(g.jsxs)("div",{className:"card-body",children:[Object(g.jsx)("h4",{className:"card-title",children:null===s||void 0===s?void 0:s.name}),Object(g.jsx)("p",{className:"card-text",children:null===s||void 0===s||null===(e=s.description)||void 0===e?void 0:e.slice(0,250)}),Object(g.jsxs)("h3",{children:["Price: ",Object(g.jsxs)("span",{style:{color:"goldenrod"},children:[null===s||void 0===s?void 0:s.price,"$"]})]})]})]})}),Object(g.jsx)("div",{className:"col-md-6 d-flex flex-column align-items-start justify-content-center",children:Object(g.jsxs)("form",{onSubmit:b((function(e){e.carName=null===s||void 0===s?void 0:s.name,e.price=null===s||void 0===s?void 0:s.price,e.img=null===s||void 0===s?void 0:s.img,e.state="pending",fetch("https://rn-tech-valley-production.up.railway.app/addEvent",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return console.log(e)})),console.log(e),o.push("/home"),f()("Congratulation!","You have added successfully","success"),u()})),className:"d-flex justify-content-center align-items center flex-column w-50 text-center mx-auto",children:[Object(g.jsx)("input",Object(Z.a)({className:"mb-2",placeholder:"Enter Your Address"},d("address",{required:!0}))),Object(g.jsx)("input",Object(Z.a)({className:"mb-2",placeholder:"Enter the UserName",defaultValue:null===r||void 0===r?void 0:r.displayName},d("userName",{required:!0,maxLength:100}))),Object(g.jsx)("input",Object(Z.a)({className:"mb-2",type:"email",placeholder:"Enter Your email",defaultValue:null===r||void 0===r?void 0:r.email},d("email",{required:!0,maxLength:100}))),Object(g.jsx)("input",Object(Z.a)({className:"mb-2",type:"number",placeholder:"Enter Your Phone No"},d("phone",{required:!0,maxLength:100}))),Object(g.jsx)("input",Object(Z.a)({className:"mb-2",placeholder:"Travel date",type:"date"},d("deliverDate",{required:!0}))),Object(g.jsx)("input",{className:"btn btn-warning text-white",type:"Submit"})]})})]})]}),Object(g.jsx)(T,{})]})},je=c(21),de=["children"],be=function(e){var t=e.children,c=Object(je.a)(e,de),n=w(),s=n.user;return n.isLoading?Object(g.jsx)(ne.a,{}):Object(g.jsx)(l.b,Object(Z.a)(Object(Z.a)({},c),{},{render:function(e){var c=e.location;return s.email?t:Object(g.jsx)(l.a,{to:{pathname:"/login",state:{from:c}}})}}))},he=function(){return Object(g.jsx)("div",{className:"m-4",children:Object(g.jsx)("h2",{children:"Payment System coming soon."})})},ue=c(251),xe=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1];console.log(c);var i=w().user;Object(n.useEffect)((function(){fetch("https://rn-tech-valley-production.up.railway.app/myEvents/".concat(null===i||void 0===i?void 0:i.email)).then((function(e){return e.json()})).then((function(e){return s(e)}))}),[i.email]);return Object(g.jsxs)("div",{className:"container-fluid",children:[Object(g.jsx)("h2",{children:"My Events"}),Object(g.jsxs)(ue.a,{striped:!0,bordered:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"col",children:"#"}),Object(g.jsx)("th",{scope:"col",children:"Product Name Name"}),Object(g.jsx)("th",{scope:"col",children:"Product Name Image"}),Object(g.jsx)("th",{scope:"col",children:"User Name"}),Object(g.jsx)("th",{scope:"col",children:"User Email"}),Object(g.jsx)("th",{scope:"col",children:"Deliver Date"}),Object(g.jsx)("th",{scope:"col",children:"Address"}),Object(g.jsx)("th",{scope:"col",children:"Phone Number"}),Object(g.jsx)("th",{scope:"col",children:"Cancel"})]})}),c.map((function(e,t){return Object(g.jsx)("tbody",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:t+1}),Object(g.jsx)("td",{children:null===e||void 0===e?void 0:e.carName}),Object(g.jsxs)("td",{children:[Object(g.jsx)("img",{src:null===e||void 0===e?void 0:e.img,width:"100px",style:{borderRadius:"50%"},className:"img-fluid",alt:""})," "]}),Object(g.jsx)("td",{children:null===e||void 0===e?void 0:e.userName}),Object(g.jsx)("td",{children:null===e||void 0===e?void 0:e.email}),Object(g.jsx)("td",{children:null===e||void 0===e?void 0:e.deliverDate}),Object(g.jsx)("td",{children:null===e||void 0===e?void 0:e.address}),Object(g.jsx)("td",{children:null===e||void 0===e?void 0:e.phone}),Object(g.jsx)("td",{children:Object(g.jsx)("button",{onClick:function(){return t=e._id,void f()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this file!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e?(fetch("https://rn-tech-valley-production.up.railway.app/deleteEvents/".concat(t),{method:"Delete",headers:{"content-type":"application/json"}},[]).then((function(e){return e.json()})).then((function(e){if(e.deletedCount){var n=c.filter((function(e){return e._id!==t}));s(n)}})),f()("Your file has been deleted!",{icon:"success"})):f()("Your file is safe!")}));var t},className:"btn btn-danger text-white",children:"Delete"})})]})},null===e||void 0===e?void 0:e._id)}))]})]})},Oe=c(270),me=c(252),pe=c(269),fe=c(262),ve=c(267),ge=c(151),ye=c.n(ge),Ne=c(268),we=function(){return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{style:{textAlign:"center",marginTop:120},children:[Object(g.jsx)("h1",{children:"Choose Your Option"}),Object(g.jsx)("hr",{className:"w-50 mx-auto"})]})})},Se=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1],i=w().admin;Object(n.useEffect)((function(){fetch("https://rn-tech-valley-production.up.railway.app/services").then((function(e){return e.json()})).then((function(e){s(e),console.log(e)}))}),[]);var a=function(e){console.log(e),f()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this file!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){t?(fetch("https://rn-tech-valley-production.up.railway.app/deleteService/".concat(e),{method:"Delete",headers:{"content-type":"application/json"}},[]).then((function(e){return e.json()})).then((function(t){if(t.deletedCount){var n=c.filter((function(t){return t._id!==e}));s(n)}})),f()("Your file has been deleted!",{icon:"success"})):f()("Your file is safe!")}))};return Object(g.jsxs)("div",{className:"my-4",children:[Object(g.jsx)("h1",{className:"text-center",children:"Explore the Products"}),Object(g.jsx)("div",{className:"row container-fluid container mx-auto",children:c.map((function(e){return Object(g.jsx)(V,{service:e,admin:i,handleDelete:a},e._id)}))})]})},Ce=c(150),Ee=c.n(Ce),ke=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1];console.log(c);var i=w().user;Object(n.useEffect)((function(){fetch("https://rn-tech-valley-production.up.railway.app/allEvents").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[i.email]);return Object(g.jsxs)("div",{className:"container-fluid",children:[Object(g.jsx)("h2",{className:"text-center",children:"All Orders"}),Object(g.jsxs)(ue.a,{striped:!0,bordered:!0,children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{scope:"col",children:"#"}),Object(g.jsx)("th",{scope:"col",children:"Products"}),Object(g.jsx)("th",{scope:"col",children:"Name"}),Object(g.jsx)("th",{scope:"col",children:"Email"}),Object(g.jsx)("th",{scope:"col",children:"Address"}),Object(g.jsx)("th",{scope:"col",children:"Status"}),Object(g.jsx)("th",{scope:"col",children:"Action"}),Object(g.jsx)("th",{scope:"col",children:"Confirm"})]})}),c.map((function(e,t){return Object(g.jsx)("tbody",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:t+1}),Object(g.jsx)("td",{children:null===e||void 0===e?void 0:e.carName}),Object(g.jsx)("td",{children:null===e||void 0===e?void 0:e.userName}),Object(g.jsx)("td",{children:null===e||void 0===e?void 0:e.email}),Object(g.jsx)("td",{children:null===e||void 0===e?void 0:e.address}),Object(g.jsx)("td",{children:null===e||void 0===e?void 0:e.state}),Object(g.jsx)("td",{children:Object(g.jsx)("button",{onClick:function(){return t=e._id,void f()({title:"Are you sure?",text:"Once deleted, you will not be able to recover this file!",icon:"warning",buttons:!0,dangerMode:!0}).then((function(e){e?(fetch("https://rn-tech-valley-production.up.railway.app/deleteEvents/".concat(t),{method:"Delete",headers:{"content-type":"application/json"}},[]).then((function(e){return e.json()})).then((function(e){if(e.deletedCount){var n=c.filter((function(e){return e._id!==t}));s(n)}})),f()("Your file has been deleted!",{icon:"success"})):f()("Your file is safe!")}));var t},className:"btn btn-danger text-white",children:"Delete"})}),Object(g.jsx)("td",{children:Object(g.jsx)("button",{onClick:function(){return t=null===e||void 0===e?void 0:e._id,n=e,console.log(null===n||void 0===n?void 0:n.state),void("pending"===(null===n||void 0===n?void 0:n.state)&&Ee.a.put("https://rn-tech-valley-production.up.railway.app/updateState/".concat(t),{state:"Shipped"}).then((function(e){if(e.data.modifiedCount){console.log(e.data),n.state="Shipped";var i=c.map((function(e){return e._id===t?n:e}));s(i),f()("Congratulations!","Your Order is Shipped successfully","success")}})));var t,n},className:"btn btn-primary",children:"Payment"})})]})})}))]})]})},De=function(){var e=Object(n.useState)(!1),t=Object(h.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)(""),a=Object(h.a)(i,2),r=a[0],l=a[1];return Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"Make an admin"}),Object(g.jsxs)("form",{onSubmit:function(e){var t={email:r};fetch("https://rn-tech-valley-production.up.railway.app/users/adminAdd",{method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.modifiedCount&&(console.log(e),s(!0))})),e.preventDefault()},children:[Object(g.jsx)(te.a,{sx:{width:"50%"},label:"Email",type:"email",onBlur:function(e){l(e.target.value)},variant:"standard"}),Object(g.jsx)(ce.a,{type:"submit",variant:"contained",children:"Make Admin"})]}),c&&Object(g.jsx)(se.a,{severity:"success",children:"Made Admin successfully!"})]})},Pe=function(){var e=Object(l.g)(),t=Object(le.a)(),c=t.register,n=t.handleSubmit,s=t.reset;return Object(g.jsx)("div",{children:Object(g.jsx)("div",{className:"container form text-center mx-auto my-4",children:Object(g.jsxs)("form",{onSubmit:n((function(t){console.log(t),fetch("https://rn-tech-valley-production.up.railway.app/addServices",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(t){console.log(t),t.insertedId&&(f()("Congratulation!","You have added the service","success"),s(),e.push("/home"))}))})),className:"d-flex justify-content-center align-items center flex-column w-50 text-center mx-auto",children:[Object(g.jsx)("input",Object(Z.a)({className:"mb-2",placeholder:"Enter Name of the Product"},c("name",{required:!0,maxLength:200}))),Object(g.jsx)("input",Object(Z.a)({className:"mb-2",placeholder:"Enter the Description"},c("description",{required:!0,maxLength:1e4}))),Object(g.jsx)("input",Object(Z.a)({className:"mb-2",placeholder:"Enter Product Image url"},c("img",{required:!0,maxLength:1e4}))),Object(g.jsx)("input",Object(Z.a)({className:"mb-2",type:"number",placeholder:"Enter the Price"},c("price",{required:!0}))),Object(g.jsx)("input",{className:"btn btn-primary text-white",type:"submit"})]})})})},Te=function(){var e=s.a.useState(0),t=Object(h.a)(e,2),c=t[0],n=t[1],i=s.a.useState(""),a=Object(h.a)(i,2),r=a[0],l=a[1],o=s.a.useState(!1),j=Object(h.a)(o,2),b=j[0],u=j[1],x=w().user;return Object(g.jsx)("div",{children:Object(g.jsxs)(d.a,{style:{textAlign:"center",marginTop:100},children:[Object(g.jsx)("h1",{children:"Give your Comment"}),Object(g.jsx)(te.a,{id:"outlined-multiline-static",label:"Your Comment ",value:r,onChange:function(e){return l(e.target.value)},multiline:!0,rows:4,style:{width:"50%"}})," ",Object(g.jsx)("br",{}),Object(g.jsx)(M.a,{component:"legend",children:"Your Rating"}),Object(g.jsx)(B.a,{name:"simple-controlled",value:c,onChange:function(e,t){n(t)},precision:.5}),Object(g.jsx)("br",{}),Object(g.jsx)(ce.a,{onClick:function(e){e.preventDefault(),console.log(r,c);var t={name:x.displayName,comment:r,rating:c};fetch("https://rn-tech-valley-production.up.railway.app/user/review",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log(e),l(""),n(0),u(!0)}))},variant:"contained",style:{width:"40%"},children:"Submit"}),b&&Object(g.jsx)(se.a,{severity:"success",children:"Your Comment Successfully Submitted....."})]})})},Re=["children"],Le=function(e){var t=e.children,c=Object(je.a)(e,Re),n=w(),s=n.user,i=n.admin;return n.isLoading?Object(g.jsx)(ne.a,{}):Object(g.jsx)(l.b,Object(Z.a)(Object(Z.a)({},c),{},{render:function(e){var c=e.location;return s.email&&i?t:Object(g.jsx)(l.a,{to:{pathname:"/",state:{from:c}}})}}))},Ae=240;var Ye=function(e){var t=e.window,c=n.useState(!1),s=Object(h.a)(c,2),i=s[0],a=s[1],o=Object(l.j)(),j=o.path,d=o.url,b=w(),u=b.user,x=b.admin,O=b.logout;console.log(x);var m=function(){a(!i)},p=Object(n.useState)([]),f=Object(h.a)(p,2),v=f[0],y=f[1];console.log(v),Object(n.useEffect)((function(){fetch("https://rn-tech-valley-production.up.railway.app/allEvents").then((function(e){return e.json()})).then((function(e){return y(e)}))}),[u.email]);var N=Object(n.useState)([]),S=Object(h.a)(N,2),C=S[0],E=S[1];Object(n.useEffect)((function(){fetch("https://rn-tech-valley-production.up.railway.app/myEvents/".concat(null===u||void 0===u?void 0:u.email)).then((function(e){return e.json()})).then((function(e){return E(e)}))}),[u.email]);var k=Object(g.jsxs)("div",{children:[Object(g.jsx)(Ne.a,{}),Object(g.jsx)(pe.a,{}),Object(g.jsxs)(I.a,{sx:{mt:1},children:[x?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(r.b,{style:{textDecoration:"none"},to:"/",children:Object(g.jsx)(ce.a,{fullWidth:!0,children:"Home"})}),Object(g.jsx)(r.b,{style:{textDecoration:"none"},to:"".concat(d,"/allOrders"),children:Object(g.jsx)(ce.a,{fullWidth:!0,children:"Manage All Services"})}),Object(g.jsx)(r.b,{to:"".concat(d,"/manageService"),style:{textDecoration:"none"},children:Object(g.jsxs)(ce.a,{fullWidth:!0,children:["Manage Orders ",Object(g.jsxs)("span",{className:"ms-4 text-danger fw-bold fs-2 p-0",children:[v.length," ",Object(g.jsx)("span",{className:"fs-6",children:"new"})]})]})}),Object(g.jsx)(r.b,{to:"".concat(d,"/addService"),style:{textDecoration:"none"},children:Object(g.jsx)(ce.a,{fullWidth:!0,children:"Add A Service"})}),Object(g.jsx)(r.b,{to:"".concat(d,"/addAdmin"),style:{textDecoration:"none"},children:Object(g.jsx)(ce.a,{fullWidth:!0,children:"Make Admin"})})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(r.b,{style:{textDecoration:"none"},to:"/",children:Object(g.jsx)(ce.a,{fullWidth:!0,children:"Home"})}),Object(g.jsx)(r.b,{style:{textDecoration:"none"},to:"".concat(d,"/pay"),children:Object(g.jsx)(ce.a,{fullWidth:!0,children:"Payment"})}),Object(g.jsx)(r.b,{style:{textDecoration:"none"},to:"".concat(d,"/myOrder"),children:Object(g.jsxs)(ce.a,{fullWidth:!0,children:["My Orders ",Object(g.jsxs)("span",{className:"ms-4 text-danger fw-bold fs-2 p-0",children:[C.length," ",Object(g.jsx)("span",{className:"fs-6"})]})]})}),Object(g.jsx)(r.b,{style:{textDecoration:"none"},to:"".concat(d,"/review"),children:Object(g.jsx)(ce.a,{fullWidth:!0,children:"Review"})})]}),Object(g.jsx)(ce.a,{onClick:O,fullWidth:!0,children:"Logout"})]})]}),D=void 0!==t?function(){return t().document.body}:void 0;return Object(g.jsxs)(I.a,{sx:{display:"flex"},children:[Object(g.jsx)(me.a,{}),Object(g.jsx)(Oe.a,{position:"fixed",sx:{width:{sm:"calc(100% - ".concat(Ae,"px)")},ml:{sm:"".concat(Ae,"px")},boxShadow:0},children:Object(g.jsxs)(Ne.a,{children:[Object(g.jsx)(ve.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:m,sx:{mr:2,display:{sm:"none"}},children:Object(g.jsx)(ye.a,{})}),Object(g.jsx)(M.a,{variant:"h6",noWrap:!0,component:"div",children:"Dashboard"})]})}),Object(g.jsxs)(I.a,{component:"nav",sx:{width:{sm:Ae},flexShrink:{sm:0}},"aria-label":"mailbox folders",children:[Object(g.jsx)(fe.a,{container:D,variant:"temporary",open:i,onClose:m,ModalProps:{keepMounted:!0},sx:{display:{xs:"block",sm:"none"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:Ae}},children:k}),Object(g.jsx)(fe.a,{variant:"permanent",sx:{display:{xs:"none",sm:"block"},"& .MuiDrawer-paper":{boxSizing:"border-box",width:Ae}},open:!0,children:k})]}),Object(g.jsxs)(I.a,{component:"main",sx:{flexGrow:1,p:3,width:{sm:"calc(100% - ".concat(Ae,"px)")}},children:[Object(g.jsx)(Ne.a,{}),Object(g.jsx)(M.a,{paragraph:!0,children:Object(g.jsxs)(l.d,{children:[Object(g.jsx)(l.b,{exact:!0,path:j,children:Object(g.jsx)(we,{})}),Object(g.jsx)(l.b,{path:"".concat(j,"/pay"),children:Object(g.jsx)(he,{})}),Object(g.jsx)(l.b,{path:"".concat(j,"/myOrder"),children:Object(g.jsx)(xe,{})}),Object(g.jsx)(Le,{path:"".concat(j,"/allOrders"),children:Object(g.jsx)(Se,{})}),Object(g.jsx)(Le,{path:"".concat(j,"/manageService"),children:Object(g.jsx)(ke,{})}),Object(g.jsx)(Le,{path:"".concat(j,"/addAdmin"),children:Object(g.jsx)(De,{})}),Object(g.jsx)(Le,{path:"".concat(j,"/addService"),children:Object(g.jsx)(Pe,{})}),Object(g.jsx)(l.b,{path:"".concat(j,"/review"),children:Object(g.jsx)(Te,{})})]})})]})]})};var Ie=function(){return Object(g.jsx)(N,{children:Object(g.jsx)(r.a,{children:Object(g.jsxs)(l.d,{children:[Object(g.jsx)(l.b,{exact:!0,path:"/",children:Object(g.jsx)(K,{})}),Object(g.jsx)(l.b,{path:"/home",children:Object(g.jsx)(K,{})}),Object(g.jsx)(l.b,{path:"/services",children:Object(g.jsx)(X,{})}),Object(g.jsx)(be,{path:"/booking/:serviceId",children:Object(g.jsx)(oe,{})}),Object(g.jsx)(l.b,{path:"/about",children:Object(g.jsx)(R,{})}),Object(g.jsx)(be,{path:"/pay",children:Object(g.jsx)(he,{})}),Object(g.jsx)(be,{path:"/myOrders",children:Object(g.jsx)(xe,{})}),Object(g.jsx)(be,{path:"/review",children:Object(g.jsx)(F,{})}),Object(g.jsx)(be,{path:"/dashboard",children:Object(g.jsx)(Ye,{})}),Object(g.jsx)(l.b,{path:"/login",children:Object(g.jsx)(re,{})}),Object(g.jsx)(l.b,{path:"/register",children:Object(g.jsx)(ae,{})}),Object(g.jsx)(l.b,{path:"/contact",children:Object(g.jsx)(A,{})}),Object(g.jsx)(l.b,{path:"*",children:Object(g.jsx)($,{})})]})})})},Ue=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,275)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(Ie,{})}),document.getElementById("root")),Ue()}},[[207,1,2]]]);
//# sourceMappingURL=main.fdeb58d1.chunk.js.map