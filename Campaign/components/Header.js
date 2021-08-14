import React, {Component} from 'react';
import {Card,Button,Menu} from 'semantic-ui-react';   
import 'semantic-ui-css/semantic.min.css';



export default (props) => {
  return(
    <Menu style={{marginTop:'10px'}}>
    <Menu.Item>
      CrowdCoin 
    </Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item
       
      >
     Campaigns
      </Menu.Item>

      <Menu.Item
       >
        + 
      </Menu.Item>
    </Menu.Menu>
  </Menu>

  );


};