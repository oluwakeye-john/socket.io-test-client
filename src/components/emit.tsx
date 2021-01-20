import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { emitAction } from "../redux/action";
import { CustomButton } from "./button";
import { SectionContainer, Title } from "./container";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../redux";

interface EmitState {
  eventName: string;
  eventData: any;
  type: "string" | "boolean" | "object" | "number";
}

const EmitBox = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState<EmitState>({
    eventName: "",
    eventData: "",
    type: "string",
  });
  const isConnected = useTypedSelector((state) => state?.app?.connected);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let payload;
    console.log({ input });

    try {
      if (input.type === "boolean") {
        payload = Boolean(input.eventData);
      } else if (input.type === "string") {
        payload = String(input.eventData);
      } else if (input.type === "number") {
        payload = Number(input.eventData);
      } else if (input.type === "object") {
        payload = JSON.parse(input.eventData);
      }
      dispatch(emitAction(input.eventName, payload));
    } catch {
      alert("error transforming stuffs");
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const payload = { ...input, [name]: value };

    if (name === "type") {
      setInput({ ...payload, eventData: "" });
    } else {
      setInput(payload);
    }
  };

  let as: null | string = "input";

  if (input.type === "object") {
    as = "textarea";
  }

  console.log({ as });

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
          <EmitInputBox
            as="select"
            value={input.type}
            name="type"
            onChange={handleChange}
          >
            <option value="string">String</option>
            <option value="number">Number</option>
            <option value="boolean">Boolean</option>
            <option value="object">Object</option>
          </EmitInputBox>
        </EventInputLabel>
        <EventInputLabel>
          <span>Data</span>
          {input.type === "number" && (
            <NormalInput
              type="number"
              onChange={handleChange}
              value={input.eventData}
            />
          )}
          {input.type === "string" && (
            <NormalInput onChange={handleChange} value={input.eventData} />
          )}
          {input.type === "object" && (
            <TextAreaInput onChange={handleChange} value={input.eventData} />
          )}
          {input.type === "boolean" && (
            <BooleanInput onChange={handleChange} value={input.eventData} />
          )}
        </EventInputLabel>
        <CustomButton disabled={!isConnected}>Emit</CustomButton>
      </form>
    </SectionContainer>
  );
};

const TextAreaInput = ({ value, onChange }: any) => {
  const [error, setError] = useState(false);

  const handleChange = (e: any) => {
    try {
      const { value } = e.target;
      JSON.parse(value);
      setError(false);
    } catch {
      setError(true);
    }
    onChange(e);
  };
  return (
    <EmitInputBox
      error={error}
      required
      rows={5}
      as="textarea"
      value={value}
      name="eventData"
      placeholder="Event data"
      onChange={handleChange}
    />
  );
};

const NormalInput = ({ value, onChange, type = "text" }: any) => {
  return (
    <EmitInputBox
      required
      type={type}
      value={value}
      name="eventData"
      placeholder="Event data"
      onChange={onChange}
    />
  );
};

const BooleanInput = ({ onChange, value }: any) => {
  return (
    <div>
      <label>
        True
        <input
          name="eventData"
          type="radio"
          value={"true"}
          onChange={onChange}
        />
      </label>
      <label>
        False
        <input name="eventData" type="radio" value={""} onChange={onChange} />
      </label>
    </div>
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

const EmitInputBox = styled.input<{ error?: boolean }>`
  width: 100%;
  padding: 8px 10px;
  border: 1px solid
    ${({ error }) => (error ? "transparent" : "rgba(0, 0, 0, 0.2)")};

  border-radius: 4px;
  box-shadow: ${({ error }) => error && "0 0 0 1.2px #Ff4411"};

  appearance: none;
  &:focus {
    outline: none;
  }
`;

export default EmitBox;
