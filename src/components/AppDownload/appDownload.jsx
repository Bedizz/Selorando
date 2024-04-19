import React from 'react'
import './appDownload.css'
import { assets } from '../../assets/assets'

const appDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experience Download <br /> Selorando App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="android app" />
            <img src={assets.app_store} alt="apple app" />
        </div>
    </div>
  )
}

export default appDownload