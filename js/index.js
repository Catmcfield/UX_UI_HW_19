console.log ("Your index.js file is loaded correctly!");

$(document).ready(function(){
  $('.content').on( "mouseenter", function(){
    $("button").animate({'opacity':'1'},500);
    });
  });

  $(document).ready(function(){
    $('.Creaven').on( "mouseenter", function(){
      $('.creaven-button').animate({'opacity':'1'},500);
      });
    });
    $(document).ready(function(){
      $('.Unicef').on( "mouseenter", function(){
        $('.unicef-button').animate({'opacity':'1'},500);
        });
      });
      $(document).ready(function(){
        $('.DOL').on( "mouseenter", function(){
          $('.dol-button').animate({'opacity':'1'},500);
          });
        });
   


