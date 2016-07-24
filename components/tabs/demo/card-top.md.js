webpackJsonp([100,366],{795:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(64),s(63)),o=t(p),c=s(1),e=t(c),l=s(2);t(l);n.exports={content:[["p","\u7528\u4e8e\u5bb9\u5668\u9876\u90e8\uff0c\u9700\u8981\u4e00\u70b9\u989d\u5916\u7684\u6837\u5f0f\u8986\u76d6\u3002"]],meta:{order:10,title:"\u5361\u7247\u5f0f\u9875\u7b7e\u5bb9\u5668",filename:"components/tabs/demo/card-top.md",id:"components-tabs-demo-card-top"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Tabs <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> TabPane <span class="token operator" >=</span> Tabs<span class="token punctuation" >.</span>TabPane<span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>card-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Tabs</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>card<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361\u4e00<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>1<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e00\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361\u4e8c<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>2<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e8c\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>TabPane</span> <span class="token attr-name" >tab</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u9009\u9879\u5361\u4e09<span class="token punctuation" >"</span></span> <span class="token attr-name" >key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>3<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u9009\u9879\u5361\u4e09\u5185\u5bb9<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>TabPane</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Tabs</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=o["default"].TabPane;return e["default"].createElement("div",{className:"card-container"},e["default"].createElement(o["default"],{type:"card"},e["default"].createElement(n,{tab:"\u9009\u9879\u5361\u4e00",key:"1"},"\u9009\u9879\u5361\u4e00\u5185\u5bb9"),e["default"].createElement(n,{tab:"\u9009\u9879\u5361\u4e8c",key:"2"},"\u9009\u9879\u5361\u4e8c\u5185\u5bb9"),e["default"].createElement(n,{tab:"\u9009\u9879\u5361\u4e09",key:"3"},"\u9009\u9879\u5361\u4e09\u5185\u5bb9")))},style:"#components-tabs-demo-card-top .code-box-demo {\n  background: #ECECEC;\n  overflow: hidden;\n  padding: 24px;\n}\n\n.card-container > .ant-tabs-card > .ant-tabs-content {\n  background: #fff;\n  padding: 16px;\n  height: 120px;\n  margin-top: -16px;\n}\n\n.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {\n  border-color: transparent;\n}\n\n.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {\n  border-color: #fff;\n}",highlightedStyle:'<span class="token selector" ><span class="token id" >#components-tabs-demo-card-top</span> <span class="token class" >.code-box-demo</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token hexcode" >#ECECEC</span><span class="token punctuation" >;</span>\n  <span class="token property" >overflow</span><span class="token punctuation" >:</span> hidden<span class="token punctuation" >;</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >24</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.card-container</span> > <span class="token class" >.ant-tabs-card</span> > <span class="token class" >.ant-tabs-content</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token hexcode" >#fff</span><span class="token punctuation" >;</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >16</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >height</span><span class="token punctuation" >:</span> <span class="token number" >120</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >margin-top</span><span class="token punctuation" >:</span> -<span class="token number" >16</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.card-container</span> > <span class="token class" >.ant-tabs-card</span> > <span class="token class" >.ant-tabs-bar</span> <span class="token class" >.ant-tabs-tab</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >border-color</span><span class="token punctuation" >:</span> transparent<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.card-container</span> > <span class="token class" >.ant-tabs-card</span> > <span class="token class" >.ant-tabs-bar</span> <span class="token class" >.ant-tabs-tab-active</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >border-color</span><span class="token punctuation" >:</span> <span class="token hexcode" >#fff</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});