class Api::MessagesController < ApplicationController
  def index
   @message = Message.all 
   respond_to do |format|
    format.html
    format.json { @new_message = Message.where('id > ?',params[:message][:id])}
   end
  end
end