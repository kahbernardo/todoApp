import styled from 'styled-components'

export const MenuContainer = styled.div`
  display:flex;
  flex-direction:column;
  width:80px;
  height:100%;
  max-height:100vh;
  padding:20px 0;
  background-color:white;
  box-shadow: 7px 0px 7px 0px rgba(0,0,0,0.18);
  justify-content:space-between;
  box-sizing: border-box;
`;
export const MenuMainButton = styled.div`
  display:flex;
  width:100%;
  height:fit-content;
`;
export const MenuCustomButtons = styled.div`
  display:flex;
  width:100%;
  height:fit-content;
  min-height:50px;
  flex-direction:column;
`;