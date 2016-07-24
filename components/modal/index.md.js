webpackJsonp([210,366],{683:function(t,d,e){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var n=e(1),r=(o(n),e(2));o(r);t.exports={content:["section",["p","\u6a21\u6001\u5bf9\u8bdd\u6846\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["p","\u9700\u8981\u7528\u6237\u5904\u7406\u4e8b\u52a1\uff0c\u53c8\u4e0d\u5e0c\u671b\u8df3\u8f6c\u9875\u9762\u4ee5\u81f4\u6253\u65ad\u5de5\u4f5c\u6d41\u7a0b\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",["code","Modal"]," \u5728\u5f53\u524d\u9875\u9762\u6b63\u4e2d\u6253\u5f00\u4e00\u4e2a\u6d6e\u5c42\uff0c\u627f\u8f7d\u76f8\u5e94\u7684\u64cd\u4f5c\u3002"],["p","\u53e6\u5916\u5f53\u9700\u8981\u4e00\u4e2a\u7b80\u6d01\u7684\u786e\u8ba4\u6846\u8be2\u95ee\u7528\u6237\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u7cbe\u5fc3\u5c01\u88c5\u597d\u7684 ",["code","ant.Modal.confirm()"]," \u7b49\u65b9\u6cd5\u3002"]],meta:{type:"Views",category:"Components",chinese:"\u5bf9\u8bdd\u6846",english:"Modal",filename:"components/modal/index.md"},toc:["ul",["li",["a",{href:"#\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","visible"],["td","\u5bf9\u8bdd\u6846\u662f\u5426\u53ef\u89c1"],["td","Boolean"],["td","\u65e0"]],["tr",["td","confirmLoading"],["td","\u786e\u5b9a\u6309\u94ae loading"],["td","Boolean"],["td","\u65e0"]],["tr",["td","title"],["td","\u6807\u9898"],["td","React.Element"],["td","\u65e0"]],["tr",["td","closable"],["td","\u662f\u5426\u663e\u793a\u53f3\u4e0a\u89d2\u7684\u5173\u95ed\u6309\u94ae"],["td","Boolean"],["td","true"]],["tr",["td","onOk"],["td","\u70b9\u51fb\u786e\u5b9a\u56de\u8c03"],["td","function"],["td","\u65e0"]],["tr",["td","onCancel"],["td","\u70b9\u51fb\u906e\u7f69\u5c42\u6216\u53f3\u4e0a\u89d2\u53c9\u6216\u53d6\u6d88\u6309\u94ae\u7684\u56de\u8c03"],["td","function(e)"],["td","\u65e0"]],["tr",["td","width"],["td","\u5bbd\u5ea6"],["td","String or Number"],["td","520"]],["tr",["td","footer"],["td","\u5e95\u90e8\u5185\u5bb9"],["td","React.Element"],["td","\u786e\u5b9a\u53d6\u6d88\u6309\u94ae"]],["tr",["td","okText"],["td","\u786e\u8ba4\u6309\u94ae\u6587\u5b57"],["td","String"],["td","\u786e\u5b9a"]],["tr",["td","cancelText"],["td","\u53d6\u6d88\u6309\u94ae\u6587\u5b57"],["td","String"],["td","\u53d6\u6d88"]],["tr",["td","maskClosable"],["td","\u70b9\u51fb\u8499\u5c42\u662f\u5426\u5141\u8bb8\u5173\u95ed"],["td","Boolean"],["td","true"]],["tr",["td","style"],["td","\u53ef\u7528\u4e8e\u8bbe\u7f6e\u6d6e\u5c42\u7684\u6837\u5f0f\uff0c\u8c03\u6574\u6d6e\u5c42\u4f4d\u7f6e\u7b49"],["td","Object"],["td","-"]],["tr",["td","wrapClassName"],["td","\u5bf9\u8bdd\u6846\u5916\u5c42\u5bb9\u5668\u7684\u7c7b\u540d"],["td","String"],["td","-"]]]],["h3","Modal.xxx()"],["p","\u5305\u62ec\uff1a"],["ul",["li",["p",["code","Modal.info"]]],["li",["p",["code","Modal.success"]]],["li",["p",["code","Modal.error"]]],["li",["p",["code","Modal.warning"]]],["li",["p",["code","Modal.confirm"]]]],["p","\u4ee5\u4e0a\u5747\u4e3a\u4e00\u4e2a\u51fd\u6570\uff0c\u53c2\u6570\u4e3a object\uff0c\u5177\u4f53\u5c5e\u6027\u5982\u4e0b\uff1a"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","title"],["td","\u6807\u9898"],["td","React.Element or String"],["td","\u65e0"]],["tr",["td","content"],["td","\u5185\u5bb9"],["td","React.Element or String"],["td","\u65e0"]],["tr",["td","onOk"],["td","\u70b9\u51fb\u786e\u5b9a\u56de\u8c03\uff0c\u53c2\u6570\u4e3a\u5173\u95ed\u51fd\u6570\uff0c\u8fd4\u56de promise \u65f6 resolve \u540e\u81ea\u52a8\u5173\u95ed"],["td","function"],["td","\u65e0"]],["tr",["td","onCancel"],["td","\u53d6\u6d88\u56de\u8c03\uff0c\u53c2\u6570\u4e3a\u5173\u95ed\u51fd\u6570\uff0c\u8fd4\u56de promise \u65f6 resolve \u540e\u81ea\u52a8\u5173\u95ed"],["td","function"],["td","\u65e0"]],["tr",["td","width"],["td","\u5bbd\u5ea6"],["td","String or Number"],["td","416"]],["tr",["td","iconType"],["td","\u56fe\u6807 Icon \u7c7b\u578b"],["td","String"],["td","question-circle"]],["tr",["td","okText"],["td","\u786e\u8ba4\u6309\u94ae\u6587\u5b57"],["td","String"],["td","\u786e\u5b9a"]],["tr",["td","cancelText"],["td","\u53d6\u6d88\u6309\u94ae\u6587\u5b57"],["td","String"],["td","\u53d6\u6d88"]]]],["style","\n.code-box-demo .ant-btn {\n  margin-right: 8px;\n}\n"]]}}});