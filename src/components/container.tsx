import styled from "styled-components";

export const MarginalContainer = styled.div`
  padding: 0 6rem;
  ${({ theme }) => theme?.media?.md} {
    padding: 0 1.5rem;
  }
`;
