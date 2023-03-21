const button = document.getElementById("dropdown-btn");
const div = document.getElementById("dropdown-menu");

button.addEventListener("click", function() {
  if (div.style.display === "flex") {
    div.style.display = "none";
  } else {
    div.style.display = "flex";
  }
});

// button.addEventListener("click", function() {
//     if (div.style.height === "0") {
//       div.style.height = "60%";
//     } else {
//       div.style.height = "0";
//     }
//   });