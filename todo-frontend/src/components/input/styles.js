import styled from 'styled-components'
import theme from '../../sets'

export const InputContainer = styled.div`
  display:flex;
  min-height:40px;
  height:"fit-content";
  width:${props => props.largura || "fit-content"};
  margin:${props => props.margem || "none"};
  position:relative;
  margin:${props => props.padding || "none"};
  flex-direction:column;
  justify-content:center;
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
  background-color:${theme.colors.white};
  outline:none;
  height:${props => props.altura || "fit-content"};
  line-height:40px;
  padding:5px 0 1px 2px;
  border-radius:8px;
  &:focus {
    border:none;
    border-bottom:2px solid ${theme.colors.clean.grey}; 
  }
`;