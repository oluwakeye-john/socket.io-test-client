import { useTypedSelector } from "../redux";
import { ScrollableSectionContent, SectionContainer, Title } from "./container";
import { MdDelete } from "react-icons/md";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteAction } from "../redux/action";

const ResultBox = () => {
  const dispatch = useDispatch();
  const result = useTypedSelector((state) => state?.app?.result);

  const handleDelete = () => {
    dispatch(deleteAction());
  };

  return (
    <SectionContainer>
      <ResultHeading>
        <Title>Result</Title>
        <MdDelete onClick={handleDelete} size={20} />
      </ResultHeading>
      <ScrollableSectionContent>
        {result.map((item: any, index: number) => (
          <div style={{ display: "flex" }} key={index}>
            <p>
              <span>{item.timeStamp}</span>
              {` `}---{` `}
              <span>{item.eventName}</span>
              {` `}---{` `}
              <span>{item.eventData}</span>
            </p>
          </div>
        ))}
      </ScrollableSectionContent>
    </SectionContainer>
  );
};

const ResultHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default ResultBox;
