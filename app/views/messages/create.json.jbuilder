json.(@message, :content, :image)
json.created_at @message.created_at.strftime("%Y/%m/%d %H:%M")
json.user_name @message.user.name
json.id @message.id

# json.user @message.user.name
# json.content @message.content
# json.date @message.created_at.strftime("%Y/%m/%d %H:%M")
# json.image @message.image
# json.id @message.id