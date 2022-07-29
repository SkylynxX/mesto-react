import React from 'react';
import '../index.css';
import {Footer} from './Footer';
import {Header} from './Header';
import {Main} from './Main';
import {PopupWithForm} from './PopupWithForm';
import {ImagePopup} from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
  }



  return (
    <div className="page">
      <Header />
      <Main 
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleCardClick}
        />
      <Footer />

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input className="popup__input popup-profile__input-name" id="input-name" type="text" autoComplete="off" required name="name" minLength="2" maxLength="40" placeholder="Логин" />
        <p className="popup__input-error input-name-error"></p>
        <input className="popup__input popup-profile__input-info" id="input-description"  type="text" autoComplete="off" required name="about" minLength="2" maxLength="200" placeholder="Информация о пользователе" />
        <p className="popup__input-error input-description-error"></p>
      </PopupWithForm>
      <PopupWithForm
        name="new-item"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input className="popup__input popup-new-item__input-name" id="input-item-name" type="text" autoComplete="off" required name="name" minLength="2" maxLength="30" placeholder="Название" />
        <p className="popup__input-error input-item-name-error"></p>
        <input className="popup__input popup-new-item__input-link" id="input-item-url" type="url" autoComplete="off" required name="link" placeholder="Ссылка на картинку" />
        <p className="popup__input-error input-item-url-error"></p>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
        
      <PopupWithForm
        name="avatar-update"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input className="popup__input popup-avatar-update__input-link" id="popup-avatar-update-url" type="url" autoComplete="off" required name="avatar" placeholder="Ссылка на картинку" />
        <p className="popup__input-error popup-avatar-update-url-error"></p>
      </PopupWithForm>
    </div>
  );
}

export default App;
