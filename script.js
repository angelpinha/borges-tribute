/* This function helps the user scroll back to top
When clicking in a small-screen device*/

// Get the button:
let button = document.getElementById("scroller");

// When the user scrolls down 20px from the top of the document,
// show the button.
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (window.innerWidth < 768 && (document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20)) {
    button.style.display = "block";
  }
  else {
    button.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the 
// document.
function topFunction() {
  document.body.scrollTop = 0; // For safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox and others.
}

// Added functionality to switch between dark mode and light mode
// Remembering user preferences

const btn = document.querySelector(".btn-toggle");
const currentTheme = localStorage.getItem("theme");

if (currentTheme == "dark") {
  document.body.classList.add("dark-theme");
}

let theme = "light";

btn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  theme = "light";
  if (document.body.classList.contains("dark-theme")) {
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
});

function checkThemeState () {
  currentState = localStorage.getItem("theme");
  if (currentState === "dark"){
    document.body.classList.toggle("dark-theme");
  }
};
