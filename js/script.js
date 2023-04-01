const aTags = document.querySelectorAll(".port-link"); // select all a tags
const imgCards = document.querySelectorAll(".img-cards"); // select all img-cards divs

aTags.forEach(a => {
  a.addEventListener("click", function() {
    const idToShow = this.textContent.trim();  // get the text content of the clicked a tag
    imgCards.forEach(card => {
      if (card.id === idToShow) {
        card.style.display = "grid"; // show the img-card with the matching id
      } else {
        card.style.display = "none"; // hide all other img-cards
      }
    });
  });
});


const links = document.querySelectorAll('.links .port-link');

links.forEach(link => {
  link.addEventListener('click', function() {
    links.forEach(link => {
      link.classList.remove('current');
    });
    this.classList.add('current');
  });
});



const button = document.getElementById("dropdown-btn");
const div = document.getElementById("dropdown-menu");

button.addEventListener("click", function() {
  if (div.style.display === "flex") {
    div.style.display = "none";
  } else {
    div.style.display = "flex";
  }
});


let number = document.getElementById('number');
let counter = 0;
setInterval(() => {
    if (counter == 30) {
        clearInterval();
    } else {
        counter += 1;
        number.innerHTML = counter + "";
    }

}, 150)
let number1 = document.getElementById('number1');
let counter1 = 0;
setInterval(() => {
    if (counter1 == 200) {
        clearInterval();
    } else {
        counter1 += 1;
        number1.innerHTML = counter1 + "+";
    }

}, 21)
let number2 = document.getElementById('number2');
let counter2 = 0;
setInterval(() => {
    if (counter2 == 600) {
        clearInterval();
    } else {
        counter2 += 1;
        number2.innerHTML = counter2 + "+";
    }

}, 5)
let number3 = document.getElementById('number3');
let counter3 = 0;
setInterval(() => {
    if (counter3 == 19) {
        clearInterval();
    } else {
        counter3 += 1;
        number3.innerHTML = counter3 + "";
    }

}, 218)
// ==================skills progres bar================================
let num = document.getElementById('num');
let cout = 0;
setInterval(() => {
    if (cout == 84) {
        clearInterval();
    } else {
        cout += 1;
        num.innerHTML = cout + "%";
    }

}, 30)
let num1 = document.getElementById('num1');
let cout1 = 0;
setInterval(() => {
    if (cout1 == 50) {
        clearInterval();
    } else {
        cout1 += 1;
        num1.innerHTML = cout1 + "%";
    }

}, 45)
let num2 = document.getElementById('num2');
let cout2 = 0;
setInterval(() => {
    if (cout2 == 75) {
        clearInterval();
    } else {
        cout2 += 1;
        num2.innerHTML = cout2 + "%";
    }

}, 33)
let num3 = document.getElementById('num3');
let cout3 = 0;
setInterval(() => {
    if (cout3 == 96) {
        clearInterval();
    } else {
        cout3 += 1;
        num3.innerHTML = cout3 + "%";
    }

}, 27)