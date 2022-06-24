
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as anonymous module.
		define(['jquery'], factory);
	} else {
		// Browser globals.
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function raw(s) {
		return s;
	}

	function decoded(s) {
		return decodeURIComponent(s.replace(pluses, ' '));
	}

	function converted(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}
		try {
			return config.json ? JSON.parse(s) : s;
		} catch(er) {}
	}

	var config = $.cookie = function (key, value, options) {

		// write
		if (value !== undefined) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setDate(t.getDate() + days);
			}

			value = config.json ? JSON.stringify(value) : String(value);

			return (document.cookie = [
				config.raw ? key : encodeURIComponent(key),
				'=',
				config.raw ? value : encodeURIComponent(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// read
		var decode = config.raw ? raw : decoded;
		var cookies = document.cookie.split('; ');
		var result = key ? undefined : {};
		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = decode(parts.join('='));

			if (key && key === name) {
				result = converted(cookie);
				break;
			}

			if (!key) {
				result[name] = converted(cookie);
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) !== undefined) {
			// Must not alter options, thus extending a fresh object...
			$.cookie(key, '', $.extend({}, options, { expires: -1 }));
			return true;
		}
		return false;
	};

}));
document.writeln("<style type=\'text/css\'>");
document.writeln("@media screen and (max-width: 1600px){");
document.writeln("    #fixed {display:none!important;}");
document.writeln("}");
document.writeln("</style>");
if (window.console) {
var cons = console;
if (cons) {
cons.log("%c\n              ", "font-size:41px;background-size:300px 46px;background:url('https://www.abcdefghijklmnopqrstuvwxyzzyxwvutsrqponmlkjihgfedcba.cn/ad/logo.png') no-repeat 100% 100%");
cons.log('道教是中国唯一的土生土长的宗教，它是在汉朝末年创立的。');
cons.log('张道陵祖师创教后，多地多派为道教带来了和谐的自然规律。');
cons.log('在这里，请您敬请感受来自于大自然的道的气息与丰厚魅力。');
cons.log('而当你看到这段话的时候，你可知道我们一直期待等你加入！');
cons.log('加入南通伍林堂文化传播有限公司，请发送邮件至（job@ccwadj.cn）在邮件中注明%c来自:console', 'color:red;font-weight:bold;' );
    }
 }