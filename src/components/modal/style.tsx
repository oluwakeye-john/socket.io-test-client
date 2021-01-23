import styled from "styled-components";

export const ModalOverlay = styled.div<{ open?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  transition: 0.3s;
  transition-delay: ${({ open }) => (open ? 0 : "0.15s")};
  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? "all" : "none")};
`;

export const ModalContainer = styled.div<{ open?: boolean }>`
  background-color: #fff;
  padding: 2.5rem 2rem;
  border-radius: 4px;

  width: 30rem;
  transform: ${({ open }) => (open ? "scale(1)" : "scale(0.5)")};

  transition: 0.3s;

  ${({ theme }) => theme?.media?.md} {
    padding: 2.5rem 1rem;
  }
`;

export const ModalContent = styled.div``;

export const Pre = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: justify;
  font-size: 13px;
`;
