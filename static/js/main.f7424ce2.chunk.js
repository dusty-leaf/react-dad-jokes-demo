(this["webpackJsonpdad-jokes"]=this["webpackJsonpdad-jokes"]||[]).push([[0],{21:function(e,t,a){e.exports=a(49)},26:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(18),o=a.n(r),c=(a(26),a(8)),i=a.n(c),l=a(19),u=a(2),d=a(3),m=a(5),f=a(4),h=a(7),p=a(6),k=(a(28),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"loader"},n.a.createElement("i",{className:"far fa-grin-squint spinning fa-4x"}))}}]),t}(n.a.Component)),j=(a(29),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(f.a)(t).call(this,e))).handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(e){var t=e.target.className;"upvote"===t||"fas fa-thumbs-up fa-2x"===t?this.props.updateScore(this.props.jokeId,1):"downvote"!==t&&"fas fa-thumbs-down fa-2x"!==t||this.props.updateScore(this.props.jokeId,-1)}},{key:"render",value:function(){var e,t=this.props.score;return t<2?e=n.a.createElement("i",{className:"far fa-tired fa-2x"}):t>=2&&t<4?e=n.a.createElement("i",{className:"far fa-meh-rolling-eyes fa-2x"}):t>=4&&t<6?e=n.a.createElement("i",{className:"far fa-laugh fa-2x"}):t>=6&&t<8?e=n.a.createElement("i",{className:"far fa-laugh-squint fa-2x"}):t>=8&&(e=n.a.createElement("i",{className:"far fa-grin-squint-tears fa-2x"})),n.a.createElement("li",{className:"Joke"},n.a.createElement("span",{className:"wrapper"},n.a.createElement("span",{className:"Joke-button_container"},n.a.createElement("button",{className:"upvote",onClick:this.handleClick},n.a.createElement("i",{className:"fas fa-thumbs-up fa-2x"})),n.a.createElement("p",{className:"score"},this.props.score?this.props.score:0),n.a.createElement("button",{className:"downvote",onClick:this.handleClick},n.a.createElement("i",{className:"fas fa-thumbs-down fa-2x"}))),n.a.createElement("p",{className:"Joke-content"},this.props.joke)),n.a.createElement("span",{id:"rating-icon"},e))}}]),t}(n.a.Component)),v=(a(30),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e;return e=this.props.isDisabled?n.a.createElement("p",null,"Loading..."):n.a.createElement("button",{onClick:this.props.getNewJokes},"Get more jokes"),n.a.createElement("div",{className:"Sidebar"},n.a.createElement("h1",null,"Dad Jokes"),n.a.createElement("i",{className:"far fa-grin-squint-tears fa-5x"}),e)}}]),t}(n.a.Component)),b=a(20),N=a.n(b),E=(a(48),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(f.a)(t).call(this,e))).state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),isLoaded:!1},a.getNewJokes=a.getNewJokes.bind(Object(h.a)(a)),a.updateScore=a.updateScore.bind(Object(h.a)(a)),a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){0===this.state.jokes.length?this.getNewJokes():this.setState({isLoaded:!0})}},{key:"getNewJokes",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,a,s,n,r,o,c,l,u,d=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(this.setState({isLoaded:!1}),t=[],a=new Set,s=!0,n=!1,r=void 0,e.prev=6,o=this.state.jokes[Symbol.iterator]();!(s=(c=o.next()).done);s=!0)l=c.value,a.add(l.id);e.next=14;break;case 10:e.prev=10,e.t0=e.catch(6),n=!0,r=e.t0;case 14:e.prev=14,e.prev=15,s||null==o.return||o.return();case 17:if(e.prev=17,!n){e.next=20;break}throw r;case 20:return e.finish(17);case 21:return e.finish(14);case 22:console.log(a);case 23:if(!(t.length<this.props.numJokesToGet)){e.next=31;break}return e.next=26,N.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 26:u=e.sent,console.log(!a.has(u.data.id)),a.has(u.data.id)||(t.push(u.data),a.add(u.data.id)),e.next=23;break;case 31:this.setState((function(e){return{jokes:d.state.jokes.concat(t),isLoaded:!0}}),(function(){window.localStorage.setItem("jokes",JSON.stringify(d.state.jokes))}));case 32:case"end":return e.stop()}}),e,this,[[6,10,14,22],[15,,17,21]])})));return function(){return e.apply(this,arguments)}}()},{key:"updateScore",value:function(e,t){var a=this,s=this.state.jokes.filter((function(t){return t.id===e})),n=this.state.jokes.filter((function(t){return t.id!==e}));void 0===s[0].score&&(s[0].score=0),s[0].score+=t,n.push({id:s[0].id,joke:s[0].joke,score:s[0].score}),this.setState((function(e){return{jokes:n}}),(function(){window.localStorage.setItem("jokes",JSON.stringify(a.state.jokes))}))}},{key:"sortByScore",value:function(){return this.state.jokes.slice().sort((function(e,t){return void 0===e.score&&(e.score=0),void 0===t.score&&(t.score=0),t.score-e.score}))}},{key:"render",value:function(){var e,t=this,a=this.sortByScore();return e=this.state.isLoaded?n.a.createElement("div",{className:"main-wrapper"},n.a.createElement("div",{className:"DadJokes"},n.a.createElement("div",{className:"DadJokes-sidebar"},n.a.createElement(v,{getNewJokes:this.getNewJokes,isDisabled:!1})),n.a.createElement("ul",{className:"DadJokes-joke_list"},a.map((function(e){return n.a.createElement(j,{joke:e.joke,jokeId:e.id,key:e.id,score:e.score,updateScore:t.updateScore})}))))):n.a.createElement("div",{className:"main-wrapper"},n.a.createElement("div",{className:"DadJokes"},n.a.createElement("div",{className:"DadJokes-sidebar"},n.a.createElement(v,{getNewJokes:this.getNewJokes,isDisabled:!0})),n.a.createElement("ul",{className:"DadJokes-joke_list"},n.a.createElement(k,null)))),n.a.createElement("div",null,e)}}]),t}(n.a.Component));E.defaultProps={numJokesToGet:10};var g=E;var w=function(){return n.a.createElement(g,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.f7424ce2.chunk.js.map