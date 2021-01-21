import styled from "styled-components";
import { useTypedSelector } from "../redux";
import Connect from "./connect";
import { MarginalContainer } from "./container";

const Navbar = () => {
  const isConnected = useTypedSelector((state) => state.app.connected);

  return (
    <NavbarContainer>
      <Label>Socket Client</Label>
      <Connect />
      <Indicator>
        <Badge active={isConnected} />
        <span>{isConnected ? "Active " : "Passive"}</span>
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
    width: 100%;
    width: unset;
  }
`;

const Badge = styled.div<{ active: boolean }>`
  width: 10px;
  height: 10px;
  transition: 0.2s;
  background-color: ${({ theme, active }) =>
    active ? theme?.colors?.connected : theme?.colors?.notConnected};
  border-radius: 50%;
`;

export default Navbar;
