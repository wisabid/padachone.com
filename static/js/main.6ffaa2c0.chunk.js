(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){e.exports=a.p+"static/media/logo-sec.8be94c12.png"},107:function(e,t,a){e.exports=a.p+"static/media/bg-img.587db9a0.png"},108:function(e){e.exports=[{title:"Select campaign settings",description:"For each ad campaign that you create, you can control how much you're willing to spend on clicks and conversions, which networks and geographical locations you want your ads to show on, and more."},{title:"Create an ad group",description:"An ad group contains one or more ads which target a shared set of keywords."},{title:"Create an ad",description:"Try out different ad text to see what brings in the most customers, and learn how to enhance your ads using features like ad extensions. If you run into any problems with your ads, find out how to tell if they're running and how to resolve approval issues."}]},131:function(e,t,a){e.exports=a(205)},136:function(e,t,a){},137:function(e,t,a){},148:function(e,t,a){},199:function(e,t,a){},202:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),l=(a(136),a(18)),i=a(11),s=(a(137),a(284)),u=a(206),m=a(279),d=a(76),p=a.n(d),g=a(274),f=a(44),h=a(265),b=a(266),y=a(78),E=a(267),v=a(100),j=a.n(v),x=a(116),O=a(90),S=a.n(O),w=a(101),k=a.n(w),C=(a(148),Object(u.a)(function(e){var t;return{progress:{margin:e.spacing(2)},secondary:{color:"#4caf50"},grow:{flexGrow:1},root:(t={padding:e.spacing(3,2),borderRadius:0},Object(f.a)(t,"padding",0),Object(f.a)(t,"background","#f5f5f5"),t)}})),N=function(e){var t=e.timezone,a=e.startup,n=e.place,o=e.pdate,c=C(),l=r.a.useState({checkedA:!0}),s=Object(i.a)(l,2),u=(s[0],s[1]);return r.a.createElement("div",{className:{flexGrow:1}},r.a.createElement(h.a,{position:"fixed",color:"primary"},r.a.createElement(b.a,{style:{minHeight:"45px"}},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:k.a,width:"150",height:"30",alt:"logo",className:"App-logo"})),r.a.createElement("div",{className:c.grow}),r.a.createElement(S.a,{fontSize:"default",className:"settings",onClick:function(){u(function(){Object.keys(localStorage).map(function(e){"padachone:place"!==e&&"padachone:country"!==e&&"padachone:region"!==e&&localStorage.removeItem(e)}),a({country:localStorage.getItem("padachone:country"),region:localStorage.getItem("padachone:region"),place:localStorage.getItem("padachone:place"),finished:!1})})},style:{color:"#fff"}})),r.a.createElement(x.a,{className:c.root},r.a.createElement(E.a,{direction:"up",in:"true",mountOnEnter:!0,unmountOnExit:!0},r.a.createElement(y.a,{variant:"caption",color:"textSecondary",style:{padding:"1px 5px",fontStyle:"normal",display:"flex",justifyContent:"space-between"}},r.a.createElement("span",null,t),r.a.createElement("span",{style:{fontWeight:"bold"}},o))),r.a.createElement(E.a,{direction:"down",in:"true",mountOnEnter:!0,unmountOnExit:!0,style:{fontStyle:"italic"}},r.a.createElement(y.a,{variant:"caption",color:"textSecondary",style:{padding:"1px 5px",display:"flex",justifyContent:"space-between",fontStyle:"normal"}},r.a.createElement("strong",null,n?"'".concat(n,"'"):""),r.a.createElement("span",{style:{padding:"0 0 0 3px"}},r.a.createElement(j.a,{format:"HH:mm:ss",ticking:!0,timezone:t})))))))},I=Object(u.a)(function(e){return{text:{padding:e.spacing(2,2,0)},paper:{paddingBottom:50},list:{marginBottom:e.spacing(2)},subheader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0,background:"#f5f5f5"},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}}}),B=function(e){e.startup;var t=I();return r.a.createElement(h.a,{position:"fixed",color:"primary",className:t.appBar},r.a.createElement("div",{className:t.grow}),r.a.createElement(y.a,{variant:"caption",display:"block",gutterBottom:!0,color:"secondary",style:{paddingTop:"10px",fontSize:"10px",color:"rgba(0, 0, 0, 0.54)"},align:"center"},"Copyright \xa9 2019 WISMIM."))},z=a(91),A=a.n(z),M=a(278),F=a(276),W=a(277),P=(a(155),a(103)),D=a(275),T=a(291),R=a(92),G=a.n(R),J=a(93),L=a.n(J),q=a(104),H=a.n(q),K=a(105),Y=a(42),U=a.n(Y),X=a(59),$=function(){var e=new Date,t=("0"+e.getDate()).slice(-2),a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()],n=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n)},V=function(e){var t=e.country,a=void 0===t?"Netherlands":t,r=e.place,o=e.region,c=void 0===o?"Noord-Holland":o,l=e.date,s="https://api.aladhan.com/v1/timingsByCity?city=".concat(r||c,"&country=").concat(a,"&method=8"),u=Object(n.useState)({}),m=Object(i.a)(u,2),d=m[0],p=m[1];function g(){return(g=Object(X.a)(U.a.mark(function e(){var t,n;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(s,{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,Object.keys(localStorage).map(function(e){e.startsWith("padachone:")&&localStorage.removeItem(e)}),n&&n.data&&n.data.meta&&(c&&localStorage.setItem("padachone:region",c),a&&localStorage.setItem("padachone:country",a),r&&localStorage.setItem("padachone:place",r),localStorage.setItem("padachone:".concat(l),JSON.stringify(n))),p(n),e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),p({error:e.t0.message}),e.abrupt("return",!1);case 16:case"end":return e.stop()}},e,null,[[0,12]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){localStorage.getItem("padachone:".concat(l))?p(JSON.parse(localStorage.getItem("padachone:".concat(l)))):function(){g.apply(this,arguments)}()},[]),[d,p]},Z=function(e){var t=e.lat,a=e.lon,r=$(),o=new Date,c=o.getMonth()+1,l=o.getFullYear(),s="https://api.aladhan.com/v1/calendar?latitude=".concat(t,"&longitude=").concat(a,"&method=2&month=").concat(c,"&year=").concat(l),u=Object(n.useState)({}),m=Object(i.a)(u,2),d=m[0],p=m[1];function g(){return(g=Object(X.a)(U.a.mark(function e(){var t,a,n;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(s,{headers:{Accept:"application/json"}});case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,n=a.data.filter(function(e){return e.date.readable===r}),p(n),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(0),p({error:e.t0.message}),e.abrupt("return",!1);case 15:case"end":return e.stop()}},e,null,[[0,11]])}))).apply(this,arguments)}return Object(n.useEffect)(function(){!function(){g.apply(this,arguments)}()},[]),[d,p]};a(288),a(268),a(273),a(269),a(271),a(272),a(60),a(61),Object(u.a)({list:{width:250},fullList:{width:"auto"}});var _=Object(K.autoPlay)(H.a),Q=[{label:"San Francisco \u2013 Oakland Bay Bridge, United States",imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"}],ee=Object(u.a)(function(e){return{root:{flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{height:255,display:"block",maxWidth:400,overflow:"hidden",width:"100%"},card:{minWidth:"100%"},title:{fontSize:14}}}),te=function(e){var t=e.lat,a=e.lon,n=Z({lat:t,lon:a}),o=Object(i.a)(n,2),c=o[0],l=(o[1],ee()),s=Object(D.a)(),u=r.a.useState(0),m=Object(i.a)(u,2),d=m[0],p=m[1],f=Q.length;return c.length&&c[0].timings?r.a.createElement("div",{className:l.root},r.a.createElement(_,{axis:"rtl"===s.direction?"x-reverse":"x",index:d,onChangeIndex:function(e){p(e)},enableMouseEvents:!0},Q.map(function(e,t){return r.a.createElement("div",{key:e.label},Math.abs(d-t)<=2?Object.keys(c[0].timings).map(function(e,t){var a=c[0].timings[e].split(" "),n=a[0],o=a[1];return r.a.createElement(F.a,{className:l.card,key:t},r.a.createElement(W.a,null,r.a.createElement(y.a,{className:l.title,color:"textSecondary",gutterBottom:!0},e),r.a.createElement(y.a,{variant:"h3",component:"h2"},r.a.createElement("strong",{style:{color:"#039be5"}},n)),r.a.createElement(y.a,{variant:"body2",component:"p",color:"textSecondary"},o,r.a.createElement("br",null),c[0].date.hijri.month.ar)))}):null)})),r.a.createElement(T.a,{steps:f,position:"static",variant:"text",activeStep:d,nextButton:r.a.createElement(g.a,{size:"small",onClick:function(){p(function(e){return e+1})},disabled:d===f-1},"Next","rtl"===s.direction?r.a.createElement(G.a,null):r.a.createElement(L.a,null)),backButton:r.a.createElement(g.a,{size:"small",onClick:function(){p(function(e){return e-1})},disabled:0===d},"rtl"===s.direction?r.a.createElement(L.a,null):r.a.createElement(G.a,null),"Back")})):r.a.createElement("h5",null,"Loading...")},ae=a(106),ne=function(e){var t=e.lat,a=e.lon,o=function(){},c=Object(n.useState)([{location:[t,a],option:{color:"blue"},addHandler:{type:"click",callback:o}}]),l=Object(i.a)(c,2),s=l[0],u=(l[1],Object(n.useState)({renderOptions:{itineraryContainer:"itineraryContainer"},requestOptions:{routeMode:"walking",maxRoutes:2},wayPoints:[{address:"Bijlmer"},{address:"Ijburg"}]})),m=Object(i.a)(u,2),d=(m[0],m[1],Object(n.useState)({search:"Ijburg",polygonStyle:{fillColor:"rgba(161,224,255,0.4)",strokeColor:"#a495b2",strokeThickness:2},option:{entityType:"PopulatedPlace"}})),p=Object(i.a)(d,2);p[0],p[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.ReactBingmaps,{bingmapKey:"ArNqsYDx-rtxpMbR4ddz8SyY4-dv8-JK35KErFW3GIU7_UwgaCVz8Bj4iKy4X-JP",center:[t,a],zoom:10,pushPins:s}))},re=function(e){e.lat,e.lon;var t=function(e,t){var a=Object(n.useState)([]),r=Object(i.a)(a,2),o=r[0],c=r[1],l=function(){var e=Object(X.a)(U.a.mark(function e(){var t,a;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/customsearch/v1?key=AIzaSyCKmqa7yvpOyK2-XBFLM0ELOjsDmw9jjMM&cx=012395365576153944359:yyj6yr0jgku&q=mosques near me",{headers:{Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:(a=e.sent).items&&c(a.items);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){l()},[]),[o,c]}(),a=Object(i.a)(t,2),o=a[0];a[1];return o.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,o.map(function(e){return r.a.createElement("li",null,e.title)}))):r.a.createElement("h4",null,"Loading...")},oe=Object(P.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(function(e){var t=Object(n.useState)({}),a=Object(i.a)(t,2),o=a[0];a[1],o.country,o.region;return r.a.createElement(r.a.Fragment,null,e.isGeolocationAvailable?e.isGeolocationEnabled?e.coords?r.a.createElement("div",null,r.a.createElement("h4",null,"Lab Alpha Releases"),r.a.createElement("h5",null,"Travel Times"),r.a.createElement(te,{lat:e.coords.latitude,lon:e.coords.longitude}),r.a.createElement("h5",null,"Travel Times"),r.a.createElement(re,{lat:e.coords.latitude,lon:e.coords.longitude}),r.a.createElement("h5",null,"Mosque Map"),r.a.createElement("div",{style:{width:"100%",height:"90vh"}},r.a.createElement(ne,{lat:e.coords.latitude,lon:e.coords.longitude}))):r.a.createElement("div",null,"Getting the location data\u2026 "):r.a.createElement("div",{style:{marginTop:"30px"}},r.a.createElement("h5",null,'Message from Lab : "Geolocation is not enabled. Please enable location. Please refresh to go back"')):r.a.createElement("div",null,"Your browser does not support Geolocation"))}),ce=Object(u.a)({card:{minWidth:"100%"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12},buttonaction:{justifyContent:"center"}}),le=function(e){var t=e.pdata,a=t.timings,n=t.date,o=(t.meta,ce()),c=r.a.useState(!1),l=Object(i.a)(c,2),s=l[0],u=l[1],m=function(){u(!0)};return a?s?r.a.createElement(oe,null):Object.keys(a).map(function(e,t){return r.a.createElement(F.a,{className:o.card,key:t},r.a.createElement(W.a,null,r.a.createElement(y.a,{className:o.title,color:"textSecondary",gutterBottom:!0},e),r.a.createElement(y.a,{variant:"h3",component:"h2"},r.a.createElement("strong",{style:{color:"#039be5"}},a[e])),r.a.createElement(y.a,{variant:"body2",component:"p",color:"textSecondary"},n.hijri.month.ar,r.a.createElement("span",{onClick:m,className:"arab-month"},"."))))}):null},ie=(a(199),Object(u.a)(function(e){return{progress:{margin:e.spacing(2),color:A.a[500]},secondary:{color:"#4caf50"}}})),se=function(e){var t=e.prdata,a=t.data,o=t.code,c=(t.status,ie()),l=new Date;("0"+l.getDate()).slice(-2),l.getMonth(),l.getFullYear();return Object(n.useEffect)(function(){a&&Object.keys(a).length}),r.a.createElement("div",{className:"pdnContainer"},"object"===typeof t&&200===o&&Object.keys(a).length?r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{in:"true"},r.a.createElement("div",null,r.a.createElement(le,{pdata:a})))):r.a.createElement(m.a,{className:c.progress,color:"secondary"}))},ue=(a(200),Object(u.a)(function(e){return{progress:{margin:e.spacing(2),color:p.a[500]},secondary:{color:"#4caf50"}}})),me=function(e){var t=e.country,a=e.region,n=e.place,o=e.pdate,c=e.startup,l=V({region:a,country:t,place:n,date:o}),s=Object(i.a)(l,2),u=s[0],d=(s[1],(u&&u.data&&u.data.meta?u.data.meta:"Europe/AmsterDAM").timezone),p=ue();return u&&u.data&&u.data.meta&&200===u.code?r.a.createElement(r.a.Fragment,null,r.a.createElement(N,{timezone:d,startup:c,place:localStorage.getItem("padachone:place"),pdate:u.data.date.readable}),r.a.createElement(se,{prdata:u}),r.a.createElement(B,{startup:c})):r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",null,u.data||u.error),u.data||u.error?r.a.createElement("p",null,"Please ",r.a.createElement(g.a,{color:"primary",onClick:function(){return c({finished:!1})}},"refresh")," to start over!"):r.a.createElement(m.a,{className:p.progress,color:"secondary"}))},de=a(113),pe=a(283),ge=a(54),fe=a(290),he=a(280),be=a(289),ye=a(292),Ee=a(286),ve=a(107),je=a.n(ve),xe=(a(202),Object(u.a)(function(e){return{root:{width:"100%"},button:{marginTop:e.spacing(1),marginRight:e.spacing(1)},actionsContainer:{marginBottom:e.spacing(2)},resetContainer:{padding:e.spacing(3)},label:{color:"red",fontSize:"2rem"},selfont:{},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},h1:{fontWeight:"bold"},vertical:{color:"#fff"},iconContainer:{fontStyle:"italic"}}}));var Oe=function(e){e.setupdata;var t=e.country,a=e.region,o=e.place,c=xe(),s=r.a.useState({activeStep:0,place:o,country:t,region:a}),u=Object(i.a)(s,2),m=u[0],d=u[1],p=m.activeStep,f=m.country,h=m.region,b=(m.seccountry,m.secregion,m.place),E=["Where on earth are you?","Almost there!","Need More Accuracy?"];function v(){d(Object(l.a)({},m,{activeStep:m.activeStep+1}))}function j(){d(Object(l.a)({},m,{activeStep:m.activeStep-1}))}return Object(n.useEffect)(function(){var t;p===E.length&&(t=Object(l.a)({},m,{finished:!0,travel:!1}),d(function(){return e.finished(t),t}))}),m.travel?r.a.createElement(oe,null):r.a.createElement("div",{className:c.root},r.a.createElement(y.a,{color:"textPrimary",variant:"h1",component:"h1",align:"left",style:{backgroundImage:"url(".concat(je.a,")"),backgroundRepeat:"no-repeat",backgroundPosition:"right top",backgroundSize:"auto 100%",backgroundColor:"#00023f",fontWeight:"bold",fontSize:"4rem",padding:"24px",color:"rgb(3, 155, 229)",marginBottom:0},gutterBottom:!0},"Know Your Prayer times ",r.a.createElement("br",null)),r.a.createElement(y.a,{color:"textSecondary",align:"left",variant:"body2",component:"p",style:{padding:"0 24px",fontStyle:"italic",fontSize:"0.9rem",marginTop:"10px"},gutterBottom:!0},"An easy to use light weight application for noting down your Fajr, Dhuhr, Asr, Maghrib & Isha timings of the day.",r.a.createElement("br",null),' "Worries end when Salah begins"'),r.a.createElement(fe.a,{activeStep:p,orientation:"vertical",classes:c.vertical},E.map(function(e,t){return r.a.createElement(he.a,{key:e,style:{color:"white",background:"#f5f5f5",borderRadius:"15px",padding:"10px"}},r.a.createElement(be.a,{classes:c.label,align:"left",iconContainer:c.iconContainer},r.a.createElement("span",{style:{fontSize:"1.5rem",color:"rgb(3, 155, 229)",fontWeight:"bold"}},e)),r.a.createElement(ye.a,{align:"left",style:{border:"none"}},0===p&&r.a.createElement(ge.a,{value:f,onChange:function(e){return t=e,void d(Object(l.a)({},m,{country:t}));var t},className:c.selfont,style:{maxWidth:"100%",fontSize:"1rem",marginBottom:"10px",minHeight:"30px"}}),1===p&&r.a.createElement(ge.b,{country:f,value:h,onChange:function(e){return t=e,void d(Object(l.a)({},m,{region:t}));var t},className:c.selfont,style:{maxWidth:"100%",fontSize:"1rem",minHeight:"30px",marginBottom:"10px"}}),2===p&&r.a.createElement(Ee.a,{id:"place-name",label:"Place",className:c.textField,value:b,onChange:function(e){var t=e.target.value;t.match(/^[a-z A-Z]*$/)&&d(Object(l.a)({},m,{place:t}))},margin:"normal",variant:"outlined"}),r.a.createElement(y.a,{color:"textSecondary",variant:"body2",component:"p",style:{fontStyle:"italic",fontSize:"1rem"},gutterBottom:!0},function(e){switch(e){case 0:return"This will Set up your timezone preferance";case 1:return"You can always re-configure these settings on click of a button";case 2:return"Key in your Place name for more accurate results.";default:return"Unknown step"}}(t)),r.a.createElement("div",{className:c.actionsContainer},r.a.createElement("div",null,r.a.createElement(g.a,{disabled:0===p,onClick:j,className:c.button},"Back"),r.a.createElement(g.a,{variant:"contained",color:"primary",onClick:v,className:c.button,style:{color:"white"}},p===E.length-1?"Finish":2!==p||b?"Next":"Skip")))))})),p===E.length&&r.a.createElement(x.a,{square:!0,elevation:0,className:c.resetContainer},r.a.createElement(y.a,null,"All steps completed - you're finished"),r.a.createElement(g.a,{onClick:function(){d(Object(l.a)({},m,{activeStep:0}))},className:c.button},"Reset")))},Se=a(108),we=a(109),ke=a(53),Ce=a(115),Ne=a(110),Ie=a(114),Be=a(43),ze=a(285),Ae=function(e){function t(e){var a;return Object(we.a)(this,t),(a=Object(Ce.a)(this,Object(Ne.a)(t).call(this,e))).state={error:null,eventId:null},a}return Object(Ie.a)(t,e),Object(ke.a)(t,[{key:"componentDidCatch",value:function(e,t){var a=this;this.setState({error:e}),Be.b(function(n){n.setExtras(t);var r=Be.a(e);a.setState({eventId:r})})}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{onClick:function(){return ze.b({eventId:e.state.eventId})}},"Report feedback"),r.a.createElement("p",null,"We're sorry \u2014 something's gone wrong."),r.a.createElement("p",null,"Our team has been notified, but click here fill out a report.")):this.props.children}}]),t}(n.Component),Me=a(112),Fe=a.n(Me),We=Object(de.a)({palette:{primary:p.a,secondary:{main:"#fff"},text:{}},typography:{}});var Pe=function(){var e=Object(n.useState)({finished:!1,pdtodaysDate:$().split(" ").join(""),place:localStorage.getItem("padachone:place"),country:localStorage.getItem("padachone:country"),region:localStorage.getItem("padachone:region")}),t=Object(i.a)(e,2),a=t[0],o=t[1],c=a.finished,u=a.country,m=a.region,d=a.pdtodaysDate,p=(a.prayerdata,a.place),g=function(e){var t=e.country,n=e.region,r=e.finished,c=e.place;o(Object(l.a)({},a,{finished:r,country:t,region:n,place:c}))};return Object(n.useEffect)(function(){Object.keys(localStorage).filter(function(e){return e.startsWith("padachone:")&&"padachone:region"!==e&&"padachone:country"!==e&&"padachone:place"!==e}).length&&o(Object(l.a)({},a,{finished:!0}))},[]),r.a.createElement(pe.a,{theme:We},r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null),r.a.createElement(Ae,null,r.a.createElement(Fe.a,{location:"bottom",style:{background:"#29b6f6",marginBottom:"30px"},buttonStyle:{borderRadius:"10px"}},"This website uses cookies to enhance the user experience."),!c&&r.a.createElement(Oe,{setupdata:Se,finished:function(e){return g(e)},country:u,region:m,place:p}),c&&r.a.createElement(me,{country:u,region:m,pdate:d,place:p,startup:function(e){return g(e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));ze.a({dsn:"https://bc34e53e67594e09803e8dbbe9e4df5b@sentry.io/1457299"}),c.a.render(r.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[131,1,2]]]);
//# sourceMappingURL=main.6ffaa2c0.chunk.js.map