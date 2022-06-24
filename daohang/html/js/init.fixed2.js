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
jQuery(document).ready(function(){
	if(!browser.versions.mobile){
		var _st = jQuery.cookie("fixed");
		if(!_st)_st=0;
		var _code = '<div id="fixed"><div id="dl"><div id="dd"><a href="https://www.wulintang.cn/"target="_blank"><i class="iconfont icon-wulintanganquanyingjixiangyingzhongxin"></i><br>官网</a><a href="https://www.ccwadj.cn/"target="_blank"><i class="iconfont icon-taoismsicon"></i><br>主机</a><a href="https://www.zuori.net.cn/"target="_blank"><i class="iconfont icon-zuoritoutiao"></i><br>导航</a><a href="https://www.biaoza.club/"target="_blank"><i class="iconfont icon-daimazhongxin"></i><br>开源</a><a href="https://www.wulintang.com.cn/"target="_blank"><i class="iconfont icon-falvtianpingcheng"></i><br>法务</a><a href="https://www.wulintang.xin/"target="_blank"><i class="iconfont icon-shangbiaologo"></i><br>信用</a><a href="https://www.wulintang.cn/youhui"target="_blank"><i class="iconfont icon-taobaolianmeng"></i><br>优惠</a><a href="https://www.chntaoism.com/"target="_blank"><i class="iconfont icon-xinghanlianmeng"></i><br>同盟</a><a href="https://www.yangtuo.live/"target="_blank"><i class="iconfont icon-yangtuohuyu"></i><br>互娱</a><a href="https://www.shanpao.club/"target="_blank"><i class="iconfont icon-shanpaowenxue"></i><br>文学</a><a href="https://www.zhimucishan.com/"target="_blank"><i class="iconfont icon-wulintangyuanxing"></i><br>慈善</a><a href="https://www.han-zu.cn/"target="_blank"><i class="iconfont icon-hantaoisms"></i><br>社区</a></div><div id="dt"><a href="javascript:void(0);"id="close" class="xuanzhun"><i class="iconfont icon-taijitubiao"></i><br></a></div></div></div>';
		if(_st==1){
			jQuery(_code).hide().appendTo("body").fixed({x:-44,y:0}).fadeIn(500);
			jQuery("#fixed #dt a.#close").width('68px');
		} else {
			jQuery(_code).hide().appendTo("body").fixed({x:0,y:0}).fadeIn(500);
		}
		jQuery("#fixed #dt").click(function(){
			var _left = $("#fixed").offset().left;
			if(_left>=0){
				jQuery.cookie("fixed",1,{path:'/'});
				jQuery("#fixed").animate({left:-44},300,'swing',function(){
					$("#fixed #dt a.#close").hide().width('68px').fadeIn(500);
				});
			} else {
				jQuery.cookie("fixed",0,{path:'/'});
				jQuery("#fixed #dt a.#close").width('44px');
				jQuery("#fixed").animate({left:0},300,'swing',function(){
				});
			}
		});
	}
});