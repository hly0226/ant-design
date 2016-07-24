webpackJsonp([228,366],{665:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(10),s(8)),e=t(p),o=(s(79),s(78)),c=t(o),u=(s(27),s(26)),l=t(u),k=s(1),i=t(k),r=s(2);t(r);n.exports={content:[["p","\u5c55\u793a\u52a8\u6001\u5207\u6362\u6a21\u5f0f\u3002"]],meta:{order:5,title:"\u5207\u6362\u83dc\u5355\u7c7b\u578b",filename:"components/menu/demo/switch-mode.md",id:"components-menu-demo-switch-mode"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Menu<span class="token punctuation" >,</span> Icon<span class="token punctuation" >,</span> Switch <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> SubMenu <span class="token operator" >=</span> Menu<span class="token punctuation" >.</span>SubMenu<span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> MenuItemGroup <span class="token operator" >=</span> Menu<span class="token punctuation" >.</span>ItemGroup<span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> Sider <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      mode<span class="token punctuation" >:</span> <span class="token string" >\'inline\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >changeMode</span><span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      mode<span class="token punctuation" >:</span> value <span class="token operator" >?</span> <span class="token string" >\'vertical\'</span> <span class="token punctuation" >:</span> <span class="token string" >\'inline\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Switch</span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>changeMode<span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu</span>\n          <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> width<span class="token punctuation" >:</span> <span class="token number" >240</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >defaultOpenKeys</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >[</span><span class="token string" >\'sub1\'</span><span class="token punctuation" >]</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >mode</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>mode<span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SubMenu</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sub1<span class="token punctuation" >"</span></span> <span class="token attr-name" >title={&lt;span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>mail<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u5bfc\u822a\u4e00<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>MenuItemGroup</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5206\u7ec41<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >1</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >2</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>MenuItemGroup</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>MenuItemGroup</span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5206\u7ec42<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >3</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>4<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >4</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>MenuItemGroup</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>SubMenu</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SubMenu</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sub2<span class="token punctuation" >"</span></span> <span class="token attr-name" >title={&lt;span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>appstore<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u5bfc\u822a\u4e8c<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>5<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >5</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>6<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >6</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SubMenu</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sub3<span class="token punctuation" >"</span></span> <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u4e09\u7ea7\u5bfc\u822a<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>7<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >7</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n              <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>8<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >8</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>SubMenu</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>SubMenu</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>SubMenu</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sub4<span class="token punctuation" >"</span></span> <span class="token attr-name" >title={&lt;span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>setting<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\u5bfc\u822a\u4e09<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span><span class="token punctuation" >}</span><span class="token operator" >></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>9<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >9</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>10<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >10</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>11<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >11</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Menu.Item</span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>12<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879<span class="token number" >12</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu.Item</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>SubMenu</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Menu</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Sider</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=l["default"].SubMenu,a=l["default"].ItemGroup,s=i["default"].createClass({displayName:"Sider",getInitialState:function(){return{mode:"inline"}},changeMode:function(n){this.setState({mode:n?"vertical":"inline"})},render:function(){return i["default"].createElement("div",null,i["default"].createElement(c["default"],{onChange:this.changeMode}),i["default"].createElement("br",null),i["default"].createElement("br",null),i["default"].createElement(l["default"],{style:{width:240},defaultOpenKeys:["sub1"],mode:this.state.mode},i["default"].createElement(n,{key:"sub1",title:i["default"].createElement("span",null,i["default"].createElement(e["default"],{type:"mail"}),i["default"].createElement("span",null,"\u5bfc\u822a\u4e00"))},i["default"].createElement(a,{title:"\u5206\u7ec41"},i["default"].createElement(l["default"].Item,{key:"1"},"\u9009\u98791"),i["default"].createElement(l["default"].Item,{key:"2"},"\u9009\u98792")),i["default"].createElement(a,{title:"\u5206\u7ec42"},i["default"].createElement(l["default"].Item,{key:"3"},"\u9009\u98793"),i["default"].createElement(l["default"].Item,{key:"4"},"\u9009\u98794"))),i["default"].createElement(n,{key:"sub2",title:i["default"].createElement("span",null,i["default"].createElement(e["default"],{type:"appstore"}),i["default"].createElement("span",null,"\u5bfc\u822a\u4e8c"))},i["default"].createElement(l["default"].Item,{key:"5"},"\u9009\u98795"),i["default"].createElement(l["default"].Item,{key:"6"},"\u9009\u98796"),i["default"].createElement(n,{key:"sub3",title:"\u4e09\u7ea7\u5bfc\u822a"},i["default"].createElement(l["default"].Item,{key:"7"},"\u9009\u98797"),i["default"].createElement(l["default"].Item,{key:"8"},"\u9009\u98798"))),i["default"].createElement(n,{key:"sub4",title:i["default"].createElement("span",null,i["default"].createElement(e["default"],{type:"setting"}),i["default"].createElement("span",null,"\u5bfc\u822a\u4e09"))},i["default"].createElement(l["default"].Item,{key:"9"},"\u9009\u98799"),i["default"].createElement(l["default"].Item,{key:"10"},"\u9009\u987910"),i["default"].createElement(l["default"].Item,{key:"11"},"\u9009\u987911"),i["default"].createElement(l["default"].Item,{key:"12"},"\u9009\u987912"))))}});return i["default"].createElement(s,null)}}}});