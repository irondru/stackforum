class CreateVotes < ActiveRecord::Migration[5.1]
  def change
    create_table :votes do |t|
      t.belongs_to :user
      t.references :votable, polymorphic: true, index: true
      t.integer :changed_to
    end
  end
end
