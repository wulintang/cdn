const browser = {
  versions: () => {
    const u = navigator.userAgent;
    return {
      trident: u.indexOf('Trident') > -1,
      presto: u.indexOf('Presto') > -1,
      webKit: u.indexOf('AppleWebKit') > -1,
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
      mobile: !!u.match(/AppleWebKit.*Mobile.*/),
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
      iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
      iPad: u.indexOf('iPad') > -1,
      webApp: u.indexOf('Safari') == -1
    };
  },
  language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

$(document).ready(() => {
  if (!browser.versions.mobile) {
    const st = $.cookie('fixed') || 0;
    const code = `
      <div id="fixed" class="xiuxiu">
        <div id="dl">
          <div id="dd">
            <a href="https://www.taoisms.org.cn" target="_blank"><i class="iconfont icon-taoismsicon"></i><br>门户</a>
            <a href="https://www.snsou.cn/" target="_blank"><i class="iconfont icon-snsoucn"></i><br>搜索</a>
            <a href="https://www.zuori.net.cn/" target="_blank"><i class="iconfont icon-zuoritoutiao"></i><br>导航</a>
            <a href="https://www.daoyue.org.cn/" target="_blank"><i class="iconfont icon-daoyueorgcn"></i><br>道乐</a>
            <a href="https://www.chndao.com/" target="_blank"><i class="iconfont icon-yundaoshang"></i><br>道商</a>
            <a href="https://www.yudao.org.cn/" target="_blank"><i class="iconfont icon-yuzhendaoyuan"></i><br>遇真</a>
            <a href="https://www.zhtaoism.com/" target="_blank"><i class="iconfont icon-zhongwangdaoyan"></i><br>研究</a>
            <a href="https://www.xiudaohu.cn/" target="_blank"><i class="iconfont icon-taijitubiao"></i><br>百科</a>
            <a href="https://www.chntaoism.com/" target="_blank"><i class="iconfont icon-xinghanlianmeng"></i><br>同盟</a>
            <a href="https://www.zhimucishan.com/" target="_blank"><i class="iconfont icon-wulintangyuanxing"></i><br>慈善</a>
            <a href="https://www.han-zu.cn/" target="_blank"><i class="iconfont icon-yiyannanjing"></i><br>交互</a>
          </div>
          <div id="dt">
            <a href="javascript:void(0);" id="close" class="xuanzhun"><i class="iconfont icon-taijitubiao"></i><br></a>
          </div>
        </div>
      </div>
    `;
    const $fixed = $(code).hide().appendTo('body').fixed({ x: _st == 1 ? -44 : 0, y: 0 }).fadeIn(500);
    if (_st == 1) {
      $('#fixed #dt a.#close').width('68px');
    }
    $('#fixed #dt').click(() => {
      const _left = $fixed.offset().left;
      if (_left >= 0) {
        $.cookie('fixed', 1, { path: '/' });
        $fixed.animate({ left: -44 }, 300, 'swing', () => {
          $('#fixed #dt a.#close').hide().width('68px').fadeIn(500);
        });
      } else {
        $.cookie('fixed', 0, { path: '/' });
        $('#fixed #dt a.#close').width('44px');
        $fixed.animate({ left: 0 }, 300, 'swing');
      }
    });
  }
});
