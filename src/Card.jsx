import React from 'react';
import styles from './card.module.css';
import data from './data.json';
function Card(props) {
    return (
      <div className={styles.card}>
        {data.cards.map(card => (
          <div key={card.title}>
            <h2 className={styles.title}>{card.title}</h2>
            <p className={styles.description}>{card.description}</p>
          </div>
        ))}
      </div>
    );
  }
  export default Card;
  