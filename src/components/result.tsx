import { useTypedSelector } from "../redux";
import { ScrollableSectionContent, SectionContainer, Title } from "./container";
import { MdDelete } from "react-icons/md";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { deleteAction } from "../redux/action";
import ReactJson from "react-json-view";
import { useEffect, useRef } from "react";

const ResultBox = () => {
  const dispatch = useDispatch();
  const resultBoxRef = useRef<HTMLDivElement>(null);
  const result = useTypedSelector((state) => state?.app?.result);

  const handleDelete = () => {
    dispatch(deleteAction());
  };

  useEffect(() => {
    if (resultBoxRef && resultBoxRef.current) {
      console.log("here");
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
        {result.map((item: any, index: number) => {
          let msg = item.eventData;
          console.log("msg", msg, typeof msg);
          let isObject = typeof msg === "object";
          if (!isObject) {
            msg = { msg };
            isObject = true;
          }
          return (
            <div key={index} style={{ margin: "2rem 0" }}>
              <p style={{ display: "flex" }}>{item.timeStamp}</p>
              <p style={{ fontWeight: "bold" }}>{item.eventName}</p>
              <p>
                <ReactJson src={msg} />
              </p>
            </div>
          );
        })}
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

export default ResultBox;
