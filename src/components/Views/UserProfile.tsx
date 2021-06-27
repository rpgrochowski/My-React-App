import React, {FC} from 'react';
import styled from 'styled-components';
import { ContentStyle } from '../../styledHelpers/Components';
import { IconImg, DecoLin, ColumnDiv, Title } from '../../styledHelpers/Components';
import Api from '../API/api';
import UserProfileCV from './UserProfileCV';



const ContentBox = styled(ContentStyle)`
width: 1000px;
height: auto;
margin: 10px 0 0 10px;`;



const BoxProfil = styled.div`
height: 200px;
weight: 900px;
border: cornsilk;
`;


const ContentImage = styled.img`
width: 75px;
height: auto;
display: flow-root;
margin-left: 50px;
margin-top: 50px;
`;

const BoxHeadingInLine = styled.div`
border: cornsilk;
width: 900px;
float: right
`;

const HeadingInLine = styled.p`
display: inline;
margin: 50px;

`;

class UserProfile extends React.Component <{}, { 
  value: string, 
  userName: string,
  userSurname: string,
  buttonValue: string,
  usernameDisabled: boolean,
  userEmail: string,
  userWeb: string,
  userPhone: string 

}>  {
  Api = new Api();
  constructor(props: any) {
      super(props);
      this.state = {
        buttonValue: 'Edit',
        value: 'insert label',
        userName: '',
        userSurname: '',
        userEmail: '',
        userWeb: '',
        userPhone: '',
        usernameDisabled: true

        
      };
  
      this.GetData();
    }
    
    GetData()
    {
        
      this.Api.getUserByID(3).then((data) => {
        this.setState({userName: data.data.name});
        this.setState({userSurname: data.data.username});
        this.setState({userEmail: data.data.email});
        this.setState({userWeb: data.data.website});
        this.setState({userPhone: data.data.phone});
      });
    }

    render() {
      return (
        <ContentBox>
        
        <BoxProfil>
            <BoxHeadingInLine>
                    <HeadingInLine><IconImg src="/media/icons/Publications.png" alt="" title=""/> Message</HeadingInLine>
                    <HeadingInLine><IconImg src="/media/icons/Publications.png" alt="" title=""/> Create a request</HeadingInLine>
                    <HeadingInLine><IconImg src="/media/icons/Publications.png" alt="" title=""/> Add to a cluster</HeadingInLine>
                    <HeadingInLine><IconImg src="/media/icons/Publications.png" alt="" title=""/></HeadingInLine>

  <input type="button" value={this.state.buttonValue} onClick={(e) => {

            if(this.state.buttonValue === "Edit")
            {
             this.setState({usernameDisabled : false, buttonValue: "Save"})
            } else {
              this.setState({usernameDisabled : true, buttonValue: "Edit"});
             (document.getElementById("userViewName") as HTMLInputElement).innerText = this.state.userName;
             (document.getElementById("userViewUser") as HTMLInputElement).innerText = this.state.userSurname;
             (document.getElementById("userViewEmail") as HTMLInputElement).innerText = this.state.userEmail;
            }
          }
          }
            ></input>

            </BoxHeadingInLine>
    
            <ColumnDiv>
                <ContentImage src="/media/user1.png" title="See profile"/> 
            </ColumnDiv>

           <ColumnDiv>
          <Title>Surname: </Title>
          <input type="text" disabled={this.state.usernameDisabled} value={this.state.userName} onChange={e => this.setState({ userName: e.target.value })} />

          <Title>Name: </Title>
          <input type="text" disabled={this.state.usernameDisabled} value={this.state.userSurname} onChange={e => this.setState({ userSurname: e.target.value })} />

          </ColumnDiv>
          <ColumnDiv>
          <Title>Email: </Title>
          <input type="text" disabled={this.state.usernameDisabled} value={this.state.userEmail} onChange={e => this.setState({ userEmail: e.target.value })} />

          <Title>Phone: </Title>
          <input type="text" disabled={this.state.usernameDisabled} value={this.state.userPhone} onChange={e => this.setState({ userPhone: e.target.value })} />

            </ColumnDiv>
            <ColumnDiv>
            <Title>Web: </Title>
          <input type="text" disabled={this.state.usernameDisabled} value={this.state.userWeb} onChange={e => this.setState({ userWeb: e.target.value })} />
            </ColumnDiv>
    
        </BoxProfil>
        <DecoLin></DecoLin>
        <UserProfileCV></UserProfileCV>
    
           
            
    </ContentBox>
    
      );
    }
  };
export default UserProfile;