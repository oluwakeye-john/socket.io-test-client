import styled from "styled-components";
import { CustomButton } from "./button";
import { SectionContainer } from "./container";

const EmitBox = () => {
  return (
    <SectionContainer>
      <div>
        <Title>Emit Event</Title>
        <EventInputLabel>
          <span>Event Name</span>
          <EmitInputBox placeholder="Event Name" />
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
          <EmitInputBox placeholder="Data" />
        </EventInputLabel>
        <CustomButton>Emit</CustomButton>
      </div>
    </SectionContainer>
  );
};

const Title = styled.h2`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme?.colors?.primary};
`;

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
