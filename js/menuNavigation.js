$(document).ready(function(){
  sectionSelect('landingPage');
  $('.menuWrapper').on('click',function(){
    $('.menuBar').toggleClass('menuToggle');
    menuToggle();
  })
  $('#aboutBtn').on('click',function(){
    sectionSelect(this.id);
  })
  $('#contactBtn').on('click',function(){
    sectionSelect(this.id);
  })
  $('#homeBtn').on('click',function(){
    sectionSelect(this.id);
  })
})

//Section Navigation
function sectionSelect(id){
  if(id == 'aboutBtn'){
    console.log(id);
    $('.landingPage').removeClass('pageActive');
    $('.contactPage').removeClass('pageActive');
    $('.aboutPage').addClass('pageActive');
  }else if(id == 'contactBtn'){
    console.log(id);
    $('.landingPage').removeClass('pageActive');
    $('.aboutPage').removeClass('pageActive');
    $('.contactPage').addClass('pageActive');
  }else{
    console.log(id);
    $('.aboutPage').removeClass('pageActive');
    $('.contactPage').removeClass('pageActive');
    $('.landingPage').addClass('pageActive');
  }
}

//Navigation Menu
function menuToggle(){
  width = $(window).width();
  if (width <= 700){
    
  }else{
    $('.navText').toggleClass('textToggled');
  }
}