(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e){e.exports=[{id:1,name:"Bootstrap",image:"./assets/images/Bootstrap_logo.png",clicked:!1},{id:2,name:"CSS",image:"./assets/images/css3_logo.jpg",clicked:!1},{id:3,name:"ES6",image:"./assets/images/es6_logo.jpg",clicked:!1},{id:4,name:"HTML",image:"./assets/images/html5_logo.png",clicked:!1},{id:5,name:"JQuery",image:"./assets/images/jquery_logo.jpeg",clicked:!1},{id:6,name:"Javascript",image:"./assets/images/js_logo.png",clicked:!1},{id:7,name:"MongoDB",image:"./assets/images/mongodb.png",clicked:!1},{id:8,name:"Node",image:"./assets/images/node_logo.png",clicked:!1},{id:9,name:"GitHub",image:"./assets/images/octocat.png",clicked:!1},{id:10,name:"React",image:"./assets/images/react-logo.png",clicked:!1},{id:11,name:"TravisCI",image:"./assets/images/travisci_logo.jpg",clicked:!1},{id:12,name:"Vue",image:"./assets/images/Vue_logo.png",clicked:!1}]},32:function(e,t,a){e.exports=a(56)},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(20),i=a.n(s),o=(a(38),a(6)),r=a(7),l=a(9),m=a(8),u=a(10),p=(a(39),a(40),a(58)),g=a(59),d=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(p.a,{justify:!0,defaultActiveKey:"/",className:"nav-bar"},c.a.createElement(p.a.Item,null,c.a.createElement(p.a.Link,{href:"/",className:"nav-link"},"Clicky Game")),c.a.createElement(p.a.Item,null,c.a.createElement(g.a.Text,null,this.props.message)),c.a.createElement(p.a.Item,null,c.a.createElement(g.a.Text,null,"Score: ",this.props.correctGusses," | Top Score: ",this.props.topScore)))}}]),t}(n.Component),h=(a(54),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"wrapper"},this.props.children)}}]),t}(n.Component)),f=a(57),k=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(f.a,null,c.a.createElement("h1",null,"Clicky Game!"),c.a.createElement("p",null,"Click on an image to earn points, but don't click on any more than once!"))}}]),t}(n.Component),b=a(60),j=function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(b.a,{onClick:function(){return e.props.clickHandler(e.props.id)}},c.a.createElement(b.a.Image,{width:170,height:170,alt:this.props.name,src:this.props.image}))}}]),t}(n.Component),O=a(31),y=(a(55),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"bottom"},"Clicky Game"))}}]),t}(n.Component)),v=0,E=0,S="",w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={collections:O,topScore:0,correctGusses:0,message:"Click an image to begin!"},a.clickHandler=function(e){var t=a.state.collections,n=t.filter(function(t){return t.id===e});n[0].clicked?(E=0,S="You guessed incorrectly!",t.map(function(e){return e.clicked=!1}),a.setState({message:S}),a.setState({correctGusses:E}),a.setState({collections:t})):(n[0].clicked=!0,S="You guessed correctly!",++E>v&&(v=E,a.setState({topScore:v})),t.sort(function(e,t){return Math.random()-.5}),a.setState({collections:t}),a.setState({correctGusses:E}),a.setState({message:S}))},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement(d,{message:this.state.message,correctGusses:this.state.correctGusses,topScore:this.state.topScore}),c.a.createElement(k,null),c.a.createElement(h,null,this.state.collections.map(function(t){return c.a.createElement(j,{key:t.id,id:t.id,image:t.image,name:t.name,clickHandler:e.clickHandler})})),c.a.createElement(y,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.8dc155f5.chunk.js.map