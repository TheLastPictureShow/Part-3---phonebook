(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){"use strict";t.r(n);var r=t(0),s=t(2),c=t.n(s),o=t(14),a=t.n(o),u=t(3),i=function(e){var n=e.name,t=e.number,s=e.removeEntry;return Object(r.jsxs)("div",{children:[n,", ",t,"",Object(r.jsx)("button",{onClick:s,children:"Delete"})]})},l=t(4),b=t.n(l),d="http://localhost:3001/api/persons",j={getAll:function(){return b.a.get(d).then((function(e){return e.data}))},create:function(e){return b.a.post(d,e).then((function(e){return e.data}))},remove:function(e){return b.a.delete(e)}},h=function(e){var n=e.persons,t=e.setPersons;return n.map((function(e,s){return Object(r.jsx)(i,{name:e.name,number:e.number,removeEntry:function(){return function(e,r){window.confirm("Delete ".concat(e,"?"));var s="http://localhost:3001/api/persons/".concat(r);j.remove(s).then((function(){t(n.filter((function(e){return e.id!==r})))}))}(e.name,e.id)}},s)}))},m=function(e){var n=e.message;return null===n?null:Object(r.jsx)("div",{style:{color:"green",background:"lightgray",fontSize:18,borderRadius:"5px",padding:"10px",marginBottom:"10px",borderStyle:"solid"},children:n})},f=function(e){var n=e.newName,t=e.setNewName,s=e.newNumber,c=e.setNewNumber,o=e.persons,a=e.setPersons,u=e.handleNameChange,i=e.handleNumberChange,l=e.message,b=e.setMessage;return console.log("persons is",o),Object(r.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),o.map((function(e){return e.name})).includes(n))alert("".concat(n," is already added to the phonebook."));else{var r={name:n,number:s};j.create(r).then((function(e){t(""),c(""),b("Added ".concat(n)),setTimeout((function(){b(null)}),5e3),a(e)}))}},children:[Object(r.jsx)(m,{message:l}),Object(r.jsx)("h2",{children:"Add a new:"}),Object(r.jsxs)("div",{children:["name: ",Object(r.jsx)("input",{value:n,onChange:u})]}),Object(r.jsxs)("div",{children:["number: ",Object(r.jsx)("input",{value:s,onChange:i})]}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{type:"submit",children:"Add"})})]})},p=function(){var e=Object(s.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],o=Object(s.useState)(""),a=Object(u.a)(o,2),i=a[0],l=a[1],b=Object(s.useState)(""),d=Object(u.a)(b,2),m=d[0],p=d[1],O=Object(s.useState)(null),g=Object(u.a)(O,2),v=g[0],x=g[1];Object(s.useEffect)((function(){j.getAll().then((function(e){c(e)}))}),[]);return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Phonebook"}),Object(r.jsx)(f,{newName:i,setNewName:l,newNumber:m,setNewNumber:p,persons:t,setPersons:c,handleNameChange:function(e){l(e.target.value)},handleNumberChange:function(e){p(e.target.value)},message:v,setMessage:x}),Object(r.jsx)("h2",{children:"Entries:"}),Object(r.jsx)(h,{persons:t,setPersons:c})]})};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.863f55da.chunk.js.map