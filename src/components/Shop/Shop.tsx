import Arrow from '@assets/icon/Arrow.svg?react';
import Start from '@assets/icon/Star.svg?react';
import Board from '@assets/img/board.avif';
import { ShopCard } from '@components/ShopCard/ShopCard';
import { SubTitle } from '@components/SubTitle/SubTitle';
import { Title } from '@components/Title/Title';
import React from 'react';

import { scrollToFooter } from '../../helper/Scroll';
import { shop } from '../../MOCK/Shop';
import styles from './style.module.scss';
export const Shop = () => {
  return (
    <section className={styles.shopContaoner} id="shop">
      <SubTitle title="Shop" />
      <div className={styles.mainContainer}>
        <div className={styles.arrowContainer}>
          <Arrow />
          <Arrow />
        </div>
        <div className={styles.shopWrapper}>
          <div className={styles.leftSide}>
            <Title subTitle={'Style'}>
              <p>North Nugget TT Surfboard</p>
            </Title>
            <div className={styles.priceContainer}>
              <Start />
              <p>$799</p>
              <span>99</span>
            </div>
            <a href="#main" data-scroll="true" onClick={scrollToFooter}>
              <div className={styles.upSide}>
                <div className={styles.logoBox}>
                  <p className={styles.logoText}>in</p>
                  <Arrow />
                </div>
                <span />
                <p className={styles.logoText}>drop</p>
              </div>
            </a>
          </div>
          <div className={styles.centre}>
            {' '}
            <img src={Board} alt="Board" />
          </div>
          <div className={styles.rightSide}>
            {shop.map((item, index) => {
              return (
                <ShopCard
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
