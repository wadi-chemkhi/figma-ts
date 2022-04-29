import styled from "styled-components";
interface NavButtonProps {
  selected: boolean;
}
const NavButton = styled.button<NavButtonProps>`
  font-size: 20px;
  color: black;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  cursor: pointer;
  border: 0;
  outline: 0;
  background-color: transparent;
  text-transform: uppercase;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  ${({ selected }) =>
    selected &&
    `
    color: #5ECE7B;
    border-bottom: 2px solid #5ECE7B;
    opacity: 1;
  `}
`;
export default NavButton;
