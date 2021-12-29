import React from 'react'
import * as ST from './styles'

const Button = ({ title, altura, largura, action, icon, margem }) => {

  return (
    <ST.ButtonContainer
      altura={altura}
      largura={largura}
      onClick={action}
      margem={margem}
    >
      <ST.Text>{title}</ST.Text>
    </ST.ButtonContainer>
  )
}

export default Button