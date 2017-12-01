class AddAnswersBestAndTimestamps < ActiveRecord::Migration[5.1]
  def change
    add_column :answers, :best, :boolean, default: false
    add_timestamps :answers, default: 0
    add_timestamps :questions, default: 0
  end
end
