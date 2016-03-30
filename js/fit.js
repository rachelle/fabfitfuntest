var scroll_start = 0; 

$(document).scroll(function() { 
  scroll_start = $(this).scrollTop(); 
  console.log(scroll_start); 
  if(scroll_start > 700) { 
    $('.navbar-inverse').css('background-color', 'rgba(10,10,10,0.3)');
  } else { 
    $('.navbar-inverse').css('background-color', 'transparent'); 
  }


  /* employee section */
  $("figure").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );
}); 

$(document).ready(function(){
  $(".close-button").bind("click", function(){
    $(".sidebar").toggleClass("sidebar-hidden");
    $(".image-container").toggleClass("embiggen");
  });
  $(".image-container img").bind("click", function() {
    $(".sidebar").toggleClass("sidebar-hidden");
    $(".image-container").toggleClass("embiggen");
  });
});
