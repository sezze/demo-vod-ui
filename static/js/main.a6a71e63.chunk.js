(this["webpackJsonpdemo-store"]=this["webpackJsonpdemo-store"]||[]).push([[0],{40:function(e,n,t){e.exports=t.p+"static/media/tmdb-logo.24a6fdb9.svg"},41:function(e,n,t){e.exports=t(79)},46:function(e,n,t){},79:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(34),o=t.n(i),c=(t(46),t(8)),l=a.a.createContext(void 0),u=t(13),s=t(2),d=t(18),f=t(3),b=t(1);function m(){var e=Object(f.a)(["\n  width: 220px;\n  height: 330px;\n  border-radius: 1rem;\n  overflow: hidden;\n  position: relative;\n  user-select: none;\n  transition-duration: 0.2s;\n\n  &:hover {\n    transform: translateY(-8px);\n    box-shadow: 0 4px 8px ",";\n  }\n\n  &:hover > "," {\n    visibility: visible;\n    opacity: 1;\n  }\n\n  &:hover "," {\n    visibility: visible;\n    opacity: 1;\n    top: 0;\n  }\n\n  &:hover > "," {\n    filter: blur(1px);\n    transform: scale(1.025);\n  }\n"]);return m=function(){return e},e}function h(){var e=Object(f.a)(["\n  transition-duration: 0.2s;\n"]);return h=function(){return e},e}function v(){var e=Object(f.a)(["\n  visibility: hidden;\n  position: relative;\n  top: 1rem;\n  opacity: 0;\n  transition-duration: 0.2s;\n  text-shadow: ",";\n"]);return v=function(){return e},e}function p(){var e=Object(f.a)(["\n  visibility: hidden;\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 1rem;\n  color: ",";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  padding: 1rem;\n  justify-content: flex-end;\n  font-size: 1.25rem;\n  transition-duration: 0.2s;\n"]);return p=function(){return e},e}var g=b.b.div(p(),(function(e){return e.theme.dark.text.main})),x=b.b.div(v(),(function(e){return e.theme.current.shadow(1)})),w=b.b.div(h()),E=b.b.div(m(),(function(e){return e.theme.current.accent.main}),g,x,w);function j(){var e=Object(f.a)(["\n  user-select: none;\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  transition-duration: 0.2s;\n"]);return j=function(){return e},e}function k(){var e=Object(f.a)(["\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return k=function(){return e},e}var O,y=b.b.div(k(),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.theme.current.bg.alt})),S=b.b.img(j());function z(e){var n=e.images;return{baseUrl:n.base_url||"http://image.tmdb.org/t/p/",secureBaseUrl:n.secure_base_url||"https://image.tmdb.org/t/p/",backdropSizes:_(n.backdrop_sizes),logoSizes:_(n.logo_sizes),posterSizes:_(n.poster_sizes),profileSizes:_(n.profile_sizes),stillSizes:_(n.still_sizes)}}function _(e){return void 0===e?[]:e.filter((function(e){return e.startsWith("w")})).map((function(e){return parseInt(e.substring(1))}))}!function(e){e[e.Poster=0]="Poster",e[e.Backdrop=1]="Backdrop",e[e.Profile=2]="Profile",e[e.Still=3]="Still",e[e.Logo=4]="Logo"}(O||(O={}));var C=O,B=function(e,n,t){var a=Object(r.useState)(),i=Object(c.a)(a,2),o=i[0],u=i[1],s=Object(r.useState)(),d=Object(c.a)(s,2),f=d[0],b=d[1],m=Object(r.useState)(),h=Object(c.a)(m,2),v=h[0],p=h[1],g=Object(r.useContext)(l);return Object(r.useEffect)((function(){if(g&&t)switch(n){case C.Poster:p(g.posterSizes);break;case C.Backdrop:p(g.backdropSizes);break;case C.Profile:p(g.profileSizes);break;case C.Still:p(g.stillSizes);break;case C.Logo:p(g.logoSizes)}}),[n,g,t]),Object(r.useEffect)((function(){if(t&&g&&v){var n=function(e,n,t,r){var a=t.findIndex((function(e){return e>=r})),i=t.slice(a),o=i.map((function(t){return"".concat(n,"w").concat(t).concat(e)})),c=o.map((function(e,n){return"".concat(e," ").concat((i[n]/i[0]).toFixed(1),"x")})).join(", ");return{src:o[0],srcSet:c}}(t,g.secureBaseUrl,v,e),r=n.src,a=n.srcSet;u(r),b(a)}}),[t,e,g,v]),{src:o,srcSet:f}},P=function(e){var n=e.path,t=e.title,r=e.width,i=e.height,o=B(r,C.Poster,n),c=o.src,l=o.srcSet;return a.a.createElement(y,{width:r,height:i},c?a.a.createElement(S,{"data-testid":"poster-image",width:r,height:i,alt:t,src:c,srcSet:l}):null)},D=t(10),I=function(e){var n=e.rating,t=Math.floor(n/2),r=n%2>=1;return a.a.createElement("div",{"data-testid":"star-container"},Object(d.a)(Array(t)).map((function(e,n){return a.a.createElement(D.d,{key:n})})),r?a.a.createElement(D.e,{"data-testid":"half-star"}):null)},M=t(38),T=t.n(M),W=function(e){var n=e.movie;return a.a.createElement(u.b,{to:n?"/movie/".concat(n.id,"/").concat(T()(n.title||"")):"#"},a.a.createElement(E,null,a.a.createElement(w,null,a.a.createElement(P,{width:220,height:330,path:null===n||void 0===n?void 0:n.poster_path,title:null===n||void 0===n?void 0:n.title})),n?a.a.createElement(g,null,a.a.createElement(x,null,a.a.createElement("div",null,n.title),n.vote_average?a.a.createElement(I,{rating:n.vote_average}):null)):null))};function L(){var e=Object(f.a)(["\n  position: relative;\n\n  &:hover > "," {\n    visibility: visible;\n    opacity: 1;\n  }\n\n  &:hover > ","::-webkit-scrollbar {\n    visibility: visible;\n  }\n  &:hover > ","::-webkit-scrollbar-thumb {\n    visibility: visible;\n  }\n"]);return L=function(){return e},e}function U(){var e=Object(f.a)(["\n  background-color: ",";\n  width: 64px;\n  height: 64px;\n  margin: 0 8px;\n  position: absolute;\n  top: calc(50% - 32px);\n  display: flex;\n  border-radius: 50%;\n  justify-content: center;\n  align-items: center;\n  user-select: none;\n  transition-duration: 0.2s;\n  visibility: hidden;\n  opacity: 0;\n  color: ",";\n  font-size: 2rem;\n  cursor: pointer;\n  box-shadow: ",";\n\n  &:hover {\n    border-radius: 50% 8px 8px 50%;\n    transform: scale(1.1);\n    background-color: ",";\n    box-shadow: ",";\n  }\n\n  &:active {\n    transform: scale(1);\n    background-color: ",";\n    box-shadow: ",";\n  }\n\n  &:last-child:hover {\n    border-radius: 8px 50% 50% 8px;\n  }\n"]);return U=function(){return e},e}function A(){var e=Object(f.a)(["\n  scroll-snap-align: start;\n  padding-left: 16px;\n  &:first-child {\n    padding-left: 64px;\n  }\n  &:last-child {\n    padding-right: 64px;\n  }\n"]);return A=function(){return e},e}function J(){var e=Object(f.a)(["\n  height: 100%;\n  margin: 8px 0;\n  display: flex;\n  scroll-snap-align: start;\n"]);return J=function(){return e},e}function F(){var e=Object(f.a)(["\n  display: flex;\n  overflow-x: auto;\n  height: 100%;\n  flex-wrap: nowrap;\n  scroll-snap-type: x mandatory;\n\n  &::-webkit-scrollbar {\n    height: 12px;\n    visibility: hidden;\n    background-color: ",";\n  }\n\n  &::-webkit-scrollbar-thumb {\n    background-color: ",";\n    border-radius: 999px;\n    visibility: hidden;\n\n    &:hover {\n      background-color: ",";\n    }\n    &:active {\n      background-color: ",";\n    }\n  }\n"]);return F=function(){return e},e}var R=b.b.div(F(),(function(e){return e.theme.current.bg.alt}),(function(e){return e.theme.current.item.alt.normal}),(function(e){return e.theme.current.item.alt.hover}),(function(e){return e.theme.current.item.alt.active})),Y=b.b.div(J()),$=b.b.div(A()),q=b.b.div(U(),(function(e){return e.theme.current.item.alt.normal}),(function(e){return e.theme.current.item.alt.text}),(function(e){return e.theme.current.shadow(2)}),(function(e){return e.theme.current.item.alt.hover}),(function(e){return e.theme.current.shadow(4)}),(function(e){return e.theme.current.item.alt.active}),(function(e){return e.theme.current.shadow(1)})),G=b.b.div(L(),q,R,R),H=Object(d.a)(Array(10));function K(e,n){e&&e.scrollBy({behavior:"smooth",left:window.innerWidth*n})}var N=function(e){var n=e.movies,t=e.label,i=Object(r.useRef)(null),o=Object(r.useCallback)((function(){K(i.current,-.5)}),[]),c=Object(r.useCallback)((function(){K(i.current,.5)}),[]),l=n||H;return a.a.createElement(G,null,a.a.createElement("h2",null,t),a.a.createElement(R,{ref:i},a.a.createElement(Y,null,l.map((function(e,n){return a.a.createElement($,{key:(null===e||void 0===e?void 0:e.id)||n},a.a.createElement(W,{movie:e}))})))),a.a.createElement(q,{onClick:o,style:{left:0}},a.a.createElement(D.b,null)),a.a.createElement(q,{onClick:c,style:{right:0}},a.a.createElement(D.c,null)))};var Q=new(t(39).MovieDb)("91e55de7aca65eb1b4d17972c7a88664"),V=function(){var e=Object(r.useState)(),n=Object(c.a)(e,2),t=n[0],i=n[1];return Object(r.useEffect)((function(){Q.trending({media_type:"movie",time_window:"week"}).then((function(e){return e.results})).then(i)}),[]),a.a.createElement("div",null,a.a.createElement(N,{movies:t}))},X=t(40),Z=t.n(X),ee=function(){return a.a.createElement("footer",{style:{marginTop:"auto"}},a.a.createElement("a",{href:"https://developers.themoviedb.org/3",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("img",{width:128,src:Z.a,alt:"The Movie DB"})))};function ne(){var e=Object(f.a)([""]);return ne=function(){return e},e}function te(){var e=Object(f.a)([""]);return te=function(){return e},e}function re(){var e=Object(f.a)([""]);return re=function(){return e},e}function ae(){var e=Object(f.a)([""]);return ae=function(){return e},e}var ie=b.b.header(ae()),oe=b.b.div(re()),ce=b.b.div(te()),le=b.b.div(ne()),ue=function(){var e=Object(b.c)(),n=Object(r.useCallback)((function(){e.setTheme(e.current.isDark?e.light:e.dark)}),[e]);return a.a.createElement(ie,null,a.a.createElement(oe,null),a.a.createElement(ce,null,a.a.createElement(le,{onClick:n},a.a.createElement(D.a,null))))};function se(){var e=Object(f.a)(["\n  background-color: ",";\n  color: ",";\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: background-color 0.4s, color 0.4s;\n"]);return se=function(){return e},e}var de=b.b.div(se(),(function(e){return e.theme.current.bg.main}),(function(e){return e.theme.current.text.main})),fe=function(e){var n=e.children;return a.a.createElement(de,null,a.a.createElement(ue,null),n,a.a.createElement(ee,null))},be=function(){var e=Object(r.useState)(),n=Object(c.a)(e,2),t=n[0],i=n[1],o=Object(s.f)();return Object(r.useEffect)((function(){Q.movieInfo(o.id).then(i).catch(console.error)}),[o]),a.a.createElement("div",null,a.a.createElement(P,{path:null===t||void 0===t?void 0:t.poster_path,width:256,height:384,title:null===t||void 0===t?void 0:t.title}))};var me={isDark:!0,bg:{main:"#242424",alt:"#303030"},text:{main:"#f0f0f0",alt:"#dbdbdb"},accent:{main:"#40c2ff",alt:"#0083c9"},item:{normal:"red",hover:"orange",active:"yellow",text:"black",alt:{normal:"#3b3b3b",hover:"#424242",active:"#4f4f4f",text:"#dbdbdb"}},shadowColor:"rgba(0, 0, 0, 0.25)",shadow:function(e){return"0 ".concat(e,"px ").concat(2*e,"px ").concat(me.shadowColor)}},he=me,ve={isDark:!1,bg:{main:"#ffffff",alt:"#e3e3e3"},text:{main:"#000000",alt:"#474747"},accent:{main:"#40c2ff",alt:"#0083c9"},item:{normal:"red",hover:"orange",active:"yellow",text:"black",alt:{normal:"#e0e0e0",hover:"#dbdbdb",active:"#c7c7c7",text:"#474747"}},shadowColor:"rgba(0, 0, 0, 0.25)",shadow:function(e){return"0 ".concat(e,"px ").concat(2*e,"px ").concat(ve.shadowColor)}},pe=ve,ge=function(){var e=function(){var e=Object(r.useState)(),n=Object(c.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){Q.configuration().then(z).then(a).catch(console.error)}),[]),t}(),n=Object(r.useState)(he),t=Object(c.a)(n,2),i=t[0],o=t[1];return a.a.createElement(b.a,{theme:{dark:he,light:pe,current:i,setTheme:o}},a.a.createElement(l.Provider,{value:e},a.a.createElement(u.a,null,a.a.createElement(fe,null,a.a.createElement(s.c,null,a.a.createElement(s.a,{exact:!0,path:"/"},a.a.createElement(V,null)),a.a.createElement(s.a,{path:"/movie/:id"},a.a.createElement(be,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.a6a71e63.chunk.js.map