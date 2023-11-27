import styled from 'styled-components';

export const Container = styled.div`
  transition: opacity 300ms ease-in-out;

  &:hover {
    opacity: 0.9;
  }
`;

export const PostCardCover = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.small};

  img {
    width: 100%;
    display: block;
  }
`;

export const PostCardHeading = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  a {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;
