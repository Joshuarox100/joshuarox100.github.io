var $content = $('.menu-content');

function showContent(type) {
  $('div', $content).hide();
  $('div[data-menu-content='+type+']').show();
}

$('.menu').on('click', '.menu-btn', function(e) {
  showContent(e.currentTarget.hash.slice(1));
  e.preventDefault();
}); 

// show 'home' content only on page load (if you want)
showContent('home');