import React, { memo, useCallback } from 'react';

const Modal = ({ show, header, content, footer, onClose }) => {
  const handleOutsideClick = useCallback(
    (e) => e.target === e.currentTarget && onClose(e),
    [onClose]
  );
  return (
    show && (
      <div className="modal__container" onClick={handleOutsideClick}>
        <main className="modal">
          <header className="modal__header">
            <h1 className="title">{header}</h1>
            <button className="close" onClick={onClose}>
              X
            </button>
          </header>
          <section className="modal__content">{content}</section>
          <footer className="modal__footer">
            {footer || (
              <button className="modal-close" onClick={onClose}>
                Cancel
              </button>
            )}
          </footer>
        </main>
      </div>
    )
  );
};

export default memo(Modal);
