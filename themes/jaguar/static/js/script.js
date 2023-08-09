function debounce(func, delay) {
  let timeoutId;
  return function() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay);
  };
}

function handleScroll() {
  var navbar = document.querySelector(".navigation-header");
  var scrolled = window.scrollY > 100;

  if (scrolled) {
    navbar.classList.add("floating");
  } else {
    navbar.classList.remove("floating");
  }
}

window.addEventListener("scroll", debounce(handleScroll, 10));
