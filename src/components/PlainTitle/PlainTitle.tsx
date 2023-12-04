import React, { FC } from 'react';

import styles from './style.module.scss';
export const PlainTitle: FC<{ title: string; subTitle: string; counter?: boolean }> = ({
  title,
  subTitle,
  counter,
}) => {
  return (
    <div className={styles.plainTitleContainer}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <h4>{title}</h4>
        {counter && (
          <div
            style={{
              display: 'flex',

              justifyContent: 'flex-end',
            }}
          >
            <button className={styles.button}>+</button>
            <button className={styles.button}>-</button>
          </div>
        )}{' '}
      </div>
      <p>{subTitle}</p>
    </div>
  );
};
