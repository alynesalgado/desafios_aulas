import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputWrapper = styled.input`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    border: 2px solid ${theme.colors.black};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.light};
    padding: ${theme.spacings.xsmall};
    width: 100%;
  `}
`;
