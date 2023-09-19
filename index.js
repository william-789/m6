import Navbar from "./src/navbar/navbar.js";
import SinglePageManager from "./src/pages/singlePageManager.js";
const manager = new SinglePageManager();

const navbar = Navbar();

function singlePageManager() { // EDIT BACK TO HOMEPAGE
  const main = document.getElementById("main");
  // create home
  const home = manager["user"]();
  // load home
  main.appendChild(home)
  // add navbar once
  main.appendChild(navbar);
}
singlePageManager();

function changePage(page) {
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