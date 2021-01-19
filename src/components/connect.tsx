import styled from "styled-components";

export const Connect = () => {
  return (
    <StyledForm>
      <StyledInput type="url" placeholder="Enter url..." required />
      <StyledButton type="submit">Connect</StyledButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
`;

const StyledInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 7px 20px;
  width: 30%;
  border-radius: 4px;
  margin-right: 20px;

  &:focus {
    outline: none;
  }
  ${({ theme }) => theme?.media?.md} {
    width: 100%;
  }
`;

const StyledButton = styled.button`
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
`;

export default Connect;
