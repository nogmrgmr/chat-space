class Api::MessagesController < ApplicationController
  def index
    @group = Group.find(params[:group_id])
    @messages = @group.messages.includes(:user).where('id > ?', params[:message][:id]) 
  end
end


# @messages = Message.all 
# @message = Message.where('id > ?',params[:message][:id])
# respond_to do |format|
#  format.html
#  format.json 
# end