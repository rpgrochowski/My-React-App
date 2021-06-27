import React, { Component } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import Api from '../API/api';
import {ContentStyle, Title } from '../../styledHelpers/Components';
import CommentsView from '../Views/CommentsView';


const ContentBox = styled(ContentStyle)`
width: 1000px;
height: auto;
margin: 10px 0 0 10px;`;

const BoxPostView = styled(ContentStyle)`
width: 900px;
height: 300px;
overflow: hidden;
border: cornsilk;
box-shadow: 10px 20px 30px gray;`



const PostBody = styled.div``;

interface RouteParams {id: string, param2?: string};


class WorkspaceView extends React.Component<RouteComponentProps<RouteParams>, { value: any }>  {
  
  Api = new Api();
  id = 0;
  constructor(props: any)
  {
    super(props);
    this.state = {
      value: {}
    }
    this.id = props.match.params.id;
    this.GetData();
  }
  
  GetData()
  {
    this.Api.getPostByID(this.id).then((data) => {
    this.setState({value: data.data});
    });
  }
 
  render(){
    
    var Post = this.state.value;
    return(

      <div>
         
        <ContentBox>
       
          <BoxPostView>
         
          <Title>{Post.title}</Title>
          <PostBody>{Post.body}</PostBody>
          </BoxPostView>
          <CommentsView/>
        </ContentBox>
        
      </div>
    )
  }
};
  
  export default WorkspaceView;