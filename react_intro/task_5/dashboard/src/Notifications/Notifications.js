import React from 'react';
import './Notifications.css';
import closeIcon from './assets/images/close-icon.png';
import { getLatestNotification } from './utils';
export const Notifications = () => {
  return (
    <div className='Notifications'>
      <button style={{
        fontWeight: 'bold',
        position: 'absolute',
        right: '5px',
        top: '5px',
 
      }} aria-label='close'
      onClick={(e) => {
        console.log('Close button has been clicked');
      }}>
        <img src={closeIcon} alt="" />
      </button>
      <p> Here is the list of notifications </p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li 
          data-priority="urgent"
          dangerouslySetInnerHTML={{__html: getLatestNotification()}}>
        </li>
      </ul>
    
    </div>
  )
}
