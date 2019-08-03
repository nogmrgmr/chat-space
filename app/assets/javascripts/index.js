$(document).on('turbolinks:load', function(){


  function userFind(user){
    var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="ユーザーのid" data-user-name="ユーザー名">追加</div>
               </div>`
    return html;
  }

  function addUser(user){
    var html = `<div class='chat-group-user'>
                  <input name='group[user_ids][]' type='hidden' value='ユーザーのid'>
                  <p class='chat-group-user__name'>${user.name}</p>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
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

      $(document).on("click",".chat-group-user__btn--add",function(e){
        e.preventDefault();
        var formData = new FormData();
      $.ajax({
        url: '/users',
        type: 'GET',
        data: formData,
        dataType: 'json',
        processData: false,
        contentType: false
      })
      .done(function(user){
        alert('JSON COME!')
        var html = addUser(user);
        $('#chat-group-users').append(html)
        $('.').remove();
      })
      .fail(function(){
        alert('NOT JASONNNNN')
      })
     })
    });
