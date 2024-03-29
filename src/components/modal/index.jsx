/* eslint-disable react/prop-types */

import { cloneElement, useState } from "react";
import { createPortal } from "react-dom";

import useOutsideClick from "../../hooks/useOutsideClick";

import "./modal.css";
import { ModalContext, useModal } from "./ModalContext";

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (event) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const value = { isOpen, openModal, closeModal };
  return (
    <div>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
    </div>
  );
};

const Trigger = ({ children }) => {
  const { openModal } = useModal();

  return (
    <div className="btn-container">
      {cloneElement(children, { onClick: openModal })}
    </div>
  );
};

const Content = ({ children }) => {
  const { isOpen, closeModal } = useModal();
  const ref = useOutsideClick(closeModal);

  return createPortal(
    <div className={`modal-container ${!isOpen ? "modal-close" : ""}`}>
      <div ref={ref} className="modal">
        {children}
      </div>
    </div>,
    document.body
  );
};

const Header = ({ children }) => {
  return (
    <div>
      <h2 className="modal-title">{children}</h2>
    </div>
  );
};

const Description = ({ children }) => {
  return (
    <div>
      <p>{children}</p>
    </div>
  );
};

const Footer = ({ children }) => {
  const { closeModal } = useModal();
  return <div>{cloneElement(children, { onClick: closeModal })}</div>;
};

Modal.Trigger = Trigger;
Modal.Content = Content;
Modal.Header = Header;
Modal.Description = Description;
Modal.Footer = Footer;

export default Modal;
