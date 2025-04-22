import React from 'react'

function WeatherIcon({weatherBase}) {
    return (
        <div className='weather-icon'>
            <img src={`https://openweathermap.org/img/wn/${weatherBase.icon}@2x.png`}
            alt={weatherBase.description}
            />
        </div>  
    )
}

export default WeatherIcon