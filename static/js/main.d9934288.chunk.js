(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),r=n(4),s=n.n(r),i=n(1),c=n(5),l=n(6),u=n(8),m=n(7),b=n(2),p=n.n(b),f=function(t){var e=t.listItems;return a.a.createElement("div",null,a.a.createElement("h1",null,"Goods"),a.a.createElement("ul",null,e.map((function(t){return a.a.createElement("li",{key:t},t)}))))},g=(n(14),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),h=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={goods:[].concat(g),visibility:!1},t.reverseList=function(){t.setState((function(t){return{goods:Object(i.a)(t.goods.reverse())}}))},t.sortList=function(){t.setState((function(t){return{goods:Object(i.a)(t.goods.sort((function(t,e){return t.localeCompare(e)})))}}))},t.resetList=function(){t.setState({goods:[].concat(g)})},t.sortByLength=function(){t.setState((function(t){return{goods:Object(i.a)(t.goods.sort((function(t,e){return t.length-e.length})))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state.goods,n=this.state.visibility;return a.a.createElement("div",{className:"App"},a.a.createElement("button",{type:"button",onClick:function(){return t.setState({visibility:!0})},className:p()({startButton:n})},"Start"),!n||a.a.createElement(f,{listItems:e}),a.a.createElement("div",{className:p()({buttons:!n})},a.a.createElement("button",{type:"button",onClick:this.reverseList},"Reverse"),a.a.createElement("button",{type:"button",onClick:this.sortList},"Sort alphabetically"),a.a.createElement("button",{type:"button",onClick:this.resetList},"Reset"),a.a.createElement("button",{type:"button",onClick:this.sortByLength},"Sort by length")))}}]),n}(a.a.Component);s.a.render(a.a.createElement(h,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d9934288.chunk.js.map