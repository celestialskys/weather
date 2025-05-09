import React from 'react'
import WeatherIcon from '../genericComps/WeatherIcon'

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

  const dateFromApi = new Date(dt * 1000); // dt = 1746270000

  const weather_date = {
    day: new Intl.DateTimeFormat(navigator.language, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
    }).format(dateFromApi)
  }

  const today = new Date();
  const isSameDay = dateFromApi.toDateString() === today.toDateString()

  weather_date.day = isSameDay ? 'Today' : weather_date.day;

return (
  <div className='widget'>
    <div className='day'>{weather_date.day}</div>
    <div className='icon-temp'>
      <div className='icon'>
        <WeatherIcon weatherBase={weather[0]} />
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