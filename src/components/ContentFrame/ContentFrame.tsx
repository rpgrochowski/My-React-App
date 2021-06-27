import React, {FC} from 'react';
import styled from 'styled-components';
import { ContentStyle, Title } from '../../styledHelpers/Components';
import { Link } from 'react-router-dom';
import { SliderWorkSpaces } from '../WorkSpaces/SliderWorkSpaces';
import CommentsView from '../Views/CommentsView';
import PostView from '../Views/PostView';
 

const ContentBox = styled(ContentStyle)`
width: 1000px;
height: auto;
margin: 10px 0 0 10px;`;

const ContentImage = styled.img`
width: 200px;
height: auto;
display: flow-root;
margin: 5px 5px 5px 5px;
`;

const LatestPublicationBox = styled(ContentStyle)`
width: 640px;
height: 300px;
`;


const PostLabel = styled(ContentStyle)`
width: 900px;
height: auto;
`;



export const ContentFrameExport : FC = () =>{
    return (

<ContentBox>
        <ContentStyle>
        <ContentImage src="/media/logo.png" />
        </ContentStyle>
        <LatestPublicationBox>
        <Title>Latest publication</Title>
        <PostView/>
        </LatestPublicationBox>
        <h4>Workspace</h4>
        <SliderWorkSpaces></SliderWorkSpaces>
        <CommentsView/>
</ContentBox>

    );
};

 