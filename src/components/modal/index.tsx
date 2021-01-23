import { useRef, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../redux";
import { showModalAction } from "../../redux/action";
import { Title } from "../container";
import { ModalContainer, ModalOverlay, Pre } from "./style";

const corsCode = `require("socket.io")(http, {
    cors: { origin: "*" },
});`.trim();

const HelpModal = () => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();
  const helpModal = useTypedSelector((state) => state?.app?.showHelpModal);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef?.current) {
      dispatch(showModalAction(false));
    }
  };

  return (
    <ModalOverlay ref={modalRef} open={helpModal} onClick={handleOverlayClick}>
      <ModalContainer open={helpModal}>
        <Title>⚡ How to connect ⚡</Title>
        <ul>
          <li>
            <p>Update socket-io CORS origin </p>
            <Pre style={{ maxWidth: "100%" }}>
              <code>{corsCode}</code>
            </Pre>
          </li>
          <li>
            <p>Start your backend server</p>
          </li>
          <li>
            <p>Connect and let's rock n roll</p>
          </li>
          <li>
            Any issues?{` `}
            <a
              href="https://github.com/oluwakeye-john/socket.io-test-client"
              target="_blank"
              rel="noreferrer"
            >
              Check our github page.
            </a>
          </li>
        </ul>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default HelpModal;
