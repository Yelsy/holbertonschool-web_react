import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import  { getLatestNotification }  from '../utils/utils';
import NotificationItem from './NotificationItem';

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
        <NotificationItem data-priority='default'>New course available</NotificationItem>
        <NotificationItem data-priority='urgent'>New resume available</NotificationItem>
        <NotificationItem 
          data-priority="urgent"
          dangerouslySetInnerHTML={{__html: getLatestNotification()}}>
        </NotificationItem>
      </ul>
    
    </div>
  )
}
