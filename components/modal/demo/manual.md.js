webpackJsonp([212,366],{681:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(7),a(5)),o=t(p),c=(a(50),a(43)),e=t(c),u=a(1),l=t(u),i=a(2);t(i);n.exports={content:[["p","\u624b\u52a8\u5173\u95edmodal\u3002"]],meta:{order:7,title:"\u624b\u52a8\u79fb\u9664",filename:"components/modal/demo/manual.md",id:"components-modal-demo-manual"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Modal<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >success</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token keyword" >const</span> modal <span class="token operator" >=</span> Modal<span class="token punctuation" >.</span><span class="token function" >success</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    title<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u4e00\u6761\u901a\u77e5\u4fe1\u606f\'</span><span class="token punctuation" >,</span>\n    content<span class="token punctuation" >:</span> <span class="token string" >\'\u4e00\u79d2\u540e\u81ea\u52a8\u79fb\u9664\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token function" >setTimeout</span><span class="token punctuation" >(</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> modal<span class="token punctuation" >.</span><span class="token function" >destroy</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span> <span class="token number" >1000</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>success<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6210\u529f\u63d0\u793a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(){var n=e["default"].success({title:"\u8fd9\u662f\u4e00\u6761\u901a\u77e5\u4fe1\u606f",content:"\u4e00\u79d2\u540e\u81ea\u52a8\u79fb\u9664"});setTimeout(function(){return n.destroy()},1e3)}return l["default"].createElement("div",null,l["default"].createElement(o["default"],{onClick:n},"\u6210\u529f\u63d0\u793a"))}}}});