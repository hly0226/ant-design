webpackJsonp([203,366],{690:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(62),s(61)),o=t(p),e=s(1),c=t(e),u=s(2);t(u);n.exports={content:[["p","\u6539\u53d8\u6bcf\u9875\u663e\u793a\u6761\u76ee\u6570\u3002"]],meta:{order:2,title:"\u6539\u53d8",filename:"components/pagination/demo/changer.md",id:"components-pagination-demo-changer"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Pagination <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >onShowSizeChange</span><span class="token punctuation" >(</span>current<span class="token punctuation" >,</span> pageSize<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>current<span class="token punctuation" >,</span> pageSize<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Pagination</span> <span class="token attr-name" >showSizeChanger</span> <span class="token attr-name" >onShowSizeChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>onShowSizeChange<span class="token punctuation" >}</span></span> <span class="token attr-name" >defaultCurrent</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >3</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >total</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >500</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span>\n mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(n,a){console.log(n,a)}return c["default"].createElement(o["default"],{showSizeChanger:!0,onShowSizeChange:n,defaultCurrent:3,total:500})}}}});