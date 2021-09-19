import styled from 'styled-components'
import theme from '../../sets'

export const BarContainer = styled.div`
  display:flex;
  min-height:40px;
  height:${props => props.altura || "fit-content"};;
  width:"fit-content";
  background-color:${theme.colors.clean.grey};
  margin:10px;
  position:relative;
  border-radius:10px;
  justify-content:center;
`;
export const ButtonContainer = styled.button`
  display:flex;
  width:${props => props.width || "350px"};
  height:${props => props.height || "60px"};
  background-color:${props => props.active ? "#ffff" : theme.colors.clean.grey};
  color:${props => props.active ? theme.colors.clean.grey : "#ffff"};
  border:none;
  cursor:pointer;
  justify-content:center;
  border-radius:10px;
  align-items:center;
  justify-content:center;
  font-size:25px;
`;
;