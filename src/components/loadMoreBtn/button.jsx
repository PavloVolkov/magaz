import React from "react";
import styles from './loadMoreBtn.module.css';

const Button = ({ type = 'button', label, disabled }) => {
    const btnClasses = [styles.button];
    const titleBtn = [styles.titleBtn];
    if (disabled) {
      btnClasses.push(styles.disabled);
    }
  
    return (
      <button className={btnClasses.join(' ')} type={type} name="load_more">
        <span className={titleBtn}>load more</span> 
      </button>
    );
  };

  export default Button;
