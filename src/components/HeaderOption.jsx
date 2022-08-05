import { Avatar } from '@material-ui/core';
import React from 'react'
import styles from '../scss/HeaderOption.module.scss';

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className={styles.headerOption}>
      {Icon && <Icon className={styles.headerOption__icon} /> }
      {avatar && (
        <Avatar 
          className={styles.headerOption__icon}
          src={avatar} />
      )}
      <span className={styles.headerOption__title}>{title}</span>
    </div>
  )
}

export default HeaderOption