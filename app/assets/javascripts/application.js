//= require markdown-it/dist/markdown-it.js
//= require highlight.js/lib/index.js
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
  typographer: true
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
  for(let el of markdowns) {
    console.log(el);
    let text = el.innerHTML;
    console.log(text);
    let html = md.render(text);
    console.log(html);
    el.innerHTML = html;
  }
  // $('.markdown').each(function(el) {
  //   let text = $(el).text();
  //   console.log('markdown: ', text);
  //   $(el).html(md.render(text));
  //
  // })
});
