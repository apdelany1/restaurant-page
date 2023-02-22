import navBar from "./nav";

function contactMe() {
  navBar();
  const nav = document.getElementById("content");
  const img = document.createElement("img");
  img.src = "https://i.guim.co.uk/img/media/3aab8a0699616ac94346c05f667b40844e46322f/0_123_5616_3432/master/5616.jpg?width=700&quality=85&auto=format&fit=max&s=a476da702aff265ce6f586be1412b1e1";
  img.classList.add("pizza");
  nav.appendChild(img);

  const hero = document.createElement("h4");
  hero.innerText = "(215-465-4665)"
  hero.classList.add("bigguy")
  nav.appendChild(hero);

  const hero2 = document.createElement("h3");
  hero2.innerText = "Jimmy Baggs"
  hero2.classList.add("bigguy2")
  nav.appendChild(hero2);

  const hero3 = document.createElement("h3");
  hero3.innerText = "leave a message at the beep"
  hero3.classList.add("bigguy3")
  nav.appendChild(hero3);
}

export default contactMe;