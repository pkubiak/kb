class DocumentsController < ApplicationController
  def show
    @url = params[:url]

    @document = Document.first
  end
end
