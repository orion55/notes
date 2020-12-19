import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import { selectItems } from '../../slices/itemsSlice';
import styles from './styles.module.css';
import CardItem from '../../components/CardItem';
import { selectCurItem, setItem } from '../../slices/curItemSlice';

function CardList() {
  const cardItems = useSelector(selectItems);
  const curItem = useSelector(selectCurItem);
  const dispatch = useDispatch();

  const onClick = (event, id) => {
    event.preventDefault();
    dispatch(setItem(id));
  };

  const onRemove = (event, id) => {
    event.stopPropagation();
    console.log(`remove: ${id}`);
  };

  const getCardsList = () => cardItems.map((item) => (
    <CardItem
      key={item.id}
      {...item}
      onClick={(event) => onClick(event, item.id)}
      onRemove={(event) => onRemove(event, item.id)}
      active={item.id === curItem}
    />
  ));

  return (
    <div className={styles.cardlist}>
      {isEmpty(cardItems) ? (<div className={styles.cardlist__nodata}>No data found</div>) : getCardsList()}
    </div>
  );
}

export default CardList;
