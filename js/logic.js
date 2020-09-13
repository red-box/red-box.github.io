$(document).ready(function(){

  //On page load functions.

  docLoadGallery() 
  
  //Category Button Wrapper

  $('.htmlEff').on('click',(function(){
    $(this).toggleClass('htmlActive catActive');
    toggleGallery(this.id);
  }))


  $('.javaScriptEff').on('click',(function(){
    $(this).toggleClass('javaScriptActive catActive');
    toggleGallery(this.id);
  }))


  $('.reactJsEff').on('click',(function(){
    $(this).toggleClass('reactJsActive catActive');
    toggleGallery(this.id);
  }))


  $('.designEff').on('click',(function(){
    $(this).toggleClass('designActive catActive');
    toggleGallery(this.id);
  }))


  $('.showAllEff').on('click',(function(){
    offBtnEffects()
    $('.galleryItem').removeClass('galleryDocLoad galleryItemActive');
    $(this).toggleClass('showAllActive showActive');
    showAllGallery();
    gallEmptyCheckShowAll()
  }))

  $('.formBtnToggle').on('click', (function(){
    toggleContactForm();
  }))

})

//On document ready, loads gallery.
function docLoadGallery(){
    $('.galleryItem').toggleClass('galleryDocLoad');
}
//Show All BTN Function.
function showAllGallery(){
  $('.galleryItem').toggleClass('galleryShowAll');
  offBtnEffects();
}
//Normal Category select BTN Function. 
function toggleGallery(galleryItem){
  $('.galleryItem').removeClass('galleryDocLoad galleryShowAll');
  $('.'+ galleryItem +'Item').toggleClass('galleryItemActive');
  offBtnShowAll()
  gallEmptyCheck()
}
//Removes BTN effects for "HTML, JavaScript...etc" when show all is toggled.
function offBtnEffects(){
  $('.categoryBtn').removeClass('catActive javaScriptActive htmlActive reactJsActive designActive');
}
//Removes BTN Effects for "Show All" when other buttons are toggled.
function offBtnShowAll(){
  $('.showAllEff').removeClass('showAllActive showActive');
}
//Checks if gallery is empty.
function gallEmptyCheck(){
  if($('.galleryWrapper > div.galleryItemActive').length != 0){
    emptyGallMessageOff();
  }else{
    emptyGallMessageActive();
  }
}
//Checks if gallery is empty after toggling show all.
function gallEmptyCheckShowAll(){
  if($('.galleryWrapper > div.galleryShowAll').length != 0){
    emptyGallMessageOff();
  }else{
    emptyGallMessageActive();
  }
}
//Toggles message incase gallery is empty.
function emptyGallMessageActive(){
  $('.secretMessage').addClass('secretMessageToggle');
}
function emptyGallMessageOff(){
  $('.secretMessage').removeClass('secretMessageToggle');
}

