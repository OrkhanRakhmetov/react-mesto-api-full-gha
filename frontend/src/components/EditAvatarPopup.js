import React, { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatar = useRef()

  useEffect(() => {
    avatar.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatar.current.value 
    })
  }
    return (
      <PopupWithForm
        name="popupNewAvatar"
        title="Обновить аватар"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
        buttonText="Сохранить"
      >
        <input
          id="urlAvatar"
          name="link"
          type="url"
          className="popup__input"
          placeholder="Ссылка на картинку"
          required
          ref={avatar}
        />
        <span className="popup__input-error" id="urlAvatar-error" />
      </PopupWithForm>
    )
  }
  export default EditAvatarPopup;