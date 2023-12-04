import React, { FC } from 'react';

import styles from './style.module.scss';
export const SubTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <div className={styles.container}>
      {' '}
      <h1 className={styles.transparentTitle}>{title}</h1>
      <div className={styles.titleContainer}>
        <span></span>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
  );
};
