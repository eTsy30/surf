/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Sleep from '@assets/icon/Camp.svg';
import Point from '@assets/icon/point.svg';
import Search from '@assets/icon/Search.svg';
import Shop from '@assets/icon/Shop.svg';
import Surf from '@assets/icon/Surf.svg';
import Travel from '@assets/icon/Travel.svg';
import { FC } from 'react';

import styles from './style.module.scss';
const tabs = [
  {
    icon: Surf,
    text: 'Surf',
  },
  {
    icon: Travel,
    text: 'Travel',
  },
  {
    icon: Sleep,
    text: 'Sleep',
  },
  {
    icon: Shop,
    text: 'Shop',
  },
  {
    icon: Search,
  },
];
const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth();
const day = currentDate.getDate();

export const SideBar: FC = () => {
  return (
    <header className={styles.containerSideBar}>
      <div className={styles.upSide}>
        <div className={styles.logoBox}>
          <p className={styles.logoText}>surf</p>
        </div>
        <span />
        <p className={styles.logoText}> go</p>
      </div>
      <div className={styles.downSide}>
        <nav className={styles.tabContainer}>
          {tabs.map((tab, index) => {
            return (
              <div key={index}>
                <img src={tab.icon} alt="" />
                <span>{tab.text}</span>
              </div>
            );
          })}
        </nav>
        <div className={styles.calendarContainer}>
          <p>{day}</p>
          <p>
            {month + 1} | {year}
          </p>
        </div>
        <div className={styles.geolocationContainer}>
          <img src={Point} alt="Point" />
          <p>California</p>
        </div>
      </div>
    </header>
  );
};
