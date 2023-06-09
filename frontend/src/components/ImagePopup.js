import React from "react";

function ImagePopup({ card, onClose }) {

  React.useEffect(() => {
    function handleEscClose(e) {
      if (e.key === 'Escape') {
        // console.log(e.target)
        onClose()
      }
    }

    if (card) {
      window.addEventListener("keydown", handleEscClose);
      return () => window.removeEventListener("keydown", handleEscClose)
    }

  }, [onClose, card])

  function closePopupByClickOnOverlay(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <section
      className={`popup popup_img_enlarge ${card.link ? 'popup_active' : ''}`}
      id="popupBigImg"
      onMouseDown={closePopupByClickOnOverlay}
    >
      <div className="popup__enlarge-container">
        <img className="popup__big-img" src={card.link} alt={card.name} />
        <p className="popup__img-desc">{card.name}</p>
        <button type="button" className="popup__close" aria-label="Закрыть попап" onClick={onClose}></button>
      </div>
    </section>
  )
};

export default ImagePopup;