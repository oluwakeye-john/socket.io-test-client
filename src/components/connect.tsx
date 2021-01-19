import styled from "styled-components";
import { CustomButton } from "./button";

import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { connectAction } from "../redux/action";

export const Connect = () => {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(connectAction(url));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        value={url}
        onChange={handleChange}
        type="url"
        placeholder="Enter url ..."
        required
      />
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
