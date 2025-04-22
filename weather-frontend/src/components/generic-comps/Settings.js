import React, { PureComponent } from 'react'
import '../../styles/components/Setting.scss'

export class Settings extends PureComponent {
  render() {
    return (
      <div className='settings'>Settings
        <div className='theme-toggler'>
            <div className='theme-buttons'>
                <div className='light-theme-btn'>
                    <i className='bi bi-sun'></i>
                </div>
                <div className='dark-theme-btn active'>
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
}

export default Settings