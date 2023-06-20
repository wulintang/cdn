const qqClientTemplate = `
<div class="qq-client">
    <a href="javascript:void(0);" class="qq-client-open"><p>点</p><p>击</p><p>展</p><p>开</p></a>
    <div class="qq-client-content">
        <h1>功能中心<span class="qq-client-close">关闭</span></h1>
        <div class="qq-client-list">
            <div class="client-list"><a href="https://www.wulintang.cn/bbs/fid/2/" target="_blank">意见建议</a> </div>
            <div class="client-list"><a href="https://www.wulintang.cn/bbs/fid/1/" target="_blank">问题反馈</a> </div>
            <div class="client-list"><a href="mailto:jubao@ccwadj.cn">投诉举报</a> </div>
            <div class="client-list"><a href="http://wpa.qq.com/msgrd?v=3&uin=466660026&site=qq&menu=yes" target="_blank">企鹅在线</a> </div>
            <div class="client-list"><a href="tel:1234567890">联系电话</a> </div>
            <div class="client-list"><a href="#" id="back-to-top" title="返回顶部">返回顶部</a>  </div>
        </div>
    </div>
</div>
`;

$('body').append(qqClientTemplate);

$(function(){
    // 将CSS插入到页面中
    const cssString = `
    .qq-client{position:fixed;right:0px;top:50%;margin-top:-80px;}
    .qq-client a{width:50px;height:160px;text-align:center;border:#ebebeb solid 1px;padding:0px 0px;line-height:40px;display:block;background-color: #fff;}
    .qq-client-content{position:fixed;right:-250px;top:38%;border:#ebebeb solid 1px;width:10%;display:none;background:#ffffff;}
    .qq-client-content h1{font-size:14px;width:90%;margin:0px auto;text-align:center;height:50px;line-height:50px;border-bottom:#ebebeb solid 1px;position:relative;}
    .qq-client-content h1 span{font-size:12px;font-weight:normal;position:absolute;left:-30px;top:-20px;cursor:pointer;background:#ffffff;border:#ebebeb solid 1px;width:40px;height:40px;line-height:40px;border-radius:20px;text-align:center;}
    .qq-client-list{background:#ffffff;}
    .client-list{overflow: hidden;line-height: 300%;width: 100%;margin: 0px auto;border-bottom: dashed 1px #ebebeb;text-align: center;}
    .client-list a{display:block;}
    .client-list a:hover{color:red;}
    .client-list span{float:left;}
    .client-list label{float:left;width:60px;text-align:right;padding-right:10px;}
    `;
    $('<style>').text(cssString).appendTo('head');

    H_qqServer = {};
    H_qqServer.clickOpenServer = function () {
        $('.qq-client-open').click(function(){
            $('.qq-client').animate({
                right: '-50'
            }, 400);
            $('.qq-client-content').animate({
                right: '0',
                opacity: 'show'
            }, 800);
        });
        $('.qq-client-close').click(function(){
            $('.qq-client').animate({
                right: '0',
                opacity: 'show'
            }, 400);
            $('.qq-client-content').animate({
                right: '-250',
                opacity: 'show'
            }, 800);
        });
    };
    H_qqServer.run = function () {
        this.clickOpenServer();
    };
    H_qqServer.run();

    // 返回顶部按钮的显示和隐藏
    $(window).scroll(() => {
        if ($(this).scrollTop() > 800) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    // 平滑滚动到顶部
    $('#back-to-top').click(() => {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});
