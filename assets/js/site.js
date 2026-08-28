// Small site behaviours. Loaded at the end of <body>.

// 1. Light/dark toggle. The initial theme is set in <head> before paint;
//    this only handles the click and remembers the choice.
(function () {
  var btn = document.querySelector('.theme-toggle');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

// 2. Open outbound links (other sites) and file downloads in a new tab.
//    Internal page links (nav, /research/, ...) are left alone.
(function () {
  var FILE_RE = /\.(pdf|zip|csv|tsv|xlsx?|docx?|pptx?|txt)$/i;
  var links = document.querySelectorAll('a[href]');
  for (var i = 0; i < links.length; i++) {
    var a = links[i];
    var url;
    try { url = new URL(a.getAttribute('href'), window.location.href); } catch (e) { continue; }
    if (url.protocol !== 'http:' && url.protocol !== 'https:') continue; // skip mailto:, #, etc.
    var isExternal = url.host !== window.location.host;
    var isFile = FILE_RE.test(url.pathname);
    if (isExternal || isFile) {
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
    }
  }
})();
