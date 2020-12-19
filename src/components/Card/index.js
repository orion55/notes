import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';
import styles from './styles.module.css';
import { selectCurItem } from '../../slices/curItemSlice';
import { getCurItem } from '../../selector/item';
import { change } from '../../slices/itemsSlice';

const DEBOUNCE_TIME = 500;

function Card() {
  const curId = useSelector(selectCurItem);
  const curItem = useSelector(getCurItem);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    if (curItem) {
      setTitle(curItem.title);
      setDesc(curItem.desc);
    }
  }, [curItem]);

  const debounceChange = useCallback(debounce((newId, newTitle, newDesc) => {
    dispatch(change({ id: newId, title: newTitle, desc: newDesc }));
  }, DEBOUNCE_TIME), [dispatch, change]);

  const handleTitleChange = (event) => {
    const { value } = event.target;
    setTitle(value);
    debounceChange(curId, value, desc);
  };

  const handleDescChange = (event) => {
    const { value } = event.target;
    setDesc(value);
    debounceChange(curId, title, value);
  };

  return (
    <div className={styles.card}>
      {(!curId) ? (
        <div className={styles.card__nodata}>
          No data found
        </div>
      ) : (
        <>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            className={styles.card__title}
            placeholder="Название"
          />
          <textarea
            value={desc}
            onChange={handleDescChange}
            className={styles.card__desc}
            placeholder="Наберите текст"
          />
        </>
      )}
    </div>
  );
}

export default Card;
