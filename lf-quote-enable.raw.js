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