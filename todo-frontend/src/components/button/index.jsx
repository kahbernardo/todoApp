import React from 'react'
import * as ST from './styles'

const Button = ({ title, height, width, action, icon }) => {

  return (
    <ST.ButtonContainer>
      <ST.Icon
        src={icon}
      />
      {/* <ST.Text>{"Botao"}</ST.Text> */}
    </ST.ButtonContainer>
  )
}

export default Button