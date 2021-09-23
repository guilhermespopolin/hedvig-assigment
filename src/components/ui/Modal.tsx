import React, { FunctionComponent, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

export type ModalProps = {
  open: boolean;
  onClose: () => void;
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal: FunctionComponent<ModalProps> = ({ children, open, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(
    function attachEscapeKeydown() {
      function handleKeyDown(event: KeyboardEvent) {
        if (event.key === "Escape") {
          onClose();
        }
      }

      if (open) {
        document.addEventListener("keydown", handleKeyDown);
      }

      return () => document.removeEventListener("keydown", handleKeyDown);
    },
    [open, onClose]
  );

  if (!open || !children) return null;

  const modalRoot = document.getElementById("modal-root");
  if (modalRoot) {
    return createPortal(
      <Overlay>
        {React.isValidElement(children) &&
          React.cloneElement(children, {
            ref,
          })}
      </Overlay>,
      document.getElementById("modal-root")!
    );
  }

  return null;
};

export default Modal;
