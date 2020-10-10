import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border: 1px solid gray;
    border-radius: 4px;
    box-shadow: 2px 2px 2px #cccccc;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding: 2rem;

    strong {
      padding-left: 1rem;
    }
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.large};
    padding-bottom: 8px;
    display: flex;
    align-items: center;
  `}
`;

export const UserIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`;

export const Email = styled.span`
  width: 100%;
`;

export const Address = styled.span`
  color: gray;
`;
