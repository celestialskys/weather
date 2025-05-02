class AddUserLocalJoinsTable < ActiveRecord::Migration[8.0]
  def change
    create_table :user_locations do |t|
      t.references :user, foreign_key: true, null: false
      t.references :location, foreign_key: true, null: false
      t.boolean :is_default, default: false, null: false
    
      t.timestamps
    end
  end
end
