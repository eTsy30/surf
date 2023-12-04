/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Arrow from '@assets/icon/Arrow.svg';
import DownArrow from '@assets/icon/DownArrows.svg';
import BigRoad from '@assets/img/BigRoadShape.svg';
import { SideBar } from '@components/SideBar/SideBar';
import { Tab } from '@components/Tab/Tab';
import { Title } from '@components/Title/Title';
import React from 'react';
import { FC, useEffect, useState } from 'react';

import styles from './style.module.scss';

const tabsCountry = [
  {
    number: '01',
    title: 'North Shore',
  },
  {
    number: '02',
    title: 'South Shore',
  },
  {
    number: '03',
    title: 'West Shore',
  },
  {
    number: '04',
    title: 'East Shore',
  },
];
export const Main = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab === tabsCountry.length - 1 ? 0 : prevTab + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [tabsCountry.length]);

  const [activeTab, setActiveTab] = useState<number>(0);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  const scrollToFooter = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <main className={styles.mainContainer}>
      <h1 className={styles.transparentTitle}>go surf</h1>
      <div className={styles.arrowNawigation}>
        <img
          src={Arrow}
          alt=""
          onClick={() => setActiveTab(activeTab === 0 ? 3 : activeTab - 1)}
        />
        <img
          src={Arrow}
          alt=""
          onClick={() =>
            setActiveTab(activeTab === tabsCountry.length - 1 ? 0 : activeTab + 1)
          }
        />
      </div>
      <img
        src="https://live.verstaem.online/gosurf/img/location.svg"
        alt="BigRoad"
        className={styles.smallRoad}
      />
      <SideBar />
      <div className={styles.mainWrapper}>
        <Title subTitle={'Surf'}>
          <p className={styles.title}>{tabsCountry[activeTab].title}</p>
        </Title>
        <Title subTitle={'Condition'}>
          <div className={styles.titleContainer}>
            <p>Radical</p>
            <img
              src={Arrow}
              alt="Arrow"
              onClick={() =>
                setActiveTab(activeTab === tabsCountry.length - 1 ? 0 : activeTab + 1)
              }
            />
          </div>
        </Title>
        <div className={styles.tabContainer}>
          <a href="#footer" data-scroll="true" onClick={scrollToFooter}>
            <img src={DownArrow} alt="DownArrow" className={styles.downArrow} />
          </a>
          <div className={styles.wrapperTabs}>
            {tabsCountry.map((tab, index) => {
              return (
                <Tab
                  number={tab.number}
                  title={tab.title}
                  key={index}
                  ckick={() => handleTabClick(index)}
                  isActive={activeTab === index ? false : true}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
