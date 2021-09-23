import { useState, useCallback } from "react";
import styled, { useTheme } from "styled-components";

import PerilModal from "./PerilModal";

import useHover from "../hooks/useHover";
import useMediaQuery from "../hooks/useMediaQuery";

import { Peril as PerilType } from "../utils/types";

export type PerilProps = PerilType;

const PerilIcon = styled.img`
  height: 32px;
  width: 32px;

  @media ${({ theme }) => theme.responsive.mediaQueries.minWidthSm} {
    height: 48px;
    width: 48px;
  }
`;

const PerilTitle = styled.h4`
  margin: 0;
  font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
`;

const PerilShortDescription = styled.p`
  margin: 0;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
`;

const PerilCard = styled.div.attrs({
  role: "button",
})`
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.shape.borderRadius};
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0.5em;
  transition: all 0.125s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    transform: translateY(-4px);
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);

    ${PerilIcon} {
      filter: invert();
    }

    ${PerilTitle} {
      font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    }
  }

  @media ${({ theme }) => theme.responsive.mediaQueries.minWidthSm} {
    gap: 0.5em;
    flex-direction: column;
    align-items: flex-start;

    &:not(:hover) {
      justify-content: space-between;
    }
  }
`;

function Peril({
  title,
  description,
  shortDescription,
  covered,
  exceptions,
  icon,
}: PerilProps) {
  const theme = useTheme();
  const minWidthSm = useMediaQuery(theme.responsive.mediaQueries.minWidthSm);
  const [cardRef, isHovered] = useHover<HTMLDivElement>();
  const [openModal, setOpenModal] = useState(false);

  const openPerilModal = useCallback(() => {
    setOpenModal(true);
  }, []);

  const closePerilModal = useCallback(() => {
    setOpenModal(false);
  }, []);

  return (
    <>
      <PerilCard ref={cardRef} onClick={openPerilModal}>
        {minWidthSm && isHovered ? (
          <>
            <PerilTitle>{title}</PerilTitle>
            <PerilShortDescription>{shortDescription}</PerilShortDescription>
          </>
        ) : (
          <>
            <PerilIcon src={icon} alt={`Icon that represents ${title}`} />
            <PerilTitle>{title}</PerilTitle>
          </>
        )}
      </PerilCard>
      <PerilModal
        open={openModal}
        onClose={closePerilModal}
        title={title}
        description={description}
        covered={covered}
        exceptions={exceptions}
      />
    </>
  );
}

export default Peril;
