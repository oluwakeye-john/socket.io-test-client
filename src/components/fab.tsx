import styled from "styled-components";
import { IoMdHelp } from "react-icons/io";
import { useDispatch } from "react-redux";
import { showModalAction } from "../redux/action";
import { useCallback, useEffect } from "react";
import { useTypedSelector } from "../redux";

const FAB = () => {
  const dispatch = useDispatch();
  const showHelpModal = useTypedSelector((state) => state?.app?.showHelpModal);

  const toggleHelp = useCallback(
    (val: boolean) => {
      dispatch(showModalAction(val));
    },
    [dispatch]
  );

  useEffect(() => {
    const handleCloseByEscKey = (e: KeyboardEvent) => {
      if (showHelpModal === true && e.code === "Escape") {
        toggleHelp(false);
      }
    };

    window.addEventListener("keydown", handleCloseByEscKey);

    return () => {
      window.removeEventListener("keydown", handleCloseByEscKey);
    };
  }, [showHelpModal, toggleHelp]);

  return (
    <FABContainer onClick={() => toggleHelp(true)}>
      <IoMdHelp size={20} color="#fff" />
    </FABContainer>
  );
};

const FABContainer = styled.button`
  position: fixed;
  cursor: pointer;
  bottom: 20px;
  right: 20px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme?.colors?.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
`;

export default FAB;
