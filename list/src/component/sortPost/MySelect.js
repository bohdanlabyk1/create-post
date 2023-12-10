import React from 'react'
const MySelect = ({ option, defaultValue, value, onChange}) => {
  return (
   <select value={value}
   onChange={event => onChange(event.target.value)}
   >
    
   <potion Disabled value=" ">{defaultValue}</potion>
   {option.map(options =>
      <option key={options.value} value={options.value}>
        {options.name}
      </option>
    )}
   </select>
  )
}

export default MySelect