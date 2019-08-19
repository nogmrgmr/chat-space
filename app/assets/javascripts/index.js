$(document).on('turbolinks:load', function(){


  function userFind(user){
    var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
               </div>`
    return html;
  }

  function addUser(id, name){
    var html = `<div class='chat-group-user'>
                  <input name='group[user_ids][]' type='hidden' value='${id}'>
                  <p class='chat-group-user__name'>${name}</p>
                  <div class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</div>
                </div>`
    return html; 
  }

    $("#user-search-field").on("keyup", function(e){
        e.preventDefault();
      var input = $("#user-search-field").val();
      $.ajax({
        url: '/users',
        type: "GET",
        data: { keyword: input },
        dataType: 'json'
      })
      .done(function(users){
        $('#user-search-result').empty();
        if (users.length !== 0 && input.length != 0 ) {
          users.forEach(function(user) {
          var html = userFind(user);
          $('#user-search-result').append(html);
          })
         }
      })
      .fail(function(){
        alert('NOT JSON');
      })
      $(document).on("click",".chat-group-user__btn--remove",function(){
        $(this).parent().remove();
      })
    });   

    $(function(){
      $(document).off('click');
      $(document).on("click",".chat-group-user__btn--add",function(){
      var id =  $(this).data('user-id')
      var name = $(this).data('user-name')
      var html = addUser(id,name);
      $('#chat-group-users').append(html);
      $(this).parent().remove();  
      })
     });


    $(document).on("click",".chat-group-user__btn--remove",function(){
      $(this).parent().remove();
    });
});
