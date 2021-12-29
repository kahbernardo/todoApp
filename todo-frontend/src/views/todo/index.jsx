import React, { Component } from 'react';
import * as ST from './styles'
import SideMenu from '../../components/sideMenu';
import Input from '../../components/input';
import Filter from '../../components/filter';
import FilterBar from '../../components/filterBar';
import Button from '../../components/button';

const ToDo = () => {

  const dale = () => { console.log("dale") }

  return (
    <ST.Container>
      <SideMenu />
      <ST.Col>
        <ST.PersonBackground>
          {/* <Filter /> */}
          <FilterBar />
          <ST.Row>
            <Input placeholder={"Adicione uma Tarefa"} largura={"73.5%"} altura={"53px"} margem={"0 9px"} />
            <Button
              action={dale}
              largura={"355px"}
              altura={"58px"}
              margem={"0 10px 0 5px"}
              title={"+"}
            />
          </ST.Row>
        </ST.PersonBackground>
      </ST.Col>
    </ST.Container>
  )
}

export default ToDo