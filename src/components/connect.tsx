import styled from "styled-components";
import { CustomButton } from "./button";

export const Connect = () => {
  return (
    <StyledForm>
      <StyledInput type="url" placeholder="Enter url ..." required />
      <CustomButton type="submit">Connect</CustomButton>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;

  ${({ theme }) => theme?.media?.md} {
    width: 100%;
  }
`;

const StyledInput = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 7px 20px;
  width: 100%;
  border-radius: 4px;
  margin-right: 20px;

  &:focus {
    outline: none;
  }
  ${({ theme }) => theme?.media?.md} {
    width: 100%;
  }
`;

export default Connect;
