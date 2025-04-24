import { useContext, useState } from 'react';
import ThemeContextContext from '../context/theme.context';
import '../../styles/components/Settings.scss'
import WeatherContext from '../context/weather.context'

function Settings() {
  const { dark, setDark, saveThemeToLocalStorage } = useContext(
    ThemeContextContext
  );

  const toggleTheme = () => {
    setDark((prevDark) => !prevDark);
    saveThemeToLocalStorage(!dark);
  };

  return (
    <div className='settings'>Settings 
      <div className='theme-toggler'>
        <div className='theme-buttons' onClick={toggleTheme}>
          <div className={`light-theme-btn ${dark ? '' : 'active'}`}>
            <i className='bi bi-sun'></i>
          </div>
          <div className={`dark-theme-btn ${dark ? 'active' : ''}`}>
              <i className='bi bi-moon'></i>
          </div>
        </div>
      </div>
      <div className='settings-btn'>
          <i className='bi bi-gear'></i>
      </div>
    </div>
  )
}

export default Settings