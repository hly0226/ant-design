webpackJsonp([110,366],{785:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(29),s(28)),o=t(p),c=s(1),e=t(c),u=s(2);t(u);n.exports={content:[["p","\u4f20\u5165 pagination \u4e3a false \u5373\u53ef\u3002\u6b64\u65f6\u8868\u683c\u5c06\u5b8c\u6574\u663e\u793a dataSource \u5185\u7684\u6570\u636e\uff0c\u4e0d\u8fdb\u884c\u4efb\u4f55\u5206\u9875\u3002"]],meta:{order:8,title:"\u4e0d\u663e\u793a\u5206\u9875",filename:"components/table/demo/nopagination.md",id:"components-table-demo-nopagination"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Table <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> columns <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u59d3\u540d\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'name\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u5e74\u9f84\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'age\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  title<span class="token punctuation" >:</span> <span class="token string" >\'\u4f4f\u5740\'</span><span class="token punctuation" >,</span>\n  dataIndex<span class="token punctuation" >:</span> <span class="token string" >\'address\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> data <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'1\'</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u80e1\u5f66\u658c\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >32</span><span class="token punctuation" >,</span>\n  address<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'2\'</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u80e1\u5f66\u7956\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >42</span><span class="token punctuation" >,</span>\n  address<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  key<span class="token punctuation" >:</span> <span class="token string" >\'3\'</span><span class="token punctuation" >,</span>\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u674e\u5927\u5634\'</span><span class="token punctuation" >,</span>\n  age<span class="token punctuation" >:</span> <span class="token number" >32</span><span class="token punctuation" >,</span>\n  address<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Table</span> <span class="token attr-name" >columns</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>columns<span class="token punctuation" >}</span></span> <span class="token attr-name" >dataSource</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>data<span class="token punctuation" >}</span></span> <span class="token attr-name" >pagination</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token boolean" >false</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=[{title:"\u59d3\u540d",dataIndex:"name"},{title:"\u5e74\u9f84",dataIndex:"age"},{title:"\u4f4f\u5740",dataIndex:"address"}],a=[{key:"1",name:"\u80e1\u5f66\u658c",age:32,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7"},{key:"2",name:"\u80e1\u5f66\u7956",age:42,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7"},{key:"3",name:"\u674e\u5927\u5634",age:32,address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7"}];return e["default"].createElement(o["default"],{columns:n,dataSource:a,pagination:!1})}}}});