/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import IconDownOpenMini from "../icons/IconDownOpenMini";
import {
  Arrow,
  DropdownContainer,
  DropdownHeader,
  DropdownList,
  DropdownListContainer,
  ListItem
} from "../styles/ui-element-styles/dropdown.styles";
import { setPlanVariant } from "../../features/pricing/pricingSlice";
import { getColor, hexToContrastColor } from "../../lib/helper";
import { useClickOutside } from "../../hooks/useClickOutside";

 
const Dropdown = ({ planName, variants }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const selectedVariant = useSelector(
    state => state.pricing.selectedPlanVariants[planName]
  );
  const ref= useRef(null);
  // close dropdown when clicked outside
  useClickOutside(ref, () => setIsOpen(false));

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (visitorCount) => {
    dispatch(setPlanVariant({ planName, visitorCount }));
    setIsOpen(false);
  };

  return (
    <DropdownContainer ref={ref}>
      <DropdownHeader onClick={toggleDropdown} color={getColor(planName)}>
        {selectedVariant ?? variants[0].visitorCount} visitors/month
        <Arrow isOpen={isOpen} color={getColor(planName)}>
          <IconDownOpenMini />
        </Arrow>
      </DropdownHeader>
      {isOpen && (
        <DropdownListContainer>
          <DropdownList>
            {variants?.map(({ visitorCount }, index) => (
              <ListItem
                color={getColor(planName)}
                key={index}
                onClick={() => handleOptionClick(visitorCount)}
                hoverColor={hexToContrastColor(getColor(planName), 0.1)}
                // initially pre select the first plan variant
                selected={selectedVariant ? selectedVariant === visitorCount : variants[0].visitorCount === visitorCount}
              >
                Up to {visitorCount} visitors/month
              </ListItem>
            ))}
          </DropdownList>
        </DropdownListContainer>
      )}
    </DropdownContainer>
  );
};


export default Dropdown;
