import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import IconDownOpenMini from "../icons/IconDownOpenMini";
import { Arrow, DropdownContainer, DropdownHeader, DropdownList, DropdownListContainer, ListItem } from "../styles/ui-element-styles/dropdown.styles";
import { dropdownOptions, setVisitorsForGrowth } from "../../features/pricing/pricingSlice";



const Dropdown = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = useSelector(state => state.pricing.selectedVisitors);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    dispatch(setVisitorsForGrowth(option));
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={toggleDropdown}>
        {selectedOption.slice(0, 20)}...
        <Arrow isOpen={isOpen}>
          <IconDownOpenMini />
        </Arrow>
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
          <DropdownList>
            {dropdownOptions.map((option, index) => (
              <ListItem
                key={index}
                onClick={() => handleOptionClick(option)}
                selected={selectedOption === option}
              >
                {option}
              </ListItem>
            ))}
          </DropdownList>
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
