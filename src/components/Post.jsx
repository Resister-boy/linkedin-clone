import React from 'react';
import styles from '../scss/Post.module.scss'
import InputOption from './InputOption';
import { Avatar } from '@material-ui/core';
import ThumUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

function Posts({ name, description, message, photoUrl }) {

  return (
    <div className={styles.Post}>
      <div className={styles.Post__header}>
        <Avatar />
        <div className={styles.Post__info}>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className={styles.Post__body}>
        <p>{message}</p>
      </div>
      <div className={styles.Post__button}>
        <InputOption Icon={ThumUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlinedIcon} title="Share" color="gray" />
        <InputOption Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  )
}

export default Posts