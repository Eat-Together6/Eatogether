import styled from "styled-components";

const Button = styled.button`
  background-color: white;
  font-size: 0.9rem;
  padding: 12px 24px;
  border-radius: 0.55rem;
  margin: 25;
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #f3f3f3;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #f3f3f3;
    color: #ff3131;
  }
`;

export const CancelOrderButton = () => {
  return (
    <>
      <Button>주문취소</Button>
    </>
  );
};

export default CancelOrderButton;
