User.destroy_all
Location.destroy_all

User.create(email: "pooh@hundredacrew.com", firstname: "Pooh", lastname: "Bear")
User.create(email: "piglet@hundredacrew.com", firstname: "Piglet", lastname: "William")
User.create(email: "crobin@hundredacrew.com", firstname: "Christopher", lastname: "Robin")

Location.create( "name": "London",
"country": "United Kingdom",
"country_code": "UK",
"region": "City of London, Greater London",
"lon": "-0.106",
"lat": "51.517",
"timezone_id": "Europe/London")

Location.create("name": "Canadian London",
            "country": "Canada",
            "country_code": "CA",
            "region": "Ontario",
            "lon": "-81.250",
            "lat": "42.983",
            "timezone_id": "America/Toronto")

        Location.create("name": "Milford",
        "country": "United States",
        "region": "CT",
        "lon": "-73.057564",
        "lat": "41.224281",
        "timezone_id": "America/Toronto")

