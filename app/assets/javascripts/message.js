$(document).on('turbolinks:load', function(){
 
  
  function buildMessage(message){
  　var img = message.image.url
     ?  img = `<img src=${message.image.url}>`
     :  img = ``;

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
