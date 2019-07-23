let sidebar = document.getElementsByClassName("sidebar")[0];
let card = document.querySelectorAll(".column")[0]; //change "column" to "card"
let body = document.getElementsByTagName("header")[0];
console.log(card);
let closebtn = document.getElementsByClassName("close-button")[0];
let search = document.getElementById("search");
let searchButton = document.getElementById("search-icon");
console.log(searchButton);
console.log(search);

card.addEventListener("click", () => {
  // sidebar.classList.toggle("hidden");
  sidebar.classList.toggle("sidebar--collapse");
  // sidebar.classList.toggle("sidebar");
  setTimeout(function() {
    sidebar.classList.toggle("hidden");
  }, 200);
});

searchButton.addEventListener("click", () => {
  search.focus();
  //  searchButton.style.display = "none";
});
closebtn.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar--collapse");
  setTimeout(function() {
    sidebar.classList.toggle("hidden");
  }, 200);
});
// body.addEventListener("click", () => {
//   searchButton.style.display = "block";
// });
// search.onclick = function() {
//   alert("fwgergwerwe");
// };
