(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{48:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n(18),r=n(24),s=n(23),i=n(1),u=n.n(i),j=n(19),o=n.n(j),l=n(8),d=n.n(l),b=n(3),O=n(20),h=n(4),f=n(21),x=n.n(f),p=(n(48),n(49),n(0));var v=function(){return Object(p.jsx)("header",{children:Object(p.jsx)("h1",{id:"title",children:"RESTy"})})};var m=function(){return Object(p.jsx)("footer",{children:"\xa9 2018"})};n(51);var g=function(e){var t=Object(i.useState)(""),n=Object(h.a)(t,2),c=n[0],a=n[1],r=Object(i.useState)(""),s=Object(h.a)(r,2),u=s[0],j=s[1],o=Object(i.useState)(""),l=Object(h.a)(o,2),d=l[0],O=l[1],f=function(t){var n=t.target.id.toUpperCase();a(n),e.setRequestParams(Object(b.a)(Object(b.a)({},e.RequestParams),{},{method:n})),x(t.target)},x=function(e){d&&d.classList.remove("active"),O(e),e.classList.add("active")};return Object(i.useEffect)((function(){console.log("Updated.")}),[u]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{id:"form",onSubmit:function(t){t.preventDefault();var n={method:c,url:u,text:u};e.handleApiCall(n)},children:[Object(p.jsxs)("label",{className:"input",children:[Object(p.jsx)("h4",{children:"URL: "}),Object(p.jsx)("input",{id:"urlInput",onChange:function(e){return j(e.target.value)},name:"url",type:"text"}),Object(p.jsx)("button",{id:"go",type:"submit",children:"GO!"})]}),Object(p.jsxs)("label",{className:"methods",children:[Object(p.jsx)("span",{onClick:f,id:"get",value:"GET",children:"GET"}),Object(p.jsx)("span",{onClick:f,id:"post",value:"POST",children:"POST"}),Object(p.jsx)("span",{onClick:f,id:"put",value:"PUT",children:"PUT"}),Object(p.jsx)("span",{onClick:f,id:"delete",value:"DELETE",children:"DELETE"})]}),Object(p.jsx)("textarea",{placeholder:"Enter JSON",id:"textArea",name:"json",onChange:function(e){return a(e.target.value)}})]})})},E=n(22),C=n.n(E);n(52);var y=function(e){return Object(i.useEffect)((function(){console.log("Change in parent.")}),[e.data]),Object(i.useEffect)((function(){return function(){return console.log("Results going away")}})),Object(p.jsx)("section",{id:"results",children:Object(p.jsx)("pre",{"data-testid":"data",children:e.data?Object(p.jsx)(C.a,{src:e.data,theme:"rjv-default"}):null})})};var S=function(){var e=Object(i.useState)(null),t=Object(h.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)({}),r=Object(h.a)(a,2),s=r[0],u=r[1],j=function(){var e=Object(O.a)(d.a.mark((function e(t){var n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,e.next=3,x.a.get(n);case 3:a=e.sent,r={Headers:a.headers,count:a.data.count,Response:a.data.results},c(r),console.log(Object(b.a)(Object(b.a)({},s),t)),u(Object(b.a)(Object(b.a)({},s),t));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{}),Object(p.jsx)(g,{setRequestParams:u,requestParams:s,handleApiCall:j}),Object(p.jsxs)("section",{id:"request",children:[Object(p.jsxs)("h3",{children:["Request Method: ",s.method]}),Object(p.jsxs)("h3",{children:["URL: ",s.url]})]}),n?Object(p.jsx)(y,{data:n}):Object(p.jsx)("p",{id:"loading",children:"Loading..."}),Object(p.jsx)("div",{id:"clear"}),Object(p.jsx)(m,{})]})},R=(n(53),function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(p.jsx)(S,{})}}]),n}(u.a.Component)),T=document.getElementById("root");o.a.render(Object(p.jsx)(R,{}),T)}},[[54,1,2]]]);
//# sourceMappingURL=main.f053ffda.chunk.js.map