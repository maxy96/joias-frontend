(this.webpackJsonpjoias=this.webpackJsonpjoias||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,n,c){},function(e,n,c){},function(e,n,c){},function(e,n,c){},function(e,n,c){},function(e,n,c){},function(e,n,c){},function(e,n,c){},function(e,n,c){},function(e,n,c){},function(e,n,c){"use strict";c.r(n);var t=c(0),a=c(1),r=c(7),i=c.n(r),l=c(4),s=c(5),o=c(10),j=c(8),b=(c(16),function(){return Object(t.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light border-pink",children:Object(t.jsx)("h1",{className:"mx-auto",children:"Logo"})})}),d=(c(17),function(e){var n=e.children;return Object(t.jsx)("div",{className:"container my-4",children:n})}),h=c(2),m=c(3),u=c(9),x=function(){function e(n,c,t){Object(l.a)(this,e),this.nombre=n,this.apellido=c,this.email=t,this.phone=void 0,this.phone="+5493794040913"}return Object(s.a)(e,[{key:"fullName",value:function(){return this.nombre+" "+this.apellido}},{key:"message",value:function(){return"Hola me llamo ".concat(this.fullName()," y mi correo es ").concat(this.email," \n        %0D%0A *ESTE MENSAJE SE PUEDE MODIFICAR*")}},{key:"enviarWpp",value:function(){window.open("https://api.whatsapp.com/send?phone=".concat(this.phone,"&text=").concat(this.message()),"_blanck")}}]),e}(),O=function(e){var n=e.children;return Object(t.jsx)("div",{className:"col-md-6",children:n})},f=function(e){var n=e.children;return Object(t.jsx)("div",{className:"col-md-8",children:n})},p=function(e){var n=e.children;return Object(t.jsx)("div",{className:"col-md-12",children:n})},v=(c(18),function(e){var n=e.children;return Object(t.jsx)("div",{className:"row justify-content-center",children:n})}),N=function(e){var n=e.children;return Object(t.jsx)("div",{className:"row",children:n})},g=(c(19),function(e){var n=e.label,c=e.onChange,a=e.name;return Object(t.jsxs)("div",{className:"form-check form-check-inline my-1 d-flex justify-content-center",children:[Object(t.jsx)("input",{className:"form-check-input",name:a,onChange:c,type:"checkbox",required:!0}),Object(t.jsx)("label",{className:"form-check-label",children:n})]})}),y=(c(20),c(21),function(e){var n=e.label,c=e.onChange,a=e.name;return Object(t.jsxs)("div",{className:"form-group row",children:[Object(t.jsx)("label",{className:"col-md-2 col-form-label text-md-right",children:n}),Object(t.jsx)("div",{className:"col-md-10",children:Object(t.jsx)("input",{type:"email",className:"form-control",name:a,onChange:c,required:!0})})]})}),k=(c(22),function(e){var n=e.label,c=e.onChange,a=e.name;return Object(t.jsxs)("div",{className:"form-group row",children:[Object(t.jsx)("label",{className:"col-md-2 col-form-label text-md-right",children:n}),Object(t.jsx)("div",{className:"col-md-10",children:Object(t.jsx)("input",{type:"text",name:a,className:"form-control",onChange:c,required:!0})})]})}),C=function(){var e=Object(a.useState)({nombre:"",apellido:"",email:"",tyc:!1,mayorDeEdad:!1}),n=Object(u.a)(e,2),c=n[0],r=n[1],i=function(e){r(Object(m.a)(Object(m.a)({},c),{},Object(h.a)({},e.target.name,e.target.value)))},l=function(e){r(Object(m.a)(Object(m.a)({},c),{},Object(h.a)({},e.target.name,e.target.checked)))};return Object(t.jsxs)("form",{onSubmit:function(e){e.preventDefault(),new x(c.nombre,c.apellido,c.email).enviarWpp()},children:[Object(t.jsxs)(N,{children:[Object(t.jsx)(p,{children:Object(t.jsx)(k,{label:"Nombre",name:"nombre",onChange:i})}),Object(t.jsx)(p,{children:Object(t.jsx)(k,{label:"Apellido",name:"apellido",onChange:i})}),Object(t.jsx)(p,{children:Object(t.jsx)(y,{label:"Email",name:"email",onChange:i})}),Object(t.jsx)(p,{children:Object(t.jsx)(g,{label:"Acepto los terminos y condiciones",name:"tyc",onChange:l})}),Object(t.jsx)(p,{children:Object(t.jsx)(g,{label:"Soy mayor de 18 a\xf1os",name:"mayorDeEdad",onChange:l})})]}),Object(t.jsx)("button",{className:"btn btn-block btn-coral mt-2",type:"submit",children:"Enviar"}),Object(t.jsx)("a",{href:"!#",className:"d-flex justify-content-center",children:"Ver terminos y condiciones"})]})},E=(c(23),function(e){var n=e.children;return Object(t.jsx)("div",{className:"card border-0 shadow-pink",children:Object(t.jsx)("div",{className:"card-body px-5",children:n})})}),w=(c(24),function(){return Object(t.jsx)("footer",{children:Object(t.jsx)(d,{children:Object(t.jsxs)(N,{children:[Object(t.jsx)(O,{children:Object(t.jsx)("div",{className:"text-center text-footer",children:"Copyright\xa9empresa"})}),Object(t.jsx)(O,{children:Object(t.jsx)("div",{className:"text-center text-footer",children:"Contacto"})})]})})})}),D=function(e){Object(o.a)(c,e);var n=Object(j.a)(c);function c(){return Object(l.a)(this,c),n.apply(this,arguments)}return Object(s.a)(c,[{key:"render",value:function(){return Object(t.jsxs)(a.Fragment,{children:[Object(t.jsx)(b,{}),Object(t.jsx)(d,{children:Object(t.jsx)(v,{children:Object(t.jsx)(f,{children:Object(t.jsxs)(E,{children:[Object(t.jsx)("h2",{className:"text-center mb-2",children:"Titulo"}),Object(t.jsx)("hr",{}),Object(t.jsx)(C,{})]})})})}),Object(t.jsx)(w,{})]})}}]),c}(a.Component);c(25);i.a.render(Object(t.jsx)(D,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.9d4b0bc2.chunk.js.map