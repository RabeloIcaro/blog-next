import styled, { css } from 'styled-components';

export const Container = styled.img`
  ${({ theme }) => css`
    max-width: 100%;
    margin-bottom: ${theme.spacings.medium};
  `}

  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;
