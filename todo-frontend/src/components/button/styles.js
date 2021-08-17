import styled from 'styled-components'
import theme from '../../sets'

export const ButtonContainer = styled.button`
  display:flex;
  min-width:50px;
  width:${props => props.width || "100%"};
  height:${props => props.height || "60px"};
  color: ${theme.colors.clean.blue};
  background-color:${props => props.background || "#ffff"};
  min-height:50px;
  border:none;
  cursor:pointer;
  justify-content:center;
`;
export const Text = styled.p`
  font-size:20px;
  color:${props => props.color || theme.colors.clean.blue}
`;
export const Icon = styled.img` 
  width:90%;
  height:50px;
`;