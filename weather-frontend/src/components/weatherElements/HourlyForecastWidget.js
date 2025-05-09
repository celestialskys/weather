import React from 'react'
import WeatherIcon from '../genericComps/WeatherIcon';

function HourlyForecastWidget({data}) {
    
  // { path:"forecast/hourly", params: { "lon": "44.34", "lat":"44.34"}
  const {
    main,
    weather,
    rain,
    snow,
    wind,
    pop,
    dt_txt
  } = data;

  let precipitation = rain || snow|| {'1h': 0}
  const locale = navigator.language || 'en-US';
  const dateObj = new Date(dt_txt);
  
  // Format current time and day
  const now = new Date();
  const now_date = {
    day: new Intl.DateTimeFormat(locale, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
    }).format(now),
    time: new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
    }).format(now),
  };
  
  // Format incoming weather date
  const weather_date = {
    day: new Intl.DateTimeFormat(locale, {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
    }).format(dateObj),
    time: new Intl.DateTimeFormat(locale, {
      hour: '2-digit',
      minute: '2-digit',
    }).format(dateObj),
  };
  
  // Midnight time string (localized)
  const midnightTime = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date().setHours(0, 0, 0, 0));
  

  const normalize = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const today = normalize(new Date());
  const inputDay = normalize(dateObj);

  const isSameDay = weather_date.day === now_date.day && weather_date.time === now_date.time;

  weather_date.day = isSameDay
    ? 'Now'
    : weather_date.time === midnightTime
      ? weather_date.day
      : '';
  return (
    <div className='widget'>
      <div className='day'>{weather_date.day}</div>
      <div className='time'>{weather_date.time}</div>
      <div className='icon-temp'>
        <div className='icon'>
          <WeatherIcon weatherBase={weather[0]}/>
        </div>
        <div className='temperature'>
          {Math.round(main.temp)}°  
          {/* {units.temperature} */}
        </div>
      </div>
      <div className='precipitation'>
        <div>{Math.round(pop*100)} %</div>
       
        {/* {units.precipitation} */}
        <div className='icon'>
          {Math.round(precipitation['1h'])} 
        <i className={"bi bi-droplet"}></i>
      </div>
      </div>
      <div className='wind'>
        <div className='speed'>
          {Math.round(wind.speed)}
          {/* {units.wind_speed} */}
        </div>
        <div
          className='dir'
          style={{ transform: `rotate(${-45 + wind.deg}deg)` }}
        >
          <i className='bi bi-send-fill'></i>
        </div>
      </div>
    </div>
  );
}

export default HourlyForecastWidget