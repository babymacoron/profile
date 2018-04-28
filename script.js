$(function(){

  $(".list").hover(function(){
    $(this).children("span").fadeIn(500);
  },function(){
    $(this).children("span").hide();
  });

  $(".fa-bars").click(
    function(){
      if($(".tablet-list").hasClass("active")){
        $(".tablet-list").removeClass("active");
      } else {
        $(".tablet-list").addClass("active");
      }
    }
  );

});
