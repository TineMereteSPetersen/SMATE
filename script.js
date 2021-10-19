/* Some info: Const = Constant, you can store in this info that doesn't change. Such as class names e.t.c.
Var = Variable, you can store here info that does change. Such as numbers */

/* BURGER MENU ANIMATION */

/* Storing the Class Name in a variable named "Burger" */
const burger = document.querySelector('.burgermenu__container');

/* Adds an event listener to the burger constant. When someone clicks on this class, it should process the function "burgerFunction" */
burger.addEventListener("click", burgerFunction);

/* When burgerFunction is processed, it toggles between adding and removing the class "change"*/
function burgerFunction() {
    burger.classList.toggle('change');
}


/* BURGER MENU CLICK */

const menu = document.querySelector('.menu__main');

burger.addEventListener("click", dropDown);


function dropDown() {
    menu.classList.remove('menu__main--hidden');
    menu.classList.toggle('menu__main--show');
}


/* SLIDEBAR */
const slides = document.querySelectorAll('.slide');
        const next = document.querySelector('#next');
        const prev = document.querySelector('#prev');
        const auto = false; // Auto scroll
        const intervalTime = 5000;
        let slideInterval;
        
        const nextSlide = () => {
          // Get current class
          const current = document.querySelector('.current');
          // Remove current class
          current.classList.remove('current');
          // Check for next slide
          if (current.nextElementSibling) {
            // Add current to next sibling
            current.nextElementSibling.classList.add('current');
          } else {
            // Add current to start
            slides[0].classList.add('current');
          }
          setTimeout(() => current.classList.remove('current'));
        };
        
        const prevSlide = () => {
          // Get current class
          const current = document.querySelector('.current');
          // Remove current class
          current.classList.remove('current');
          // Check for prev slide
          if (current.previousElementSibling) {
            // Add current to prev sibling
            current.previousElementSibling.classList.add('current');
          } else {
            // Add current to last
            slides[slides.length - 1].classList.add('current');
          }
          setTimeout(() => current.classList.remove('current'));
        };
        
        // Button events
        next.addEventListener('click', e => {
          nextSlide();
          if (auto) {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
          }
        });
        
        prev.addEventListener('click', e => {
          prevSlide();
          if (auto) {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
          }
        });
        
        // Auto slide
        if (auto) {
          // Run next slide at interval time
          slideInterval = setInterval(nextSlide, intervalTime);
        }