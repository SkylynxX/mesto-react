import React from 'react';
import avatar from './../images/avatar-image.jpg'
import api from '../utils/api';
import {Card} from './Card';

export function Main({onEditAvatarClick, onEditProfileClick, onAddPlaceClick, onCardClick}) {
  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState(avatar);
  const [cards, setCards] = React.useState([]);
  
  React.useEffect(() => {
    api.getUserInfo()
    .then((rxUserInfo) => { 
      setUserName(rxUserInfo.name);
      setUserDescription(rxUserInfo.about);
      setUserAvatar(rxUserInfo.avatar);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  React.useEffect(() => {
    api.getInitialCards()
    .then((initialCards) => {
      setCards(initialCards);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  
  return(
    <main className="page">
      <section className="profile">
        <a className="profile__avatar-link" href="#" onClick={onEditAvatarClick}>
          <img className="profile__avatar" src={userAvatar} alt="аватарка профиля" />
        </a>
        <div className="profile__info">
          <div className="profile__title-box">
            <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button" type="button" title="Редактировать профиль" aria-label="Редактировать профиль" onClick={onEditProfileClick}></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
          <button className="profile__add-button" type="button" title="Добавить фотографию" aria-label="Добавить фотографию" onClick={onAddPlaceClick}></button>
        </div>
      </section>
      <section className="cards">
        <ul className="elements">
          {cards.map((item, i) => {
              return (<Card
              key={item._id}
              card={item}
              onCardClick={onCardClick}
            />)
          })}
        </ul>
      </section>
    </main>
  )
}