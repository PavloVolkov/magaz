import React from 'react';
import PropTypes from 'prop-types';
import styles from './prodCard.module.css';
const PrCArd = props => {
  return <div className={styles.prcard}>{(props.name, props.idd)}</div>;
};

PrCArd.propTypes = {
  name: PropTypes.string,
  idd: PropTypes.number,
};

export default PrCArd;
