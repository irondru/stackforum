class AddCommunicationsQuestionsAnswersToUser < ActiveRecord::Migration[5.1]
  def change
    add_belongs_to :questions, :user
    add_belongs_to :answers, :user
  end
end
