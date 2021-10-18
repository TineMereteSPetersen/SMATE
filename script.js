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
