import { FC } from 'react';
import styled from 'styled-components';

import { Colors } from '../../styledHelpers/Colors';
import { ContentImage, Title } from '../../styledHelpers/Components';
import { fontSize } from '../../styledHelpers/FontSizes';
import { ContentStyle } from '../../styledHelpers/Components';
import { Link } from 'react-router-dom';
import {workspaceData} from '../Database/Workspaces'
import Carousel from 'react-elastic-carousel'



import { CommentBox } from '../../styledHelpers/Components';
//import { Slider } from './Slider'


const CaruselImage = styled(ContentImage)`
width: 50px;
margin-left: 15px;
margin-top: 15px;
`;
const WorkspaceBox = styled(ContentStyle)`
width: 250px;
height: 150px;
`;

const WorkspacesTitle = styled.div`
margin-left: 50px
position: absolute; 
bottom:0
`;



export const SliderWorkSpaces: FC = () => {


    return (
       
           <Carousel itemsToShow={3} isRTL={false}>
            
            {workspaceData.map((workspace) => (
                            <Link to={"Workspace/"+workspace.id}>
                <CommentBox>  
                <WorkspaceBox>
                <Title>{workspace.title}</Title>
                
                <CaruselImage src={workspace.url} />
                <WorkspacesTitle>{workspace.workspaceType}</WorkspacesTitle>
                </WorkspaceBox>
                </CommentBox>
                </Link>
            ))}
           

            </Carousel>
      
    );
}