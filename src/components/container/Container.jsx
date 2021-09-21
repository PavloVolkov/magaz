import React from 'react';
import styles from './container.module.css';
import Main from '../main/Main';
import Header from '../header/Header'

const Container = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
      </div>
    </>
  );
};

export default Container;
