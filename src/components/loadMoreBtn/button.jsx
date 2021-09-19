import React from 'react';
import PropTypes from 'prop-types';
import styles from './loadMoreBtn.module.css';
const button = ({ title }) => {
  return (
    <div>
      <button className={styles.button}>{title}</button>
    </div>
  );
};

// button.propTypes = {};

export default button;
