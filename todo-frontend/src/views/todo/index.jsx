import React, { Component } from 'react';
import * as ST from './styles'
import SideMenu from '../../components/sideMenu';
import Input from '../../components/input';

const ToDo = () => {

  return (
    <ST.Container>
      <SideMenu />
      <Input />
    </ST.Container>
  )
}

export default ToDo