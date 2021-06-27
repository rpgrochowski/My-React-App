import React, {FC} from 'react';
import styled from 'styled-components';
import { ContentStyle } from '../../styledHelpers/Components';
import { Title } from '../../styledHelpers/Components';
import Api from '../API/api';



const ContentBox = styled(ContentStyle)`
width: 1000px;
height: auto;
margin: 10px 0 0 10px;`;

const BoxPanel = styled.div`
margin-top: 20px;
margin-left: 30px;
height: 600px;
weight: 900px;
border: cornsilk;
`;


class UserProfileCV extends React.Component <{}, { 
  value: string, 
  buttonValue: string,
  Expertise: string,
  Admission: string,
  Expertisess: string,
  usernameDisabled: boolean,

}>  {
  Api = new Api();
  constructor(props: any) {
      super(props);
      this.state = {
        buttonValue: 'Edit',
        value: 'insert label',
        Expertise: 'Mergesrs and acquistion',
        Admission : 'Nvoluptatem nperspiciatis acquistion',
        Expertisess: 'Mergesrs and acquistion',
        usernameDisabled: true
      };
  
      
    }
    
    render() {
      return (
        <ContentBox>
        
    
        <BoxPanel>
      
          <input type="button" value={this.state.buttonValue} onClick={(e) => {

            if(this.state.buttonValue === "Edit")
            {
             this.setState({usernameDisabled : false, buttonValue: "Save"})
            } else {
              this.setState({usernameDisabled : true, buttonValue: "Edit"});
             
            }
          }
          }
            ></input>

         <Title>Expertise</Title>
          <input type="text" disabled={this.state.usernameDisabled} value={this.state.Expertise} onChange={e => this.setState({ Expertise: e.target.value })} />

          <Title>Specialities</Title>
          <input type="text" disabled={this.state.usernameDisabled} value={this.state.Admission} onChange={e => this.setState({ Admission: e.target.value })} />

          <Title>Admission to practice</Title>
          <input type="text" disabled={this.state.usernameDisabled} value={this.state.Expertisess} onChange={e => this.setState({ Expertisess: e.target.value })} />
           
        </BoxPanel>
    </ContentBox>
    
      );
    }
  };
export default UserProfileCV;