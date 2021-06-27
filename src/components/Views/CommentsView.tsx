import { UserInfo } from 'os';
import React, { Component, useState, ChangeEvent  } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ContentStyle } from '../../styledHelpers/Components';
import Api from '../API/api';
import {workspaceData} from '../Database/Workspaces'

import {CommentBox, Title, CommentInfo, CommentFooter, CommentLabel } from '../../styledHelpers/Components';



const CommentData = styled(CommentFooter)`
    color: #364cbf;
    text-shadow: 2px 2px 4px #000000;
    -webkit-text-stroke: thin;
    text-align: end;
    margin-right: 20px;
    `;

const CommnetWorkspaces = styled(CommentFooter)`
text-transform: capitalize;
font-size: larger;`;


const CommentTitle = styled.div`
    margin: 5px;
    margin-left: 20px;
    border-block: inherit;
    color: #ff0076;
    -webkit-text-stroke-width: medium;`;


const CommentBody = styled.a`
margin: 5px;`;

const CommentEmail = styled(CommentFooter)`
width: 300px`;

class CommentsView extends React.Component <{}, { value: any[], start: number, end: number }>  {
  
  postID : any;
  Api = new Api();
  constructor(props: any)
  {
    super(props);
    this.state = {
      value: [],
      start: 0,
      end: 25
    }
    this.postID = parseInt(window.location.href.substring(window.location.href.length,window.location.href.length-1));
    //console.log(window.URL.arguments);
    this.GetData();
  }
  
  change(num: number){

    this.setState({start: num*25, end: (num*25)+25});
  }
  GetData()
  {
    const result : any[] = [];
    this.Api.getComments().then((data) => {

      var comm = [];
      if(this.postID){
        (data.data as []).filter((d : any) => d.postId > 5).forEach((x : any) => x.postId = 5);
        comm = data.data.filter((d : any) => d.postId == this.postID);
      } else {
        comm = data.data;
      }
      comm.map((comment: any) => {
        this.Api.getPostByID(comment.postId).then((post) => {
          this.Api.getUserByID(post.data.userId).then((user) => {
            comment.user = user.data;
            if(comment.postId > 5)
            {
              comment.postId = 5;
            }
            comment.title = workspaceData.filter((data) => data.id == comment.postId)[0].title;
            comment.date = workspaceData.filter((data) => data.id == comment.postId)[0].latestUpdate;
            result.push(comment);
            this.setState({value: result});
          })
        })
      })
    });
  }
 
  render(){
    
    var Comments = this.state.value;

   
    return(

      <CommentBox>
      

            {Comments.slice(this.state.start, this.state.end).map((comment: any) =>
            (
              <Link to={"/Workspace/"+ comment.postId}>
              <CommentLabel>
              <CommentTitle>{comment.name}</CommentTitle>
              <CommentBody>{comment.body}</CommentBody>
              <CommentInfo>
                <CommnetWorkspaces>{comment.title}</CommnetWorkspaces>
                <CommentFooter>{comment.user.name}</CommentFooter>
                <CommentEmail>email: {comment.email}</CommentEmail>
                <CommentData>{comment.date}</CommentData>
              </CommentInfo>
              </CommentLabel>
              </Link>              
            ))}
      <Link to="#" onClick={(e) => this.change(0)}>1</Link>
      <Link to="#" onClick={(e) => this.change(1)}>2</Link>
      <Link to="#" onClick={(e) => this.change(2)}>3</Link>
      <Link to="#" onClick={(e) => this.change(3)}>4</Link>
      <Link to="#" onClick={(e) => this.change(4)}>5</Link>
      <Link to="#" onClick={(e) => this.change(5)}>6</Link>
      <Link to="#" onClick={(e) => this.change(6)}>7</Link>
      <Link to="#" onClick={(e) => this.change(7)}>8</Link>
      <Link to="#" onClick={(e) => this.change(8)}>9</Link>
      <Link to="#" onClick={(e) => this.change(9)}>10</Link>
      <Link to="#" onClick={(e) => this.change(10)}>11</Link>
      <Link to="#" onClick={(e) => this.change(11)}>12</Link>
      <Link to="#" onClick={(e) => this.change(12)}>13</Link>
      <Link to="#" onClick={(e) => this.change(13)}>14</Link>
      <Link to="#" onClick={(e) => this.change(14)}>15</Link>
      <Link to="#" onClick={(e) => this.change(15)}>16</Link>
      <Link to="#" onClick={(e) => this.change(16)}>17</Link>
      <Link to="#" onClick={(e) => this.change(17)}>18</Link>
      <Link to="#" onClick={(e) => this.change(18)}>19</Link>
      <Link to="#" onClick={(e) => this.change(19)}>20</Link>
      </CommentBox>
    )
  }
};
  
  export default CommentsView;