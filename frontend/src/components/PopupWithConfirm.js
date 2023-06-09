import PopupWithForm from "./PopupWithForm";

function PopupWithConfirm({ card, onCardDelete, isOpen, onClose }) {

  function handleSubmit(e) {
    e.preventDefault();
    
    onCardDelete(card);
  }

  return (
    <PopupWithForm
      name="popupConfirm"
      title="Вы уверены?"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      buttonText="Да"
    />
  );
}

export default PopupWithConfirm;