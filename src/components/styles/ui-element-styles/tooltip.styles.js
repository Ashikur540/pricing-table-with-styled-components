import styled, { css, keyframes } from "styled-components";

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

export const TooltipTarget = styled.div`
  border: none;
  background: inherit;
  margin: -1px;
  font-size: inherit;
  cursor: pointer;
  color: inherit;
  display: flex;
  ${({ showOnFocus }) =>
    !showOnFocus &&
    css`
      outline: none;
    `};
`;


const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

export const TooltipBoxContainer = styled.div`
  position: absolute;
  max-width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  bottom: calc(100% + 5px);
  transform: translateX(-50%); /* Centers the tooltip */
  pointer-events: none;
  z-index: 10;

  ${({ position }) => {
    switch (position) {
      case "bottom":
        return css`
          bottom: unset !important;
          top: calc(100% + 5px);
        `;
      case "left":
        return css`
          left: auto;
          right: calc(100% + 5px);
          transform: none;
        `;
      case "right":
        return css`
          left: calc(100% + 5px);
          transform: none;
        `;
      default:
        return css`
          bottom: calc(100% + 5px);
        `;
    }
  }}
`;

export const TooltipBox = styled.span`
  background-color: #${(props) => props.background ?? "fff"};  
  border-radius: 4px;
  padding: 5px 10px;
  line-height: 1.5 !important;
  font-size: 14px;
  min-width: 180px;
  max-width: 240px;
  word-wrap: break-word;
  overflow-wrap: break-word; /* Ensures long words break into the next line */
  color: #49687e !important;
  border: 1px solid white;
  box-shadow: 0 0 16px 0 rgba(73, 104, 126, .2);
  z-index: 10 !important;
  animation: ${fadeIn} 0.3s linear;
  
  &:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    border-color: #${(props) => props.background} transparent transparent transparent;
    left: 50%;
    top: 100%;
    transform: translateX(-50%); /* Center the arrow */
  }

  ${({ position }) => {
    switch (position) {
      case "bottom":
        return css`
          &:after {
            border-color: transparent transparent #${(props) => props.background} transparent;
            top: unset;
            bottom: 100%;
          }
        `;
      case "left":
        return css`
          &:after {
            border-color: transparent transparent transparent #${(props) => props.background};
            left: 100%;
            top: 50%;
            transform: translateY(-50%);
          }
        `;
      case "right":
        return css`
          &:after {
            border-color: transparent #${(props) => props.background} transparent transparent;
            right: 100%;
            left: unset;
            top: 50%;
            transform: translateY(-50%);
          }
        `;
      default:
        return css``;
    }
  }}
`;
