import navBar from "./nav";

function menuBar (){
    navBar();
    const nav = document.getElementById("content");
    const img = document.createElement("img");
    img.src = "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
    img.classList.add("pizza");
    nav.appendChild(img);
  
    const hero = document.createElement("h4");
    hero.innerText = "Large Plain Pie (thats it)"
    hero.classList.add("bigguy")
    nav.appendChild(hero);
  
    const hero2 = document.createElement("h3");
    hero2.innerText = "$16.99"
    hero2.classList.add("bigguy2")
    nav.appendChild(hero2);

    const hero3 = document.createElement("h3");
    hero3.innerText = "do it,do it"
    hero3.classList.add("bigguy3")
    nav.appendChild(hero3);
}

export default menuBar;