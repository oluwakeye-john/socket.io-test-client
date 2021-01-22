import styled from "styled-components";
import { CustomButton } from "./button";

import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { connectAction, disconnectAction } from "../redux/action";
import { useTypedSelector } from "../redux";

export const Connect = () => {
  const [url, setUrl] = useState("");
  const dispatch = useDispatch();
  const connected = useTypedSelector((state) => state?.app?.connected);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!connected) {
      dispatch(connectAction(url));
    } else {
      dispatch(disconnectAction());
    }
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
        placeholder="https://your.url"
        required
      />
      <CustomButton type="submit">
        {connected ? "Disconnect" : "Connect"}
      </CustomButton>
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
