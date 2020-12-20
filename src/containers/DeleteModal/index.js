import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import find from 'lodash/find';
import { ContentModal } from '../../components/MainModal';
import { removeItem } from '../../slices/itemsSlice';

function DeleteModal(props) {
  const { id, isShow, onClose } = props;
  if (!id) return null;

  const dispatch = useDispatch();

  const cardItems = useSelector((state) => state.cardItems);
  const curItem = find(cardItems, { id });
  if (!curItem) return null;

  const onRemove = (event) => {
    event.preventDefault();
    dispatch(removeItem(id));
    onClose(event);
  };

  return (
    <ContentModal
      isShow={isShow}
      onClose={onClose}
      onBtnClick={onRemove}
      title="Вы действительно удалить запись?"
      btnText="Да"
      btnTextTwo="Нет"
      text={curItem.title}
    />
  );
}

export default DeleteModal;
