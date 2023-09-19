function Navbar() {
  const navbar = document.createElement("nav");
  navbar.id = "navbar";

  // Options
  const navOptions = [
    { page: "home", alt: "home", iconName: "home.svg", text: "Home" },
    { page: "search", alt: "search", iconName: "search.svg", text: "Search" },
    { page: "ticket", alt: "tickets", iconName: "ticket.svg", text: "Tickets" },
    { page: "user", alt: "profile", iconName: "user.svg", text: "Profile" },
  ];

  navOptions.forEach((option) => {
    const aTag = document.createElement("a");
    aTag.className = "nav-option";
    aTag.setAttribute("onclick", `changePage(this,'${option.page.toLowerCase()}')`);

    const icon = document.createElement("img");
    icon.className = "nav-icon";
    icon.id = option.page
    icon.alt = option.alt;
    icon.src = `assets/icons/${option.iconName}`;

    const text = document.createElement("p");
    text.textContent = option.text;

    aTag.appendChild(icon);
    aTag.appendChild(text);

    navbar.appendChild(aTag);
  });

  return navbar;
}
export default Navbar;
// module.exports = Navbar
/* HTML
  <nav id="navbar">
    <a class="nav-option" onclick="changePage('home')">
      <img class="nav-icon" alt="home" src="assets/icons/home.svg">
      <p>Home</p>
    </a>
    <a class="nav-option" onclick="changePage('search')">
      <img class="nav-icon" alt="search" src="assets/icons/search.svg">
      <p>Search</p>
    </a>
    <a class="nav-option" onclick="changePage('ticket')">
      <img class="nav-icon" alt="tickets" src="assets/icons/ticket.svg">
      <p>Tickets</p>
    </a>
    <a class="nav-option" onclick="changePage('user')">
      <img class="nav-icon" alt="profile" src="assets/icons/user.svg">
      <p>Profile</p>
    </a>
  </nav>
*/