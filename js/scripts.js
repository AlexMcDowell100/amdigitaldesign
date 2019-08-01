$(document).ready(function () {
    $("#photoinfo").hide();
    $("#animationinfo").hide();
    $("#filminfo").hide();
    $("#websiteinfo").hide();
    $("#appinfo").hide();
    $("#designinfo").hide();
    
    
    $("#photoreveal").click(function () {
    $("#filminfo").slideUp();
    $("#animationinfo").slideUp();
    $("#websiteinfo").slideUp();
    $("#designinfo").slideUp();
    $("#appinfo").slideUp();
    
    $("#photoinfo").slideToggle();
    $('html, body').animate({
    scrollTop: $("#heading1").offset().top}, 1000);
});
    
    
    
$ ("#animationreveal").click(function () {
      $("#photoinfo").slideUp();
    $("#filminfo").slideUp();
    $("#websiteinfo").slideUp();
     $("#designinfo").slideUp();
    $("#appinfo").slideUp();
    
    $("#animationinfo").slideToggle(400, function () {
        $('html, body').animate({
            scrollTop: $("#heading2").offset().top
        }, 1000);
    });
    
   
  
});
    
     
    
$("#filmreveal").click(function () {
    $("#animationinfo").slideUp();
    $("#photoinfo").slideUp();
    $("#websiteinfo").slideUp();
    $("#designinfo").slideUp();
    $("#appinfo").slideUp();    

    $("#filminfo").slideToggle(400, function () {
        $('html, body').animate({
            scrollTop: $("#heading3").offset().top
        }, 1000);
    });
    
   
  
});
    
  
    
     $("#websitereveal").click(function () {
    $("#animationinfo").slideUp();
    $("#photoinfo").slideUp();
    $("#designinfo").slideUp();
    $("#appinfo").slideUp();
    $("#filminfo").slideUp();
        
    $("#websiteinfo").slideToggle(400, function () {
        $('html, body').animate({
            scrollTop: $("#heading4").offset().top
        }, 1000);
    });
    
   
  
});
    
     $("#appreveal").click(function () {
        $("#animationinfo").slideUp();
    $("#photoinfo").slideUp();
    $("#websiteinfo").slideUp();
    $("#designinfo").slideUp();
    $("#filminfo").slideUp();     
       
    $("#appinfo").slideToggle(400, function () {
        $('html, body').animate({
            scrollTop: $("#heading5").offset().top
        }, 1000);
    });
    
   
  
});
    
     $("#designreveal").click(function () {
          $("#animationinfo").slideUp();
    $("#appinfo").slideUp();
    $("#photoinfo").slideUp();
    $("#websiteinfo").slideUp();
    $("#filminfo").slideUp();
      
    $("#designinfo").slideToggle(400, function () {
        $('html, body').animate({
            scrollTop: $("#heading6").offset().top
        }, 1000);
    });
    
   
  
});

 });   