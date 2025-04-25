import React from 'react'
import '../../styles/components/Forecast.scss'
import HourlyForecastWidget from './HourlyForecastWidget'
import DailyForecastWidget from './DailyForecastWidget'
import HorizontallyScrollable from '../generic-comps/HorizontallyScrollable'
function Forecast({title, type, data}) {
    // { path:"weather", params: { "lon": "44.34", "lat":"44.34"}
    return (
        <div className = 'Forecast'>
            <div className='forecast-container'>
                <h3>{title}</h3>
                <HorizontallyScrollable className='widget-container'>
                    { data.list.map((singleData)=>(
                        <div key={singleData.dt_txt}>
                            {type == 'hourly' ? (
                                <HourlyForecastWidget data={singleData}/>
                            ) : (
                                <DailyForecastWidget data={singleData}/>
                            )}
                        </div>
                    ))}
                </HorizontallyScrollable>
            </div>

        </div>
    )
}

export default Forecast