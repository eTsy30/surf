import { Footer } from '@components/Footer/Footer';
import { Main } from '@components/Main/Main';
import { Shop } from '@components/Shop/Shop';
import { Sleep } from '@components/Sleep/Sleep';
import { Slider } from '@components/Slider/Slider';
import { Surf } from '@components/Surf/Surf';
import { Travel } from '@components/Travel/Travel';

import styles from './style.module.scss';
export const Home = () => {
  return (
    <main className={styles.mainContainer}>
      <Main />
      <Surf />
      <Slider />
      <Travel />
      <Sleep />
      <Shop />
      <Footer />
    </main>
  );
};
