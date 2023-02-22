import navBar from "./nav";

function runHome() {
  navBar();
  const nav = document.getElementById("content");
  const img = document.createElement("img");
  img.src = "https://www.pngmart.com/files/1/Pepperoni-Pizza-PNG-Image.png";
  img.classList.add("pizza");
  nav.appendChild(img);

  const hero = document.createElement("h4");
  hero.innerText = "Edwards Pizza"
  hero.classList.add("bigguy")
  nav.appendChild(hero);

  const hero2 = document.createElement("h3");
  hero2.innerText = "best pizza in towns"
  hero2.classList.add("bigguy2")
  nav.appendChild(hero2);

  const hero3 = document.createElement("h3");
  hero3.innerText = "forreal I am serious"
  hero3.classList.add("bigguy3")
  nav.appendChild(hero3);
}

export default runHome;
