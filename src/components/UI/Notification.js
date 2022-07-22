import { useSelector } from 'react-redux';

import classes from './Notification.module.css';

const Notification = () => {  
  const { status, message } = useSelector(state => state.notification);
  
  let statusClass = '';
  let statusText = 'Sending...';
  if(status === 'SUCCESS'){
    statusClass = classes.success;
    statusText = 'Success!';
  }
  if(status === 'FAILURE'){
    statusClass = classes.failure;
    statusText = 'Error!';
  }

  return <div className={`${classes.notification} ${statusClass}`}>
    <p><b>{statusText}</b></p>
    <p>{message}</p>
  </div>
};

export default Notification;