import styled from "styled-components";
import { MarginalContainer } from "./container";

const Navbar = () => {
  return (
    <NavbarContainer>
      <h3>Socket Ping</h3>
      <Indicator>
        <Badge />
        <span>Not connected</span>
      </Indicator>
    </NavbarContainer>
  );
};

const NavbarContainer = styled(MarginalContainer)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.5rem 0;

  h3 {
    margin: 0;
  }
`;

const Indicator = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }
`;

const Badge = styled.div`
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
`;

export default Navbar;
