import { useTypedSelector } from "../redux";
import { ScrollableSectionContent, SectionContainer, Title } from "./container";
import { MdDelete } from "react-icons/md";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteAction } from "../redux/action";
import ReactJson from "react-json-view";
import { useEffect, useRef } from "react";
import emptyIcon from "../assets/void2.svg";

const ResultBox = () => {
  const dispatch = useDispatch();
  const resultBoxRef = useRef<HTMLDivElement>(null);
  const result = useTypedSelector((state) => state?.app?.result);

  const handleDelete = () => {
    dispatch(deleteAction());
  };

  useEffect(() => {
    if (resultBoxRef && resultBoxRef.current) {
      resultBoxRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [result]);

  return (
    <SectionContainer>
      <ResultHeading>
        <Title>Result</Title>
        <MdDelete onClick={handleDelete} size={20} />
      </ResultHeading>
      <ScrollableSectionContent>
        {result.length > 0 ? (
          <>
            {result.map((item: any, index: number) => {
              let msg = item.eventData;
              let isObject = typeof msg === "object";
              if (!isObject) {
                msg = { msg };
                isObject = true;
              }
              return (
                <ResultItem key={index}>
                  <ResultTimeStamp>{item.timeStamp}</ResultTimeStamp>
                  <p style={{ fontWeight: "bold" }}>{item.eventName}</p>
                  <p>
                    <ReactJson src={msg} />
                  </p>
                </ResultItem>
              );
            })}
          </>
        ) : (
          <>
            <ResultPlaceholder>
              <img src={emptyIcon} alt="empty" />
            </ResultPlaceholder>
          </>
        )}
        <p ref={resultBoxRef}></p>
      </ScrollableSectionContent>
    </SectionContainer>
  );
};

const ResultHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ResultPlaceholder = styled.div`
  width: 90%;
  height: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: 200px;
  }
`;

const ResultItem = styled.div`
  margin: 2rem 0;
`;

const ResultTimeStamp = styled.p`
  color: #6b6b6b;
  font-size: 13px;
`;

export default ResultBox;
