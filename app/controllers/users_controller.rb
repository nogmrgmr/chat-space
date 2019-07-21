class UsersController < ApplicationController
  
  def edit
  end

  def update
    if current_user.update(user_params)
      redirect_to root_path
    else
      render :edit
    end
  end

  def create
    @member = Member.new(member_params)
    if @member.save
      flash[:notice] = "アカウントが作成されました"
      redirect_to members_path
    else
      render :edit
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email)
  end
end

