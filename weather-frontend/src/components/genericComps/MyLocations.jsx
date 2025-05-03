import React, { useContext, useEffect } from 'react'
import SessionContext from '../context/session.context';
import HorizontallyScrollable from './HorizontallyScrollable';

function MyLocations() {
    const {savedLocations} = useContext(SessionContext)
    debugger
  return (
    <>
      <div className = 'locations'>
            <div className='locations-container'>
                <h3>Your Saved Locations</h3>
                <HorizontallyScrollable className='widget-container'>
                    { savedLocations.map((singleData)=>(
                        <div key={singleData.id}>
                            <button>{singleData.name}</button>
                        </div>
                    ))}
                </HorizontallyScrollable>
            </div>

        </div>
    </>
    
  )
}

export default MyLocations