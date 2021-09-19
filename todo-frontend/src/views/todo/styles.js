import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  width:100vw;
  height:100vh;
  box-sizing: padding-box;
`;

export const PersonBackground = styled.div`
  display:flex;
  width:100%;
  height:30%;
  box-sizing: padding-box;
  background-color:${props => props.background || "#424242"};
  border-bottom-left-radius:30px;
  border-bottom-right-radius:30px;
  justify-content:center;
`;
export const Col = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
`;