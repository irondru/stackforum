class AddViewsCountToQuestion < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :views, :integer, default: 0
  end
end
