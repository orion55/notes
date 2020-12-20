import React from 'react';
import styles from './styles.module.css';
import CardList from '../containers/CardList';
import Card from '../containers/Card';
import AddButton from '../containers/AddButton';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app__column}>
        <AddButton />
        <CardList />
      </div>
      <Card />
    </div>
  );
}

export default App;
