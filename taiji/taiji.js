// 这个js建议放在body第一行
document.body.innerHTML += ('<div id="loader-wrapper"><div id="loader"></div><div class="divClass"><div class="taijileft"></div><div class="taijiright"></div></div><div id="load_title"><p><img style="width: 200px!important;" src="https://www.abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba.cn/taiji/login_logo.png"/></p><p>正在加载中，请稍后……</p></div></div>');
window.onload = function() {
    if (document.body.className == '' || document.body.className.search("loaded") == -1)
        document.body.className += ' loaded'
}
setTimeout(function() {
    if (document.body.className == '' || document.body.className.search("loaded") == -1)
        document.body.className += ' loaded';
}, 600); // 超时时间
