// ==UserScript==
// @name           LeakForums Quote Enable
// @version        1.0.0
// @description    Allow users to always quote people 
// @downloadURL https://gitlab.com/notmike101/leakforums-quote-enable/raw/master/lf-quote-enable.user.js
// @updateURL      https://gitlab.com/notmike101/leakforums-quote-enable/raw/master/lf-quote-enable.meta.js
//
// @author         Mike Orozco / IRDeNial
// @namespace      leakforums/irdenial/customcss
//
// @include        *://leakforums.net/thread-*
// @include        *://www.leakforums.net/thread-*
// @include        *://*.leakforums.net/thread-*
//
// @grant          metadata
// ==/UserScript==

/*

(function () {
    if (document.querySelector('.pq') !== null) {
        return false;
    }

    var posts = document.querySelectorAll('table[id^="post_"]');

    for (var i = 0; i < posts.length; ++i) {
        var thispost = posts[i];
        var pid = thispost.id.split('post_')[1];
        var tid = document.location.pathname.replace('/', '').split('&')[0].replace('thread-', '');

        var newAElement = document.createElement('a');
        newAElement.setAttribute('href', 'newreply.php?tid=' + tid + '&pid=' + pid);
        newAElement.setAttribute('post', pid);
        newAElement.setAttribute('class', 'pq');
        newAElement.innerText = 'Quote';

        thispost.querySelectorAll('td[align=right]')[0].appendChild(newAElement);
    }
})();

*/

(function () { if (null !== document.querySelector(".pq")) return !1; for (var c = document.querySelectorAll('table[id^="post_"]'), b = 0; b < c.length; ++b) { var d = c[b], e = d.id.split("post_")[1], f = document.location.pathname.replace("/", "").split("&")[0].replace("thread-", ""), a = document.createElement("a"); a.setAttribute("href", "newreply.php?tid=" + f + "&pid=" + e); a.setAttribute("post", e); a.setAttribute("class", "pq"); a.innerText = "Quote"; d.querySelectorAll("td[align=right]")[0].appendChild(a);}})();