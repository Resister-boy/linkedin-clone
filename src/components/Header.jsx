import React from "react";
import styles from '../scss/Header.module.scss';
import SearchIcon  from "@material-ui/icons/Search";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon  from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/ChatTwoTone";
import NotificationsIcon from "@material-ui/icons/Notifications"

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__left}>
        <img 
          src="https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1659547586~hmac=0bf356b0efab3b9e971e4555f4a181de" 
          alt="Logo" />
        <div className={styles.header__search}>
          <SearchIcon />
           <input type="text" />
        </div>
      </div>
      <div className={styles.header__right}>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Chat' />
        <HeaderOption Icon={NotificationsIcon} title='Notification' />
        <HeaderOption avatar="https://gateway.pinata.cloud/ipfs/Qmdw63R2isivEup7Wnhd122FkDtzMAVeWPC3BQmhxtXKFM" title="user" />
      </div>
    </div>
  );
}

export default Header;