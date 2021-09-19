import React from 'react'
import * as ST from './styles'
import moment from 'moment'

const Filter = ({ change, options }) => {

  // const onChange = (content) => {
  //   if (content == value) return
  //   change && change(content)
  // }

  const mock = [
    {
      label: "hoje",
      param: "data",
      query: moment(),
      active: false,
    },
    {
      label: "essa semana",
      param: "data",
      query: moment().add(7, 'days'),
      active: false,
    },
    {
      label: "esse mês",
      param: "data",
      query: moment().add(1, 'month'),
      active: true,
    },
    {
      label: "todas",
      param: "data",
      query: "",
      active: false,
    },
  ]


  return (
    <ST.BarContainer>
      {
        mock.map(x =>
          <ST.ButtonContainer
            active={x.active}
          >
            {x.label}
          </ST.ButtonContainer>
        )}

    </ST.BarContainer>
  )
}

export default Filter