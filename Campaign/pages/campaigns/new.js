import React, {Component} from 'react';
import {Form,Card,Button,Menu,Container,Input} from 'semantic-ui-react';   

import Layout from '../../components/Layout';   
class CampaignNew extends Component{
  
    render(){

        return(
            <Layout>
        <h1>Create a Campaign</h1>
        <Form >
            <Form.Field>
                <label>Minimum Contribution</label>
                <Input label="wei" labelPosition="right"
                />
            </Form.Field>
            <Button 
                content="Create! "
                    primary={true}
                />
        </Form>
        </Layout>
        );
    }
     
}

export default CampaignNew;
