import React, {FC} from 'react';
import styled from 'styled-components';
import { ContentStyle } from '../../styledHelpers/Components';

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





export const ContentPages : FC = () =>{
    return (

<ContentBox>
        <ContentStyle>
        <ContentImage src="/media/logo.png" />
        </ContentStyle>
</ContentBox>

    );
};

