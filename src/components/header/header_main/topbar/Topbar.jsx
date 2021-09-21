import React from 'react';
import PropTypes from 'prop-types';
import styles from './topbar.module.css'
const Topbar = props => {
    return (
        <div className={styles.topbar_container}>
            <div className={styles.top_bar}>
                <div className={styles.search_cart}>
                    <span className={styles.search}></span>
                    <span className={styles.cart}></span>
                </div>
                    <div className={styles.sign_group}>
                        <span className={styles.signup}>Sign Up</span>
                        <span className={styles.signin}>Sign In</span>   
                    </div>
            </div>
        </div>
    );
};

Topbar.propTypes = {
    
};

export default Topbar;