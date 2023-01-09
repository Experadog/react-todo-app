import React from "react";



export const TextInput = React.forwardRef(({
  type="",
  placeholder="",
  ...rest
}, ref) => {
  return (
    <input 
      type={type}
      placeholder={placeholder}
      ref={ref}
      {...rest}
    />
  )
})