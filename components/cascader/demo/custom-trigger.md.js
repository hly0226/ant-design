webpackJsonp([304,366],{586:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(69),s(68)),o=t(p),c=s(1),e=t(c),u=s(2);t(u);n.exports={content:[["p","\u5207\u6362\u6309\u94ae\u548c\u7ed3\u679c\u5206\u5f00\u3002"]],meta:{order:1,title:"\u53ef\u4ee5\u81ea\u5b9a\u4e49\u663e\u793a",filename:"components/cascader/demo/custom-trigger.md",id:"components-cascader-demo-custom-trigger"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Cascader <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> options <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'zhejiang\'</span><span class="token punctuation" >,</span>\n  label<span class="token punctuation" >:</span> <span class="token string" >\'\u6d59\u6c5f\'</span><span class="token punctuation" >,</span>\n  children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'hangzhou\'</span><span class="token punctuation" >,</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'\u676d\u5dde\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'jiangsu\'</span><span class="token punctuation" >,</span>\n  label<span class="token punctuation" >:</span> <span class="token string" >\'\u6c5f\u82cf\'</span><span class="token punctuation" >,</span>\n  children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'nanjing\'</span><span class="token punctuation" >,</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'\u5357\u4eac\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> CitySwitcher <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      text<span class="token punctuation" >:</span> <span class="token string" >\'\u672a\u9009\u62e9\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >onChange</span><span class="token punctuation" >(</span>value<span class="token punctuation" >,</span> selectedOptions<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      text<span class="token punctuation" >:</span> selectedOptions<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span>o <span class="token operator" >=</span><span class="token operator" >></span> o<span class="token punctuation" >.</span>label<span class="token punctuation" >)</span><span class="token punctuation" >.</span><span class="token function" >join</span><span class="token punctuation" >(</span><span class="token string" >\', \'</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span><span class="token punctuation" >></span></span>\n        <span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>text<span class="token punctuation" >}</span>\n        <span class="token entity" title="&nbsp;">&amp;nbsp;</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Cascader</span> <span class="token attr-name" >options</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>options<span class="token punctuation" >}</span></span> <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onChange<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>a</span> <span class="token attr-name" >href</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>#<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u5207\u6362\u57ce\u5e02<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>a</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Cascader</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>CitySwitcher</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=[{value:"zhejiang",label:"\u6d59\u6c5f",children:[{value:"hangzhou",label:"\u676d\u5dde"}]},{value:"jiangsu",label:"\u6c5f\u82cf",children:[{value:"nanjing",label:"\u5357\u4eac"}]}],a=e["default"].createClass({displayName:"CitySwitcher",getInitialState:function(){return{text:"\u672a\u9009\u62e9"}},onChange:function(n,a){this.setState({text:a.map(function(n){return n.label}).join(", ")})},render:function(){return e["default"].createElement("span",null,this.state.text,"\xa0",e["default"].createElement(o["default"],{options:n,onChange:this.onChange},e["default"].createElement("a",{href:"#"},"\u5207\u6362\u57ce\u5e02")))}});return e["default"].createElement(a,null)}}}});