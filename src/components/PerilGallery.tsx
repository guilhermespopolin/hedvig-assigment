import styled from "styled-components";

import Peril from "./Peril";

import usePerils from "../hooks/usePerils";

const PerilGalleryStyled = styled.section`
  width: min(100% - 2em, ${({ theme }) => theme.responsive.breakpoints.sm});
  padding: 0 2em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-auto-rows: 60px;
  grid-gap: 1em;

  @media ${({ theme }) => theme.responsive.mediaQueries.minWidthSm} {
    grid-auto-rows: 160px;
  }
`;

function PerilGallery() {
  const { perils } = usePerils();

  return (
    <PerilGalleryStyled>
      {perils.map((peril) => (
        <Peril key={peril.title} {...peril} />
      ))}
    </PerilGalleryStyled>
  );
}

export default PerilGallery;
