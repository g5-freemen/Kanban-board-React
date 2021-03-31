(this["webpackJsonpkonban-board"]=this["webpackJsonpkonban-board"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(9),s=c.n(a),l=c(3),i=c.n(l),o=c(6),d=c(2),u=(c(16),c(0));function j(){return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h1",{className:"header__title",children:"Kanban Board"}),Object(u.jsx)("p",{className:"header__subtitle",children:"A board to keep track of your task"})]})}var b=c(4),O=c.n(b);function m(e){var t=e.data,c=t.cardDesc,n=t.cardTitle,a=t.date,s=t.id,l=t.user,i=Object(r.useContext)(k),o=i.cards,d=i.setCards,j=i.setModalState;return Object(u.jsxs)("li",{className:"card",id:s,onClick:function(e){var t;!(t=e.target.className).includes("delete")&&!t.includes("move")&&j(["edit",s])},children:[Object(u.jsx)("div",{className:"card--user-field",children:Object(u.jsx)("span",{className:"card--user",children:l})}),Object(u.jsx)("span",{className:"card--title",children:n}),Object(u.jsx)("div",{className:"card--desc",children:c}),Object(u.jsxs)("div",{className:"card--bottom",children:[Object(u.jsx)("span",{className:"card--date",children:a}),Object(u.jsx)("button",{className:"card--delete-btn",onClick:function(){return function(e){return d(o.filter((function(t){return t.id!==e})))}(s)}}),Object(u.jsx)("button",{className:"card--move-btn",onClick:function(){return function(e){d(o.map((function(t){return t.id===e&&(t.column<2?t.column++:t.column=0),t})))}(s)}})]})]})}function f(e){var t=e.column,c=Object(r.useState)(!1),a=Object(d.a)(c,2),s=a[0],l=a[1],i=Object(r.useState)(1),o=Object(d.a)(i,2),j=o[0],b=o[1],O=Object(r.useState)(1),m=Object(d.a)(O,2),f=m[0],x=m[1],h=Object(r.useState)(0),p=Object(d.a)(h,2),v=p[0],N=p[1],S=Object(r.useContext)(k),g=S.cards,C=S.setCards,w=function(e){return C(g.filter((function(t){return t.column!==e})))},_={pos:{left:j-v,top:f}};return Object(u.jsxs)(n.a.Fragment,{children:[Object(u.jsx)("div",{className:"board--delBtn",onClick:function(){return 1===(e=t)?l(!0):w(e);var e},onMouseOver:function(e){b(e.clientX),x(e.clientY),N(document.querySelector(".board--delBtn-tooltip").clientWidth)}}),Object(u.jsx)("span",{className:"board--delBtn-tooltip",style:_.pos,children:" Delete all cards "}),s&&Object(u.jsx)("div",{className:"modal-window--confirm",children:Object(u.jsxs)("div",{className:"modal-window--container",children:[Object(u.jsx)("div",{className:"confirm-text",children:"Delete all 'In Progress' Cards?"}),Object(u.jsxs)("div",{className:"card--edit-field center",children:[Object(u.jsx)("button",{id:"deleteInProgressCards",onClick:function(){return w(t)},children:"Yes"}),Object(u.jsx)("button",{id:"notDeleteInProgressCards",onClick:function(){return l(!1)},children:"No"})]})]})})]})}function x(e){var t=e.name,c=t.toLowerCase().replace(" ","-"),n="board__"+c+"--container",a=c+"-title",s=0;"In Progress"===t?s=1:"Done"===t&&(s=2);var l=Object(r.useContext)(k),i=l.cards,o=l.setModalState,d=i.filter((function(e){return e.column===s})).length;return Object(r.useEffect)((function(){return localStorage.setItem("cards",JSON.stringify(i))}),[i]),Object(u.jsxs)("div",{className:n,children:[Object(u.jsxs)("div",{className:"board__title-bar",children:[Object(u.jsxs)("div",{className:"board__title",id:a,children:[t,Object(u.jsx)("div",{className:"board--card_counter",style:0===d?{visibility:"hidden"}:null,children:d})]}),d>0&&Object(u.jsx)(f,{column:s})]}),Object(u.jsx)("ul",{className:"board__cards",children:d>0&&i.filter((function(e){return e.column===s})).map((function(e){return Object(u.jsx)(m,{data:e},O()())}))}),"To do"===t&&Object(u.jsx)("button",{className:"board__add-card-btn",onClick:function(){return o(["add"])},children:" Add new "})]})}function h(){return Object(u.jsxs)("main",{className:"board",children:[Object(u.jsx)("span",{className:"board--delBtn-tooltip",children:"Delete all cards"}),Object(u.jsx)(x,{name:"To do"}),Object(u.jsx)(x,{name:"In Progress"}),Object(u.jsx)(x,{name:"Done"})]})}function p(){return Object(u.jsx)("footer",{className:"footer",children:Object(u.jsx)("a",{className:"footer__link",href:"https://github.com/g5-freemen",children:"Made by Anton Borkovskij, 2021"})})}var v=c(10);function N(){var e=Object(r.useContext)(k),t=e.users,c=e.cards,n=e.setCards,a=e.modalState,s=e.setModalState,l=Object(r.useState)(a[1]&&c.find((function(e){return e.id===a[1]}))||{}),i=Object(d.a)(l,1)[0],o=Object(r.useState)(a[1]&&i.cardTitle||""),j=Object(d.a)(o,2),b=j[0],m=j[1],f=Object(r.useState)(a[1]&&i.cardDesc||""),x=Object(d.a)(f,2),h=x[0],p=x[1],N=Object(r.useState)(a[1]&&i.user||""),S=Object(d.a)(N,2),g=S[0],C=S[1];return Object(u.jsx)("div",{className:"modal-window",children:Object(u.jsxs)("form",{className:"card-form",onSubmit:function(e){if(e.preventDefault(),"add"===a[0]){var t={cardTitle:b,cardDesc:h,user:g,date:(new Date).toLocaleString().slice(0,-3),id:O()(),column:0};n((function(e){return e.concat(t)}))}else{var r={cardTitle:b,cardDesc:h,user:g,date:i.date,id:i.id,column:i.column},l=Object(v.a)(c),o=l.find((function(e){return e.id===a[1]}));l.splice(l.indexOf(o),1,r),n(l)}m(""),p(""),C(""),s(null)},children:[a[1]&&Object(u.jsx)("span",{className:"card--edit",children:"Edit Card"}),Object(u.jsxs)("span",{className:"card-form--top-field",children:[Object(u.jsxs)("label",{children:["Title *",Object(u.jsx)("input",{className:"card-form--title",type:"text",placeholder:"Enter Card Title",maxLength:"27",value:b,onChange:function(e){return m(e.target.value)},required:!0})]}),Object(u.jsx)("button",{className:"card-form--close-btn",onClick:function(e){e.preventDefault(),s(null)}})]}),Object(u.jsxs)("label",{children:["Description *",Object(u.jsx)("textarea",{className:"card-form--desc",rows:"8",cols:"40",placeholder:"Enter Card Description",value:h,onChange:function(e){return p(e.target.value)},required:!0})]}),Object(u.jsxs)("label",{children:["User *",Object(u.jsxs)("select",{name:"userName",id:"usersList",value:g,onChange:function(e){return C(e.target.value)},required:!0,children:[Object(u.jsx)("option",{value:"",children:"Select user"},O()()),t&&t.map((function(e){return Object(u.jsx)("option",{value:e,children:e},O()())}))]})]}),Object(u.jsx)("input",{className:"card-form--save-btn",type:"submit",value:"Save"})]})})}function S(){return(S=Object(o.a)(i.a.mark((function e(){var t,c,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",g());case 4:return e.prev=4,e.t0=e.catch(0),e.next=8,fetch("https://jsonplaceholder.typicode.com/users");case 8:return t=e.sent,e.next=11,t.json();case 11:return c=e.sent,r=c.map((function(e){return e.name})),localStorage.setItem("users",JSON.stringify(r)),e.abrupt("return",r);case 15:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function g(){var e=localStorage.getItem("users");if(!e)throw new Error("No cached users");return JSON.parse(e)}var C={getUsers:function(){return S.apply(this,arguments)}},k=n.a.createContext();function w(){var e=Object(r.useState)(JSON.parse(localStorage.getItem("cards"))||[]),t=Object(d.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(null),s=Object(d.a)(a,2),l=s[0],b=s[1],O=Object(r.useState)(null),m=Object(d.a)(O,2),f=m[0],x=m[1],v=Object(r.useCallback)(Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.getUsers();case 2:t=e.sent,b(t);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(r.useEffect)((function(){return v()}),[]),Object(u.jsx)(k.Provider,{value:{users:l,cards:c,setCards:n,modalState:f,setModalState:x},children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(j,{}),Object(u.jsx)(h,{}),Object(u.jsx)(p,{}),f&&Object(u.jsx)(N,{})]})})}s.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.091b9515.chunk.js.map