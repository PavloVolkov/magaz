import React from 'react';
import PropTypes from 'prop-types';
import styles from './header_main.module.css'
import Topbar from './topbar/Topbar'
import Titlebox from './titlebox/Titlebox'
import Buttongroup from './buttongroup/Buttongroup'

const Header_main = props => {
    return (
            <div className={styles.header_main}>
                   <Topbar />
                   <Titlebox />
                   <Buttongroup />
            </div> 
    );
};

Header_main.propTypes = {
    
};

export default Header_main;