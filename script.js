$(".projects , .games , .python , .javascript , .a , .b , .c ,.d").hide();

//Home
$(".h").click(function(){
  $(".a , .b , .c , .d").hide();
  $(".projects , .games , .python , .javascript").hide();
  $(".a1").show(0.2);
   $(".home").slideDown();

});

//Projects
$(".p").click(function(){
  $(".a1 , .b , .c , .d").hide();
  $(".home , .games , .python , .javascript").hide();
  $(".a").show(0.2);
  $(".projects").slideDown();


});

//Games
$(".g").click(function(){
  $(".a1 , .a , .c , .d").hide();
  $(".projects , .home , .python , .javascript").hide();
  $(".b").show(0.2);
  $(".games").slideDown();

});

//Python
$(".py").click(function(){
  $(".a1 , .a , .b , .d").hide();
  $(".projects , .games , .home , .javascript").hide();
  $(".c").show(0.2);
   $(".python").slideDown();
});


//Javascript$(".a").click(function(){
$(".j").click(function(){
  $(".a1 , .a , .b , .c").hide();
  $(".projects , .games , .python , .home").hide();
  $(".d").show(0.2);
   $(".javascript").slideDown();
});
