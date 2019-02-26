import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
    display: flex;

    h3{
      font-size: 0.8rem;
      color: #009688;
    }

    ul > li{
      list-style: none;
    }

    ul > li > a{
      text-decoration: none;
      font-family: sans-serif;
      font-size: 0.8rem;
      font-weight: 100;
      position: relative;
      left: -25px;
      letter-spacing: 1px;
      color: #000;
    }

`;

class MenuBlock extends React.Component{

  render(){
    return(
      <Block>
            <div>
              <h3>Pages</h3> 
                  <ul>
                  <li><a href="" target="_blank">Page 1</a></li>
                  <li><a href="" target="_blank">Page 1</a></li>
                  <li><a href="" target="_blank">Page 1</a></li>
                  <li><a href="" target="_blank">Page 1</a></li>
                  <li><a href="" target="_blank">Page 1</a></li>
                  <li><a href="" target="_blank">Page 1</a></li>
                  <li><a href="" target="_blank">Page 1</a></li>
                  <li><a href="" target="_blank">Page 1</a></li>
                  <li><a href="" target="_blank">Page 1</a></li>
                  </ul>
            </div>
            <div>
              <h3>Blogs</h3>
                  <ul>
                  <li><a href="#" target="_blank">Blog 1</a></li>
                  <li><a href="#" target="_blank">Blog 2</a></li>
                  <li><a href="#" target="_blank">Blog 3</a></li>
                  </ul>
            </div>
            <div>
              <h3>Elements</h3>
              <ul>
                  <li><a href="#" target="_blank">Grids</a></li>
                  <li><a href="#" target="_blank">Accordions</a></li>
                  <li><a href="#" target="_blank">Video/Audio</a></li>
                  <li><a href="#" target="_blank">Cards</a></li>
              </ul>
            </div>
            <div>
              <h3>Icons</h3>
                <ul>
                  <li><a href="#" target="_blank">Fontawesome</a></li>
                  
                </ul>
            </div>
      </Block>
    )
  }
}
export default MenuBlock;