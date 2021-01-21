import styled from "styled-components";

export const MarginalContainer = styled.div`
  padding: 0 6rem;
  ${({ theme }) => theme?.media?.md} {
    padding: 0 1.5rem;
  }
`;

export const SectionContainer = styled.div`
  width: 45%;
  background-color: #fff;
  border: 1px solid #f2f2f2;
  min-height: 60vh;
  padding: 2.5rem;

  ${({ theme }) => theme?.media?.md} {
    width: 100%;
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const ScrollableSectionContent = styled.div`
  height: 50vh;
  overflow-y: auto;
  font-size: 14px;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme?.colors?.primary};
`;
