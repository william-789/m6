import Navbar from "./src/navbar/navbar.js";
import SinglePageManager from "./src/pages/singlePageManager.js";
const manager = new SinglePageManager();

const navbar = Navbar();

function singlePageManager() { // EDIT BACK TO HOMEPAGE
  const main = document.getElementById("main");
  // create home
  const home = manager["home"]();
  // load home
  main.appendChild(home)
  // add navbar once
  main.appendChild(navbar);
  // set home active
  const homeIcon = document.getElementById("home");
  homeIcon.src = 'assets/icons/nav_home_active.svg'

  window.changePage = changePage;
  setTimeout(hideSplashScreen,1200)
}
singlePageManager();

function changePage(newActiveOption, page) {
  changeActiveNav(newActiveOption)

  const main = document.getElementById("main");
  const loadedNav = document.getElementById("navbar")
  // create new page
  const newPage = manager[page]();
  // get old page
  const [oldPage] = document.getElementsByClassName("page");
  main.removeChild(oldPage);
  // add new page
  main.appendChild(newPage)
  // move navbar to the end
  main.appendChild(loadedNav);
}

function hideSplashScreen() {
  const screen = document.getElementById("splash-screen");
  screen.classList.add('hidden')
  setTimeout(()=>{
    screen.style.display = "none";
  },1000)
}

function changeActiveNav(newActiveOption) {
  const activeEl = newActiveOption.querySelector('img.nav-icon');
  const activeId = activeEl.getAttribute('id');

  const homeIcon = document.getElementById("home");
  const searchIcon = document.getElementById("search");
  const ticketsIcon = document.getElementById("ticket");
  const profileIcon = document.getElementById("user");

  // set standard image
  homeIcon.src = 'assets/icons/home.svg';
  searchIcon.src = 'assets/icons/search.svg';
  ticketsIcon.src = 'assets/icons/ticket.svg';
  profileIcon.src = 'assets/icons/user.svg'

  // set active icon
  activeEl.src = `assets/icons/nav_${activeId}_active.svg`;
}