(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(16),o=t.n(r),c=(t(54),t(55),t(56),t(10)),l=t.n(c),s=t(14),u=t(3),p=t(4),m=t(6),d=t(5),f=t(7),b=t(25),h=t.n(b),v="https://yellow-website.com/d8-api-provider",g=null,x=Object(s.a)(l.a.mark(function n(){var e,t,a;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(g){n.next=14;break}return e=v+"/rest/session/token",n.prev=2,n.next=5,h.a.get(e,{withCredentials:!0});case 5:t=n.sent,a=t.data,g=h.a.create({baseURL:v,withCredentials:!0,headers:{"X-CSRF-Token":a},params:{_format:"json"}}),console.log("Created new axios instance",g),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),console.error(n.t0);case 14:return n.abrupt("return",g);case 15:case"end":return n.stop()}},n,null,[[2,11]])})),w=t(23),y=t.n(w),E=t(2),j=t(1);function O(){var n=Object(E.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  i{\n    font-size: 3rem;\n    animation: "," 0.5s infinite;\n  }\n\n\n"]);return O=function(){return n},n}function _(){var n=Object(E.a)(["\n0% {color:var(--red);      transform:rotate(72deg)}\n25% {color: var(--orange); transform:rotate(144deg)}\n50% {color: var(--yellow); transform:rotate(216deg)}\n75% {color: var(--orange); transform:rotate(288deg)}\n100% {color: var(--red);   transform:rotate(360deg)}\n"]);return _=function(){return n},n}var k=Object(j.b)(_()),N=j.a.div(O(),k),P=function(){return i.a.createElement("div",{className:"col-md-12"},i.a.createElement(N,null,i.a.createElement("i",{className:"fas fa-circle-notch"}),i.a.createElement("p",null,"Loading ...")))},C=t(9),D=t.n(C);function U(){var n=Object(E.a)(["\nwidth: 100%\nheight: 100vh;\nposition: relative;\ntop: -100vh;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\nz-index: 0;\n\n\ni.circle{\n  width: 50px;\n    height: 50px;\n    background-color: #ff0000;\n    border-radius: 100px;\n    position: relative;\n    top: -3px;\n    left: -203px;\n    border: 0px;\n    animation: "," 4s infinite;\n\n    @media (max-width: 768px) {\n      top: -31px;\n      left: 1px;\n    }\n    \n}\n"]);return U=function(){return n},n}function S(){var n=Object(E.a)(["\n0% { border : 0px }\n100% { border: 100px solid #ddd; opacity: 0;\n"]);return S=function(){return n},n}var I=Object(j.b)(S()),z=j.a.div(U(),I),B=function(n){function e(){return Object(u.a)(this,e),Object(m.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(p.a)(e,[{key:"render",value:function(){return i.a.createElement(z,null,i.a.createElement("i",{className:"circle"}))}}]),e}(i.a.Component);function A(){var n=Object(E.a)(["\n    display: flex;\n    width; 100%;\n    height: 100vh;\n    justify-content: center;\n    align-items: center;\n    margin-top: 0px;\n    position: relative;\n    z-index: 5;\n\n\n    > div.logo {\n      border-right: 1px solid #ccc;\n      position: relative;\n      top: 15px;\n      margin-right: 30px;\n      -webkit-animation: "," 2s; /* Safari 4.0 - 8.0 */\n      animation: "," 2s ease-out;\n    }\n\n    > div >  img{\n      width: 100px;\n      margin-right: 25px;\n      opacity: 0;\n      position: relative;\n      -webkit-animation: "," 5s; /* Safari 4.0 - 8.0 */\n      animation: "," 5s ease-out;\n      animation-delay: 2.5s;\n      animation-duration: 2s;\n      animation-fill-mode: forwards;\n    }\n\n    > div > h2{\n        font-size: 4rem;\n        -webkit-letter-spacing: 5px;\n        -moz-letter-spacing: 5px;\n        -ms-letter-spacing: 5px;\n        letter-spacing: -7px;\n        line-height: 0.2em;\n        color: #2b2b2b;\n        font-family: sans-serif;\n        font-weight: 500;  \n          opacity: 0;\n          position: relative;\n          -webkit-animation: "," 5s; /* Safari 4.0 - 8.0 */\n          animation: "," 5s ease-out;\n          animation-delay: 2.5s;\n          animation-duration: 2s;\n          animation-fill-mode: forwards;\n\n    }\n    > div > p{\n            font-family: sans-serif;\n            font-size: 1.0rem;\n            font-weight: 100;\n            -webkit-letter-spacing: 0.37rem;\n            -moz-letter-spacing: 0.37rem;\n            -ms-letter-spacing: 0.37rem;\n            -webkit-letter-spacing: 0.37rem;\n            -moz-letter-spacing: 0.37rem;\n            -ms-letter-spacing: 0.37rem;\n            letter-spacing: 0.555rem;\n            position: relative;\n            top: 55px;\n            color: black;\n            opacity: 0;\n            position: relative;\n            -webkit-animation: "," 5s;\n            -webkit-animation: "," 5s ease-out;\n            animation: "," 5s ease-out;\n            -webkit-animation-delay: 3.5s;\n            animation-delay: 3.5s;\n            -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n            -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    }\n\n    // Medium devices (tablets, 768px and up)\n    @media (max-width: 768px) {\n        flex-direction: column;\n        > div.logo {\n          border-right: 0px solid #ccc;\n          width: 100px;\n          margin: 0px auto;\n        }\n\n        > div > h2{\n          font-size: 3rem;\n          letter-spacing: -6px;\n          position: relative;\n          top: 35px;\n          text-align: center; \n        }\n\n        > div > p{\n          letter-spacing: 0.22rem;\n          text-align: center;\n          top: 55px;\n          left: 5px;\n        }\n     }\n\n\n"]);return A=function(){return n},n}function L(){var n=Object(E.a)(["\n     from {top: -3000px;}\n     to{top: 0px;}\n"]);return L=function(){return n},n}function M(){var n=Object(E.a)(["\n      0% {opacity: 0; rotate: 0deg;}\n      100% {opacity: 1; rotate: 180deg;}\n"]);return M=function(){return n},n}function q(){var n=Object(E.a)(["\n      from {left: -200px;}\n      to {left: 0px;}\n"]);return q=function(){return n},n}Object(j.b)(q());var R=Object(j.b)(M()),T=Object(j.b)(L()),W=j.a.div(A(),T,T,R,R,R,R,R,R,R),F=function(n){var e=n.contents,t=n.apiUrl,a=e.map(function(n){return"landingpage"===n.field_yellow_website_unique_bloc&&i.a.createElement(W,{key:n.nid},i.a.createElement("div",{className:"logo"},i.a.createElement("img",{src:t+n.field_yellow_website_image_for_t}),i.a.createElement("i",{className:"circle"})),i.a.createElement("div",null,D()(n.field_yellow_website_content)))});return i.a.createElement("div",{className:"col-md-12"},a,i.a.createElement(B,null))};function J(){var n=Object(E.a)(["\n  padding: 20px;\n"]);return J=function(){return n},n}function Y(){var n=Object(E.a)(["\n      \n"]);return Y=function(){return n},n}function X(){var n=Object(E.a)(["\n\n.show{\n  display: flex;\n  flex-direction: column;\n}\n.hide{\n  display: none;\n}\n\ncolor: #666;\nfont-family: sans-serif;\nwidth: 100%;\nheight: 100vh;\ndisplay: flex;\nflex-direction: column;\n\n  > div{\n    max-width: 460px;\n    margin: 0px auto;\n    text-align: justify;\n    margin-top: 60px;\n    margin-bottom: 60px;\n    padding: 50px;\n    border: 1px solid #fff;\n    \n  }\n\n  >div:hover{\n    border: 1px solid #eee;\n    box-shadow: 1px 1px 6px #ccc;\n    animation-name: "," ;\n    animation-duration: 4s;\n    cursor: default;\n    color: #000;\n    \n  }\n\n  \n"]);return X=function(){return n},n}function $(){var n=Object(E.a)(["\n0%   {border: 1px solid #ccc; color: yellow;box-shadow: 0px 0px 0px #ccc;}\n70%  {border: 1px solid #eee; }\n100% {border: 1px solid #eee; color: #000; box-shadow: 1px 1px 6px #ccc;}\n"]);return $=function(){return n},n}var G=Object(j.b)($()),H=j.a.div(X(),G),K=(j.a.div(Y()),j.a.div(J()));function Q(){var n=Object(E.a)(["\nwidth: 30px;\nmargin: 0px auto;\n .far{\n   position: relative;\n   transform: rotate(135deg);\n   font-size: 1.3rem;\n   animation: "," 1.2s infinite;\n }\n\n .far:hover{\n   animation-play-state: paused;\n }\n"]);return Q=function(){return n},n}function V(){var n=Object(E.a)(["\n0% {bottom: -10px;}\n20% {bottom: -30px;}\n40% {bottom: -40px;}\n80% {bottom: -50px; opcity: 0.5;}\n100% {bottom: -60px; opacity: 0;}\n"]);return V=function(){return n},n}var Z=Object(j.b)(V()),nn=j.a.div(Q(),Z),en=function(n){function e(){return Object(u.a)(this,e),Object(m.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(p.a)(e,[{key:"render",value:function(){return i.a.createElement(nn,null,i.a.createElement("i",{className:"far fa-paper-plane"}))}}]),e}(i.a.Component);function tn(){var n=Object(E.a)(["\n  position: relative;\n  top: -170px;\n\n  h3{\n    width: 100%;\n  }\n\n  .show{\n    display: flex;\n    text-align: center;\n    flex-direction: column;\n  }\n  .hide{\n    display: none;\n  }\n\n       \n"]);return tn=function(){return n},n}function an(){var n=Object(E.a)(["\n\n// background: linear-gradient(to bottom right,#fff 0%,#fff 50%,#e9ecef 50%,#dad6d6 100%);\n\n\n"]);return an=function(){return n},n}var rn=j.a.div(an()),on=j.a.div(tn()),cn=function(n){function e(){var n,t;Object(u.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(m.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(i)))).state={introPosition:0,show:!0},t.smoothScroll=function(){window.scrollTo({behavior:"smooth",left:0,top:-t.state.introPosition})},t}return Object(f.a)(e,n),Object(p.a)(e,[{key:"componentDidMount",value:function(n){var e=document.getElementById("intro").getBoundingClientRect();this.setState({introPosition:e.top+500})}},{key:"render",value:function(n){console.log("position",this.state.introPosition,this.props.yPosition);var e=this.props,t=e.contents,a=e.bgIntro,r=(e.apiUrl,t.map(function(n){if("introduction"===n.field_yellow_website_unique_bloc)return i.a.createElement(H,{key:n.nid,className:"parallax-bg",style:{backgroundImage:"url(".concat(a,")")}},i.a.createElement(K,null,D()(n.field_yellow_website_content)))})),o=this.props.yPosition<this.state.introPosition?"show":"hide";return i.a.createElement(rn,{className:"col-md-12"},this.props.yPosition+" - "+this.state.introPosition,r,i.a.createElement(on,{id:"intro"},i.a.createElement("div",{className:o},i.a.createElement("h3",null,"What Can I do"),i.a.createElement(en,null))))}}]),e}(i.a.Component),ln=function(n){function e(){var n,t;Object(u.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(m.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(i)))).state={btnPosition:0},t}return Object(f.a)(e,n),Object(p.a)(e,[{key:"componentDidMount",value:function(){var n=document.getElementById("btn").getBoundingClientRect();this.setState({btnPosition:n.top+500})}},{key:"render",value:function(n){var e=this.state.btnPosition<this.props.yPosition?"hide":"show",t=this.props,a=t.contents,r=(t.paiUrl,a.map(function(n){if("design"===n.field_yellow_website_unique_bloc)return i.a.createElement(K,{key:n.nid},i.a.createElement("h3",null,D()(n.title)),D()(n.field_yellow_website_content))}));return i.a.createElement("div",{className:"col-md-12"},i.a.createElement(H,null,r,i.a.createElement("div",{id:"btn",className:e})))}}]),e}(i.a.Component),sn=t(24),un=t.n(sn),pn=function(n){function e(){var n,t;Object(u.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=Object(m.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(i)))).state={btnPosition:0},t}return Object(f.a)(e,n),Object(p.a)(e,[{key:"componentDidMount",value:function(){var n=document.getElementById("btnDev"),e=n.getBoundingClientRect();this.setState({btnPosition:e.top+500}),console.log("ID dev",n)}},{key:"render",value:function(n){var e=this.props,t=e.contents,a=(e.apiUrl,t.map(function(n){if("develope"===n.field_yellow_website_unique_bloc)return i.a.createElement(K,{key:n.nid},i.a.createElement("h3",null,D()(n.title)),D()(n.field_yellow_website_content))})),r=this.state.btnPosition<this.props.yPosition?"hide":"show";return i.a.createElement("div",{className:"col-md-12"},i.a.createElement(H,null,a,i.a.createElement("div",{id:"btnDev",className:r},i.a.createElement(en,null))))}}]),e}(i.a.Component);function mn(){var n=Object(E.a)(["\n      width: 100%;\n      margin: 0px auto;\n      text-align: center;\n      margin-top: 75px;\n\n    a{\n      -webkit-text-decoration: none;\n      text-decoration: none;\n      color: #eee;\n      padding: 10px 20px;\n      background-color: #046732;\n      font-weight: 100;\n      letter-spacing: 0.25rem;\n    }\n    \n"]);return mn=function(){return n},n}var dn=j.a.div(mn()),fn=function(n){var e=n.contents,t=(n.paiUrl,e.map(function(n){if("status"===n.field_yellow_website_unique_bloc)return i.a.createElement(H,{key:n.nid},i.a.createElement(K,null,i.a.createElement(un.a,{animateIn:"fadeIn",animateOnce:!0},i.a.createElement("h3",null,n.title),D()(n.field_yellow_website_content),i.a.createElement(dn,null,i.a.createElement("a",{href:"https://www.yellow-website.com/d8-api-provider/contact/yw_contact_form",target:"_blank"},"Message me")))))}));return i.a.createElement("div",{className:"col-md-12"},t)};function bn(){var n=Object(E.a)(["\n    width: 100%;\n    height: 50px;\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    justify-content: center;\n    align-items: flex-end;\n    > p{\n      font-size: 0.9rem;\n      letter-spacing: 0px;\n      text-align: center;\n    }\n\n    > p > a, p{\n      text-decoration: none;\n      color: #555;\n    }\n\n"]);return bn=function(){return n},n}var hn=j.a.div(bn()),vn=function(n){function e(){return Object(u.a)(this,e),Object(m.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(f.a)(e,n),Object(p.a)(e,[{key:"render",value:function(n){var e=this.props,t=e.footer,a=(e.apiUrl,new Date),r=t.map(function(n){return i.a.createElement(hn,{key:n.nid},i.a.createElement("p",null,"\xa9 ",a.getFullYear()," All rights reserved \xa0 ",i.a.createElement("a",{href:n.field_yw_footer_website_url},n.field_yw_footer_website_url.substring(7))," \xa0 | \xa0 ",n.field_yw_footer_telephone,"  \xa0 | \xa0 ",n.field_yw_footer_address))});return i.a.createElement("div",{className:"col-md-12"},r)}}]),e}(i.a.Component),gn=t(12),xn=t.n(gn);function wn(){var n=Object(E.a)(["\nimg{\n  width: 120px;\n  position:relative;\n  animation: "," 1.5s infinite;\n  transform: rotate(-180deg);\n  margin: 20px;\n}\n\nul > li{\n  list-style: none;\n}\n\nul > li.pln1{\n  position: relative;\n  top: 150px;\n    left: -200px;\n}\nul > li.pln2{\n  position: relative;\n  top: 63px;\n    left: -122px;\n}\nul > li.pln3{\n  position: relative;\n  top: -23px;\n    left: -40px;\n}\nul > li.pln4{\n  position: relative;\n  top: -60px;\n  left: -29px;\n}\nul > li.pln5{\n  position: relative;\n  top: -94px;\n  left: -29px;\n}\n\n"]);return wn=function(){return n},n}function yn(){var n=Object(E.a)(["\n0%{ top: 0px}\n20%{ top: -5px}\n40%{ top: -10px;}\n60%{ top: -10px;}\n80%{ top: -5px;}\n100%{top: 0px;}\n"]);return yn=function(){return n},n}var En=Object(j.b)(yn()),jn=j.a.div(wn(),En),On=function(){return i.a.createElement(jn,null,i.a.createElement("ul",null,i.a.createElement("li",{className:"pln1"},i.a.createElement("img",{src:xn.a})),i.a.createElement("li",{className:"pln2"},i.a.createElement("img",{src:xn.a})),i.a.createElement("li",{className:"pln3"},i.a.createElement("img",{src:xn.a})),i.a.createElement("li",{className:"pln4"},i.a.createElement("img",{src:xn.a})),i.a.createElement("li",{className:"pln5"},i.a.createElement("img",{src:xn.a}))))};function _n(){var n=Object(E.a)(["\n\nwidth: 100%\nheight: 100vh;\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n\n"]);return _n=function(){return n},n}var kn=j.a.div(_n()),Nn=(i.a.Component,new y.a.EventEmitter),Pn="https://yellow-website.com",Cn=function(n){function e(){var n;return Object(u.a)(this,e),(n=Object(m.a)(this,Object(d.a)(e).call(this))).getScrollPosition=function(){window.onscroll=function(){n.setState({yPosition:window.pageYOffset})}},n.routeChangeTo=function(e){console.log("clicked",e),n.setState({route:e})},n.state={route:"home",contents:[],images:[],footer:[],bgIntro:"",bgDesigner:"",bgDeveloper:"",isLoaded:!1,yPosition:0},n}return Object(f.a)(e,n),Object(p.a)(e,[{key:"componentWillMount",value:function(){Nn.addListener("NODE_UPDATED",this.refresh)}},{key:"componentWillUnmount",value:function(){Nn.addListener("NODE_UPDATED",this.refresh)}},{key:"componentDidMount",value:function(){var n=Object(s.a)(l.a.mark(function n(){return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.refresh();case 2:this.getScrollPosition();case 3:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"refresh",value:function(){var n=Object(s.a)(l.a.mark(function n(){var e,t,a,i;return l.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,x();case 3:return e=n.sent,n.next=6,e.get("/rest/yellow-website-contents");case 6:return(t=n.sent).data&&this.setState({contents:t.data}),n.next=10,e.get("/rest/yellow-website-images");case 10:return(a=n.sent).data&&this.setState({images:a.data}),n.next=14,e.get("/rest/yellow-website-footer");case 14:(i=n.sent).data&&this.setState({footer:i.data,isLoaded:!0}),n.next=21;break;case 18:n.prev=18,n.t0=n.catch(0),alert(n.t0);case 21:case"end":return n.stop()}},n,this,[[0,18]])}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},this.state.isLoaded?i.a.createElement("div",{className:"container-fluid"},i.a.createElement("div",{className:"row"}),i.a.createElement("div",{className:"row"}),i.a.createElement("div",{className:"row"},i.a.createElement(F,{contents:this.state.contents,apiUrl:Pn})),i.a.createElement("div",{className:"row"},i.a.createElement(cn,{contents:this.state.contents,apiUrl:Pn,bgImages:this.state.bgImages,yPosition:this.state.yPosition,images:this.state.images})),i.a.createElement("div",{className:"row"},i.a.createElement(ln,{contents:this.state.contents,apiUrl:Pn,yPosition:this.state.yPosition})),i.a.createElement("div",{className:"row"},i.a.createElement(pn,{contents:this.state.contents,apiUrl:Pn,yPosition:this.state.yPosition})),i.a.createElement("div",{className:"row"},i.a.createElement(fn,{contents:this.state.contents,apiUrl:Pn})),i.a.createElement("div",{className:"row"},i.a.createElement(vn,{footer:this.state.footer,apiUrl:Pn}))):i.a.createElement(P,null))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(Cn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},12:function(n,e,t){n.exports=t.p+"static/media/paper-flight.685341ac.png"},49:function(n,e,t){n.exports=t(118)},55:function(n,e,t){},56:function(n,e,t){},87:function(n,e){}},[[49,1,2]]]);
//# sourceMappingURL=main.18952ea0.chunk.js.map