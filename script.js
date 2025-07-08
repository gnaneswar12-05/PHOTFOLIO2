
const menuitens = document.getElementsByClassName('MENUITEMS')[0];
const Navbar = document.getElementsByClassName('navbar')[0];

menuitens.addEventListener('click', () => {
  Navbar.classList.toggle('show');

  if (Navbar.classList.contains('show')) {
    menuitens.innerHTML = '&times;'; // "X"
  } else {
    menuitens.innerHTML = '&#9776;'; // Hamburger icon
  }
});
document.addEventListener('click', (e) => {
      if (!Navbar.contains(e.target) && !menuitens.contains(e.target)) {
        console.log(e.target);
        Navbar.classList.remove('show');
       menuitens.innerHTML = '&#9776;';
      }
    });




