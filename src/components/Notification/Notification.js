import { NotificationManager } from 'react-notifications';

export function notification(type) {
  return () => {
    switch (type) {
      case 'success':
        NotificationManager.success('Success!');
        break;
      case 'warning':
        NotificationManager.warning('Check the data!');
        break;
      case 'error':
        NotificationManager.error('Oops..');
        break;
    }
  };
}
