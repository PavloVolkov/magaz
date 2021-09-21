import React from 'react';
import PropTypes from 'prop-types';
import styles from './buttongroup.module.css'

const Buttongroup = props => {
    return (
        <div className={styles.buttonGroup}>
            <div className={styles.button_left}>left</div>
            <div className={styles.button_right}>right</div>
        </div>
    );
};

Buttongroup.propTypes = {
    
};

export default Buttongroup;