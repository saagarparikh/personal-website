(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{100:function(e,t,a){},174:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),i=a.n(l),r=(a(100),a(18)),o=a(19),m=a(21),s=a(20),u=a(25),p=a(90),h=a.n(p),g=a(4),d=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){console.log(window.pageYOffset)}},{key:"printYOffset",value:function(){console.log(window.pageYOffset)}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"home-body"},c.a.createElement(g.Grid,{container:!0,spacing:24,direction:"column",align:"center"},c.a.createElement(g.Cell,{col:12},c.a.createElement("img",{className:"profile",src:h.a}),c.a.createElement("h1",null,"Hi! I'm Saagar, nice to meet you."),c.a.createElement("hr",null),c.a.createElement("h4",null,"This website tells you a little bit about myself. There are 4 tabs, as seen on the top right."),c.a.createElement("p",null,"The images tab displays some of my favorite music albums, featuring Young Thug and Playboi Carti"),c.a.createElement("p",null,"The videos tab shows some of my favorite videos, including Kobe Bryant highlights and a video of a Great White Shark"),c.a.createElement("p",null,"The projects tab displays some of my personal projects. Click on the image assosicated with each project takes you to to a link!")))))}}]),a}(n.Component),f=a(28),E=a.n(f),b=(a(149),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).toggleLightbox=function(e){n.setState({isVisible:!n.state.isVisible})},n.enlargeImage=function(e){return function(t){n.setState({currImage:e,isVisible:!0})}},n.state={isVisible:!1,currImage:"",img1:"https://i.pinimg.com/originals/00/bc/38/00bc38082fe941dbef5173b8bd7ad193.jpg",img2:"https://content-images.p-cdn.com/images/public/int/0/0/2/2/00602517412200_1080W_1080H.jpg",img3:"https://sslj.ulximg.com/image/1200x1200crop/cover/1576820219_dbc720673fa0b8e7e08976dcf101fcf8.jpg/79fdc4021f18e062ce0c76f508280c80/1576820219_ae754eff6557f8de4864dfaf40f27111.jpg",img4:"https://upload.wikimedia.org/wikipedia/en/1/11/Drake_-_If_You%27re_Reading_This_It%27s_Too_Late.png",img5:"https://upload.wikimedia.org/wikipedia/en/c/c6/Die_Lit_by_Playboi_Carti.jpg",img6:"https://upload.wikimedia.org/wikipedia/en/e/ee/Watch_The_Throne.jpg"},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"images-body"},c.a.createElement("a",{href:"#top"},c.a.createElement("button",{id:"btnScrollToTop"},c.a.createElement("img",{src:E.a}))),c.a.createElement("h1",{className:"images-h1",id:"top"},"My Favorite Albums"),c.a.createElement(g.Grid,{container:!0,spacing:24,direction:"column",align:"center"},c.a.createElement(g.Cell,{col:4},c.a.createElement("h4",null,"AT.LONG.LAST.ASAP - ASAP Rocky"),c.a.createElement("div",{class:"grid-box"},c.a.createElement("img",{onClick:this.enlargeImage(this.state.img1),className:"image",src:"https://i.pinimg.com/originals/00/bc/38/00bc38082fe941dbef5173b8bd7ad193.jpg"}))),c.a.createElement(g.Cell,{col:4},c.a.createElement("h4",null,"Graduation - Kanye West"),c.a.createElement("div",{class:"grid-box"},c.a.createElement("img",{onClick:this.enlargeImage(this.state.img2),className:"image",src:"https://content-images.p-cdn.com/images/public/int/0/0/2/2/00602517412200_1080W_1080H.jpg"}))),c.a.createElement(g.Cell,{col:4},c.a.createElement("h4",null,"So much Fun - Young Thug"),c.a.createElement("div",{class:"grid-box"},c.a.createElement("img",{onClick:this.enlargeImage(this.state.img3),className:"image",src:"https://sslj.ulximg.com/image/1200x1200crop/cover/1576820219_dbc720673fa0b8e7e08976dcf101fcf8.jpg/79fdc4021f18e062ce0c76f508280c80/1576820219_ae754eff6557f8de4864dfaf40f27111.jpg"}))),c.a.createElement(g.Cell,{col:4},c.a.createElement("h4",null,"If You're Reading This It's Too Late - Drake"),c.a.createElement("div",{class:"grid-box"},c.a.createElement("img",{onClick:this.enlargeImage(this.state.img4),className:"image",src:"https://upload.wikimedia.org/wikipedia/en/1/11/Drake_-_If_You%27re_Reading_This_It%27s_Too_Late.png"}))),c.a.createElement(g.Cell,{col:4},c.a.createElement("h4",null,"Die Lit - Playboi Carti"),c.a.createElement("div",{class:"grid-box"},c.a.createElement("img",{onClick:this.enlargeImage(this.state.img5),className:"image",src:"https://upload.wikimedia.org/wikipedia/en/c/c6/Die_Lit_by_Playboi_Carti.jpg"}))),c.a.createElement(g.Cell,{col:4},c.a.createElement("h4",null,"Watch the Throne - Jay-Z and Kanye West"),c.a.createElement("div",{class:"grid-box"},c.a.createElement("img",{onClick:this.enlargeImage(this.state.img6),className:"image",src:"https://upload.wikimedia.org/wikipedia/en/e/ee/Watch_The_Throne.jpg"})))),function(){if(e.state.isVisible)return c.a.createElement("div",{className:"bg-modal",onClick:e.toggleLightbox},c.a.createElement("img",{className:"modal-content",src:e.state.currImage}))}())}}]),a}(n.Component)),w=(a(150),function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"handleScroll",value:function(e){console.log(window.pageYOffset),window.scrollTo({top:-100,behavior:"smooth"})}},{key:"render",value:function(){return c.a.createElement("div",{className:"videos-body"},c.a.createElement("a",{href:"#top"},c.a.createElement("button",{id:"btnScrollToTop"},c.a.createElement("img",{src:E.a}))),c.a.createElement(g.Grid,{container:!0,spacing:24,direction:"column",align:"center",id:"top"},c.a.createElement(g.Cell,{col:4},c.a.createElement("h4",null,"Kobe Bryant Highlights"),c.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/OTTWedyp37o",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),c.a.createElement(g.Cell,{col:4},c.a.createElement("h4",null,"Bob Ross Painting"),c.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/lLWEXRAnQd0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),c.a.createElement(g.Cell,{col:4},c.a.createElement("h4",null,"Great White Shark Breaching"),c.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/pgYmY6--DjI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),c.a.createElement(g.Cell,{col:4},c.a.createElement("h4",null,"A$AP Forever Music Video"),c.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/BNzc6hG3yN4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),c.a.createElement(g.Cell,{col:4},c.a.createElement("h4",null,"Tour of Venice!"),c.a.createElement("iframe",{width:"500",height:"715",src:"https://www.youtube.com/embed/JphHw6iU4m8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),c.a.createElement(g.Cell,{col:4},c.a.createElement("h4",null,"Tour of Venice!"),c.a.createElement("iframe",{width:"500",height:"715",src:"https://www.youtube.com/embed/JphHw6iU4m8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))))}}]),a}(n.Component)),y=a(92),v=a.n(y),k=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"handleScroll",value:function(e){console.log(window.pageYOffset),window.scrollTo({top:0,behavior:"smooth"})}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"projects-body"},c.a.createElement("a",{href:"#top"},c.a.createElement("button",{id:"btnScrollToTop"},c.a.createElement("img",{src:E.a}))),c.a.createElement(g.Grid,{container:!0,spacing:24,direction:"column",align:"center",id:"top"},c.a.createElement(g.Cell,{col:12},c.a.createElement("a",{href:"https://github.com/saagarparikh/MissionForward"},c.a.createElement("img",{className:"profile",src:v.a})," "),c.a.createElement("h4",null," Mission Forward is a project that helps soon-to-be college students navigate their personal and professional lives after HS.")),c.a.createElement(g.Cell,{col:12},c.a.createElement("a",{href:"https://github.com/saagarparikh/MissionForward"},c.a.createElement("img",{className:"profile",src:"https://icons-for-free.com/iconfiles/png/512/music+party+sound+speaker+icon-1320185815741133916.png"})," "),c.a.createElement("h4",null," MusicQ enables a real-time, collaborative Spotify queue.")),c.a.createElement(g.Cell,{col:12},c.a.createElement("a",{href:"https://github.com/saagarparikh/cs56-android-calculate-walking-time"},c.a.createElement("img",{className:"profile",src:"https://static.thenounproject.com/png/19727-200.png"})," "),c.a.createElement("h4",null," Campus Commute lets users schedule their day on campus.")))))}}]),a}(n.Component),j=function(){return c.a.createElement(u.c,null,c.a.createElement(u.a,{exact:!0,path:"/",component:d}),c.a.createElement(u.a,{exact:!0,path:"/home",component:d}),c.a.createElement(u.a,{path:"/images",component:b}),c.a.createElement(u.a,{path:"/videos",component:w}),c.a.createElement(u.a,{path:"/projects",component:k}))},C=(a(174),a(23)),A=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{id:"navbar",className:"demo-big-content"},c.a.createElement(g.Layout,null,c.a.createElement(g.Header,{title:c.a.createElement(C.b,{style:{textDecoration:"none",color:"white"},to:"/"},"Saagar Parikh"),scroll:!0},c.a.createElement(g.Navigation,null,c.a.createElement(C.c,{exact:!0,activeClassName:"active-nav-tab",to:"/home"},"Home"),c.a.createElement(C.c,{exact:!0,activeClassName:"active-nav-tab",to:"/images"},"Images"),c.a.createElement(C.c,{exact:!0,activeClassName:"active-nav-tab",to:"/videos"},"Videos"),c.a.createElement(C.c,{exact:!0,activeClassName:"active-nav-tab",to:"/projects"},"Projects"))),c.a.createElement(g.Drawer,{title:"Title"},c.a.createElement(g.Navigation,null,c.a.createElement("a",{href:"/home"},"Home"),c.a.createElement("a",{href:"/images"},"Images"),c.a.createElement("a",{href:"/videos"},"Vidoes"),c.a.createElement("a",{href:"/projects"},"Projects"))),c.a.createElement(g.Content,null,c.a.createElement("div",{className:"page-content"}),c.a.createElement(j,null)))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(175),a(176),a(177);i.a.render(c.a.createElement(C.a,null,c.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},28:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAVklEQVR4Ae3MAQYAIBBE0RBCd+0oHaRDhI4VamOEAa0FquFbWM+9vYTMyEDJinQDtpEsValJRYURslaRxwWmQAhai1I7wTIhDG0Mf4oRhAVcM+Q+dMMm1u0lBWfCKz0AAAAASUVORK5CYII="},90:function(e,t,a){e.exports=a.p+"static/media/profile.1570faea.jpg"},92:function(e,t,a){e.exports=a.p+"static/media/missionforward.c266de80.png"},95:function(e,t,a){e.exports=a(178)}},[[95,1,2]]]);
//# sourceMappingURL=main.bac3bc56.chunk.js.map