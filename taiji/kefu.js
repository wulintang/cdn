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
$(document).ready(function() {
    /* ----- 侧边悬浮 ---- */
    $(document).on("mouseenter", ".suspension .a", function() {
        var _this = $(this);
        var s = $(".suspension");
        var isService = _this.hasClass("a-service");
        var isServicePhone = _this.hasClass("a-service-phone");
        var isQrcode = _this.hasClass("a-qrcode");
        if (isService) {
            s.find(".d-service").show().siblings(".d").hide();
        }
        if (isServicePhone) {
            s.find(".d-service-phone").show().siblings(".d").hide();
        }
        if (isQrcode) {
            s.find(".d-qrcode").show().siblings(".d").hide();
        }
    });
    $(document).on("mouseleave", ".suspension, .suspension .a-top", function() {
        $(".suspension").find(".d").hide();
    });
    $(document).on("mouseenter", ".suspension .a-top", function() {
        $(".suspension").find(".d").hide();
    });
    $(document).on("click", ".suspension .a-top", function() {
        $("html,body").animate({
            scrollTop: 0
        });
    });
    $(window).scroll(function() {
        var st = $(document).scrollTop();
        var $top = $(".suspension .a-top");
        if (st > 400) {
            $top.css({
                display: 'block'
            });
        } else {
            if ($top.is(":visible")) {
                $top.hide();
            }
        }
    });

});