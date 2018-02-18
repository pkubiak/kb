//= require markdown-it/dist/markdown-it.js
// require highlight.js/lib/highlight.js
// require highlight.js/lib/languages/javascript.js
//= require markdown-it-footnote/dist/markdown-it-footnote.js
//= require markdown-it-container/dist/markdown-it-container.js
//= require markdown-it-emoji/dist/markdown-it-emoji.js
//= require markdown-it-sup/dist/markdown-it-sup.js
//= require markdown-it-sub/dist/markdown-it-sub.js
//= require markdown-it-deflist/dist/markdown-it-deflist.js
//= require markdown-it-abbr/dist/markdown-it-abbr.js
//= require markdown-it-ins/dist/markdown-it-ins.js
//= require markdown-it-mark/dist/markdown-it-mark.js

var md = window.markdownit({
  html: true,
  linkify: true,
  typographer: true,
  langPrefix:   'hljs ',
  highlight: function (str, lang) {
    console.log(str, lang);
    if (lang && window.hljs.getLanguage(lang)) {
      try {
        return window.hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // use external default escaping
  }
}).use(window.markdownitFootnote)
  .use(window.markdownitContainer)
  .use(window.markdownitSub)
  .use(window.markdownitSup)
  .use(window.markdownitDeflist)
  .use(window.markdownitAbbr)
  .use(window.markdownitIns)
  .use(window.markdownitMark)
  // .use(window.markdownitEmoji);

document.addEventListener("DOMContentLoaded", function(){
  console.log('Hello');

  let markdowns = document.querySelectorAll('.markdown');
  for (let el of markdowns) {
    // console.log(el);
    let text = el.innerHTML;
    // console.log(text);
    let html = md.render(text);
    // console.log(html);
    el.innerHTML = html;
  }
});

function random_logo() {
  let logos = ['graduation-cap', 'coffee', 'bug', 'chess-rook', 'child', 'gift', 'paw', 'rocket', 'tree', 'umbrella', 'trophy', 'user-secret',
    'bicycle', 'code', 'cube', 'flask', 'heart', 'lightbulb', 'magic', 'recycle', 'snowflake', 'university', ];
  let logo = logos[Math.floor(Math.random() * logos.length)];
  console.log('logo: ', logo);
  document.getElementById('logo').className = 'fas fa-fw fa-' + logo;
}
