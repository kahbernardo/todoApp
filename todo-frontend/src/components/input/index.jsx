import React from 'react'
import * as ST from './styles'

const Input = ({ change, placeholder, title }) => {

  return (
    <ST.InputContainer>
      <ST.InputTitle>
        {title}
      </ST.InputTitle>
      <ST.Input
        onChange={change}
        placeholder={placeholder}
      />
    </ST.InputContainer>
  )
}

export default Input