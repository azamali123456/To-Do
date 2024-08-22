import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme, $variant }) =>
    $variant === "primary"
      ? theme.colors.buttons.primary
      : theme.colors.buttons.secondary};
  color: ${({ theme }) => theme.colors.text.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttons.secondary};
  }
`;
