$(document).ready(function()
{
  var current = 0;
  var dots="";
 var navDots = $('.cbp-fwdots p').children();

         
 /* $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });*/
  
  var slideCount = $('#listImg ul li').length;
  var slideWidth = $('#listImg ul li').width();
  var slideHeight = $('#listImg ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
   

    function moveLeft() {
      if(current > 0)
      {
         if(!$('.cbp-fwprev').is(":visible"))
        {
          $('.cbp-fwprev').show();
         
        }
        $('#listImg  ul').animate({
             marginLeft: '+=539'
        }, "slow" , function () {
           // $('#listImg  ul li:last-child').prependTo('#listImg  ul');
           // $('#listImg  ul').css('margin-left', '');
        });

        current--;
           if(current<8)
          $('.cbp-fwnext').show();
      }
      else
      {
           $('.cbp-fwprev').hide();
      }
    };

    function moveRight() {
      if(current < 8)
      {
        if(!$('.cbp-fwnext').is(":visible"))
        {
          $('.cbp-fwnext').show();
         
        }
        $('#listImg ul').animate({
            marginLeft: '-=539'
        }, "slow", function () {
          //  $('#listImg  ul li:first-child').appendTo('#listImg ul');
           // $('#listImg  ul').css('margin-left', '');
        });

        current++;
           if(current>=1)
          $('.cbp-fwprev').show();
      }
      else
    {

      $('.cbp-fwnext').hide();
    }
    };

  $('.cbp-fwprev').hide();


    $('.cbp-fwprev').click(function () {
        moveLeft(current);
    });

    $('.cbp-fwnext').click(function () {
        moveRight();
    });

  

function moveDots(ind){
  var marg = ind*539;
 
  if (marg>current*539)
  {
      marg= -marg;
  }
  else
  {
    
    marg= -539*(ind);
   
  }
  if(current != ind)
  {
 if(ind <= 8)
      {
        if(!$('.cbp-fwnext').is(":visible"))
        {
          $('.cbp-fwnext').show();
        }
        $('#listImg ul').animate({
            marginLeft: marg
        }, "slow", function () {
          //  $('#listImg  ul li:first-child').appendTo('#listImg ul');
           // $('#listImg  ul').css('margin-left', '');
        });

        current=ind;

           if(current>=1)
          $('.cbp-fwprev').show();
      }
      else
    {

      $('.cbp-fwnext').hide();
    }
    }
  }



$('.cbp-fwdots p span').click(function(){

    moveDots($(this).index());
   
   });  
});