import React, { useState } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: name,
      link: link
    })
  }

  function handleChangeName(e) {
    setName(e.target.value)
  }

  function handleChangeLink(e) {
    setLink(e.target.value)
  }

  return (
    <PopupWithForm
      name="popupAddCard"
      title="Новое место"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Создать"
    >
      <input
        id="card-name"
        name="name"
        type="text"
        className="popup__input popup__input_name-img"
        placeholder="Название"
        required
        minLength="2"
        maxLength="30"
        value={name}
        onChange={handleChangeName}
      />
      <span className="popup__input-error" id="name-img-error" />
      <input
        id="link-img"
        name="link"
        type="url"
        className="popup__input popup__input_link_img"
        placeholder="Ссылка на картинку"
        required
        value={link}
        onChange={handleChangeLink}
      />
      <span className="popup__input-error" id="link-img-error" />
    </PopupWithForm>
  );
}
export default AddPlacePopup;