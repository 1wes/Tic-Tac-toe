(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(20)},16:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var r=a(9),l=a.n(r),n=a(0),o=a.n(n),s=a(10),c=a(2),i=a(3),u=a(6),m=a(4),d=a(7),g=(a(16),a(5));function S(e){return o.a.createElement("button",{type:"button",className:"square",onClick:e.onClick},e.value)}g.a.initialize("G-1R65DNZP1P");var p,v=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"displaySquare",value:function(e){var t=this;return o.a.createElement(S,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.displaySquare(0),this.displaySquare(1),this.displaySquare(2)),o.a.createElement("div",{className:"board-row"},this.displaySquare(3),this.displaySquare(4),this.displaySquare(5)),o.a.createElement("div",{className:"board-row"},this.displaySquare(6),this.displaySquare(7),this.displaySquare(8)))}}]),t}(o.a.Component),h=localStorage.getItem("localStoragexCounter"),I=parseInt(h,10);p=isNaN(I)?0:I;var f,N=localStorage.getItem("localStorageoCounter"),E=parseInt(N,10);f=isNaN(E)?0:E;var y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){var t=a.state.squares.slice();C(t)||t[e]||(t[e]=a.state.xIsNext?"X":"O",a.setState({squares:t,xIsNext:!a.state.xIsNext}))},a.state={squares:Array(9).fill(null),xIsNext:!0},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){g.a.pageview(window.location.pathname)}},{key:"render",value:function(){var e,t=this,a=C(this.state.squares);return e=a&&"draw"!==a?"Winner is: "+a+" !":a&&"draw"===a?"It is a "+a+" !":"Next player is: "+(this.state.xIsNext?"X":"O"),o.a.createElement("div",null,o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement("div",{className:"nextPlayer"},e),o.a.createElement(v,{squares:this.state.squares,onClick:function(e){return t.handleClick(e)}})),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null,o.a.createElement("div",{className:"winner-count-header"},"Winner count"),o.a.createElement("div",{className:"winner-counter"},o.a.createElement("div",{className:"display-counter"},"X: ",o.a.createElement("span",null,p)),o.a.createElement("div",{className:"display-counter"},"Draw: ",o.a.createElement("span",null,"0")),o.a.createElement("div",{className:"display-counter"},"O: ",o.a.createElement("span",null,f)," "))),o.a.createElement("div",{className:""}))))}}]),t}(o.a.Component);function C(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<t.length;a++){var r=Object(s.a)(t[a],3),l=r[0],n=r[1],o=r[2];if(e[l]&&e[l]===e[n]&&e[l]===e[o]){if("X"===e[l]){if(null===localStorage.getItem("localStoragexCounter"))localStorage.setItem("localStoragexCounter","0");else{var c=localStorage.getItem("localStoragexCounter");localStorage.setItem("localStoragexCounter",c.toString())}var i=parseInt(localStorage.getItem("localStoragexCounter"),10);i+=1,localStorage.setItem("localStoragexCounter",i.toString())}else{if(null===localStorage.getItem("localStorageoCounter"))localStorage.setItem("localStorageoCounter","0");else{var u=localStorage.getItem("localStorageoCounter");localStorage.setItem("localStorageoCounter",u.toString())}var m=parseInt(localStorage.getItem("localStorageoCounter"),10);m+=1,localStorage.setItem("localStorageoCounter",m.toString())}return setInterval(function(){window.location.reload(!0)},1e3),e[l]}if(!e.includes(null))return setInterval(function(){window.location.reload(!0)},1e3),"draw"}return null}l.a.render(o.a.createElement(y,null),document.getElementById("root"))}},[[11,2,1]]]);
//# sourceMappingURL=main.90dc4e0e.chunk.js.map