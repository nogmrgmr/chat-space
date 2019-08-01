$(function(){
  $(".chat-group-form__search").on("keyup", function(e){
      e.preventDefault();
    var input = $(".chat-group-form__search").val();
    console.log(input);
  });
});
