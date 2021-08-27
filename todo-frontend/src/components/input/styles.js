import styled from 'styled-components'
import theme from '../../sets'

export const InputContainer = styled.div`
  display:flex;
  height:fit-content;
  min-height:40px;
  width:fit-content;
  margin:10px;
  position:relative;
  padding:5px 0 0 0;
  flex-direction:column;
  border-radius:5px;
`;
export const InputTitle = styled.div`
  display:flex;
  width:fit-content;
  height:fit-content;
  font-size:12px;
  margin:bottom:5px;
  color:${theme.colors.black}
`;

export const Input = styled.input`
  border:none;
  border-bottom:2px solid ${theme.colors.black}; 
  outline:none;
  height:17px;
  line-height:40px;
  padding:5px 0 1px 2px;
  &:focus {
    border:none;
    height:19px;
    border-bottom:2px solid ${theme.colors.clean.grey}; 
  }
`;