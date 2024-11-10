
import styled from "styled-components";

// Styled components
export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 15px;
  font-size: 12.5px;
  font-weight: 500;
  color:${({color}) => color ? color : "#a67bc3"}; ;
  background-color: #f7f7f7;
  border: 1px solid ${({ color }) => color ? color : "#a67bc3"};
  border-radius: 6px;
  cursor: pointer;
  gap: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eaeff2;
  }
`;

export const DropdownListContainer = styled.div`
  position: absolute;
  width: 100%;
  background-color: #fff;
  border: 1px solid #eaeff2;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin-top: 5px;
  z-index: 1000;
`;

export const DropdownList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  padding: 8px 16px;
  font-size: .8rem;
  background:${({ selected , hoverColor}) => selected ? hoverColor : "transparent"};
  color:${({ color }) => color ? color : "rgb(73, 104, 126)"};
  cursor: pointer;
  border-bottom: 1px solid #eaeff2;
  &:hover {
    background-color: ${({ hoverColor }) => hoverColor};
  }
`;

export const Arrow = styled.span`
  font-size: 1.2rem;
  color: ${({ color }) => color ? color : "#a67bc3"};
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;
`;
