class UserLocations < ActiveRecord
    belongs_to :user, class_name: "user", foreign_key: "user_id"
    belongs_to :location, class_name: "location", foreign_key: "location_id"
    
end