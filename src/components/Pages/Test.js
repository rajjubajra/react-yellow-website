import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  >div { width: 300px; background: #ccc;}
`;

class Test extends React.Component{

  render(){
    return(
      <Text>
        
      </Text>
    )
  }
}
export default Test;