import React from 'react'
import * as ST from './styles'
import Button from '../button'

const sideMenu = () => {

  return (
    <div>
      <ST.MenuContainer >
        <ST.MenuMainButton >
          <Button />
        </ST.MenuMainButton >
        <ST.MenuCustomButtons >
        </ST.MenuCustomButtons >
      </ST.MenuContainer >
    </div>
  )
}

export default sideMenu