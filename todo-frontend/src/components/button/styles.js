import styled from 'styled-components'
import theme from '../../sets'

export const ButtonContainer = styled.button`
  display:flex;
  height:${props => props.altura || "100%"};;
  width:${props => props.largura || "80px"};
  min-width:50px;
  color: ${theme.colors.clean.blue};
  background-color:${props => props.background || "#ffff"};
  min-height:60px;
  border:none;
  cursor:pointer;
  justify-content:center;
  align-items:center;
  margin:${props => props.margem || "none"};
  border-radius:10px;
`;
export const Text = styled.p`
  font-size:50px;
  color:${props => props.color || theme.colors.clean.red}
`;
