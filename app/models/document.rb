class Document < ApplicationRecord
  # Return reading time of document expressed in minutes. (Assuming 200 w/s)
  # @return [Integer] number of minutes rounded-up.
  def reading_time
    ((content || '').scan(/\w+/).size + 199) / 200
  end
end
