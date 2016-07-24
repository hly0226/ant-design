webpackJsonp([269,366],{622:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(7),s(5)),e=t(p),o=(s(36),s(34)),c=t(o),l=(s(24),s(23)),u=t(l),k=(s(38),s(37)),i=t(k),r=(s(18),s(25)),m=t(r),g=(s(49),s(48)),d=t(g),f=s(1),b=t(f),v=s(2);t(v);n.exports={content:[["p","\u4e09\u5217\u6805\u683c\u5f0f\u7684\u8868\u5355\u6392\u5217\u65b9\u5f0f\uff0c\u5e38\u7528\u4e8e\u6570\u636e\u8868\u683c\u7684\u9ad8\u7ea7\u641c\u7d22\u3002"],["p","\u6709\u90e8\u5206\u5b9a\u5236\u7684\u6837\u5f0f\u4ee3\u7801\uff0c\u7531\u4e8e\u8f93\u5165\u6807\u7b7e\u957f\u5ea6\u4e0d\u786e\u5b9a\uff0c\u9700\u8981\u6839\u636e\u5177\u4f53\u60c5\u51b5\u81ea\u884c\u8c03\u6574\u3002"]],meta:{order:10,title:"\u9ad8\u7ea7\u641c\u7d22",filename:"components/form/demo/advanced-search-form.md",id:"components-form-demo-advanced-search-form"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Form<span class="token punctuation" >,</span> Input<span class="token punctuation" >,</span> Row<span class="token punctuation" >,</span> Col<span class="token punctuation" >,</span> Button<span class="token punctuation" >,</span> DatePicker <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >const</span> FormItem <span class="token operator" >=</span> Form<span class="token punctuation" >.</span>Item<span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Form</span> <span class="token attr-name" >horizontal</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ant-advanced-search-form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span> <span class="token attr-name" >gutter</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >16</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >sm</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >8</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n          <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u641c\u7d22\u540d\u79f0<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >10</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >14</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u8f93\u5165\u641c\u7d22\u540d\u79f0<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>default<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n          <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8f83\u957f\u641c\u7d22\u540d\u79f0<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >10</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >14</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DatePicker</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>default<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n          <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u641c\u7d22\u540d\u79f0<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >10</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >14</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u8f93\u5165\u641c\u7d22\u540d\u79f0<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>default<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >sm</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >8</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n          <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u641c\u7d22\u540d\u79f0<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >10</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >14</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u8f93\u5165\u641c\u7d22\u540d\u79f0<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>default<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n          <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8f83\u957f\u641c\u7d22\u540d\u79f0<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >10</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >14</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DatePicker</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>default<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n          <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u641c\u7d22\u540d\u79f0<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >10</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >14</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u8f93\u5165\u641c\u7d22\u540d\u79f0<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>default<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >sm</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >8</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n          <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u641c\u7d22\u540d\u79f0<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >10</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >14</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u8f93\u5165\u641c\u7d22\u540d\u79f0<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>default<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n          <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8f83\u957f\u641c\u7d22\u540d\u79f0<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >10</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >14</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>DatePicker</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>default<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>FormItem</span>\n          <span class="token attr-name" >label</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u641c\u7d22\u540d\u79f0<span class="token punctuation" >"</span></span>\n          <span class="token attr-name" >labelCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >10</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n          <span class="token attr-name" >wrapperCol</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> span<span class="token punctuation" >:</span> <span class="token number" >14</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span>\n        <span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Input</span> <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u8f93\u5165\u641c\u7d22\u540d\u79f0<span class="token punctuation" >"</span></span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>default<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>FormItem</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Row</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Col</span> <span class="token attr-name" >span</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >12</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >offset</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token number" >12</span><span class="token punctuation" >}</span></span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> textAlign<span class="token punctuation" >:</span> <span class="token string" >\'right\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span> <span class="token attr-name" >htmlType</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u641c\u7d22<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span><span class="token punctuation" >></span></span>\u6e05\u9664\u6761\u4ef6<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Col</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Row</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Form</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=d["default"].Item;return b["default"].createElement(d["default"],{horizontal:!0,className:"ant-advanced-search-form"},b["default"].createElement(c["default"],{gutter:16},b["default"].createElement(u["default"],{sm:8},b["default"].createElement(n,{label:"\u641c\u7d22\u540d\u79f0",labelCol:{span:10},wrapperCol:{span:14}},b["default"].createElement(m["default"],{placeholder:"\u8bf7\u8f93\u5165\u641c\u7d22\u540d\u79f0",size:"default"})),b["default"].createElement(n,{label:"\u8f83\u957f\u641c\u7d22\u540d\u79f0",labelCol:{span:10},wrapperCol:{span:14}},b["default"].createElement(i["default"],{size:"default"})),b["default"].createElement(n,{label:"\u641c\u7d22\u540d\u79f0",labelCol:{span:10},wrapperCol:{span:14}},b["default"].createElement(m["default"],{placeholder:"\u8bf7\u8f93\u5165\u641c\u7d22\u540d\u79f0",size:"default"}))),b["default"].createElement(u["default"],{sm:8},b["default"].createElement(n,{label:"\u641c\u7d22\u540d\u79f0",labelCol:{span:10},wrapperCol:{span:14}},b["default"].createElement(m["default"],{placeholder:"\u8bf7\u8f93\u5165\u641c\u7d22\u540d\u79f0",size:"default"})),b["default"].createElement(n,{label:"\u8f83\u957f\u641c\u7d22\u540d\u79f0",labelCol:{span:10},wrapperCol:{span:14}},b["default"].createElement(i["default"],{size:"default"})),b["default"].createElement(n,{label:"\u641c\u7d22\u540d\u79f0",labelCol:{span:10},wrapperCol:{span:14}},b["default"].createElement(m["default"],{placeholder:"\u8bf7\u8f93\u5165\u641c\u7d22\u540d\u79f0",size:"default"}))),b["default"].createElement(u["default"],{sm:8},b["default"].createElement(n,{label:"\u641c\u7d22\u540d\u79f0",labelCol:{span:10},wrapperCol:{span:14}},b["default"].createElement(m["default"],{placeholder:"\u8bf7\u8f93\u5165\u641c\u7d22\u540d\u79f0",size:"default"})),b["default"].createElement(n,{label:"\u8f83\u957f\u641c\u7d22\u540d\u79f0",labelCol:{span:10},wrapperCol:{span:14}},b["default"].createElement(i["default"],{size:"default"})),b["default"].createElement(n,{label:"\u641c\u7d22\u540d\u79f0",labelCol:{span:10},wrapperCol:{span:14}},b["default"].createElement(m["default"],{placeholder:"\u8bf7\u8f93\u5165\u641c\u7d22\u540d\u79f0",size:"default"})))),b["default"].createElement(c["default"],null,b["default"].createElement(u["default"],{span:12,offset:12,style:{textAlign:"right"}},b["default"].createElement(e["default"],{type:"primary",htmlType:"submit"},"\u641c\u7d22"),b["default"].createElement(e["default"],null,"\u6e05\u9664\u6761\u4ef6"))))},style:"/* \u5b9a\u5236\u6837\u5f0f */\n\n.ant-advanced-search-form {\n  padding: 16px 8px;\n  background: #f8f8f8;\n  border: 1px solid #d9d9d9;\n  border-radius: 6px;\n}\n\n/* \u7531\u4e8e\u8f93\u5165\u6807\u7b7e\u957f\u5ea6\u4e0d\u786e\u5b9a\uff0c\u6240\u4ee5\u9700\u8981\u5fae\u8c03\u4f7f\u4e4b\u770b\u4e0a\u53bb\u5c45\u4e2d */\n.ant-advanced-search-form > .ant-row {\n  position: relative;\n  left: -6px;\n}\n\n.ant-advanced-search-form .ant-btn + .ant-btn {\n  margin-left: 8px;\n}\n#components-form-demo-advanced-search-form .ant-form-horizontal {\n  max-width: none;\n}\n",highlightedStyle:'<span class="token comment" spellcheck="true">/* \u5b9a\u5236\u6837\u5f0f */</span>\n\n<span class="token selector" ><span class="token class" >.ant-advanced-search-form</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >padding</span><span class="token punctuation" >:</span> <span class="token number" >16</span>px <span class="token number" >8</span>px<span class="token punctuation" >;</span>\n  <span class="token property" >background</span><span class="token punctuation" >:</span> <span class="token hexcode" >#f8f8f8</span><span class="token punctuation" >;</span>\n  <span class="token property" >border</span><span class="token punctuation" >:</span> <span class="token number" >1</span>px solid <span class="token hexcode" >#d9d9d9</span><span class="token punctuation" >;</span>\n  <span class="token property" >border-radius</span><span class="token punctuation" >:</span> <span class="token number" >6</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token comment" spellcheck="true">/* \u7531\u4e8e\u8f93\u5165\u6807\u7b7e\u957f\u5ea6\u4e0d\u786e\u5b9a\uff0c\u6240\u4ee5\u9700\u8981\u5fae\u8c03\u4f7f\u4e4b\u770b\u4e0a\u53bb\u5c45\u4e2d */</span>\n<span class="token selector" ><span class="token class" >.ant-advanced-search-form</span> > <span class="token class" >.ant-row</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >position</span><span class="token punctuation" >:</span> relative<span class="token punctuation" >;</span>\n  <span class="token property" >left</span><span class="token punctuation" >:</span> -<span class="token number" >6</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n\n<span class="token selector" ><span class="token class" >.ant-advanced-search-form</span> <span class="token class" >.ant-btn</span> + <span class="token class" >.ant-btn</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >margin-left</span><span class="token punctuation" >:</span> <span class="token number" >8</span>px<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});