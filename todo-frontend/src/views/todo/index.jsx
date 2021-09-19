import React, { Component } from 'react';
import * as ST from './styles'
import SideMenu from '../../components/sideMenu';
import Input from '../../components/input';
import FilterBar from '../../components/filterBar';

const ToDo = () => {

  return (
    <ST.Container>
      <SideMenu />
      <ST.Col>
        <ST.PersonBackground>
          <FilterBar />
        </ST.PersonBackground>
        <Input />
      </ST.Col>
    </ST.Container>
  )
}

export default ToDo