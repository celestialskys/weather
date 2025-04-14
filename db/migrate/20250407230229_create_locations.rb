class CreateLocations < ActiveRecord::Migration[8.0]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :country
      t.string :region
      t.string :zip
      t.string :lat
      t.string :lon
      t.string :timezone_id

      t.timestamps
    end
  end
end
