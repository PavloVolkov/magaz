import React from 'react';
import styles from './container.module.css';
import Main from '../main/Main';


const container = () => {
  return (
    <>
      <div className={styles.container}>
        <Main />
      </div>
    </>
  );
};

export default container;
