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
	$(document)