import React from 'react';
import styles from './Notification.module.css';

const Notification = ({ message }) => {
  return <div className={styles.note}>{message}</div>;
};

export default Notification;
