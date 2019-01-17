import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  display: flex;
  justify-content: flex-start;
  background-color: #fafafa;
  height: 50px;
  cursor: pointer;

  > i > img{
    width: 50px;
    margin-left: 30px;
  }

`;


const NavIcon = ({routeChangeTo}) => {
  return(
    <Icon>
      <i><img src="./images/book.png" /></i>
    </Icon>
  )
}
export default NavIcon;