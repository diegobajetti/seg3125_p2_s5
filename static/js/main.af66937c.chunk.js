(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,a,t){e.exports=t(39)},33:function(e,a,t){},34:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(20),s=t.n(c),r=t(5),m=t(1),i=(t(9),t(4)),o=t(11),u=t(15),E=(t(33),["btn--primary","btn--outline","btn--test"]),d=["btn--medium","btn--large"],b=function(e){var a=e.children,t=e.type,n=e.onClick,c=e.buttonStyle,s=e.buttonSize,m=E.includes(c)?c:E[0],i=d.includes(s)?s:d[0];return l.a.createElement(r.b,{to:"/sign-up",className:"btn-mobile"},l.a.createElement("button",{className:"btn ".concat(m," ").concat(i),onClick:n,type:t},a))};t(34);var p=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],c=a[1],s=Object(n.useState)(!0),m=Object(i.a)(s,2),E=m[0],d=m[1],p=function(){return c(!1)},g=function(){window.innerWidth<=960?d(!1):d(!0)};return Object(n.useEffect)(function(){g()},[]),window.addEventListener("resize",g),l.a.createElement("nav",{className:"navbar"},l.a.createElement("div",{className:"navbar-container"},l.a.createElement(r.b,{to:"/",className:"navbar-logo",onClick:p},"PyCodeX",l.a.createElement(u.a,{className:"fa-staff-snake",icon:o.c})),l.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!t)}},l.a.createElement(u.a,{icon:t?o.d:o.a,className:t?"fas fa-times":"fas fa-bars"})),l.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{to:"/",className:"nav-links",onClick:p},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{to:"/lessons",className:"nav-links",onClick:p},"Lessons")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{to:"/challenges",className:"nav-links",onClick:p},"Challenges")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(r.b,{to:"/discuss",className:"nav-links",onClick:p},"Discuss")),l.a.createElement("li",{className:"nav-item button"},l.a.createElement(r.b,{to:"/sign-up",className:"nav-links-mobile",onClick:p},"Sign Up"))),E&&l.a.createElement(b,{buttonStyle:"btn--outline"},"SIGN UP")))};function g(){return l.a.createElement("h1",{className:"challenges"},"CHALLENGES")}function v(){return l.a.createElement("h1",{className:"discuss"},"DISCUSS")}var _=t(21);t(37);var N=function(){var e=Object(_.useTypewriter)({words:["filename","datafile","inputfile","PyCodeX"],loop:3,delaySpeed:2e3}),a=Object(i.a)(e,1)[0];return l.a.createElement("div",{className:"hero-container"},l.a.createElement("video",{src:"/seg3125_p2_s5/videos/video-1.mp4",autoPlay:"autoPlay",loop:"loop",muted:"muted",playsInline:"playsInline"}),l.a.createElement("h1",null,"PyCodeX"),l.a.createElement("p",null,"with open('",l.a.createElement("span",null,a),".txt', 'r') as file:"),l.a.createElement("div",{className:"hero-btns"},l.a.createElement(b,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large"},"if clicked_button == 'GET STARTED':"),l.a.createElement(b,{className:"btns",buttonStyle:"btn--primary",buttonSize:"btn--large"},"learn_more = file.readlines()",l.a.createElement(u.a,{icon:o.b,className:"fa-play-circle"}))))};var f=function(e){return l.a.createElement("li",{className:"cards__item"},l.a.createElement(r.b,{className:"cards__item__link",to:e.path},l.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":e.label},l.a.createElement("img",{className:"cards__item__img",alt:"Coding",src:e.src})),l.a.createElement("div",{className:"cards__item__info"},l.a.createElement("h5",{className:"cards__item__text"},e.text))))};t(38);var h=function(){return l.a.createElement("div",{className:"cards"},l.a.createElement("h1",null,"Check out these Python lessons!"),l.a.createElement("div",{className:"cards__container"},l.a.createElement("div",{className:"cards__wrapper"},l.a.createElement("ul",{className:"cards__items"},l.a.createElement(f,{src:"/seg3125_p2_s5/images/img-1.jpg",text:"Introduction to Python Syntax and Variables",label:"Beginner",path:"/services"}),l.a.createElement(f,{src:"/seg3125_p2_s5/images/img-5.jpg",text:"Working with Control Flow in Python (Conditional Statements and Loops)",label:"Amateur",path:"/services"})),l.a.createElement("ul",{className:"cards__items"},l.a.createElement(f,{src:"/seg3125_p2_s5/images/img-3.jpg",text:"Object-Oriented Programming in Python",label:"Intermediate",path:"/services"}),l.a.createElement(f,{src:"/seg3125_p2_s5/images/img-2.jpg",text:"Advanced Python Libraries and Frameworks (NumPy and Django)",label:"Advanced",path:"/products"}),l.a.createElement(f,{src:"/seg3125_p2_s5/images/img-4.jpg",text:"Design Patterns and Best Practices in Python",label:"Expert",path:"/sign-up"})))))};var y=function(){return l.a.createElement("div",null,l.a.createElement(N,null),l.a.createElement(h,null))};function S(){return l.a.createElement("h1",{className:"lessons"},"LESSONS")}function k(){return l.a.createElement("h1",{className:"sign-up"},"SIGN UP")}var C=function(){return l.a.createElement(r.a,{basename:"/seg3125_p2_s5"},l.a.createElement(p,null),l.a.createElement(m.c,null,l.a.createElement(m.a,{path:"/",exact:!0,element:l.a.createElement(y,null)}),l.a.createElement(m.a,{path:"/lessons",exact:!0,element:l.a.createElement(S,null)}),l.a.createElement(m.a,{path:"/challenges",exact:!0,element:l.a.createElement(g,null)}),l.a.createElement(m.a,{path:"/discuss",exact:!0,element:l.a.createElement(v,null)}),l.a.createElement(m.a,{path:"/sign-up",exact:!0,element:l.a.createElement(k,null)})))};s.a.createRoot(document.getElementById("root")).render(l.a.createElement(C,null))},9:function(e,a,t){}},[[22,1,2]]]);
//# sourceMappingURL=main.af66937c.chunk.js.map