export const DEFAULT_PLACE = {
    name: 'London',
    lat:51.5073219,
    lon:-0.1276474,
    country:"GB",
    state:"England"
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