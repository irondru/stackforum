class AttachmentsController < ApplicationController
  before_action :authenticate_user!

  def destroy
    @attachment = Attachment.find(params[:id])
    @attachment.destroy if @attachment.attachmentable.user == current_user
  end
end