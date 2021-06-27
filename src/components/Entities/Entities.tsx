import React, { Component } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import Api from '../API/api';
import {ContentStyle, ContentImage } from '../../styledHelpers/Components';
import CommentsView from '../Views/CommentsView';


const ContentBox = styled(ContentStyle)`
width: 900px;
height: 1200px;
margin: 10px 0 0 10px;`;

const EntitesBox = styled(ContentStyle)`
width: 150px;
height: 150px;
`;

const EnitiesImage = styled(ContentImage)`
width:auto;
height: 75px;
`;

const Title = styled.h2`
text-align:center;
margin: 5px;
font-size: revert;
`;

const PostBody = styled.div``;

interface RouteParams {id: string, param2?: string};


class Entities extends React.Component <{}, { value: any }>  {
  

  
 
  render(){
    
    
    return(
        <ContentBox>
            <EntitesBox>
            <EnitiesImage src="/media/logo.png" />
            </EntitesBox>
            <EntitesBox>
            <EnitiesImage src="/media/logo.png" />
            </EntitesBox>
            <EntitesBox>
            <EnitiesImage src="/media/logo.png" />
            </EntitesBox>
            <EntitesBox>
            <EnitiesImage src="/media/logo.png" />
            </EntitesBox>
            <EntitesBox>
            <EnitiesImage src="/media/logo.png" />
            </EntitesBox>
            <EntitesBox>
            <EnitiesImage src="/media/logo.png" />
            </EntitesBox>
            <EntitesBox>
            <EnitiesImage src="/media/logo.png" />
            </EntitesBox>
            <EntitesBox>
            <EnitiesImage src="/media/logo.png" />
            </EntitesBox>
            <EntitesBox>
            <EnitiesImage src="/media/logo.png" />
            </EntitesBox>
            <EntitesBox>
            <EnitiesImage src="/media/logo.png" />
            </EntitesBox>
            <EntitesBox>
            <EnitiesImage src="/media/logo.png" />
            </EntitesBox>
            <EntitesBox>
            <EnitiesImage src="/media/logo.png" />
            </EntitesBox>
            <EntitesBox>
            <EnitiesImage src="/media/logo.png" />
            </EntitesBox>
            <EntitesBox>
            <EnitiesImage src="/media/logo.png" />
            </EntitesBox>
            
        </ContentBox>
    )
  }
};
  
  export default Entities;