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
      $('#message_image').val('')
      $('.send').prop('disabled', false);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    })
    .fail(function(){
      alert('エラー');
      $('.send').prop('disabled', false);
    })
  })

  $(function(){
    $(function(){
      setInterval(update, 10000);
    });

    function update(){
     if($('.messages')[0]){
     var message_id = $('.message:last').data('id');
     }else {
       var message_id = 0
     }
     $.ajax({
       url:('/group_messages'),
       type: 'GET',
       data: {message: { id:message_id} },
       dataType: 'json'
      })
      .always(function(data){
        alert('自動更新来てる！');
        $.each(data, function(i,data){
          buildMessage(data);
        });
      });
    }
  });

  $(function(){
    function buildMessage(message){
      var messages = $('').append('<tr class="messages" data-id=' + message.id + '><td>' + message.text + '</td><td><a href="/messages/' + message.id + '">Show</a></td><td><a href="/messages/' + message.id +'/edit">Edit</a></td><td><a data-confirm="Are you sure?" rel="nofollow" data-method="delete" href="/messages/' + message.id + '">Destroy</a></td>')
    }
    $(function(){
      setInterval(update,10000);
    })
  })


});
