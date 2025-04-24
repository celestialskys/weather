export const DEFAULT_PLACE = {
    name: 'London',
    place_id: 'london',
    adm_area1: 'England',
    adm_area2: 'Greater London',
    country: 'United Kingdom',
    lat: '51.50853N',
    lon: '0.12574W',
    timezone: 'Europe/London',
  };

  export const MEASUREMENT_SYSTEMS = {
    standard: 'standard',
    METRIC: 'metric',
    imperial: 'imperial',
  };

    UNITS = {
        standard:{
            temp: "°K",
            gust: "meter/sec"
        },
        metric:{
            temp: "°C",
            gust: "meter/sec"
        },
        imperial:{
            temp: "°F",
            gust: "mph"
        }
    }