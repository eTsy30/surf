/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC } from 'react';
interface iProp {
  number: string;
  title: string;
  ckick?: () => void;
  isActive?: boolean;
}
import styles from './style.module.scss';
export const Tab: FC<iProp> = ({ number, title, ckick, isActive }) => {
  return (
    <div
      className={isActive ? styles.tabContainer : styles.tabContainerActive}
      onClick={ckick}
    >
      <p>{number}</p>
      <p className={styles.title}>{title}</p>
    </div>
  );
};
