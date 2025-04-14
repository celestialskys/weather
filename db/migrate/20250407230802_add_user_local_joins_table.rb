class AddUserLocalJoinsTable < ActiveRecord::Migration[8.0]
  def change
    create_join_table :users, :locations do |t|
      t.index :user_id
      t.index :location_id
      t.boolean :is_default, default: false, null: false
    end
  end
end
