import React, {Component} from 'react';
import {Card,Button,Menu,Container} from 'semantic-ui-react';   
import 'semantic-ui-css/semantic.min.css';
import Header from './Header';


export default (props) => {
  return(
  
       <Container>
       <Header/>
       {props.children}
       </Container>
   

  );


};