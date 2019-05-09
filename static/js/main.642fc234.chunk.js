(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{60:function(e){e.exports=[{title:"Select campaign settings",description:"For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more."},{title:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{title:"Create an ad",description:"Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues."}]},65:function(e,t,a){e.exports=a(89)},70:function(e,t,a){},71:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),c=a.n(o),i=(a(70),a(11)),l=a(12),s=(a(71),a(134)),u=(a(72),a(122)),m=a(123),d=a(124),p=function(e){var t=e.timezone;return r.a.createElement("div",{className:{flexGrow:1}},r.a.createElement(u.a,{position:"fixed",color:"primary"},r.a.createElement(m.a,null,r.a.createElement(d.a,{variant:"h6",color:"inherit",style:{color:"white"}},t))))},y=a(91),h=a(125),f=a(126),g=a(57),v=a.n(g),b=a(58),E=a.n(b),w=Object(y.a)({root:{display:"flex"}}),j=function(e){var t=w(),a=r.a.useState("recents"),n=Object(l.a)(a,2),o=n[0],c=n[1];return r.a.createElement(h.a,{value:o,onChange:function(e,t){c(t)},className:t.root},r.a.createElement(f.a,{label:"Favorites",value:"favorites",icon:r.a.createElement(v.a,null)}),r.a.createElement(f.a,{label:"Nearby",value:"nearby",icon:r.a.createElement(E.a,null)}))},O=a(130),S=a(39),k=a.n(S),N=a(136),C=a(48),x=a.n(C),A=a(59),B=function(e){var t=e.country,a=e.city,r="https://api.aladhan.com/v1/timingsByCity?city=".concat(a,"&country=").concat(t,"&method=8"),o=Object(n.useState)({}),c=Object(l.a)(o,2),i=c[0],s=c[1];function u(){return(u=Object(A.a)(x.a.mark(function e(){var t,a;return x.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(r,{headers:{Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,s(a);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(){u.apply(this,arguments)}()},[]),[i,s]},F=a(128),J=a(129),z=(a(87),Object(y.a)({card:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},buttonaction:{justifyContent:"center"}})),D=function(e){var t=e.pdata,a=t.timings,n=t.date,o=z();return a?Object.keys(a).map(function(e,t){return r.a.createElement(F.a,{className:o.card,key:t},r.a.createElement(J.a,null,r.a.createElement(d.a,{className:o.title,color:"textSecondary",gutterBottom:!0},e),r.a.createElement(d.a,{variant:"h3",component:"h2"},a[e]),r.a.createElement(d.a,{className:o.pos,color:"textSecondary"},n.readable),r.a.createElement(d.a,{variant:"body2",component:"p"},n.hijri.month.ar,r.a.createElement("br",null),'"'.concat(n.hijri.weekday.en,'"'))))}):null},M=(a(88),Object(y.a)(function(e){return{progress:{margin:e.spacing(2),color:k.a[500]},secondary:{color:"#4caf50"}}})),I=function(e){var t=e.prdata,a=t.data,o=t.code;t.status;console.log(t);var c=M(),i=new Date,l=("0"+i.getDate()).slice(-2),s=["January","February","March","April","May","June","July","August","September","October","November","December"][i.getMonth()],u=i.getFullYear();return console.log("".concat(l," ").concat(s," ").concat(u)),Object(n.useEffect)(function(){a&&Object.keys(a).length}),r.a.createElement("div",{className:"pdnContainer"},"object"===typeof t&&200===o&&Object.keys(a).length?r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{in:"true"},r.a.createElement(D,{pdata:a}))):r.a.createElement(O.a,{className:c.progress,color:"secondary"}))},P=function(e){var t=e.country,a=e.city,n=B({city:a,country:t}),o=Object(l.a)(n,2),c=o[0];o[1];console.log("AB",c);var i=(c&&c.data?c.data.meta:"Europe/AmsterDAM").timezone;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{timezone:i}),r.a.createElement(I,{prdata:c}),r.a.createElement(j,null))},R=a(61),W=a(133),T=a(27),q=a(137),G=a(131),U=a(135),Y=a(138),$=a(132),H=a(62),K=Object(y.a)(function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)}}});var L=function(e){e.setupdata;var t=K(),a=r.a.useState({activeStep:0}),o=Object(l.a)(a,2),c=o[0],s=o[1],u=c.activeStep,m=c.country,p=c.region,y=(c.seccountry,c.secregion,["Padchone !","Almost there!","Setup your Secondary Preferance"]);function h(){s(Object(i.a)({},c,{activeStep:c.activeStep+1}))}function f(){s(Object(i.a)({},c,{activeStep:c.activeStep-1}))}return Object(n.useEffect)(function(){3===u&&e.finished(c)}),r.a.createElement("div",{className:t.root},r.a.createElement(q.a,{activeStep:u,orientation:"vertical"},y.map(function(e,a){return r.a.createElement(G.a,{key:e,style:{color:"white"}},r.a.createElement(U.a,null,e),r.a.createElement(Y.a,null,0===u&&r.a.createElement(T.a,{value:m,onChange:function(e){return t=e,void s(Object(i.a)({},c,{country:t}));var t}}),1===u&&r.a.createElement(T.b,{country:m,value:p,onChange:function(e){return t=e,void s(Object(i.a)({},c,{region:t}));var t}}),r.a.createElement(d.a,{color:"textSecondary",variant:"body2",component:"p"},function(e){switch(e){case 0:return"Please Select your Country";case 1:return"Choose your Region";case 2:return"Setting up a secondary preferance would always come handy whenever you want to make a \n              comparison between your second home and main";default:return"Unknown step"}}(a)),r.a.createElement("div",{className:t.actionsContainer},r.a.createElement("div",null,r.a.createElement($.a,{disabled:0===u,onClick:f,className:t.button},"Back"),r.a.createElement($.a,{variant:"contained",color:"primary",onClick:h,className:t.button,style:{color:"white"}},u===y.length-1?"Finish":"Next")))))})),u===y.length&&r.a.createElement(H.a,{square:!0,elevation:0,className:t.resetContainer},r.a.createElement(d.a,null,"All steps completed - you're finished"),r.a.createElement($.a,{onClick:function(){s(Object(i.a)({},c,{activeStep:0}))},className:t.button},"Reset")))},Q=a(60),V=Object(R.a)({palette:{primary:k.a,text:{}},typography:{}});var X=function(){var e=Object(n.useState)({finished:!1}),t=Object(l.a)(e,2),a=t[0],o=t[1],c=a.finished,u=a.country,m=a.city;return Object(n.useEffect)(function(){localStorage.getItem("padachone")&&o(Object(i.a)({},a,{finished:!0,country:"Netherlands",city:"Amsterdam"}))},[]),r.a.createElement(W.a,{theme:V},r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null),!c&&r.a.createElement(L,{setupdata:Q,finished:function(e){return function(e){var t=e.country,n=e.region;o(Object(i.a)({},a,{finished:!0,country:t,city:n}))}(e)}}),c&&r.a.createElement(P,{country:u,city:m})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[65,1,2]]]);
//# sourceMappingURL=main.642fc234.chunk.js.map