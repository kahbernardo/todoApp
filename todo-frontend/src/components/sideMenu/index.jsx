import React from 'react'
import * as ST from './styles'
import Button from '../button'
import icons from '../../assets/images/icons'

const sideMenu = () => {
  console.log(333, icons)

  return (
    <div>
      <ST.MenuContainer >
        <ST.MenuMainButton >
          <Button
            icon={icons.menu}
          />
        </ST.MenuMainButton >
        <ST.MenuCustomButtons >
          <Button />
        </ST.MenuCustomButtons >
      </ST.MenuContainer >
    </div>
  )
}

export default sideMenu