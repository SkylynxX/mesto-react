import React from 'react';

export function Card(props) {
  function handleCardClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <img className="element__image" src={`${props.card.link}`} alt={`${props.card.name}`} onClick={handleCardClick}/>
      <button className="element__trash" type="button" title="Удалить" aria-label="Удалить"></button>
      <div className="element__group">
        <h2 className="element__group-text">{props.card.name}</h2>
        <div className="element__group-button-like">
          <button className="element__group-button" type="button" title="Лайк" aria-label="Лайк"></button>
          <p className="element__group-button-number">{props.card.likes.length}</p>
        </div>
       </div>
    </li>
  );
}
