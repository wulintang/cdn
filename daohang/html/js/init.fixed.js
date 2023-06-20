var browser={
	versions:function(){
		var u = navigator.userAgent, app = navigator.appVersion;
		return {	//移动终端浏览器版本信息
			trident: u.indexOf('Trident') > -1, //IE内核
			presto: u.indexOf('Presto') > -1, //opera内核
			webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
			gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
			ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
			android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
			iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
			iPad: u.indexOf('iPad') > -1, //是否iPad
			webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
		};
	}(),
	language:(navigator.browserLanguage || navigator.language).toLowerCase()
}
$(document).ready(function(){
	if(!browser.versions.mobile){
		var _st = $.cookie("fixed");
		if(!_st)_st=0;
		var _code = '<div id="fixed" class="xiuxiu"><div id="dl"><div id="dd"><a href="https://www.taoisms.org.cn" target="_blank"><i class="iconfont icon-taoismsicon"></i><br>门户</a><a href="https://www.snsou.cn/" target="_blank"><i class="iconfont icon-snsoucn"></i><br>搜索</a><a href="https://www.zuori.net.cn/" target="_blank"><i class="iconfont icon-zuoritoutiao"></i><br>导航</a><a href="https://www.daoyue.org.cn/" target="_blank"><i class="iconfont icon-daoyueorgcn"></i><br>道乐</a><a href="https://www.chndao.com/" target="_blank"><i class="iconfont icon-yundaoshang"></i><br>道商</a><a href="https://www.yudao.org.cn/" target="_blank"><i class="iconfont icon-yuzhendaoyuan"></i><br>遇真</a><a href="https://www.zhtaoism.com/" target="_blank"><i class="iconfont icon-zhongwangdaoyan"></i><br>研究</a><a href="https://www.xiudaohu.cn/" target="_blank"><i class="iconfont icon-taijitubiao"></i><br>百科</a><a href="https://www.chntaoism.com/" target="_blank"><i class="iconfont icon-xinghanlianmeng"></i><br>同盟</a><a href="https://www.zhimucishan.com/" target="_blank"><i class="iconfont icon-wulintangyuanxing"></i><br>慈善</a><a href="https://www.han-zu.cn/" target="_blank"><i class="iconfont icon-yiyannanjing"></i><br>交互</a></div><div id="dt"><a href="javascript:void(0);" id="close" class="xuanzhun"><i class="iconfont icon-taijitubiao"></i><br></a></div></div></div>';
		if(_st==1){
			$(_code).hide().appendTo("body").fixed({x:-44,y:0}).fadeIn(500);
			$("#fixed #dt a.#close").width('68px');
		} else {
			$(_code).hide().appendTo("body").fixed({x:0,y:0}).fadeIn(500);
		}
		$("#fixed #dt").click(function(){
			var _left = $("#fixed").offset().left;
			if(_left>=0){
				$.cookie("fixed",1,{path:'/'});
				$("#fixed").animate({left:-44},300,'swing',function(){
					$("#fixed #dt a.#close").hide().width('68px').fadeIn(500);
				});
			} else {
				$.cookie("fixed",0,{path:'/'});
				$("#fixed #dt a.#close").width('44px');
				$("#fixed").animate({left:0},300,'swing',function(){
				});
			}
		});
	}
});
