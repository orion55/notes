import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

function AddButton() {
  return (
    <div className={styles.abbbtn__wrap}>
      <button className={styles.addbtn}>
        <FontAwesomeIcon icon={faPlus} className={styles.addbtn__icon} size="1x" />
        <div className={styles.addbtn__text}>New note</div>
      </button>
    </div>
  );
}

export default AddButton;
