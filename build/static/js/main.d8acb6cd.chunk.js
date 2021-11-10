(this["webpackJsonphack-ideas-react"]=this["webpackJsonphack-ideas-react"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(2),a=["security","devops","tech","cloud","data science","ui"],l="Home",s="My Challenges",i="none",r="recents",o="likes",d=function(e){return JSON.parse(JSON.stringify(e))},j=c(1),u=c.n(j),b=Object(j.createContext)({}),m=c(0);var h=function(){var e,t=Object(j.useContext)(b),c=t.loggedIn,n=t.username;return e=c?Object(m.jsxs)("div",{className:"d-flex justify-content-end flex-column logout",children:[Object(m.jsxs)("span",{children:["logged in as: ",Object(m.jsx)("strong",{children:n})]}),Object(m.jsx)("span",{onClick:function(){localStorage.setItem("loggedIn",!1),document.location.reload()},className:"logoutLink",children:"logout"})]}):null,Object(m.jsxs)("nav",{className:"navbar d-flex justify-content-between px-3",children:[Object(m.jsx)("span",{className:"navbar-brand",children:"Hack Ideas"}),e]})},O=c(8),f=c(3);var x=function(e){var t=e.tag,c=e.active,n=e.children,a=e.onClick;return Object(m.jsx)("span",{className:"hTag ".concat(c?"active":""),onClick:function(){return a(t)},children:n})},g=c(4),v=c.n(g);var p=function(e){var t=Object(j.useContext)(b),c=t.username,l=t.challenges,s=t.updateChallenges,i=Object(j.useState)({title:"",description:"",tags:[],createdBy:"",createdDate:"",likedBy:[],id:""}),r=Object(n.a)(i,2),o=r[0],d=r[1];Object(j.useEffect)((function(){e.open?(d({title:"",description:"",tags:[],createdBy:"",createdDate:"",likedBy:[]}),document.querySelector("#hackDialog").showModal()):document.querySelector("#hackDialog").close()}),[e]);var u=function(e){var t=o.tags;if(t.includes(e)){var c=t.findIndex((function(t){return t===e}));t.splice(c,1),d(Object(f.a)({},o))}else d(Object(f.a)(Object(f.a)({},o),{},{tags:[].concat(Object(O.a)(t),[e])}))};return v.a.createPortal(Object(m.jsxs)("dialog",{className:"hackDialog",id:"hackDialog",children:[Object(m.jsx)("h5",{className:"mb-3",children:"Add New Challenge"}),Object(m.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),t.target.checkValidity){var n=(new Date).toISOString();o.createdBy=c,o.createdDate=n,o.id=Date.now(),s([].concat(Object(O.a)(l),[o])),e.onclose()}},children:[Object(m.jsx)("div",{className:"mb-3",children:Object(m.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter challenge title",value:o.title,onChange:function(e){d(Object(f.a)(Object(f.a)({},o),{},{title:e.target.value}))},required:!0})}),Object(m.jsx)("div",{className:"mb-3",children:Object(m.jsx)("textarea",{className:"form-control",rows:"5",value:o.description,placeholder:"Add chellnege description",onChange:function(e){d(Object(f.a)(Object(f.a)({},o),{},{description:e.target.value}))},required:!0})}),Object(m.jsx)("div",{className:"mb-3",children:a.map((function(e){return Object(m.jsx)(x,{active:o.tags.includes(e),onClick:u,tag:e,children:e},e)}))}),Object(m.jsxs)("div",{className:"mt-3 d-flex justify-content-end",children:[Object(m.jsx)("input",{className:"btn btn-secondary",type:"button",value:"Cancel",onClick:function(){e.onclose()}}),Object(m.jsx)("pre",{children:" "}),Object(m.jsx)("input",{className:"btn btn-primary",type:"submit",value:"Add"})]})]})]}),document.body)},N=c.p+"static/media/undraw_new_ideas_jdea.2b023f22.svg";var y=function(e){var t=e.challenge,c=e.onClick,n=e.onLike,a=e.onDisLike,l=Object(j.useContext)(b).username;return Object(m.jsxs)("div",{className:"ChallengesListItem",onClick:function(){c(t)},children:[Object(m.jsx)("div",{className:"title mb-3 overflowHidden",children:t.title}),Object(m.jsx)("div",{className:"description overflowHidden mb-3",children:t.description}),Object(m.jsx)("div",{className:"hTags mb-3",children:t.tags.map((function(e){return Object(m.jsx)("span",{className:"hTag small",children:e},e)}))}),Object(m.jsxs)("div",{className:"likes-box d-flex align-items-center",children:[t.likedBy.includes(l)?Object(m.jsx)("span",{className:"label liked",onClick:function(e){!function(e,t){e.stopPropagation(),a(t)}(e,t.id)}}):Object(m.jsx)("span",{className:"label",onClick:function(e){!function(e,t){e.stopPropagation(),n(t)}(e,t.id)}}),Object(m.jsx)("span",{className:"likes",children:t.likedBy.length})]})]})};var k=function(e){return Object(j.useEffect)((function(){e.open?document.querySelector("#viewHackDialog").showModal():document.querySelector("#viewHackDialog").close()}),[e]),v.a.createPortal(Object(m.jsxs)("dialog",{className:"hackDialog",id:"viewHackDialog",children:[Object(m.jsx)("h5",{className:"mb-3 title",children:e.challenge.title}),Object(m.jsxs)("p",{className:"addedByLabel",children:["Added by: ",e.challenge.createdBy]}),Object(m.jsx)("p",{className:"mb-3 description",children:e.challenge.description}),Object(m.jsx)("div",{className:"hTags mb-3",children:e.challenge.tags&&e.challenge.tags.map((function(e){return Object(m.jsx)("span",{className:"hTag small",children:e},e)}))}),Object(m.jsxs)("div",{className:"mt-3 d-flex justify-content-end",children:[Object(m.jsx)("input",{className:"btn btn-secondary",type:"button",value:"Cancel",onClick:function(){e.onclose()}}),Object(m.jsx)("pre",{children:" "})]})]}),document.body)};var C=function(e){var t=Object(j.useState)(!1),c=Object(n.a)(t,2),a=c[0],l=c[1],s=Object(j.useState)({}),i=Object(n.a)(s,2),r=i[0],o=i[1],u=Object(j.useContext)(b),h=u.username,O=u.challenges,f=u.updateChallenges;return e.challenges.length?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"ChallengesList mt-1",children:e.challenges.map((function(e){return Object(m.jsx)(y,{challenge:e,onClick:function(e){!function(e){o(e),l(!0)}(e)},onLike:function(e){!function(e){var t=d(O),c=t.findIndex((function(t){return t.id===e}));t[c].likedBy.push(h),f(t)}(e)},onDisLike:function(e){!function(e){var t=d(O),c=t.findIndex((function(t){return t.id===e})),n=t[c].likedBy.findIndex((function(e){return e===h}));t[c].likedBy.splice(n,1),f(t)}(e)}},e.id)}))}),Object(m.jsx)(k,{challenge:r,open:a,onclose:function(){l(!1)}})]}):Object(m.jsxs)("div",{className:"d-flex flex-fill align-items-center justify-content-center mt-5 flex-column",children:[Object(m.jsx)("img",{src:N,alt:"",width:"200"}),Object(m.jsx)("p",{className:"mt-5",children:Object(m.jsx)("strong",{children:"No challenges yet!"})}),Object(m.jsx)("p",{children:" Click on Add New Challenge to add the first challenge."})]})};var S=function(){var e=Object(j.useContext)(b),t=e.activeTab,c=e.setActiveTab;return Object(m.jsx)("div",{className:"homeTabs",children:Object(m.jsxs)("ul",{className:"nav nav-tabs",children:[Object(m.jsx)("li",{className:"nav-item",onClick:function(){c(l)},children:Object(m.jsx)("span",{className:"nav-link ".concat(t===l?"active":""),children:l})}),Object(m.jsx)("li",{className:"nav-item",onClick:function(){c(s)},children:Object(m.jsx)("span",{className:"nav-link ".concat(t===s?"active":""),children:s})})]})})};var I=function(){var e=Object(j.useContext)(b),t=e.sortBy,c=e.setSortBy,n=function(e){c(e===r?t===r?i:r:t===o?i:o)};return Object(m.jsxs)("div",{className:"sortbyLabels d-flex mb-1",children:[Object(m.jsx)("span",{children:"SORT BY:"}),Object(m.jsxs)("div",{className:"d-flex sortbyItem",children:[Object(m.jsx)("span",{onClick:function(){n(r)},className:"hsort ".concat(t===r?"bold":""),children:"Most Recent"}),Object(m.jsx)("span",{onClick:function(){n(o)},className:"hsort ".concat(t===o?"bold":""),children:"Most Liked"})]})]})};var w=function(){var e=Object(j.useContext)(b),t=e.activeTab,c=e.filteredChallenges,a=Object(j.useState)(!1),s=Object(n.a)(a,2),i=s[0],r=s[1];return Object(m.jsxs)("div",{className:"homeContainer d-flex flex-fill flex-column",children:[Object(m.jsx)(S,{}),Object(m.jsxs)("div",{className:"d-flex justify-content-between my-4",children:[Object(m.jsx)("h4",{className:"heading",children:t===l?"All Challenges":"My Challenges"}),Object(m.jsx)("button",{className:"btn btn-success btn-sm",onClick:function(){r(!0)},children:"+ Add New Challenge"})]}),Object(m.jsx)(I,{}),Object(m.jsx)(C,{challenges:c}),Object(m.jsx)(p,{open:i,onclose:function(){r(!1)}})]})},B=function(e,t){return e.id>t.id?-1:e.id<t.id?1:0},D=function(e,t){return e.likedBy.length>t.likedBy.length?-1:e.likedBy.length<t.likedBy.length?1:0};var L=function(){var e=localStorage.getItem("username"),t=localStorage.getItem("loggedIn"),c=Object(j.useState)(l),a=Object(n.a)(c,2),s=a[0],o=a[1],u=JSON.parse(localStorage.getItem("challenges"))||[],O=Object(j.useState)(u),f=Object(n.a)(O,2),x=f[0],g=f[1],v=Object(j.useState)([]),p=Object(n.a)(v,2),N=p[0],y=p[1],k=Object(j.useState)(i),C=Object(n.a)(k,2),S=C[0],I=C[1],L=function(t){return t.createdBy===e};return Object(j.useEffect)((function(){var e;e=s===l?d(x):x.filter(L),S===i||e.sort(S===r?B:D),y((function(){return e}))}),[s,S,x]),Object(j.useEffect)((function(){I(i)}),[s]),Object(m.jsx)("div",{className:"d-flex flex-column flex-fill",children:Object(m.jsxs)(b.Provider,{value:{activeTab:s,setActiveTab:o,loggedIn:t,username:e,sortBy:S,setSortBy:I,challenges:x,filteredChallenges:N,updateChallenges:function(e){g((function(){return e})),localStorage.setItem("challenges",JSON.stringify(e))}},children:[Object(m.jsx)(h,{}),Object(m.jsx)(w,{})]})})},T=c.p+"static/media/undraw_programming.795b8b8c.svg";var A=function(){var e=Object(j.useState)(""),t=Object(n.a)(e,2),c=t[0],a=t[1];return Object(m.jsx)("div",{className:"LoginForm",children:Object(m.jsxs)("form",{className:"flex flex-column",onSubmit:function(e){e.preventDefault(),e.target.checkValidity()&&(localStorage.setItem("loggedIn",!0),localStorage.setItem("username",c),document.location.reload())},children:[Object(m.jsx)("label",{className:"mb-3 hLoginLabel",children:"LOGIN TO HACK IDEAS"}),Object(m.jsx)("input",{type:"text",onChange:function(e){a(e.target.value)},className:"form-control mb-3",placeholder:"Enter employee number",maxLength:5,pattern:"\\d{5}",required:!0}),Object(m.jsx)("div",{className:"d-grid",children:Object(m.jsx)("button",{className:"btn btn-primary",children:"LOGIN"})})]})})};var E=function(){return Object(m.jsxs)("div",{className:"d-flex flex-column flex-fill login",children:[Object(m.jsx)(h,{}),Object(m.jsxs)("div",{className:"d-flex flex-fill  align-items-center justify-content-center",children:[Object(m.jsx)("img",{src:T,alt:"wallpaper",width:"500"}),Object(m.jsx)(A,{})]})]})},H=JSON.parse(localStorage.getItem("loggedIn"));var q=function(){return H?Object(m.jsx)(L,{}):Object(m.jsx)(E,{})};c(14);v.a.render(Object(m.jsx)(u.a.StrictMode,{children:Object(m.jsx)(q,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d8acb6cd.chunk.js.map