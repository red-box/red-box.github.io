$(document).ready(function(){

  //Copy Btn function
  $('.btnCopy').on('click', function(){
    if (this.id == 'copyEmail'){
      $('#email').focus();
      $('#email').select();
      document.execCommand('copy');
      toolTipCopy('copyEmail')
    }else if(this.id == 'copyMobile'){
      $('#mobile').focus();
      $('#mobile').select();
      document.execCommand('copy');
      toolTipCopy('copyMobile')
    }
  })
  
  // Auto fade out function on doc load.
  $('#contactBtn').on('click', function(){
      setTimeout(function(){
        $('.copyToolTip').css('opacity', 0);
      }, 2300);
      setTimeout(function(){
        $('.goToToolTip').css('opacity', 0);
      }, 2300);
    })

    $("#messageForm").validate();
  })

function toolTipCopy(e){

  if( e == 'copyEmail'){

    $('.copyToolTip').css('top','4px');
    $('.copyToolTip').css('left', '220px');
    $('.copyToolTip p').text('copied');
    $('.copyToolTip').css('width','auto');
    $('.copyToolTip').css('opacity','1');

    setTimeout(function(){
      $('.copyToolTip').css('opacity', 0);
    }, 1500)

  }else if(e == 'copyMobile'){

    $('.copyToolTip').css('top','47px');
    $('.copyToolTip').css('left', '130px');
    $('.copyToolTip p').text('copied');
    $('.copyToolTip').css('width','auto');
    $('.copyToolTip').css('opacity','1');

    setTimeout(function(){
      $('.copyToolTip').css('opacity', 0);
    }, 1500)

  }
  
}


