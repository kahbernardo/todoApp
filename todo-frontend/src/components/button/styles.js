import styled from 'styled-components'
import theme from '../../sets'

// const increase = (altura) => { parseInt(altura.split(" ")[0]) + 5 + "px" }
const increase = (altura) => console.log(altura)

export const ButtonContainer = styled.button`
  display:flex;
  height:${props => props.altura || "100%"};
  height:${props => props.altura || "100%"};
  width:${props => props.largura || "80px"};
  min-width:50px;
  color: ${theme.colors.clean.blue};
  background-color:${props => props.background || "#ffff"};
  border:none;
  cursor:pointer;
  justify-content:center;
  align-items:center;
  margin:${props => props.margem || "none"};
  border-radius:10px;
  font-size:55px;

  :hover {
    font-size:60px;
  }
`;
export const Text = styled.p`
  color:${props => props.color || theme.colors.clean.red}
`;
