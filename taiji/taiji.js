document.body.innerHTML+=('<div id="loader-wrapper"><div id="loader"></div><div class="divClass"><div class="taijileft"></div><div class="taijiright"></div></div><div id="load_title"><p><img style="width: 200px!important;" src="https://www.abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba.cn/taiji/login_logo.png"/></p><p>正在加载中，请稍后……</p></div></div>');window.onload=function(){if(document.body.className==''||document.body.className.search("loaded")==-1)document.body.className+=' loaded'}setTimeout(function(){if(document.body.className==''||document.body.className.search("loaded")==-1)document.body.className+=' loaded'},600);var a_idx=0;jQuery(document).ready(function($){$("body").click(function(e){var a=new Array("富强","民主","文明","和谐","自由","平等","公正","法治","爱国","敬业","诚信","友善");var $i=$("<span/>").text(a[a_idx]);a_idx=(a_idx+1)%a.length;var x=e.pageX,y=e.pageY;$i.css({"z-index":999999999999999999999999999999999999999999999999999999999999999999999,"top":y-20,"left":x,"position":"absolute","font-size":"16px!important","font-weight":"bold","color":"#D14836"});$("body").append($i);$i.animate({"top":y-180,"opacity":0},1500,function(){$i.remove()})})});