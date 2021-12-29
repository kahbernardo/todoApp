import React from 'react'
import * as ST from './styles'
import Button from '../filterButton'
import icons from '../../assets/images/icons'
import { Link } from 'react-router-dom'

const sideMenu = () => {

  return (
    <div>
      <ST.MenuContainer >
        <ST.MenuMainButton >
          <Link to='/todo'>
            <Button
              icon={icons.menu}
            />
          </Link>
        </ST.MenuMainButton >
        <ST.MenuCustomButtons >
          <Link to='/todo'>
            <Button
              icon={icons.bell}
            />
          </Link>
          <Link to='/about'>
            <Button
              icon={icons.mail}
            />
          </Link>
        </ST.MenuCustomButtons >
      </ST.MenuContainer >
    </div>
  )
}

export default sideMenu