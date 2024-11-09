
import reactLogo from './assets/react.svg'

import './App.css'

import { Tooltip } from './components/ui/Tooltip'
import { TooltipTarget } from './components/styles/ui-element-styles/tooltip.styles'
import GlobalStyle from './components/styles/global.Styles'


function App() {


  return (
    <div style={{display:"flex", justifyContent:"center", paddingTop:"400px" , gap:"100px"}}>
      <GlobalStyle/>
      <Tooltip 
      tooltipContent={<>    
          <p>This is tooltip text</p>
          <img src={reactLogo} className="logo" alt="React logo" />
          </>} 
          position="top"
          background="fff"
          // styleMe
          >
          <TooltipTarget>
            Up to 50,000 visitors/month
          </TooltipTarget>
        </Tooltip>
       
      <Tooltip 
        tooltipContent={"Show the widget only to visitors who come from specific traffic sources, including direct traffic, social networks, search engines, Google Ads, or any other traffic source"} 
        position="right"
        background="fff">
          <TooltipTarget>
            Up to 50,000 visitors/month
          </TooltipTarget>
        </Tooltip>
      <Tooltip 
        tooltipContent={"Show the widget only to visitors who come from specific traffic sources"} 
        position="bottom"
        background="fff">
          <TooltipTarget>
            Up to 20,000 visitors/month
          </TooltipTarget>
        </Tooltip>
      <Tooltip 
        tooltipContent={"Show the widget only to v"} 
        position="left"
        background="fff">
          <TooltipTarget>
            Up to 50,000 visitors/month
          </TooltipTarget>
        </Tooltip>
    </div>
  )
}

export default App
