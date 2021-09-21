import React from 'react';
import PropTypes from 'prop-types';
import styles from './prodCard.module.css';
const PrCArd = ({name, pos}) => {
  return <div className={styles.prcard}>{(name)}{(pos)} </div>;
};

PrCArd.propTypes = {
  name: PropTypes.string,
  pos: PropTypes.number,
};

export default PrCArd;
