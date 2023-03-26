const aTags = document.querySelectorAll(".port-link"); // select all a tags
const imgCards = document.querySelectorAll(".img-cards"); // select all img-cards divs

aTags.forEach(a => {
  a.addEventListener("click", function() {
    const idToShow = this.textContent.trim(); // get the text content of the clicked a tag
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



