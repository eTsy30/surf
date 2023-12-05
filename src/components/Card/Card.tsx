/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Arrow from '@assets/icon/Arrow.svg?react';
import { FC } from 'react';

import styles from './style.module.scss';
interface Iprop {
  image: string;
  title: string;
  supTitle: string;
}
export const Card: FC<Iprop> = ({ image, title, supTitle }) => {
  return (
    <>
      {' '}
      <div
        className={styles.cardContainer}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {' '}
        <h3>{title}</h3>
        <p className={styles.supTitle}>{supTitle}</p>
        <div className={styles.upSide}>
          <div className={styles.logoBox} onClick={() => alert('ghj')}>
            <p className={styles.logoText}>surf</p>
            <Arrow />
          </div>

          <span />
          <p className={styles.logoText}> go</p>
        </div>
      </div>
    </>
  );
};
