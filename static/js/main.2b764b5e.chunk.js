(this.webpackJsonpmovie_app_ver2=this.webpackJsonpmovie_app_ver2||[]).push([[0],{31:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),i=c(17),s=c.n(i),a=c(10),j=c(2),o=c(8),d=c.n(o),u=c(12),b=c(9),l=c(1);var h=function(e){var t=e.id,c=e.coverImg,n=e.title,r=e.summary,i=e.genres;return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:c,alt:n}),Object(l.jsx)("h2",{children:Object(l.jsx)(a.b,{to:"/movie/".concat(t),children:n})}),Object(l.jsx)("p",{children:r}),Object(l.jsx)("ul",{children:i.map((function(e){return Object(l.jsx)("li",{children:e},e)}))})]})};var O=function(){var e=Object(n.useState)(!0),t=Object(b.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)([]),s=Object(b.a)(i,2),a=s[0],j=s[1],o=function(){var e=Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,j(c.data.movies),r(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){o()}),[]),Object(l.jsx)("div",{children:c?Object(l.jsx)("h1",{children:"Loading..."}):Object(l.jsx)("div",{children:a.map((function(e){return Object(l.jsx)(h,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var m=function(e){var t=e.backgroundImg,c=e.title,n=e.description,r=e.genres;return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:t,alt:c}),Object(l.jsx)("h2",{children:c}),Object(l.jsx)("p",{children:n}),Object(l.jsx)("ul",{children:r.map((function(e){return Object(l.jsx)("li",{children:e},e)}))})]})};var v=function(){var e=Object(n.useState)(!0),t=Object(b.a)(e,2),c=t[0],r=t[1],i=Object(n.useState)(),s=Object(b.a)(i,2),a=s[0],o=s[1],h=Object(j.f)().id,O=function(){var e=Object(u.a)(d.a.mark((function e(){var t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(h));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),o(c.data.movie),r(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(O,[]),Object(l.jsx)("div",{children:c?Object(l.jsx)("h1",{children:"Loading..."}):Object(l.jsx)("div",{children:Object(l.jsx)(m,{id:a.id,backgroundImg:a.medium_cover_image,title:a.title,description:a.description_intro,genres:a.genres},a.id)})})};var x=function(){return Object(l.jsx)(a.a,{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/hello",children:Object(l.jsx)("h1",{children:"Hello"})}),Object(l.jsx)(j.a,{path:"/movie/:id",children:Object(l.jsx)(v,{})}),Object(l.jsx)(j.a,{path:"/",children:Object(l.jsx)(O,{})})]})})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.2b764b5e.chunk.js.map