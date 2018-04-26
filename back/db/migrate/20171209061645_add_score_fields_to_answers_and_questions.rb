class AddScoreFieldsToAnswersAndQuestions < ActiveRecord::Migration[5.1]
  def change
    add_column :answers, :score, :integer, default: 0
    add_column :questions, :score, :integer, default: 0
  end
end
