import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import { addItem } from '../../slices/itemsSlice';

function AddButton() {
  const dispatch = useDispatch();

  const onClick = (event) => {
    event.preventDefault();
    dispatch(addItem());
  };

  return (
    <div className={styles.abbbtn__wrap}>
      <button className={styles.addbtn} onClick={onClick}>
        <FontAwesomeIcon icon={faPlus} className={styles.addbtn__icon} size="1x" />
        <div className={styles.addbtn__text}>New note</div>
      </button>
    </div>
  );
}

export default AddButton;
