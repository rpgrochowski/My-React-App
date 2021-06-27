import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Api from '../API/api';
import {workspaceData} from '../Database/Workspaces'
import {Title, CommentLabel} from '../../styledHelpers/Components';
import Carousel from 'react-elastic-carousel'



const PostTitle = styled.div`
    margin: 5px;
    width: 500px;
    height: 20px;
    margin-left: 20px;
    border-block: inherit;
    color: #ff0076;
    -webkit-text-stroke-width: medium;`;

const PostBody = styled.a`
margin: 5px;
width: 500px;
height: 20px`;

const PostLabel = styled(CommentLabel)`
width: 500px;
height: 50px;
`;




class PostView extends React.Component <{}, { value: any[] }>  {
  
  postID : any;
  Api = new Api();
  constructor(props: any)
  {
    super(props);
    this.state = {
      value: []
    }
    this.postID = parseInt(window.location.href.substring(window.location.href.length,window.location.href.length-1));
    //console.log(window.URL.arguments);
    this.GetData();
  }
  
  GetData()
  {
    const result : any[] = [];
    this.Api.getAllPosts().then((data) => {

      data.data.slice(0, 5).map((post: any) => {
          this.Api.getUserByID(post.userId).then((user) => {
            post.user = user.data;
            var wd = workspaceData.filter((data2) => data2.id == post.id)[0];
            post.workspace = wd;
            result.push(post);
            this.setState({value: result});
          })
      })
    });
  }
 
  render(){
    
    var Posts = this.state.value;
    
    return(

      
      <Carousel verticalMode  itemsToShow={3} isRTL={false}>
      
            {Posts.map((post: any) =>
            (
              <PostLabel>
              <PostTitle>{post.title}</PostTitle>
              <PostBody>{post.body}</PostBody>
              
              </PostLabel>          
            ))}
      
      </Carousel>
    )
  }
};
  
  export default PostView;