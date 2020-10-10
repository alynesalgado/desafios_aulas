import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.main``;

export const PageTitle = styled.h1`
  ${({ theme }) => css`
    padding: ${theme.spacings.small};
    text-align: center;
  `}
`;

export const UsersList = styled.ul`
  ${({ theme }) => css`
    display: grid;
    grid-gap: 10px;
    grid-template-rows: auto;
    padding-top: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(auto-fit, minmax(40rem, auto));
    `}
  `}
`;
