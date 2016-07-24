webpackJsonp([214,366],{679:function(n,s,a){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(a(7),a(5)),o=t(p),c=(a(50),a(43)),u=t(c),e=a(1),l=t(e),k=a(2);t(k);n.exports={content:[["p","\u5404\u79cd\u7c7b\u578b\u7684\u4fe1\u606f\u63d0\u793a\uff0c\u53ea\u63d0\u4f9b\u4e00\u4e2a\u6309\u94ae\u7528\u4e8e\u5173\u95ed\u3002"]],meta:{order:5,title:"\u4fe1\u606f\u63d0\u793a",filename:"components/modal/demo/info.md",id:"components-modal-demo-info"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Modal<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >info</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  Modal<span class="token punctuation" >.</span><span class="token function" >info</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    title<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u4e00\u6761\u901a\u77e5\u4fe1\u606f\'</span><span class="token punctuation" >,</span>\n    content<span class="token punctuation" >:</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>p</span><span class="token punctuation" >></span></span>\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>p</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n    <span class="token function" >onOk</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >success</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  Modal<span class="token punctuation" >.</span><span class="token function" >success</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    title<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u4e00\u6761\u901a\u77e5\u4fe1\u606f\'</span><span class="token punctuation" >,</span>\n    content<span class="token punctuation" >:</span> <span class="token string" >\'\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >error</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  Modal<span class="token punctuation" >.</span><span class="token function" >error</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    title<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u4e00\u6761\u901a\u77e5\u4fe1\u606f\'</span><span class="token punctuation" >,</span>\n    content<span class="token punctuation" >:</span> <span class="token string" >\'\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >function</span> <span class="token function" >warning</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  Modal<span class="token punctuation" >.</span><span class="token function" >warning</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n    title<span class="token punctuation" >:</span> <span class="token string" >\'\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u4fe1\u606f\'</span><span class="token punctuation" >,</span>\n    content<span class="token punctuation" >:</span> <span class="token string" >\'\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\'</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>info<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u4fe1\u606f\u63d0\u793a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>success<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u6210\u529f\u63d0\u793a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>error<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u5931\u8d25\u63d0\u793a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>warning<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\u8b66\u544a\u63d0\u793a<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(){u["default"].info({title:"\u8fd9\u662f\u4e00\u6761\u901a\u77e5\u4fe1\u606f",content:l["default"].createElement("div",null,l["default"].createElement("p",null,"\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f"),l["default"].createElement("p",null,"\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f")),onOk:function(){}})}function s(){u["default"].success({title:"\u8fd9\u662f\u4e00\u6761\u901a\u77e5\u4fe1\u606f",content:"\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f"})}function a(){u["default"].error({title:"\u8fd9\u662f\u4e00\u6761\u901a\u77e5\u4fe1\u606f",content:"\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f"})}function t(){u["default"].warning({title:"\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u4fe1\u606f",content:"\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f\u4e00\u4e9b\u9644\u52a0\u4fe1\u606f"})}return l["default"].createElement("div",null,l["default"].createElement(o["default"],{onClick:n},"\u4fe1\u606f\u63d0\u793a"),l["default"].createElement(o["default"],{onClick:s},"\u6210\u529f\u63d0\u793a"),l["default"].createElement(o["default"],{onClick:a},"\u5931\u8d25\u63d0\u793a"),l["default"].createElement(o["default"],{onClick:t},"\u8b66\u544a\u63d0\u793a"))}}}});