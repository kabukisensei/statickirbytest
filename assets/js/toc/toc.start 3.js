tocbot.init({
    // Where to render the table of contents.
    tocSelector: '.toc',
    // Where to grab the headings to build the table of contents.
    contentSelector: '.content',
    // Which headings to grab inside of the contentSelector element.
    headingSelector: 'h1, h2, h3, h4, h5',
    headingsOffset: -300,
    orderedList: false,
    positionFixedSelector: '.toc',
    positionFixedClass: 'is-position-fixed',
    fixedSidebarOffset: '300',
  });