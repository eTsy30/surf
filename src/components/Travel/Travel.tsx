/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable jsx-a11y/img-redundant-alt */
import Arrow from '@assets/icon/Arrow.svg?react';
import { PlainTitle } from '@components/PlainTitle/PlainTitle';
import { SubTitle } from '@components/SubTitle/SubTitle';
import { Title } from '@components/Title/Title';

import { scrollToFooter } from '../../helper/Scroll';
import { plane } from '../../MOCK/Plane';
import styles from './style.module.scss';
export const Travel = () => {
  return (
    <section className={styles.travelContainer} id="travel">
      <SubTitle title="Travel" />
      <div className={styles.imageBackground}>
        <div className={styles.titleContainer}>
          <Title subTitle={'Shore'}>
            <p>Airlie Beach | Australia</p>
          </Title>
          <div className={styles.arrowContainer}>
            <Arrow />
            <Arrow />
          </div>
        </div>
        <div className={styles.titleContainer2}>
          <div className={styles.subTitileWrapper}>
            <span /> <p className={styles.subTitle}>Airline</p>
          </div>
          <div className={styles.lastTitleContainer}>
            <p className={styles.lastTitle}> Virgin Australia</p>
            <img src="https://live.verstaem.online/gosurf/img/bitmap.png" alt="" />
          </div>
        </div>
      </div>
      <div className={styles.plane}></div>
      <div className={styles.aboutPlain}>
        {plane.map((item, index) => {
          return <PlainTitle title={item.title} subTitle={item.supTitle} key={index} />;
        })}
      </div>
      <a href="#main" data-scroll="true" onClick={scrollToFooter}>
        <div className={styles.upSide}>
          <div className={styles.logoBox}>
            <p className={styles.logoText}>surf</p>
            <Arrow />
          </div>
          <span />
          <p className={styles.logoText}> go</p>
        </div>{' '}
      </a>{' '}
      <div className={styles.coctail}></div>
    </section>
  );
};
