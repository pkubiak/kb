class DocumentsController < ApplicationController
  def show
    url = params[:url].split('/')

    @hierarchy = []

    url.reduce(nil) do |parent, name|
      puts name, parent
      document = Document.find_by!(slug: name, parent_id: parent)
      @hierarchy << document
      document.id
    end

    @document = @hierarchy[-1]
  end
end
