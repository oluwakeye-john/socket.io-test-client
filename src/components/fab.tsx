import styled from "styled-components";
import { IoMdHelp } from "react-icons/io";

const FAB = () => {
  return (
    <FABContainer>
      <IoMdHelp size={20} color="#fff" />
    </FABContainer>
  );
};

const FABContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme?.colors?.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default FAB;
