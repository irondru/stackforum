class CreateAvatars < ActiveRecord::Migration[5.1]
  def change
    create_table :avatars do |t|
      t.string :image, null: false
      t.belongs_to :user
      t.timestamps
    end
  end
end
