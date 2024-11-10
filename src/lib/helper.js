


export function extractPricingString(pricingString) {
  return pricingString.replace(/<\/?strong>/g, '')
}


// export function hexToLowOpacityColor(hex, opacity = 0.2) {
//   // console.log(" hexToLowOpacityColor ~ hex:", hex)
//   // Remove the hash at the start if it's there
//   hex = hex.replace(/^#/, '');

//   // if 3-digit   
//   if (hex.length === 3) {
//       hex = hex.split('').map(char => char + char).join('');
//   }
//   if (hex.length !== 6) {
//       throw new Error('Invalid HEX color format. Please provide a valid HEX color.');
//   }

//   // Convert hex to RGB
//   const r = parseInt(hex.substring(0, 2), 16);
//   const g = parseInt(hex.substring(2, 4), 16);
//   const b = parseInt(hex.substring(4, 6), 16);

//   // Return the RGBA color string with the specified opacity
//   return `rgba(${r}, ${g}, ${b}, ${opacity})`;
// }

export function hexToContrastColor(hex, contrast="high") {
    if(!contrast || !hex) throw new Error('Please provide required parameters');
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, '');

  // if 3-digit   
  if (hex.length === 3) {
      hex = hex.split('').map(char => char + char).join('');
  }
  if (hex.length !== 6) {
      throw new Error('Invalid HEX color format. Please provide a valid HEX color.');
  }

  // Convert hex to RGB
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);


  // Return the RGBA color string with the specified opacity
  return contrast === "high" ? `rgba(${r-40}, ${g-40}, ${b-40})` : `rgba(${r}, ${g}, ${b}, 0.1)`;
}

export  function getColor(planName){
  switch (planName) {
      case "Free":
          return "#4CB3FD"
      case "Basic":
          return "#FFB72C"
      case "Pro":
          return "#68CB9B"
      case "Growth":
          return "#B78DEB"
      default:
          "#B78DEB";
  }
}



