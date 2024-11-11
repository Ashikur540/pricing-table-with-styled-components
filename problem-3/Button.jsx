


import React from 'react'


function getStyle(variant) {
    return variant.includes('primary') ? { backgroundColor: 'blue', color: 'white' } : { backgroundColor: 'white', color: 'black' }
}

const Button = ({ children, variant, onClick }) => {
    return (
        // handle "icon" word and "primary | secondary" thats it!!!
        <button
            onClick={onClick}
            style={getStyle(variant)}
        >
            {variant?.includes("icon") && <span>&rarr;</span>}
            {children}
        </button>
    )
}

export default Button
