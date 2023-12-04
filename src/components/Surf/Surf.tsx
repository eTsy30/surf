/* eslint-disable react/jsx-key */
import DotsMap from '@assets/img/MapDots.svg';
import Point from '@assets/img/PointShape.svg?react';
import { BeachCard } from '@components/BeachCard/BeachCard';
import { SubTitle } from '@components/SubTitle/SubTitle';
import { Title } from '@components/Title/Title';
import { FC } from 'react';

import { beachs } from '../../MOCK/Beach';
import styles from './style.module.scss';
export const Surf: FC = () => {
  return (
    <section className={styles.surContainer} id="surf">
      <SubTitle title="surf" />
      <Point className={styles.shapePoint} />
      <div className={styles.mapContainer}>
        <div className={styles.titleContainer}>
          <Title subTitle={'Current location'}>
            <p className={styles.surfTitle}>California | USA</p>
          </Title>
        </div>
        <p className={styles.geoPosition}>34.0501 N -118.2446 W</p>

        <img src={DotsMap} alt="DotsMap" className={styles.dotsMap} />
        {beachs.map((beach, index) => {
          return (
            <div className={styles.serfPoint} key={index}>
              <div className={styles.innerDiv}>
                <BeachCard
                  title={beach.title}
                  country={beach.country}
                  surf={beach.surf}
                  tide={beach.tide}
                  wind={beach.wind}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
