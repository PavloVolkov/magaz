import React from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.css'
import Slyder from './slider/slider'
import Header_main from './header_main/Header_main'

const header = props => {
    return (
        <div className={styles.header}>
            <Slyder />
            <Header_main />
        </div>
    );
};

header.propTypes = {
    
};

export default header;