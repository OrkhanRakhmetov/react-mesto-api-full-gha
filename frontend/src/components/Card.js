import React, { useContext } from 'react';
import CurrentUserContext from "../contexts/CurrentUserContext";


function Card({ card, onCardClick, onCardLike, onCardDelete }) {

  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  const cardLikeButtonClassName = (
    `element__heart ${isLiked && "element_heart-active"}`
  );

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="element">
      <button type="button" className="element__button-img">
        <img className="element__img" src={card.link} alt={card.name} onClick={handleClick} />
      </button>

      <div className="element__desc">
        <h2 className="element__title">{card.name}</h2>

        <div className="element__heart-block">
          <button type="button" className={cardLikeButtonClassName} aria-label="Лайк" onClick={handleLikeClick}></button>
          <p className="element__number_of-likes">{card.likes.length}</p>
        </div>

        {isOwn && <button type="button" className="element__delete" aria-label="Удаление" onClick={handleDeleteClick} />}

      </div>
    </li>
  )
}

export default Card;