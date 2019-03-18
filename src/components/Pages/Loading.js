import React from 'react';
import { Page, Text } from './Page-style';

const Loading = () => (
  <div className="col-md-12">
      <Page>            
      <Text>
      <h1 style={{color: '#ffc107;', fontSize: '6rem'}}><i className="fas fa-spinner fa-spin"></i></h1>
      </Text>                     
      </Page>
  </div>
)
export default Loading;