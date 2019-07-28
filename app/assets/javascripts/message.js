$(document).on('turbolinks:load', function(){
 
  
  function buildMessage(message){
    console.log(JSON.stringify(message));
  　var img = message.image.url
     ?  img = `<img src=${message.image.url}>`
     :  img = ``;

    // 三項演算子 ( var 変数 = 条件文 ? trueの場合の処理 : falseの場合の処理) img属性 srcタグ
    // console.log(message.image);
    // console.log(message.image.url);
    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user}
                    </div>
                    <div class="upper-message__date">
                      ${message.date}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                    ${message.content}
                    </p> 
                    <p class="lower-message__image">
                    ${img}
                    </p>
                  </div>

                </div>`
    return html;
  }

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
      $('.send').prop('disabled', false);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function(){
      alert('エラー');
      $('.send').prop('disabled', false);
    })
  })
});
