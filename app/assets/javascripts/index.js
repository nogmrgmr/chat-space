$(document).on('turbolinks:load', function(){

  function userFind(user){
    var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">ユーザー名</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="ユーザーのid" data-user-name="ユーザー名">追加</div>
               </div>`
    return html;
  }
  

    $("#user-search-field").on("keyup", function(e){
        e.preventDefault();
      var input = $("#user-search-field").val();
      console.log(input);
      $.ajax({
        url: '/users',
        type: "GET",
        dataType: 'json'
      })
      .done(function(users){
        users.forEach(function(user) {
          userFind(user)
        })

      .fail(function(){
        alert('NOT JSON');
      });
    });
  });
})
