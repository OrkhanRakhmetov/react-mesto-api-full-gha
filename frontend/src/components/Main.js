import React, { useContext } from 'react';
import Card from "./Card.js";
import CurrentUserContext from "../contexts/CurrentUserContext";


function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) {
  
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__container">

          <button className="profile__avatar-button" type="button" aria-label="Заменить аватарку" onClick={onEditAvatar}>
            <img src={currentUser.avatar} alt="Аватарка профиля" className="profile__avatar" />
          </button>

          <div className="profile__info">
            <div className="profile__info-name">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button type="button" className="profile__edit-button" aria-label="Редактиовать данные" onClick={onEditProfile}></button>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button" aria-label="Добавить фото" onClick={onAddPlace}></button>
      </section>

      <section className="elements">

        <ul className="elements__list">
          {cards.map(card => (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>

      </section>
    </main>

  );
}

export default Main;