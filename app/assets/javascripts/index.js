$(document).on('turbolinks:load', function(){

  function userFind(user){
    var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
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
        data: { keyword: input },
        dataType: 'json'
      })
      .done(function(users){
        $('.chat-group-user').remove();
        if (users.length !== 0 && input.length != 0 ) {
          users.forEach(function(user) {
          var html = userFind(user);
          $('#user-search-result').append(html);
          })
         }
         else{
          //  appendErrMsgToHTML("一致するユーザーはいません")
         }

      })
      .fail(function(){
        alert('NOT JSON');
      })
    });
});

