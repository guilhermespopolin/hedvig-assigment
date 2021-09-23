import styled from "styled-components";

import Modal, { ModalProps } from "./ui/Modal";

import { Peril as PerilType } from "../utils/types";

type PerilModalProps = ModalProps &
  Pick<PerilType, "title" | "description" | "covered" | "exceptions">;

const Paper = styled.div`
  position: relative;
  margin: 2em;
  padding: 1.125em 1.5em;
  width: min(100% - 2em, 600px);
  max-height: calc(100% - 2em);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  overflow: auto;
`;

const CloseButton = styled.button.attrs({
  children: "X",
  "aria-label": "close-modal",
})`
  position: absolute;
  top: 1em;
  right: 1em;
  appearance: none;
  border: none;
  background: none;
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    filter: opacity(60%);
  }
`;

const Description = styled.p`
  margin: 1.5em 0;
`;

const Divider = styled.div`
  margin: 3em 0;
  height: 0.1em;
  background: linear-gradient(
    90deg,
    transparent 0%,
    #000 50%,
    transparent 100%
  );
`;

function PerilModal({
  open,
  onClose,
  title,
  description,
  covered,
  exceptions,
}: PerilModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <Paper>
        <CloseButton onClick={onClose} />
        <h2>{title}</h2>
        <Description>{description}</Description>
        <Divider />
        <section>
          <h3>Coverage</h3>
          <ul>
            {covered.map((itemCovered, idx) => (
              <li key={`itemCovered-${idx}`}>{itemCovered}</li>
            ))}
          </ul>
          <h3>Exceptions</h3>
          <ul>
            {exceptions.map((exception, idx) => (
              <li key={`exception-${idx}`}>{exception}</li>
            ))}
          </ul>
        </section>
      </Paper>
    </Modal>
  );
}

export default PerilModal;
