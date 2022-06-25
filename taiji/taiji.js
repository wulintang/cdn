// 这个js建议放在body第一行
document.body.innerHTML += ('<div id="loader-wrapper"><div id="loader"></div><div class="divClass"><div class="taijileft"></div><div class="taijiright"></div></div><div id="load_title"><p><img style="width: 200px!important;" src="https://www.abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba.cn/taiji/login_logo.png"/></p><p>正在加载中，请稍后……</p></div></div>');
window.onload = function () {
    if (document.body.className == '' || document.body.className.search("loaded") == -1)
        document.body.className += ' loaded'
}
setTimeout(function () {
    if (document.body.className == '' || document.body.className.search("loaded") == -1)
        document.body.className += ' loaded';
}, 600);// 超时时间
document.writeln("<link rel=\'stylesheet\' href=\'https://www.abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba.cn/taiji/css/top.css\'>");
document.writeln("<div class=\'suspension\'>");
document.writeln("	<div class=\'suspension-box\'>");
document.writeln("		<a href=\'http://wpa.qq.com/msgrd?v=3&uin=466660026&site=qq&menu=yes\' class=\'a a-service \' target=\'_blank\'><i class=\'i\'></i></a>");
document.writeln("		<a href=\'javascript:;\' class=\'a a-service-phone \'><i class=\'i\'></i></a>");
document.writeln("		<a href=\'javascript:;\' class=\'a a-qrcode\'><i class=\'i\'></i></a>");
document.writeln("		<a href=\'https://www.chndao.com/\' class=\'a a-cart\' target=\'_blank\'><i class=\'i\'></i></a>");
document.writeln("		<a href=\'javascript:;\' class=\'a a-top\'><i class=\'i\'></i></a>");
document.writeln("		<div class=\'d d-service\'>");
document.writeln("			<i class=\'arrow\'></i>");
document.writeln("			<div class=\'inner-box\'>");
document.writeln("				<div class=\'d-service-item clearfix\'>");
document.writeln("					<a href=\'http://wpa.qq.com/msgrd?v=3&uin=466660026&site=qq&menu=yes\' class=\'clearfix\'><span class=\'circle\'><i class=\'i-qq\'></i></span><h3>咨询在线客服</h3></a>");
document.writeln("				</div>");
document.writeln("			</div>");
document.writeln("		</div>");
document.writeln("		<div class=\'d d-service-phone\'>");
document.writeln("			<i class=\'arrow\'></i>");
document.writeln("			<div class=\'inner-box\'>");
document.writeln("				<div class=\'d-service-item clearfix\'>");
document.writeln("					<span class=\'circle\'><i class=\'i-tel\'></i></span>");
document.writeln("					<div class=\'text\'>");
document.writeln("						<p>服务热线</p>");
document.writeln("						<p class=\'red number\'>0513-86212895</p>");
document.writeln("					</div>");
document.writeln("				</div>");
document.writeln("				<div class=\'d-service-intro clearfix\'>");
document.writeln("					<p><i></i>互联网建站</p>");
document.writeln("					<p><i></i>投诉与举报</p>");
document.writeln("					<p><i></i>合作与入驻</p>");
document.writeln("					<p><i></i>云之道数据</p>");
document.writeln("				</div>");
document.writeln("			</div>");
document.writeln("		</div>");
document.writeln("		<div class=\'d d-qrcode\'>");
document.writeln("			<i class=\'arrow\'></i>");
document.writeln("			<div class=\'inner-box\'>");
document.writeln("				<div class=\'qrcode-img\'><img src=\'https://www.abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba.cn/taiji/img/side_ewm.jpg\' alt=\'\'></div>");
document.writeln("				<p>微信服务号</p>");
document.writeln("			</div>");
document.writeln("		</div>");
document.writeln("	</div>");
document.writeln("</div>");
$(document).ready(function(){
	/* ----- 侧边悬浮 ---- */
	$(document).on("mouseenter", ".suspension .a", function(){
		var _this = $(this);
		var s = $(".suspension");
		var isService = _this.hasClass("a-service");
		var isServicePhone = _this.hasClass("a-service-phone");
		var isQrcode = _this.hasClass("a-qrcode");
		if(isService){ s.find(".d-service").show().siblings(".d").hide();}
		if(isServicePhone){ s.find(".d-service-phone").show().siblings(".d").hide();}
		if(isQrcode){ s.find(".d-qrcode").show().siblings(".d").hide();}
	});
	$(document).on("mouseleave", ".suspension, .suspension .a-top", function(){
		$(".suspension").find(".d").hide();
	});
	$(document).on("mouseenter", ".suspension .a-top", function(){
		$(".suspension").find(".d").hide(); 
	});
	$(document).on("click", ".suspension .a-top", function(){
		$("html,body").animate({scrollTop: 0});
	});
	$(window).scroll(function(){
		var st = $(document).scrollTop();
		var $top = $(".suspension .a-top");
		if(st > 400){
			$top.css({display: 'block'});
		}else{
			if ($top.is(":visible")) {
				$top.hide();
			}
		}
	});
	
});	

