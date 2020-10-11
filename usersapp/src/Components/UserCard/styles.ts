import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    border: 1px solid ${theme.colors.gray};
    box-shadow: 2px 2px 4px ${theme.colors.gray};
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    padding: ${theme.spacings.small};
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.large};
    padding-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Name = styled.strong`
  ${({ theme }) => css`
    padding-left: ${theme.spacings.xxsmall};
  `}
`;

export const UserIcon = styled.img`
  ${({ theme }) => css`
    height: 2rem;
    width: 2rem;
    margin-right: ${theme.spacings.xxsmall};
  `}
`;

export const Email = styled.span`
  ${({ theme }) => css`
    width: 100%;
    font-size: ${theme.font.sizes.large};
  `}
`;

export const Address = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
  `}
`;
