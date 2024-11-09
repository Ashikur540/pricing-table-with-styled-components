import { useState } from "react";

import IconDownOpenMini from "../icons/IconDownOpenMini";
import { Arrow, DropdownContainer, DropdownHeader, DropdownList, DropdownListContainer, ListItem } from "../styles/ui-element-styles/dropdown.styles";



export const options = [
  { name: "Up to 150,000 visitors/month", value: 150000 },
  { name: "Up to 300,000 visitors/month", value: 300000 },
  { name: "Up to 500,000 visitors/month", value: 500000 },
  { name: "Up to 1,000,000 visitors/month", value: 1000000 },
  { name: "Up to 2,000,000 visitors/month", value: 2000000 },
];


// Main component
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    { name: "Up to 150,000 visitors/month", value: 150000 },
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };



  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown}>
        {selectedOption.name.slice(0, 20)}...
        <Arrow isOpen={isOpen}>
          <IconDownOpenMini />
        </Arrow>
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
          <DropdownList>
            {options.map((option, index) => (
              <ListItem key={index} onClick={() => handleOptionClick(option)} selected={selectedOption.value === option.value}>
                {option.name}
              </ListItem>
            ))}
          </DropdownList>
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
