"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[337],{2337:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(9434),a=t(6907),s=t(2791),o=t(3634),i=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,n="",t=crypto.getRandomValues(new Uint8Array(e));e--;){var r=63&t[e];n+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return n},u={form:"Phonebook_form__J23fu",form_input:"Phonebook_form_input__E2I5c",form_btn:"Phonebook_form_btn__zzXyP",find_input:"Phonebook_find_input__z9pBH",find_label:"Phonebook_find_label__D6PsS",item:"Phonebook_item__HtWTq",item_btn:"Phonebook_item_btn__fS4Rh",title:"Phonebook_title__ipARL"},c=t(184),l=function(){var e=(0,r.v9)((function(e){return e.contacts.items})),n=(0,r.v9)((function(e){return e.filters})),t=(0,r.I0)();console.log(e);var a=function(){var t=n.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(t)}))}();return(0,c.jsx)("ul",{children:a.map((function(e,n){var r=e.name,a=e.number,s=e.id;return(0,c.jsxs)("li",{className:u.item,children:[(0,c.jsxs)("span",{children:[r,": ",a]}),(0,c.jsx)("button",{type:"button",className:u.item_btn,onClick:function(){return function(e){t((0,o.GK)(e))}(s)},children:"Delete"},n)]},i())}))})},m=t(9439),f=t(2007),d=t.n(f);function b(){var e=(0,r.v9)((function(e){return e.contacts.items})),n=(0,s.useState)(""),t=(0,m.Z)(n,2),a=t[0],l=t[1],f=(0,s.useState)(""),d=(0,m.Z)(f,2),b=d[0],_=d[1],h=(0,r.I0)();function p(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":l(r);break;case"number":_(r);break;default:return}}return(0,c.jsxs)("form",{onSubmit:function(n){if(n.preventDefault(),e.find((function(e){return e.name.toLowerCase()===a.toLowerCase()})))return alert("".concat(a," is already in contacts."));h((0,o.uK)({name:a,number:b})),l(""),_("")},className:u.form,children:[(0,c.jsxs)("label",{className:u.form_label,children:["Name",(0,c.jsx)("br",{}),(0,c.jsx)("input",{type:"text",name:"name",value:a,onChange:p,className:u.form_input,id:i(),pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,c.jsx)("br",{}),(0,c.jsxs)("label",{className:u.form_label,children:["Number",(0,c.jsx)("br",{}),(0,c.jsx)("input",{type:"tel",name:"number",value:b,onChange:p,className:u.form_input,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,c.jsx)("br",{}),(0,c.jsx)("button",{type:"submit",className:u.form_btn,children:"Add contact"})]})}b.prototype={hendleSubmit:d().func.isRequired};var _=t(3165);function h(){var e=(0,r.v9)((function(e){return e.filters})),n=(0,r.I0)();return(0,c.jsxs)("label",{className:u.find_label,children:["Find contacts by name",(0,c.jsx)("br",{}),(0,c.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){var t=e.target.value;n((0,_.b)(t))},className:u.find_input})]})}function p(){var e=(0,r.v9)((function(e){return e.contacts.isLoading})),n=(0,r.v9)((function(e){return e.contacts.error})),t=(0,r.I0)();return(0,s.useEffect)((function(){t((0,o.yF)())}),[t]),(0,c.jsx)(a.B6,{children:(0,c.jsxs)("div",{children:[(0,c.jsx)(a.ql,{children:(0,c.jsx)("title",{children:"Your tasks"})}),(0,c.jsx)("h1",{className:u.title,children:"Phonebook"}),(0,c.jsx)(b,{}),(0,c.jsx)("h2",{className:u.title,children:"Contacts"}),(0,c.jsx)(h,{}),e&&!n&&(0,c.jsx)("b",{children:"Request in progress..."}),(0,c.jsx)(l,{})]})})}h.prototype={value:d().string.isRequired}}}]);
//# sourceMappingURL=337.a796e4b3.chunk.js.map