import styled from "styled-components";

export const MarginalContainer = styled.div`
  padding: 0 6rem;
  ${({ theme }) => theme?.media?.md} {
    padding: 0 1.5rem;
  }
`;

export const SectionContainer = styled.div`
  width: 45%;
  /* border-right: 1.2px solid rgba(0, 0, 0, 0.3); */
  background-color: #fff;
  border: 1px solid #f2f2f2;
  min-height: 60vh;
  padding: 2.5rem;

  ${({ theme }) => theme?.media?.md} {
    width: 100%;
  }
`;
