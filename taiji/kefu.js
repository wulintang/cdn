// floating.js

// 引入CSS文件
var floatingCss = document.createElement("link");
floatingCss.href = "https://www.isosou.cn/kefu//static/css/floating.css";
floatingCss.rel = "stylesheet";
floatingCss.type = "text/css";
document.head.appendChild(floatingCss);

// 引入JS文件
var floatingJs = document.createElement("script");
floatingJs.src = "https://www.isosou.cn/kefu//static/js/floating.js";
document.head.appendChild(floatingJs);

// 初始化浮动面板
$(document).ready(function () {
  $("body").floating({
    "theme": "panel_theme_round_solid",
    "state": true,
    "moveState": true,
    "size": "sm",
    "position": "right-center",
    "tip": {
      "background-color": "#000",
      "color": "#fff"
    },
    "account": [
      {
        "type": "Email",
        "tip": "投诉举报",
        "text": "jubao@ccwadj.cn",
        "url": "mailto:jubao@ccwadj.cn"
      },
      {
        "type": "Email",
        "tip": "企业邮箱",
        "text": "wulintang@ccwadj.cn",
        "url": "mailto:wulintang@ccwadj.cn"
      },
      {
        "type": "QQ",
        "tip": "应急响应",
        "text": "1223716790",
        "url": "http://wpa.qq.com/msgrd?v=3&uin=1223716790&site=qq&menu=yes"
      },
      {
        "type": "QQ",
        "tip": "网站客服",
        "text": "466660026",
        "url": "http://wpa.qq.com/msgrd?v=3&uin=466660026&site=qq&menu=yes"
      },
      {
        "type": "Phone",
        "tip": "商务合作",
        "text": "13222131422",
        "url": "tel:13222131422"
      },
      {
        "type": "Phone",
        "tip": "站务问题",
        "text": "17778737273",
        "url": "tel:17778737273"
      },
      {
        "type": "QRcode",
        "tip": "https://img.wulintang.cn/upfile/2022/09/1663305978617.jpg",
        "text": null,
        "url": null
      },
      {
        "type": "Top",
        "tip": "Back top",
        "text": null,
        "url": null
      }
    ]
  });
});
