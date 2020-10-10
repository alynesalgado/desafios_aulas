import styled from 'styled-components';

export const Container = styled.main`
  padding: 0 10rem;
  margin: 0;
`;

export const PageTitle = styled.h1`
  padding: 2rem 20rem;
  text-align: center;
`

export const UsersList = styled.ul`
  padding-top: 4rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40rem, auto));
  grid-template-rows: auto;
  grid-gap: 10px;
`