class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.belongs_to :user
      t.references :commentable, polymorphic: true, index: true
      t.text :body
      t.timestamps
    end
  end
end
