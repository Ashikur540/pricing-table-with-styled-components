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

export const TooltipBoxContainer = styled.div`
  position: absolute;
  width: 200px;
  margin-left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  bottom: calc(100% + 5px);
  pointer-events: none;

  ${({ position }) => {
    switch (position) {
      case "bottom":
        return css`
          bottom: unset !important;
          top: calc(100% + 5px);
        `;
      case "left":
        return css`
          margin-right: 0;
          width: 100%;
          left: unset;
          top: 50%;
          right: calc(100% + 5px);
          width: max-content;
        `;
      case "right":
        return css`
          margin-left: 0;
          width: 100%;
          top: 50%;
          left: calc(100% + 5px);
          width: max-content;
        `;
      default:
        return css`
          bottom: calc(100% + 5px);
        `;
    }
  }}
`;

const fadeIn = keyframes`
  from {opacity: 0;}
  to {opacity: 1;}
`;

export const TooltipBox = styled.span`
  position: relative;
  background-color: #${(props) => props.background};  
  text-align: center;
  border-radius: 4px;
  padding: 5px 10px;
  line-height: 1.5 !important;
  font-size: 14px;
  min-width: 180px;
  max-width: 240px;
  word-break: break-word;
  color:#49687e !important;
  font-family: inherit;
  border: 1px solid white;
  box-shadow:0 0 16px 0 rgba(73, 104, 126, .2);
  z-index: 10 !important;
  animation: ${fadeIn} .3s linear;
  
   /* for the arrow set position according to tooltip position*/
  &:after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    border-color: #${(props) =>
    props.background} transparent transparent transparent;
    left: calc(5% - 4.5px);
    top: 100%;
    z-index: 10;
  }

  ${({ position }) => {
    switch (position) {
      case "bottom":
        return css`
          &:after {
            border-color: transparent transparent #${(props) =>
            props.background} transparent;
            top: unset;
            width: 1px;
            bottom: 100%;
            left: calc(50% - 5px);
          }
        `;
      case "left":
        return css`
          &:after {
            border-color: transparent transparent transparent #${(props) => props.background};
            left: 100%;
            top: calc(50% - 5px);
          }
        `;
      case "right":
        return css`
          &:after {
            border-color: transparent #${(props) => props.background} transparent
              transparent;
            right: 100%;
            left: unset;
            top: calc(50% - 5px);
          }
        `;
      default:
        return css``;
    }
  }}
`;