import React, { FC } from 'react';
interface Iprops {
  title: string;
  country: string;
  surf: string;
  tide: string;
  wind: string;
}
import Arrow from '@assets/icon/Arrow.svg?react';
import SurfCard from '@assets/icon/SurfCard.svg?react';
import Water from '@assets/icon/Water.svg?react';
import Wind from '@assets/icon/Wind.svg?react';

import styles from './style.module.scss';
export const BeachCard: FC<Iprops> = ({ title, country, surf, tide, wind }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <h4>{title} </h4>
        <Arrow />
      </div>
      <span className={styles.line}></span>
      <p className={styles.subTitle}>{country}</p>
      <div className={styles.wrapperIcon}>
        <div className={styles.iconBlock}>
          <SurfCard />
          <p>{surf}</p>
          <span>Surf (FT)</span>
        </div>
        <div className={styles.iconBlock}>
          <Water />
          <p>{tide}</p>
          <span>Tide (FT)</span>
        </div>
        <div className={styles.iconBlock}>
          <Wind />
          <p>{wind}</p>
          <span>Wind (KTS)</span>
        </div>
      </div>
    </div>
  );
};
