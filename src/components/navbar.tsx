import styled from "styled-components";
import Connect from "./connect";
import { MarginalContainer } from "./container";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Label>Socket Ping</Label>
      <Connect />
      <Indicator>
        <Badge />
        <span>Connected</span>
      </Indicator>
    </NavbarContainer>
  );
};

const NavbarContainer = styled(MarginalContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  background-color: #fff;
  border: 1px solid #f2f2f2;

  ${({ theme }) => theme?.media?.md} {
    flex-direction: column;
  }
`;

const Label = styled.h3`
  margin: 0;

  ${({ theme }) => theme?.media?.md} {
    align-self: flex-start;
    margin: 1rem 0;
  }
`;

const Indicator = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }

  ${({ theme }) => theme?.media?.md} {
    margin: 1rem 0;
  }
`;

const Badge = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${({ theme }) => theme?.colors?.connected};
  border-radius: 50%;
`;

export default Navbar;
