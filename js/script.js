let hamburger = document.querySelector(".humburger");
let headerNav = document.querySelector(".header__nav");
let sidebar = document.querySelector(".sidebar");
let navLinks = document.querySelectorAll(".header__nav-link");


navLinks.forEach(link => {
   link.addEventListener('click', ()=> {
      hamburger.classList.toggle('humburger_pressed');
      headerNav.classList.toggle('header__nav_opened');
      sidebar.classList.toggle('sidebar_opened');   
   });
});


hamburger.addEventListener('click', function(){
   hamburger.classList.toggle('humburger_pressed');
   headerNav.classList.toggle('header__nav_opened');
   sidebar.classList.toggle('sidebar_opened');
});

