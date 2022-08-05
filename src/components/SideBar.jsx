import React from "react";
import styles from "../scss/SideBar.module.scss";
import { Avatar } from "@material-ui/core";

function SideBar({ avatar, title, email }) {

  const recentItem = (topic) => {
    return (
      <div className={styles.sidebar__recentItem}>
        <span className={styles.sidebar__hash}>#</span>
        <p>{topic}</p>
      </div>
    )
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        <img src="https://gateway.pinata.cloud/ipfs/QmPoFaaKfjPBmmW2Dh4tMsdc8YLR3swZGS5b6sfZY5uMuL" alt="" />
        <Avatar className={styles.sideber__avatar}/>
        {/* {avatar && (
          <Avatar 
            className={styles.sidebar__avatar} 
            src={avatar} /> )} */}
        <span className={styles.sidebar__title}>{title}</span>
        <span className={styles.sidebar__email}>{email}</span>
      </div>
      <div className={styles.sidebar__stats}>
        <div className={styles.sidebar__stat}>
          <p>Who Viewed You</p>
          <p className={styles.sidebar__statNumber}>2,543</p>
        </div>
        <div className={styles.sidebar__stat}>
          <p>View on Post</p>
          <p className={styles.sidebar__statNumber}>2,543</p>
        </div>
      </div>
      <div className={styles.sidebar__bottom}>
          <p>Recent</p>
          { recentItem("startup") }
          { recentItem('venture capital') }
          { recentItem('softwareengineering') }
          { recentItem('blockchain') }
      </div>
    </div>
  )
}

export default SideBar;