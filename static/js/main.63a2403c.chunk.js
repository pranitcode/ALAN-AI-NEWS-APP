(this.webpackJsonpalanapp=this.webpackJsonpalanapp||[]).push([[0],{145:function(e,t,n){"use strict";n.r(t);var i=n(3),a=n(0),c=n(11),r=n.n(c),o=(n(87),n(14)),l=n(38),s=n.n(l),d=n(72),b=n.n(d),j=n(169),h=n(161),p=n(162),m=n(163),f=n(164),x=n(165),g=n(166),u=n(159),O=Object(u.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{backgroundColor:"black",display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid #69f0ae",color:"white"},activeCard:{borderBottom:"10px solid #22289a"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px",color:"#69f0ae"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),y=n(74),w=n.n(y),v=function(e){var t=e.article,n=t.description,c=t.publishedAt,r=t.source,l=t.title,s=t.url,d=t.urlToImage,b=e.i,u=e.activeArticle,y=O(),v=Object(a.useState)([]),C=Object(o.a)(v,2),N=C[0],k=C[1];return Object(a.useEffect)((function(){window.scroll(0,0),k((function(e){return Array(20).fill().map((function(t,n){return e[n]||Object(a.createRef)()}))}))}),[]),Object(a.useEffect)((function(){var e;b===u&&N[u]&&(e=N[u],window.scroll(0,e.current.offsetTop-50))}),[b,u,N]),Object(i.jsxs)(j.a,{ref:N[b],className:w()(y.card,u===b?y.activeCard:null),children:[Object(i.jsxs)(h.a,{href:s,target:"_blank",children:[Object(i.jsx)(p.a,{className:y.media,image:d||"https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png"}),Object(i.jsxs)("div",{className:y.details,children:[Object(i.jsx)(m.a,{varient:"body2",color:"textSecondary",component:"h2",children:new Date(c).toDateString()}),Object(i.jsx)(m.a,{varient:"body2",color:"textSecondary",component:"h2",children:r.name})]}),Object(i.jsx)(m.a,{className:y.title,gustterBottom:!0,varient:"h5",children:l}),Object(i.jsx)(f.a,{children:Object(i.jsx)(m.a,{varient:"body2",color:"white",component:"p",children:n})})]}),Object(i.jsxs)(x.a,{className:y.cardActions,children:[Object(i.jsx)(g.a,{size:"small",color:"primary",children:"Learn More"}),Object(i.jsx)(m.a,{varient:"h5",color:"white",children:b+1})]})]})},C=n(168),N=n(167),k=Object(u.a)({card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",height:"45vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column",textAlign:"center"},container:{padding:"0 5%",width:"100%",margin:0}}),A=[{color:"black",title:"Latest News",text:"Give me the latest news"},{color:"black",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"black",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5"},{color:"black",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN"}],S=function(e){var t=e.articles,n=e.activeArticle,a=k();return t.length?Object(i.jsx)(C.a,{in:!0,children:Object(i.jsx)(N.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:t.map((function(e,t){return Object(i.jsx)(N.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"},children:Object(i.jsx)(v,{article:e,i:t,activeArticle:n})})}))})}):Object(i.jsx)(C.a,{in:!0,children:Object(i.jsx)(N.a,{className:a.container,container:!0,alignItems:"stretch",spacing:3,children:A.map((function(e){return Object(i.jsx)(N.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:a.infoCard,children:Object(i.jsxs)("div",{className:a.card,style:{backgroundColor:e.color},children:[Object(i.jsx)(m.a,{variant:"h5",component:"h5",children:e.title}),e.info?Object(i.jsxs)(m.a,{variant:"h6",component:"h6",children:[Object(i.jsx)("strong",{children:e.title.split(" ")[2]}),": ",Object(i.jsx)("br",{}),e.info]}):null,Object(i.jsxs)(m.a,{variant:"h6",component:"h6",children:["Try saying: ",Object(i.jsx)("br",{})," ",Object(i.jsx)("i",{children:e.text})]})]})})}))})})},B=n(9),T=Object(u.a)((function(e){return{footer:Object(B.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(B.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(B.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(B.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(B.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"35vmin"})}})),D=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(-1),l=Object(o.a)(r,2),d=l[0],j=l[1],h=T();return Object(a.useEffect)((function(){s()({key:"1e385a2b0d7d74189268fc90f4cfa2b82e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,n=e.articles,i=e.number;if("newHeadlines"===t)c(n),j(-1);else if("highlight"===t)j((function(e){return e+1}));else if("open"===t){var a=i.length>2?b()(i,{fuzzy:!0}):i,r=n[a-1];a>n.length?s()().playText("Please try that again..."):r?(window.open(r.url,"_blank"),s()().playText("Opening...")):s()().playText("Please try that again...")}}})}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{className:h.logoContainer,children:Object(i.jsx)("img",{src:"https://alan.app/voice/images/previews/preview.jpg",className:h.alanLogo,alt:"logo"})}),Object(i.jsx)(S,{articles:n,activeArticle:d}),Object(i.jsx)("p",{children:Object(i.jsx)("center",{children:"created by pranit"})})]})};r.a.render(Object(i.jsx)(D,{}),document.getElementById("root"))},87:function(e,t,n){}},[[145,1,2]]]);
//# sourceMappingURL=main.63a2403c.chunk.js.map