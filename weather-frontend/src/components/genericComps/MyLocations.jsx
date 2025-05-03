import React, { useContext, useEffect } from 'react'
import SessionContext from '../context/session.context';
import HorizontallyScrollable from './HorizontallyScrollable';

function MyLocations() {
    const savedLocations = useContext(SessionContext)

  return (
    <>
      <div className = 'locations'>
            <div className='locations-container'>
                <h3>Your Saved Locations</h3>
                <HorizontallyScrollable className='widget-container'>
                    { data.list.map((singleData)=>(
                        <div key={singleData.id}>
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
    </>
    
  )
}

export default MyLocations