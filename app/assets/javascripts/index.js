$(function(){
  $(".chat-group-form__input").on("keyup", function(e){
      e.preventDefault();
    var input = $(".chat-group-form__input").val();
    console.log(this);
  });
});
