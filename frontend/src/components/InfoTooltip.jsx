import React from "react";
import InfoTooltipSuccess from "../images/svg/InfoTooltipSuccess.svg";
import InfoTooltipError from "../images/svg/InfoTooltipError.svg";

function InfoTooltip({ isOpen, onClose, isSuccess, infoTextSuccess, infoTextError ,errorText}) {

  React.useEffect(() => {
    function handleEscClose(e) {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      window.addEventListener("keydown", handleEscClose);
      return () => window.removeEventListener("keydown", handleEscClose)
    }

  }, [onClose, isOpen])

  function closePopupByClickOnOverlay(e) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (

    <section
    className={`popup ${isOpen ? "popup_active" : ""}`}
    onMouseDown={closePopupByClickOnOverlay}
    >
      <div className="popup__container">
        <div className="popup__success">

          {/* {isSuccess ?
            (<img className="popup__success-image" src={InfoTooltipSuccess} alt="Success" />) :
            (<img className="popup__success-image" src={InfoTooltipError} alt="Error" />)} */}

          <img
            className="popup__success-image"
            src={isSuccess ? InfoTooltipSuccess : InfoTooltipError}
            alt={isSuccess ? 'Success' : 'Error'}
          />{/* {isSuccess ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."} */}

          <span className="popup__success-text">
            
            {/* {isSuccess ?  infoTextSuccess  :  infoTextError } */}
            {errorText}

          </span>

        </div>

        <button
          type="button"
          className="popup__close"
          aria-label="Закрыть попап"
          onClick={onClose}
        />
      </div>
    </section>
  )
}

export default InfoTooltip;