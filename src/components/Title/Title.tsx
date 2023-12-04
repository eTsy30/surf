import { Children, FC, ReactNode } from 'react';

import styles from './style.module.scss';
interface iProp {
  subTitle: string;
  children: ReactNode;
}
export const Title: FC<iProp> = ({ subTitle, children }) => {
  return (
    <div className={styles.titleContainer}>
      <div className={styles.subTitileWrapper}>
        <span /> <p className={styles.subTitle}>{subTitle}</p>
      </div>
      {children}
    </div>
  );
};
