/* eslint-disable jsx-a11y/img-redundant-alt */
import { FC } from 'react';

import styles from './style.module.scss';
interface ShopCardProps {
  image: string;
  title: string;
  price: string;
}

export const ShopCard: FC<ShopCardProps> = ({ image, title, price }) => {
  return (
    <div className={styles.shopCardContainer}>
      <img src={image} alt="image" />
      <span>{title}</span>
      <p>{price}</p>
    </div>
  );
};
