


export function extractPricingString(pricingString) {
  return pricingString.replace(/<\/?strong>/g, '')
}