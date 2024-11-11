
import Styled, { styled } from 'styled-components'


export const PlanCard = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 1em;
  border-radius: 8px;
  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */

  min-width: 160px;
  max-width: 260px;
  background: #fff;
  border: 1px solid #eaeff2;
  border-radius: 8px;
  border-top: 8px solid ${({borderColor})=> borderColor};
  padding: 24px 20px;
  position: relative;
  transition: all 0.25s;
  margin: 0 auto;
  width: 80%;
`

export const PlanInfoWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
 
  gap: 0.5em;
`


export const FeatureTitle = styled.p`
 font-size: 16px;
 font-weight: 500;
 padding: 8px 0;

`


export const PrimaryButton= styled.button`
  background-color: ${({ color }) => color ? color : "#a67bc3"};
  fill-opacity: 0.2;
  border-radius: 8px;
  box-sizing: border-box;
  color: #fff;
  display: block;
  font-weight: 400;
  line-height: 40px;
  margin-top: auto;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s;
  width: 100%;
  font-size: 1rem;
  border: none;
  &:hover {
  background-color: ${({ hoverColor }) => hoverColor ? hoverColor : "#a67bc3"};
}
`


export const FeaturesListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1em;
  padding-top: 18px;
  padding-bottom: 1.5rem;
  color: rgb(73, 104, 126) !important;
`


export const PlanInfoVisitorsBlock = styled.div`
  align-items: center;
  font-weight: 400;
  column-gap: 5px;
  display: inline-flex;
  background: ${({bgColor})=> bgColor};
  border-radius: 32px;
  color: ${({color})=> color};
  font-size: 12.5px;
  padding: 5px 15px;
`

export const PlanName = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
  color: #49687E;
`
export const PlanPrice = styled.h2`
  color: ${({color})=>color};
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 4px;
`


export const PricingGrid= styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1em;
    
    justify-content: center;
    max-width: 1260px;
    width: 96%;
    margin: 0 auto;

/* Laptop view (3 columns) */
    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr); /* 3 columns for laptops */
    }

    /* Tablet view (2 columns) */
    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr); /* 2 columns for tablets */
    }
    /* Tablet view (2 columns) */
    @media (max-width: 560px) {
        grid-template-columns: repeat(1, 1fr); /* 2 columns for tablets */
    }

    /* Mobile view (1 column) */
    @media (max-width: 480px) {
        grid-template-columns: 1fr; /* 1 column for mobile */
    }



`



export const TabContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 16px;
  margin-top:4.5rem;
  margin-bottom:1.5rem;
  flex-wrap:wrap;
`;

export const TabOption = styled.div`
  font-weight: ${(props) => (props.active ? '600' : '400')};
  color: ${(props) => (props.active ? '#a259ff' : '#333')};
  cursor: pointer;
  position: relative;

  &:after {
    content: ${(props) => (props.active ? "''" : '')};
    position: absolute;
    left: 0;
    bottom: -4px;
    height: 2px;
    width: 100%;
    background-color: #a259ff;
  }
`;

export const SaveTag = styled.div`
  background-color: #f3ebff;
  color: #333;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1rem;
`;


export const Badge = Styled.div`
  background-color: #68CB9B!important;
  color: #fff;
  background: #68CB9B !important;
  border-radius: 3px;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  line-height: 1;
  padding: 6.5px 8px;
  position: absolute;
  right: 6px;
  top: 6px;
`
export const LineTroughText = styled.span`
  color: #ff424d;
  font-size: 12px;
  line-height: 1;
  position: absolute;
  text-decoration: line-through;
  top: 8%;
  left: 40%;
  font-weight: 400;
`