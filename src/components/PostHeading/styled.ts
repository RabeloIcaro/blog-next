import styled, { css } from 'styled-components';

export const Container = styled.h2`
  ${({ theme }) => css`
    fton-size: ${theme.font.sizes.superLarge};
    margin: ${theme.spacings.large};
    text-align: center;
  `}
`;
