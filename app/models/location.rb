class Location < ApplicationRecord
    has_many :user_locations
    has_many :users, :through => :user_locations
  
    # scope :lat_lon, ->(lat, lon) { where(lat: lat, lon:lon) }
    # scope :label, ->(value) { where(name: "%#{value}%") }

    def self.search_attr(val)
        if val[:label].present?
            by_label = where(name: val[:label])
            return by_label if by_label.exists?
        end
        if val[:lat].present? && val[:lon].present?
            return where(lat: val[:lat], lon: val[:lon])
        end
        none
    end
end
