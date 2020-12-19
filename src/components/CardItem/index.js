import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

function CardItem(props) {
  const {
    title = '', active = false, onClick, onRemove,
  } = props;

  const classNameCard = cx({
    carditem: true,
    carditem__active: active,
  });

  return (
    <div
      className={classNameCard}
      onClick={onClick}
      onKeyPress={onClick}
      role="button"
      tabIndex="0"
      aria-label="0"
    >
      <div className={styles.carditem__title}>
        {title || 'Untitled'}
      </div>
      <FontAwesomeIcon icon={faTimesCircle} className={styles.carditem__icon} size="1x" onClick={onRemove} />
    </div>
  );
}

export default CardItem;
