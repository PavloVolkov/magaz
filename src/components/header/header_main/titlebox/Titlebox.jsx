import React from 'react';
import PropTypes from 'prop-types';
import styles from './titlebox.module.css'

const Titlebox = props => {
    return (
        <div className={styles.title_box}>
            <div className={styles.title}>Kembang Flower Mantap</div>
            <div className={styles.description}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`}</div>
        </div>
    );
};

Titlebox.propTypes = {
    
};

export default Titlebox;