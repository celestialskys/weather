import React from 'react'
import WeatherIcon from '../elements/generic-comps/WeatherIcon'

function DailyForecastWidget({data}) {
    
  // { path:"forecast/daily", params: { "lon": "44.34", "lat":"44.34"}
  const {
    temp,
    weather,
    rain,
    snow,
    pop,
    dt
  } = data;

  let precipitation = rain || snow || 0

  const now_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
    }).format(new Date())
  };

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
    }).format(new Date(dt))
  };

  weather_date.day =
  now_date.day === weather_date.day ? 'Today' : weather_date.day;

return (
  <div className='widget'>
    <div className='day'>{weather_date.day}</div>
    <div className='icon-temp'>
      <div className='icon'>
        <WeatherIcon weatherBase={weather} />
      </div>
      <div className='temperature'>
        <div className='max'>
          {Math.round(temp.max)}° 
          {/* {units.temperature} */}
        </div>
        <div className='min'>
          {Math.round(temp.min)} °
          {/* {units.temperature} */}
        </div>
      </div>
    </div>
    <div className='precipitation'>
      <div>{Math.round(pop*100)} %</div>
      {Math.round(precipitation)}
      {/* {units.precipitation} */}
      <div className='icon'>
        <i className={"bi bi-droplet"}></i>
      </div>
    </div>
</div>
)
}

export default DailyForecastWidget