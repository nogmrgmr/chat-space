$(document).on('turbolinks:load', function(){


  function userFind(user){
    var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <div class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</div>
               </div>`
    return html;
  }

  function addUser(user){
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

      $(document).on("click",".chat-group-user__btn--add",function(){
        var id =  $(this).attr('data-user-id')
        var name = $(this).attr('data-user-name')
        var html = addUser(id,name);
        $('#chat-group-users').append(html);
        $(this).parent().remove();
      });
});



// 非同期通信でやろうとしてたけど結局非同期通信しなくてよかったけど残してるやつ
// 非同期通信でできないか試すために残しとく用
// $(document).on("click",".chat-group-user__btn--add",function(e){
//   $('.chat-group-form__input').submit();
//   e.preventDefault();
// $.ajax({
//   url: '/users',
//   type: 'GET',
//   dataType: 'json',
//   processData: false,
//   contentType: false
// })
// .done(function(user){
//   alert('JSON COME!')
//   var html = addUser(user);
//   $('#chat-group-users').append(html)
//   // $('親要素ごと').remove();
// })
// .fail(function(){
//   alert('NOT JASONNNNN')
// })
// })
