import Arrow from '@assets/icon/Arrow.svg?react';

import styles from './style.module.scss';
const currentDate = new Date();

const year = currentDate.getFullYear();

export const Footer = () => {
  return (
    <footer id="footer" className={styles.footerContainer}>
      <div className={styles.upSide}>
        <div className={styles.logoBox}>
          <p className={styles.logoText}>surf</p>
          <Arrow />
        </div>
        <span />
        <p className={styles.logoText}>go</p>
      </div>
      <p className={styles.title}>© Go-Surf {year}. All color:</p>
    </footer>
  );
};
