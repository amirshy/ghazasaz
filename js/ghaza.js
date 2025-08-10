/*const myname = "AMIRIZADI";
console.log(myname);
const h1 = document.querySelector(".h-header-two");
console.log(h1);

h1.addEventListener("click", function () {
  h1.textContent = "سلام امیر ایزدی";
  h1.style.backgroundColor = "red";
  h1.style.padding = "5rem";
});*/
const year = document.querySelector(".year-footer");
const date = new Date().getFullYear();
console.log(date);
year.textContent = date;
/*-----------------------------------------------------------*/
const menunav = document.querySelector(".btn-mobile-nav");

const header = document.querySelector(".header");

menunav.addEventListener("click", function () {
  //header.classList.add("nav-open");
  //header.classList.remove("nav-open");
  header.classList.toggle("nav-open");
});
const nav = document.querySelector(".nav");
nav.addEventListener("click", function () {
  header.classList.remove("nav-open");
});
