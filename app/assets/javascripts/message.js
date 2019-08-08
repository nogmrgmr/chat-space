$(document).on('turbolinks:load', function(){
 
  var buildMessage = function(message) {
    if (message.content && message.image.url) {
      var html = '<div class="message" data-id=' + message.id + '>' +
        '<div class="upper-message">' +
          '<div class="upper-message__user-name">' +
            message.user_name +
          '</div>' +
          '<div class="upper-message__date">' +
            message.created_at +
          '</div>' +
        '</div>' +
        '<div class="lower-message">' +
          '<p class="lower-message__content">' +
            message.content +
          '</p>' +
          '<img src="' + message.image.url + '" class="lower-message__image" >' +
        '</div>' +
      '</div>'
    } else if (message.content) {
      var html = '<div class="message" data-id=' + message.id + '>' +
        '<div class="upper-message">' +
          '<div class="upper-message__user-name">' +
            message.user_name +
          '</div>' +
          '<div class="upper-message__date">' +
            message.created_at +
          '</div>' +
        '</div>' +
        '<div class="lower-message">' +
          '<p class="lower-message__content">' +
            message.content +
          '</p>' +
        '</div>' +
      '</div>'
    } else if (message.image.url) {
      var html = '<div class="message" data-id=' + message.id + '>' +
        '<div class="upper-message">' +
          '<div class="upper-message__user-name">' +
            message.user_name +
          '</div>' +
          '<div class="upper-message__date">' +
            message.created_at +
          '</div>' +
        '</div>' +
        '<div class="lower-message">' +
          '<img src="' + message.image.url + '" class="lower-message__image" >' +
        '</div>' +
      '</div>'
    };
    return html;
  };

  
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildMessage(message);
      $('.messages').append(html)
      $('#message_content').val('')
      $('#message_image').val('')
      $('.send').prop('disabled', false);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function(){
      alert('エラー');
      $('.send').prop('disabled', false);
  })
  var reloadMessages = function () {
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      last_message_id = $('.message:last').data("id");
      //last_message_idガ定義されていない
      console.log(last_message_id);
      $.ajax({ 
        url: "api/messages", 
        type: 'get', 
        dataType: 'json', 
        data: {id: last_message_id} 
      })
      .done(function (messages) {
        alert('インターバル機能は動いていますが、、、、、、、');
        var insertHTML = '';
        messages.forEach(function (message) {
          insertHTML = buildHTML(message); 
          $('.messages').append(insertHTML);
        })
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      })
      .fail(function () {
        alert('自動更新に失敗しました');
      });
     }
    };
    setInterval(reloadMessages, 10000);
   });
  });






// var reloadMessages = function(){
//   last_message_id = $('.message:last')
//   $.ajax({
//     url: 'api/messages',
//     type:'GET',
//     datatype: 'json',
//     data: {id: last_message_id}
//   })
//   .done(function(messages){
//     alert('success');
//     var insertHTML = '';
//     messages.forEach(function(user){
//     var html = reloadMessages(user);
//     $('.messages').append(html);
//     })
//   })
//   .fail(function(){
//     alert('error');
//   });
// $(function(){
//     setInterval(reloadMessages, 5000);
// })
// };