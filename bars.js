/*Menu burger e suas funcoes*/
const menu_btn = document.querySelector("#check");
const menu_burger = document.querySelector(".burger");
const menu = document.querySelector(".menu-nav");
const body = document.body;
let menuOpen = false;
menu_btn.addEventListener('click',() => {
    if(!menuOpen){
        //o menu esta fechado, precisamos de abrir
        menu_burger.classList.add('open');
        menu.style.display = "block";
        body.style.backgroundColor = "rgba(0,0,0,0.1)";
        menuOpen = true;
    }else{
        //o menu esta aberto, precisamos de fechar
        menu_burger.classList.remove('open');
        menu.style.display = "none";
        body.style.backgroundColor = "white";
        menuOpen = false;
    }
});

/* fim do Menu burger e suas funcoes*/


/*Escrita automatica do texto */
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Densevolvedor web", "Densevolvedor de aplicações", "Design web e de aplicações"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});
/*Fim da escrita automatica do texto */