(this["webpackJsonpreact-hooks-bot-battlr-code-challenge"]=this["webpackJsonpreact-hooks-bot-battlr-code-challenge"]||[]).push([[0],{10:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(3),i=s.n(a),l=s(0);var n=e=>{let t,{bot:s,handleClick:c,handleDischarge:a}=e;switch(s.bot_class){case"Assault":t=Object(l.jsx)("i",{className:"icon military"});break;case"Defender":t=Object(l.jsx)("i",{className:"icon shield"});break;case"Support":t=Object(l.jsx)("i",{className:"icon ambulance"});break;default:t=Object(l.jsx)("div",{})}return Object(l.jsxs)("div",{className:"ui card",onClick:()=>c(s.id),children:[Object(l.jsx)("div",{className:"image",children:Object(l.jsx)("img",{alt:"oh no!",src:s.avatar_url})}),Object(l.jsxs)("div",{className:"content",children:[Object(l.jsxs)("div",{className:"header",children:[s.name," ",t]}),Object(l.jsx)("div",{className:"meta",children:Object(l.jsx)("small",{children:s.catchphrase})})]}),Object(l.jsxs)("div",{className:"extra content",children:[Object(l.jsxs)("span",{children:[Object(l.jsx)("i",{className:"icon heartbeat"}),s.health]}),Object(l.jsxs)("span",{children:[Object(l.jsx)("i",{className:"icon lightning"}),s.damage]}),Object(l.jsxs)("span",{children:[Object(l.jsx)("i",{className:"icon shield"}),s.armor]})]}),a&&Object(l.jsx)("div",{className:"extra content",children:Object(l.jsx)("button",{className:"ui button red",onClick:e=>{e.stopPropagation(),a(s.id)},children:"X"})})]})};var r=function(e){let{bots:t,enlistBot:s}=e;return Object(l.jsx)("div",{className:"ui segment inverted olive bot-collection",children:Object(l.jsx)("div",{className:"ui five column grid",children:Object(l.jsx)("div",{className:"row bot-collection-row",children:t.map((e=>Object(l.jsx)(n,{bot:e,handleClick:()=>s(e)},e.id)))})})})};var o=e=>{let{bots:t,releaseBot:s,dischargeBot:c}=e;return Object(l.jsxs)("div",{className:"ui segment inverted olive bot-army",children:[Object(l.jsx)("div",{className:"ui five column grid",children:Object(l.jsx)("div",{className:"row bot-army-row",children:t.map((e=>Object(l.jsx)(n,{bot:e,handleClick:()=>s(e.id),handleDischarge:()=>c(e.id)},e.id)))})}),Object(l.jsx)("div",{className:"row bot-army-row",children:"Your Bot Army"})]})};var d=function(){const[e,t]=Object(c.useState)([]),[s,a]=Object(c.useState)([]);return Object(c.useEffect)((()=>{fetch("http://localhost:8001/bots").then((e=>e.json())).then((e=>t(e)))}),[]),Object(l.jsxs)("div",{children:[Object(l.jsx)(o,{bots:s,releaseBot:e=>{a(s.filter((t=>t.id!==e)))},dischargeBot:c=>{fetch("http://localhost:8001/bots/".concat(c),{method:"DELETE"}).then((()=>{a(s.filter((e=>e.id!==c))),t(e.filter((e=>e.id!==c)))}))}}),Object(l.jsx)(r,{bots:e,enlistBot:e=>{s.some((t=>t.id===e.id))||a([...s,e])}})]})};s(9);i.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))},9:function(e,t,s){}},[[10,1,2]]]);
//# sourceMappingURL=main.80b8ba57.chunk.js.map