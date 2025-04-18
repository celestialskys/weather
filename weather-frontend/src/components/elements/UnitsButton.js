import React, { useState, useEffect } from 'react';
function UnitsButton({ isToggled, setIsToggled }){

      const handleToggle = () => {
        setIsToggled(!isToggled); // parent handles localStorage too
      };

    return (
      <button onClick={handleToggle}>
        {isToggled ? '°F' : '°C'}
      </button>
    );
    
}

export default UnitsButton
