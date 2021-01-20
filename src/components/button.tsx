import styled from "styled-components";

export const CustomButton = styled.button`
  background-color: ${({ theme }) => theme?.colors?.primary};
  font-weight: 500;
  cursor: pointer;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 10px 20px;
  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
`;
