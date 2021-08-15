import styled from 'styled-components'
import theme from '../../sets'

export const Container = styled.div`
  display:flex;
  width:´${props => props.width || "100%"}´
  height:´${props => props.height || "60px"}´
  color: '${theme.colors.clean.blue}'
`;