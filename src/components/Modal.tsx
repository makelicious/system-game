import styled from "styled-components";

const Modal = styled.div`
  background-color: #c3b299;
  width: 768px;
  padding: 3.5rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const ModalForButtons = styled(Modal)`
  padding-bottom: 2.5rem;
`;

export default Modal;
