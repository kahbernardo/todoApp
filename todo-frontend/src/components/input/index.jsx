import React from 'react'
import * as ST from './styles'

const Input = ({ change, placeholder, title, largura, altura, mascara, value }) => {

  const onChange = (content) => {
    if (content == value) return
    change && change(content)
  }


  return (
    <ST.InputContainer
      largura={largura}
      altura={altura}
    >
      <ST.InputTitle>
        {title}
      </ST.InputTitle>
      <ST.Input
        onChange={onChange}
        value={mascara ? mascara(value) : value}
        placeholder={placeholder}
      />
    </ST.InputContainer>
  )
}

export default Input