document.querySelectorAll('.navbar-link').forEach(function(navbarLink){
    navbarLink.addEventListener('click', function(){
      navbarLink.nextElementSibling.classList.toggle('is-hidden-touch');
    })
  });