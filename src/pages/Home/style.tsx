import styled from "styled-components";
import { MarginalContainer } from "../../components/container";

export const HomeContainer = styled(MarginalContainer)`
  margin-top: 4rem;

  ${({ theme }) => theme?.media?.md} {
    margin-top: 2rem;
  }
`;

export const HomeFlex = styled.div`
  display: flex;
  justify-content: space-between;

  ${({ theme }) => theme?.media?.md} {
    flex-direction: column;
  }
`;
