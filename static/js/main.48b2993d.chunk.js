(this.webpackJsonpmovie_app_ver2=this.webpackJsonpmovie_app_ver2||[]).push([[0],{10:function(e,t,i){e.exports={movie:"Movie_movie__21qoq",movie__img:"Movie_movie__img__1GBvl",movie__title:"Movie_movie__title__2zjxu",movie__year:"Movie_movie__year__3C0xf",movie__genres:"Movie_movie__genres__2scpq"}},11:function(e,t,i){e.exports={wrapper:"singleMovie_wrapper__1wIFo",description:"singleMovie_description__3xn0J",genresUl:"singleMovie_genresUl__13u2B",genresLi:"singleMovie_genresLi__1cxlR"}},15:function(e,t,i){e.exports={container:"Home_container__2s0Tp",loader:"Home_loader__2LuS3",movies:"Home_movies__1KTa9"}},23:function(e,t,i){e.exports={loader:"Detail_loader__Ag910"}},35:function(e,t,i){},36:function(e,t,i){"use strict";i.r(t);var n=i(0),c=i.n(n),r=i(20),s=i.n(r),a=i(12),o=i(2),j=i(8),l=i.n(j),m=i(14),_=i(9),d=i(10),v=i.n(d),u=i(1);var b=function(e){var t=e.id,i=e.coverImg,n=e.title,c=e.year,r=e.summary,s=e.genres;return Object(u.jsxs)("div",{className:v.a.movie,children:[Object(u.jsx)("img",{src:i,alt:n,className:v.a.movie__img}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{className:v.a.movie__title,children:Object(u.jsx)(a.b,{to:"/movie/".concat(t),children:n})}),Object(u.jsx)("h3",{className:v.a.movie__year,children:c}),Object(u.jsx)("p",{children:r.length>235?"".concat(r.slice(0,235),"..."):r}),Object(u.jsx)("ul",{className:v.a.movie__genres,children:s.map((function(e){return Object(u.jsx)("li",{children:e},e)}))})]})]})},p=i(15),x=i.n(p);var h=function(){var e=Object(n.useState)(!0),t=Object(_.a)(e,2),i=t[0],c=t[1],r=Object(n.useState)([]),s=Object(_.a)(r,2),a=s[0],o=s[1],j=function(){var e=Object(m.a)(l.a.mark((function e(){var t,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year");case 2:return t=e.sent,e.next=5,t.json();case 5:i=e.sent,o(i.data.movies),c(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){j()}),[]),Object(u.jsx)("div",{className:x.a.container,children:i?Object(u.jsx)("div",{className:x.a.loader,children:Object(u.jsx)("span",{children:"Loading..."})}):Object(u.jsx)("div",{className:x.a.movies,children:a.map((function(e){return Object(u.jsx)(b,{id:e.id,year:e.year,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})},O=i(11),g=i.n(O);var f=function(e){var t=e.backgroundImg,i=e.title,n=e.description,c=e.genres;return Object(u.jsxs)("div",{className:g.a.wrapper,children:[Object(u.jsx)("img",{src:t,alt:i,className:g.a.pic}),Object(u.jsx)("h2",{children:i}),Object(u.jsx)("ul",{className:g.a.genresUl,children:c.map((function(e){return Object(u.jsx)("li",{className:g.a.genresLi,children:e},e)}))}),Object(u.jsx)("p",{className:g.a.description,children:n})]})},y=i(23),N=i.n(y);var w=function(){var e=Object(n.useState)(!0),t=Object(_.a)(e,2),i=t[0],c=t[1],r=Object(n.useState)(),s=Object(_.a)(r,2),a=s[0],j=s[1],d=Object(o.f)().id,v=function(){var e=Object(m.a)(l.a.mark((function e(){var t,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(d));case 2:return t=e.sent,e.next=5,t.json();case 5:i=e.sent,console.log(i),j(i.data.movie),c(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){v()}),[]),Object(u.jsx)("div",{children:i?Object(u.jsx)("div",{className:N.a.loader,children:Object(u.jsx)("span",{children:"Loading..."})}):Object(u.jsx)("div",{children:Object(u.jsx)(f,{id:a.id,backgroundImg:a.medium_cover_image,title:a.title,description:a.description_intro,genres:a.genres},a.id)})})};var M=function(){return Object(u.jsx)(a.a,{children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/hello",children:Object(u.jsx)("h1",{children:"Hello"})}),Object(u.jsx)(o.a,{path:"/movie/:id",children:Object(u.jsx)(w,{})}),Object(u.jsx)(o.a,{path:"/",children:Object(u.jsx)(h,{})})]})})};i(35);s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.48b2993d.chunk.js.map