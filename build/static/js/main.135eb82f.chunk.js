(this["webpackJsonpmetroafc-admin"]=this["webpackJsonpmetroafc-admin"]||[]).push([[0],{38:function(e,t,s){},65:function(e,t,s){},68:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){},72:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(32),i=s.n(n),o=(s(38),s(3)),r=s(13),l=s(2),j=s(10),d=s.n(j),h=s(0);var u=function(){return Object(h.jsx)("div",{children:"Home"})},b=s(8),O=s(11),A=function(){return sessionStorage.getItem("token")||null},m=function(){sessionStorage.removeItem("token"),sessionStorage.removeItem("username"),sessionStorage.removeItem("name")},g=function(e,t,s){sessionStorage.setItem("token",e),sessionStorage.setItem("username",JSON.stringify(t)),sessionStorage.setItem("name",JSON.stringify(s))},x=["component","setAuth","setAuthLoading","socket"];var v=function(e){var t=e.component,s=e.setAuth,a=e.setAuthLoading,c=e.socket,n=Object(O.a)(e,x);return Object(h.jsx)(l.b,Object(b.a)(Object(b.a)({},n),{},{render:function(e){return A()?Object(h.jsx)(t,Object(b.a)({setAuth:s,setAuthLoading:a,Socket:c},e)):Object(h.jsx)(l.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},p=["component","setAuth","setAuthLoading","socket"];var C=function(e){var t=e.component,s=e.setAuth,a=e.setAuthLoading,c=e.socket,n=Object(O.a)(e,p);return Object(h.jsx)(l.b,Object(b.a)(Object(b.a)({},n),{},{render:function(e){return A()?Object(h.jsx)(l.a,{to:{pathname:"/dashboard"}}):Object(h.jsx)(t,Object(b.a)({setAuth:s,setAuthLoading:a,Socket:c},e))}}))},f=(s(65),["setAuth","setAuthLoading","Socket"]);s(31).config();var N=function(e){var t=Object(a.useState)(e),s=Object(o.a)(t,2),c=s[0],n=s[1];return{value:c,onChange:function(e){n(e.target.value)}}},E=function(e){var t=e.setAuth,s=e.setAuthLoading,c=(e.Socket,Object(O.a)(e,f)),n=Object(a.useState)(!1),i=Object(o.a)(n,2),r=i[0],l=i[1],j=N(""),u=N(""),A=Object(a.useState)(null),m=Object(o.a)(A,2),x=m[0],v=m[1],p=Object(a.useCallback)((function(e){s(!e),t(e)}),[t,s]);return r?Object(h.jsx)("div",{className:"loadclass",children:Object(h.jsx)("span",{className:"loader-11"})}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"background",children:[Object(h.jsx)("div",{className:"shape"}),Object(h.jsx)("div",{className:"shape"})]}),Object(h.jsxs)("form",{className:"glass-container login",children:[Object(h.jsx)("h3",{className:"brand-titl",children:"Metro AFC"}),Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("input",Object(b.a)(Object(b.a)({type:"text",placeholder:"Email or Phone",id:"username"},j),{},{autoComplete:"new-password"})),Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",Object(b.a)(Object(b.a)({type:"password",placeholder:"Password",id:"password"},u),{},{autoComplete:"new-password"})),x&&Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("small",{style:{color:"red"},children:x}),Object(h.jsx)("br",{})]}),Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"button",value:r?"Loading...":"LOGIN",onClick:function(){v(null),l(!0),d.a.post("".concat("http://192.168.154.82:8000","/login"),{username:j.value,password:u.value,privilege:"ADMIN"}).then((function(e){var t,s,a;l(!1),g(null===(t=e.data)||void 0===t?void 0:t.token,null===(s=e.data)||void 0===s?void 0:s.username,null===(a=e.data)||void 0===a?void 0:a.name),p(!0),c.history.push("/dashboard")})).catch((function(e){var t,s,a;l(!1),console.log(null===(t=e.response)||void 0===t?void 0:t.data),401===(null===(s=e.response)||void 0===s?void 0:s.status)?v(null===(a=e.response)||void 0===a?void 0:a.data.error):v("Something went wrong. Please try again later.")}))},disabled:r})]})]})},L=(s(68),["setAuth","setAuthLoading","soc"]);function S(e){var t=e.setAuth,s=e.setAuthLoading,c=(e.soc,Object(O.a)(e,L)),n=Object(l.g)(),i=Object(a.useCallback)((function(e){t(e),s(!e)}),[t,s]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{id:"message_list"}),Object(h.jsx)("div",{className:"header",children:c.auth?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"shead1",children:Object(h.jsx)("div",{children:Object(h.jsx)(r.b,{className:"link",to:"/dashboard",children:Object(h.jsx)("div",{className:"menu",children:Object(h.jsx)("b",{children:"Metro AFC"})})})})}),Object(h.jsxs)("div",{className:"shead2",children:[Object(h.jsx)("div",{children:Object(h.jsx)(r.b,{className:"link",to:"/",children:Object(h.jsx)("div",{className:"menu",children:"TOP UP"})})}),Object(h.jsx)("div",{children:Object(h.jsx)(r.b,{className:"link",to:"/travel-ledger",children:Object(h.jsx)("div",{className:"menu",children:"ENTRY/EXITS"})})}),Object(h.jsx)("div",{className:"link",onClick:function(){i(!1),m(),n.push("/login")},children:Object(h.jsx)("div",{className:"logout",children:"Logout"})})]})]}):Object(h.jsx)(h.Fragment,{})})]})}s(69);var I=s(21),F=["setAuth","setAuthLoading","Socket"];s(31).config();var w=function(e){e.setAuth,e.setAuthLoading,e.Socket,Object(O.a)(e,F);var t=Object(a.useState)(!1),s=Object(o.a)(t,2),c=s[0],n=s[1],i=Object(a.useState)([]),r=Object(o.a)(i,2),l=r[0],j=r[1],u=Object(a.useState)(null),b=Object(o.a)(u,2),m=b[0],g=b[1],x=Object(a.useState)(null),v=Object(o.a)(x,2),p=v[0],C=v[1];return Object(a.useEffect)((function(){return n(!0),d.a.post("".concat("http://192.168.154.82:8000","/station/all"),{token:A()}).then((function(e){n(!1),j(e.data.stations),g(e.data.stations[0].station_code),C(e.data.stations[0].station_code)})).catch((function(e){n(!1),j([])})),function(){}}),[]),c?Object(h.jsx)("div",{className:"loadclass",children:Object(h.jsx)("span",{className:"loader-11"})}):Object(h.jsxs)("div",{className:"dash",children:[Object(h.jsx)("h1",{className:"subtitle",children:"Stations"}),Object(h.jsxs)("div",{className:"stationContainer",children:[Object(h.jsx)("div",{className:"inHeader",children:Object(h.jsx)("h2",{className:"stationName",children:"IN"})}),Object(h.jsx)("div",{className:"outHeader",children:Object(h.jsx)("h2",{className:"stationName",children:"OUT"})}),Object(h.jsx)("div",{className:"stationDrop",children:Object(h.jsx)("select",{name:"inStation",id:"inSelectInput",onChange:function(e){g(e.target.value)},children:l.map((function(e){return Object(h.jsx)("option",{value:e.station_code,children:e.station_name},"in"+e.id)}))})}),Object(h.jsx)("div",{className:"stationDrop",children:Object(h.jsx)("select",{name:"outStation",id:"outSelectInput",onChange:function(e){C(e.target.value)},children:l.map((function(e){return Object(h.jsx)("option",{value:e.station_code,children:e.station_name},"out"+e.id)}))})}),Object(h.jsx)("div",{className:"qrCont",id:"inqr",children:m&&Object(h.jsx)(I.a,{value:"in:".concat(m),bgColor:"white",fgColor:"black",includeMargin:!0,size:700,imageSettings:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAYAAAA8AXHiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMBSURBVHgB7d3RbRNBFIZRB1EAJVACJaSE0AF0ABUAHUAFpAQ6ACqADqAEOgh3CFJkkSgz9vwm9pxz36NE+rTX3h07Z5urGpjs0QYChEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEXE482RelvT67LmZ81tLmqe1ezzM0Y8rXlR02vk73xYro5zRpzX3PVzLmt6fK6Z8Xu332XE5kjHKux0XvOqhj7CGvCmpq0y7iesAU9qPtZwP2ENshL7CGsHbSX2vJNcmbB2YCXeT1g7ales473HlCesPbSV2F5z8S9h7amtxLYa2SasPbX7Wu3KxTZhTdBuP1iJ24Q1iZW4TViTWInbhDWRlXhDWJNZideENVlbie7KCyvi4u+sTFgh7aq18tktYQ34WtN77n31B9XCGvCj5nlNr5XPbglr0PeadzW9Vj3OLKwdtOMyX2p6rLoShbWjlzW/anqsuBKFtaP2It5KvJuw9vC+xkq83dF+xP6haCvxW03PY5y2Ele5arli7amtxNc1vYRFt/aFIZ9quCGsSdpKnPFtNKdCWJO0Ww8tLq4Ja6L2DvFDDcKart2VtxKFNZ2VeE1YAVaisGLas8F2EmJVwgoaeVB9aoQVNHp265QIK2zkQfUpEdYBrLgShXUAo2e3ToGwDmS1lSisA2qf8FllJQrrgFa6Ky+sA2vntla4Ky+s/2CFB9Vnf/5XE0zmikWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhHCIkJYRAiLCGERISwihEWEsIgQFhG/AXjj5Yzr3zD+AAAAAElFTkSuQmCC",height:100,width:100,excavate:!0}})}),Object(h.jsx)("div",{className:"qrCont",id:"outqr",children:p&&Object(h.jsx)(I.a,{value:"out:".concat(p),bgColor:"white",fgColor:"black",includeMargin:!0,size:700,imageSettings:{src:"data:image/png;base64,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",height:100,width:100,excavate:!0}})})]})]})};var W=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),s=t[0],c=t[1];return s?Object(h.jsx)("div",{className:"loadclass",children:Object(h.jsx)("span",{className:"loader-11"})}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Updatedetails"}),Object(h.jsx)("div",{className:"formData",children:Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),c(!0),d.a.post("".concat("http://192.168.154.82:8000","/users/feedback"),{token:A(),name:e.target.name.value,feedback:e.target.feedback.value}).then((function(e){console.log(e.data.recom)})).catch((function(e){var t;console.log(null===e||void 0===e||null===(t=e.reponse)||void 0===t?void 0:t.data)}))},children:[Object(h.jsx)("span",{children:"Therapist Name"}),Object(h.jsx)("input",{type:"text",name:"name",placeholder:"Therapist Name"})," ",Object(h.jsx)("br",{}),Object(h.jsx)("span",{children:"Your Feedback"}),Object(h.jsx)("input",{type:"text",name:"feedback",placeholder:"Enter your Feedback for the Therapist"})," ",Object(h.jsx)("br",{}),Object(h.jsx)("input",{type:"submit",value:"Submit"})]})})]})};s(70),s(71);var B=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(!1),i=Object(o.a)(n,2),r=i[0],l=i[1];Object(a.useEffect)((function(){l(!0),d.a.post("".concat("http://192.168.154.82:8000","/journeys/all"),{token:A()}).then((function(e){var t;console.log(e.data.journeys),l(!1),c(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.journeys),j()})).catch((function(e){console.log(e),l(!1),c([]),j()}))}),[]);var j=function(){function e(e){var t=function(){var e=window.innerHeight,t=window.innerWidth,s=Math.floor(Math.random()*e),a=Math.floor(Math.random()*t);return[s,a,t]}();document.querySelector(e).animate([{transform:"translate(".concat(t[0],"%,").concat(t[1],"%)")},{transform:"translateY(".concat(t[1],"%)")},{transform:"translateX(".concat(t[0],"%)")},{transform:"translate(".concat(t[1],"%,").concat(t[0],"%)")}],{duration:1e4,fill:"forwards",iterations:1/0})}e(".a"),e(".b"),e(".c"),e(".d"),e(".e"),e(".f"),e(".g"),e(".h"),e(".i"),e(".j")};return r?Object(h.jsx)("div",{className:"loadclass",children:Object(h.jsx)("span",{className:"loader-11"})}):Object(h.jsxs)("div",{className:"dash",children:[Object(h.jsx)("h1",{className:"subtitle",children:"Travel Ledger"}),Object(h.jsxs)("div",{className:"full-background",children:[Object(h.jsx)("div",{className:"shape1 a"}),Object(h.jsx)("div",{className:"shape1 b"}),Object(h.jsx)("div",{className:"shape1 c"}),Object(h.jsx)("div",{className:"shape1 d"}),Object(h.jsx)("div",{className:"shape1 e"}),Object(h.jsx)("div",{className:"shape1 f"}),Object(h.jsx)("div",{className:"shape1 g"}),Object(h.jsx)("div",{className:"shape1 h"}),Object(h.jsx)("div",{className:"shape1 i"}),Object(h.jsx)("div",{className:"shape1 j"})]}),Object(h.jsxs)("div",{className:"glass-container ledger-table",children:[Object(h.jsx)("div",{className:"options",children:Object(h.jsxs)("select",{name:"perpage",id:"perpage",children:[Object(h.jsx)("option",{value:"10",children:"10"}),Object(h.jsx)("option",{value:"20",children:"20"}),Object(h.jsx)("option",{value:"30",children:"30"})]})}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{className:"trow thead",children:[Object(h.jsx)("th",{scope:"col",children:"id"}),Object(h.jsx)("th",{scope:"col",children:"Username"}),Object(h.jsx)("th",{scope:"col",children:"FROM"}),Object(h.jsx)("th",{scope:"col",children:"TO"}),Object(h.jsx)("th",{scope:"col",children:"Fare"}),Object(h.jsx)("th",{scope:"col",children:"Time"})]})}),Object(h.jsxs)("tbody",{children:[Object(h.jsx)("tr",{className:"trow",children:s&&Object.values(s[0]).map((function(e,t){return Object(h.jsx)("td",{children:e},t)}))}),Object(h.jsx)("tr",{className:"trow",children:s&&Object.values(s[1]).map((function(e,t){return Object(h.jsx)("td",{children:e},t)}))})]})]})]})]})};var k=function(){var e=Object(a.useState)(!0),t=Object(o.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(!1),i=Object(o.a)(n,2),j=i[0],b=i[1];return Object(a.useEffect)((function(){var e=A();if(e)return d.a.get("".concat("http://192.168.154.82:8000","/verifyToken?token=").concat(e)).then((function(e){g(e.data.token,e.data.username,e.data.name),c(!1),b(!0)})).catch((function(e){m(),c(!1),b(!1)})),function(){}}),[]),s&&A()?Object(h.jsx)("div",{className:"loadclass",children:Object(h.jsx)("span",{className:"loader-11"})}):Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(r.a,{children:Object(h.jsxs)("div",{children:[Object(h.jsx)(S,{auth:j,setAuth:b,setAuthLoading:c}),Object(h.jsx)("div",{className:"content",children:Object(h.jsxs)(l.d,{children:[Object(h.jsx)(v,{exact:!0,path:"/",component:u,setAuth:b,setAuthLoading:c}),Object(h.jsx)(C,{path:"/home",component:E}),Object(h.jsx)(C,{path:"/login",component:E,setAuth:b,setAuthLoading:c}),Object(h.jsx)(v,{path:"/dashboard",component:w,setAuth:b,setAuthLoading:c}),Object(h.jsx)(v,{path:"/travel-ledger",component:B,setAuth:b,setAuthLoading:c}),Object(h.jsx)(v,{path:"/updatedetails",component:W,setAuth:b,setAuthLoading:c})]})})]})})})},Y=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,73)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(k,{})}),document.getElementById("root")),Y()}},[[72,1,2]]]);
//# sourceMappingURL=main.135eb82f.chunk.js.map