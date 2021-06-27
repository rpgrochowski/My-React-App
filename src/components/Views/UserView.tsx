import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Api from '../API/api';

const UserName = styled.p`
text-align: center;
float: left;
margin-left: 20px;
width: autopx;
`;

const UserEmail = styled.p`
text-align:center;
margin: 5px;
`;

class UserView extends React.Component <{}, { value: any }>  {

  Api = new Api();
  constructor(props: any)
  {
    super(props);
    this.state = {
      value: {}
    }
    this.GetData();
  }
  
  GetData()
  {
    this.Api.getUserByID(3).then((data) => {
      this.setState({value: data.data});
    });
  }
 
  render(){
    var User = this.state.value;
    return(

      <div>
       
           <Link to="/UserProfile"> 
           <UserName id="userViewName">{User.name}</UserName>
           <UserName id="userViewUser">{User.username}</UserName>
           <UserEmail id="userViewEmail">{User.email}</UserEmail>
          </Link>
      </div>
    )
  }
};
  
  export default UserView;