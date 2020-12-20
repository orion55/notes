import classNames from 'classnames';
import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBan, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.css';

Modal.setAppElement('#root');

export default function MainModal({
  className, children, isShow, onClose,
}) {
  return (
    <Modal
      isOpen={isShow}
      contentLabel="modal"
      onRequestClose={onClose}
      overlayClassName={styles.modal__overlay}
      className={classNames(styles.modal__main, className)}
      portalClassName="modal"
    >
      <div
        className={styles.modal__close_icon}
        onClick={onClose}
        onKeyPress={onClose}
        role="button"
        tabIndex="0"
        aria-label="0"
      >
        <FontAwesomeIcon icon={faTimes} className={styles.modal__icon} size="1x" />
      </div>
      {children}
    </Modal>
  );
}

export function ContentModal({
  className, isShow, title, text, children, btnText = '', btnTextTwo = '', onBtnClick, onClose,
}) {
  return (
    <MainModal className={classNames(styles.contentModal, className)} isShow={isShow} onClose={onClose}>
      <div className={styles.contentModal__container}>
        {title && <div className={styles.contentModal__title}>{title}</div>}
        {text && <div className={styles.contentModal__text}>{text}</div>}
        {children && (
        <div className={styles.contentModal__content}>
          {children}
        </div>
        )}
        <div className={styles.contentModal__btn}>
          {onBtnClick && (
            <button onClick={onBtnClick} className={`${styles.contentModal__button} ${styles.contentModal__button__red}`}>
              <FontAwesomeIcon icon={faCheck} className={styles.contentModal__button__icon} size="1x" />
              <div className={styles.contentModal__button__text}>{btnText}</div>
            </button>
          )}
          <button onClick={onClose} className={styles.contentModal__button}>
            <FontAwesomeIcon icon={faBan} className={styles.contentModal__button__icon} size="1x" />
            <div className={styles.contentModal__button__text}>{btnTextTwo}</div>
          </button>
        </div>

      </div>
    </MainModal>
  );
}
