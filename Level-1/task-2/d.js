const header = document.querySelector('header');
const menu = document.querySelector('.fa-bars');
const navlist = document.querySelector('.navlist');

window.onscroll = ()=>{
    if(window.scrollY > 100){
        header.classList.add('scroll');
    } 
    else{
        header.classList.remove('scroll');
    }
}

menu.addEventListener('click', ()=>{
    navlist.classList.toggle('active');
    menu.classList.toggle('fa-xmark');
})

document.addEventListener("DOMContentLoaded", function() {
    var arrowContainer = document.getElementById("arrow-container");
    var arrow = document.getElementById("arrow");
  
    // Show/hide arrow based on scroll position
    window.addEventListener("scroll", function() {
      if (window.scrollY > 200) {
        arrowContainer.style.display = "block";
      } else {
        arrowContainer.style.display = "none";
      }
    });
  
    // Scroll to the top when arrow is clicked
    arrow.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  