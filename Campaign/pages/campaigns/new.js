import React, {Component} from 'react';
import {Form,Button,Input,Message} from 'semantic-ui-react';   
import Layout from '../../components/Layout';   
import factory from '../../ethereum/factory' 
import web3  from '../../ethereum/web3';
import {Router} from '../../routes'

class CampaignNew extends Component{
   state={
      minimumContribution:'',
      errorMessage:'',
      loading:false

  }
  onSubmit = async (event) => {
      event.preventDefault();
      this.setState({loading:true});
      this.setState({errorMessage:''});
      try{
      
      const accounts=await web3.eth.getAccounts();
      await factory.methods
      .createCampaign(this.state.minimumContribution)
      .send({
          from:accounts[0]
      });
      Router.pushRoute('/');

    }
    catch(error){
      console.log(error);
       this.setState({errorMessage:error.message});
    }
    this.setState({loading:false});
   };
    render(){

        return(
            <Layout>
        <h1>Create a Campaign</h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
            <Form.Field>
                <label>Minimum Contribution</label>
                <Input label="wei" labelPosition="right"
                value={this.state.minimumContribution} 
                onChange={ event =>{this.setState({minimumContribution: event.target.value})}}
                />
            </Form.Field>
            <Message error header="Oops !"
            
            content={this.state.errorMessage}/>
            <Button loading={!!this.state.loading} primary>Create!</Button>
           
        </Form>
        </Layout>
        );
    }
     
}

export default CampaignNew;
