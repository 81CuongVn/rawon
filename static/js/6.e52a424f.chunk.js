(this["webpackJsonpdisc-11-website"]=this["webpackJsonpdisc-11-website"]||[]).push([[6],{31:function(e,t,n){"use strict";n.r(t);var c=n(30),i=n(9),r=(n(28),n(17),n(0)),s=n(26),o=n(27),a=n.n(o),d=n(1);n(29),t.default=function(){var e=Object(r.useState)({text:"",items:[],notices:[]}),t=Object(i.a)(e,2),n=t[0],o=t[1],l=0;function u(){if(""!==n.text){try{new URL(n.text)}catch(e){return void o({items:n.items,text:n.text,notices:[].concat(Object(c.a)(n.notices),[{text:"Invalid URL",id:"notice-".concat(l++),show:!0}])})}o({items:n.items.concat([n.text]),text:"",notices:n.notices})}}return Object(r.useEffect)((function(){document.getElementById("code").innerHTML="",a()(document.getElementById("code"),{lineNumbers:!0,mode:"javascript",readOnly:!0,value:"function trigger() {\n    var url = [\n".concat(n.items.map((function(e){return'        "'.concat(e,'"')})).join(",\n"),"\n    ];\n    for (var x = 0; x < url.length; x++) {\n        var uri = url[x];\n        try {\n            UrlFetchApp.fetch(uri);\n        } catch (err) {\n            Logger.log(err.message)\n        }\n    }\n}")})})),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"absolute flex w-full",children:Object(d.jsx)("div",{className:"block w-full m-3 max-w-xs",children:n.notices.slice(0,2).map((function(e){return Object(d.jsx)(s.a,{appear:!0,show:e.show,enter:"transition duration-200",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"delay-5000 duration-200 ease-in-out",leaveFrom:"opacity-100",leaveTo:"opacity-0",afterEnter:function(){o({items:n.items,text:n.text,notices:Object(c.a)(n.notices.map((function(t){return t.id!==e.id?t:{text:t.text,id:t.id,show:!1}})))})},afterLeave:function(){o({items:n.items,text:n.text,notices:n.notices.filter((function(t){return t.id!==e.id}))})},children:Object(d.jsx)("div",{className:"w-full m-3 bg-red-300 border border-red-400 rounded-lg",children:Object(d.jsx)("p",{className:"m-2",children:e.text})})},e.id)}))})}),Object(d.jsx)("div",{className:"flex items-center justify-center h-screen dark:bg-gray-900",children:Object(d.jsxs)("div",{className:"grid grid-cols-1 grid-rows-2",children:[Object(d.jsxs)("div",{className:"m-20",children:[Object(d.jsx)("p",{className:"text-base md:text-xl font-bold dark:text-white",children:"Script Generator"}),Object(d.jsx)("br",{}),Object(d.jsx)("input",{id:"url-textbox",onKeyDown:function(e){"Enter"===e.code&&u()},onChange:function(e){o({items:n.items,text:e.target.value,notices:n.notices})},value:n.text,placeholder:"Put the URL here",className:"focus:outline-none"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"p-2 mt-2 transition-colors border rounded border-black hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black",onClick:u,children:"Add URL"})]}),Object(d.jsx)("div",{id:"code",className:"text-sm"})]})})]})}}}]);
//# sourceMappingURL=6.e52a424f.chunk.js.map