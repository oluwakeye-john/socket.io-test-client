import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { emitAction } from "../redux/action";
import { CustomButton } from "./button";
import { SectionContainer, Title } from "./container";
import { useDispatch } from "react-redux";

const EmitBox = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ eventName: "", eventData: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(emitAction(input.eventName, input.eventData));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <SectionContainer>
      <form onSubmit={handleSubmit}>
        <Title>Emit Event</Title>
        <EventInputLabel>
          <span>Event Name</span>
          <EmitInputBox
            required
            name="eventName"
            value={input.eventName}
            placeholder="Event Name"
            onChange={handleChange}
          />
        </EventInputLabel>
        <EventInputLabel>
          <span>Data Type</span>
          <EmitInputBox as="select">
            <option>String</option>
            <option>Number</option>
            <option>Boolean</option>
            <option>Object</option>
          </EmitInputBox>
        </EventInputLabel>
        <EventInputLabel>
          <span>Data</span>
          <EmitInputBox
            required
            value={input.eventData}
            name="eventData"
            placeholder="Event data"
            onChange={handleChange}
          />
        </EventInputLabel>
        <CustomButton>Emit</CustomButton>
      </form>
    </SectionContainer>
  );
};

const EventInputLabel = styled.div`
  margin: 1.5rem 0;

  span {
    display: inline-block;
    margin-bottom: 8px;
    font-weight: 500;
  }
`;

const EmitInputBox = styled.input`
  width: 100%;

  padding: 8px 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;

  appearance: none;
`;

export default EmitBox;