var a_idx = 0;
jQuery(document).ready(function($) {
    //点击body时触发事件
    $("body").click(function(e) {
    //需要显示的词语
    var a = new Array("富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善");
    //设置词语给span标签
    var $i = $("<span/>").text(a[a_idx]);
    //下标等于原来下标+1  余 词语总数
    a_idx = (a_idx + 1)% a.length;
    //获取鼠标指针的位置，分别相对于文档的左和右边缘。
    //获取x和y的指针坐标
    var x = e.pageX, y = e.pageY;
    //在鼠标的指针的位置给$i定义的span标签添加css样式
    $i.css({"z-index" : 999999999999999999999999999999999999999999999999999999999999999999999,
        "top" : y - 20,
        "left" : x,
        "position" : "absolute",
        "font-size": "16px!important",
        "font-weight" : "bold",
        "color" : "#D14836"
        });
    //在body添加这个标签
    $("body").append($i);
        //animate() 方法执行 CSS 属性集的自定义动画。
        //该方法通过CSS样式将元素从一个状态改变为另一个状态。CSS属性值是逐渐改变的，这样就可以创建动画效果。
        //详情请看http://www.w3school.com.cn/jquery/effect_animate.asp
        $i.animate({
        //将原来的位置向上移动180
            "top" : y - 180,
                "opacity" : 0
         //1500动画的速度
        }, 1500, function() {
        //时间到了自动删除
            $i.remove();
        });
    });
})
;
document.writeln("<!-- 灯笼 1 -->");
document.writeln("<div class=\'deng-box\'>");
document.writeln("<div class=\'deng\'>");
document.writeln("<div class=\'xian\'></div>")
document.writeln("<div class=\'deng-a\'>");
document.writeln("<div class=\'deng-b\'><div class=\'deng-t\'>节</div></div>");
document.writeln("</div>");
document.writeln("<div class=\'shui shui-a\'></div>");
document.writeln("<div class=\'shui shui-b\'></div>");
document.writeln("<div class=\'shui shui-c\'></div>");
document.writeln("</div>");
document.writeln("</div>");
document.writeln("<!-- 灯笼 2 -->");
document.writeln("<div class=\'deng-box1\'>");
document.writeln("<div class=\'deng\'>");
document.writeln("<div class=\'xian\'></div>")
document.writeln("<div class=\'deng-a\'>");
document.writeln("<div class=\'deng-b\'><div class=\'deng-t\'>春</div></div>");
document.writeln("</div>");
document.writeln("<div class=\'shui shui-a\'></div>");
document.writeln("<div class=\'shui shui-b\'></div>");
document.writeln("<div class=\'shui shui-c\'></div>");
document.writeln("</div>");
document.writeln("</div>");
