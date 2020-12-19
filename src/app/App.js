import React from 'react';
import styles from './styles.module.css';
import CardList from '../containers/CardList';
import Card from '../components/Card';

function App() {
  return (
    <div className={styles.app}>
      <CardList />
      <Card />
    </div>
  );
}

export default App;
