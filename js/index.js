// ANIM SCROLL

const animItems = document.querySelectorAll('._anim-items');
if(animItems.length > 0) {
  window.addEventListener('scroll', animOnScroll);
  function animOnScroll(params) {
    for( let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 10;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;

      if(animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
        animItem.classList.add('_active');
      }else{
        if(!animItem.classList.contains('_anim-no-hide')){
          animItem.classList.remove('_active');}        
      }
    }
  }
  function offset(el){
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
  }
  setTimeout(()=> {
     animOnScroll();
   },500); 
}




/*burger-menu button  */
const menu = document.querySelector(".burger-menu");
menu.addEventListener("click", morph);

function morph() {
  menu.classList.toggle("open");
  const items = document.querySelector(".menu-items");
  items.classList.toggle("open");
  const body = document.querySelector('html');
  body.classList.toggle('lock');

  items.addEventListener("click",function(){
     menu.classList.remove("open");
      items.classList.remove('open'); 
      body.classList.remove('lock');   
      
     
    }); 
}	


// ТАБИ

$(function() {
  var tab = $('#tabs .tabs-items > div'); 
  tab.hide().filter(':first').show(); 
  
  // Клики по вкладкам.
  $('#tabs .tabs-nav a').click(function(){
    tab.hide(); 
    tab.filter(this.hash).show(); 
    $('#tabs .tabs-nav a').removeClass('active');
     $('#tabs .tabs-nav a').parent().removeClass('green');
    $(this).addClass('active');
    $(this).parent().addClass("green")
    return false;
  }).filter(':first').click();
 
  
});


$(document).ready(function(){
$('.image-popup-vertical-fit').magnificPopup({
  type: 'image',
  closeOnBgClick: true,
  fixedContentPos: false,
  callbacks: {
    open: function() {
      jQuery('html').addClass('lock');
    },
    close: function() {
      jQuery('html').removeClass('lock');
    }
  },
  mainClass: 'mfp-with-zoom', 
  gallery:{
      enabled:true
    },

  zoom: {
    enabled: true, 

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    opener: function(openerElement) {

      return openerElement.is('img') ? openerElement : openerElement.find('img');
  }
}

});

});





/*carousel  */

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}




/*Back to Top button  */

(function() {
  'use strict';

  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('up-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('up-show');
    }
  }

  function backToTop() {
    var scrolled = window.pageYOffset;
    if (scrolled > 0) {
      window.scrollBy(0, -scrolled);
    }
  }

  var goTopBtn = document.querySelector('.up');

  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
    






$(document).ready(function() {
  $(function(){    

  // Присвоение класса для видимости сожержимого аккордеона
    $('.accordeon-header').click(function(){
      $(this).toggleClass('in').next().slideToggle();
    });
});
})




