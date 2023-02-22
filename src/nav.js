import runHome from "./home";
import menuBar from "./menuBar";
import contactMe from "./contactMe";

function navBar() {
  const nav = document.getElementById("content");
  nav.innerHTML = `<div class="navbar">
    <div class="container">
      <h1>eddies</h1>
      <nav>
        <ul>
          <li><a href="#" id="home">Home</a></li>
          <li><a href="#" id="menu">Menu</a></li>
          <li><a href="#" id="contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </div>`;

  const home = document.getElementById("home");
  home.addEventListener("click", (e) => {
    runHome();
  });

  const menu = document.getElementById("menu");
  menu.addEventListener("click", (e) => {
    console.log("menu");
    menuBar();
  });

  const contact = document.getElementById("contact");
  contact.addEventListener("click", (e) => {
    console.log("contact");
    contactMe();
  });
}

export default navBar;
