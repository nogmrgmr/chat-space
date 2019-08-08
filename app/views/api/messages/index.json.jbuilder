json.array! @messages do |message|
  json.content message.content
  json.image message.image
  json.created_at message.created_at.strftime("%Y/%m/%d %H:%M")
  json.user.name message.user.name
  json.id message.id
end


# if @new_message.present?
#   json.array! @new_message
# end
# 上の＠messagesは違う可能性があるな
