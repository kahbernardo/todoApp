import React, { Component } from 'react';
import * as ST from './styles'
import SideMenu from '../../components/sideMenu';

const ToDo = () => {

  return (
    <ST.Container>
      <SideMenu />
      <h1>To Do</h1>
    </ST.Container>
  )
}

export default ToDo