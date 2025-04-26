// import React from 'react'
import React from 'react';
import '../../styles/components/CurrentWeather.scss';
import WeatherIcon from '../generic-comps/WeatherIcon';

function CurrentWeather({weatherData}) {
   const {
    weather,
    clouds,
    rain,
    snow,
    main,
    visibility,
    wind,
  } = weatherData;
//   { path:"weather", params: { "lon": "44.34", "lat":"44.34"}
 
  const otherInfoWidgets = [
    {
        id: 0,
        icon: 'droplet',
        name: 'Precipitation',
        value: rain['1h'] === undefined ? -1 : Math.round(rain['1h']),
        unit: 'mm/h',
    },{
        id: 1,
        icon: 'wind',
        name: 'Wind',
        value: wind.speed === undefined? -1 : Math.round(wind.speed),
        unit: 'test' // need to change when get units
    },{
        id: 2,
        icon: 'moisture',
        name: 'Humidity',
        value: main.humidity === undefined? -1 : Math.round(main.humidity),
        unit: "%"
      },{
        id: 4,
        icon: 'clouds-fill',
        name: 'Cloud cover',
        value: clouds === undefined? -1 : Math.round(clouds.all),
        unit: "%"
      },{
        id: 5,
        icon: 'eye',
        name: 'Visibility',
        value: visibility === undefined? -1 : Math.round(visibility),
        unit: "m"
      },{
        id: 6,
        icon: 'snow2',
        name: 'Snow',
        value: snow === undefined? -1 : Math.round(snow),
        unit: "mm/h"
      },
    ]
  return (
    <div className='CurrentWeather'>
        <div className='temperature'>
            <WeatherIcon weatherBase={weather[0]}/>
            <div className='value'>
                <div className='real'>{main.temp}°</div>
                <div className='feels_like'>
                    feels like {main.feels_like} °
                </div>
            </div>
            <div className='summary'>{weather[0].description}</div>
        </div>
        <div className='other-infos'>
            {otherInfoWidgets.map(({ id, name, icon, value, unit }) => (
                value !== -1 && (
                    <div className='widget' key={id}>
                        <div className='widget-container'>
                            <div className='info'>
                                <div className='icon'>
                                    <i className={`bi bi-${icon}`}></i>
                                </div>
                                <div className='value'>
                                    {value} {unit}
                                </div>
                            </div>
                            <div className='name'>{name}</div>
                        </div>
                    </div>
                )
            ))}
        </div>
    </div>
  )
}

export default CurrentWeather