import React from 'react';
import styles from '../scss/InputOption.module.scss';

function InputOption({ Icon, title, color }) {
  return (
    <div className={styles.InputOption}>
      <Icon style={{ color: color }}/>
      <h4>{title}</h4>
    </div>
  )
}

export default InputOption