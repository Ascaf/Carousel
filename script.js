let slidePosition =0
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

 document.getElementById('carousel_button-prev') 
 .addEventListener("click", function(){
    moveToPrevSlide();
 });

 function updateSlidePosition() {
    for (let slide of slides){
        slide.classList.remove('carousel_Item-Visible');
        slide.classList.add('carousel_Item-hidden');
        
    }
    slides[slidePosition].classList.add('carosel-item-visible')
 }

 function moveToNextSlide(){
    function updateSlidePosition();

if (slidePosition === totalSlides - 1 )
 {slidePosition =0;  
} else{
    slidePosition++
}
updateSlidePosition();
} 
 function moveToPrevSlide(){
     updateSlidePosition()}

    if (slidePosition = 0 )
    {slidePosition =0;
   } else{
       slidePosition --
   }

    