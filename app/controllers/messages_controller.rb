class MessagesController < ApplicationController

  before_action :set_group

 def index
  # @message = Message.new
  # @messages = @group.messages
  # @group = Group.find(params[:id])
 end

 def create
 end
 
 def set_group
  @group = Group.find(params[:group_id])
end

end
