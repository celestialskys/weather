export const DEFAULT_PLACE = {
    label: 'London',
    lat:51.5073219,
    lon:-0.1276474,
    country:"GB",
    region:"England"
  };

export const MEASUREMENT_SYSTEMS = {
    standard: 'standard',
    METRIC: 'metric',
    imperial: 'imperial',
};

export const UNITS = {
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