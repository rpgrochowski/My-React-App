import React, {FC} from 'react';
import styled from 'styled-components';
import UserView from '../Views/UserView'
import { DecoLin } from '../../styledHelpers/Components';

const LeftFrame = styled.div`
width: 300px;
height: 500px;
overflow: hidden;
border: solid;
border-style: outset;
margin: 10px 0 0 5%;
`;

const UserFrame = styled.div`
`;





const LeftDowMenu = styled.div`
text-algin:left;
margin: 2px;
`;

const UserPicture = styled.img`
width: 140px;
height: auto;
display: flow-root;
margin: 10px 0 10px 80px;
`;



const IconImg = styled.img`
`;

export const LeftMenu: FC = () =>{
    return (

<LeftFrame>
<UserFrame>
        <UserPicture src="/media/user1.png" />

        <UserView/>

</UserFrame>
        
        <DecoLin></DecoLin>

        <LeftDowMenu>
        <p><IconImg src="/media/icons/Publications.png" alt="" title=""/> Publications</p>
        <p><IconImg src="/media/icons/ecosystem.png" alt=""/> Ecosytem</p>
        <p><IconImg src="/media/icons/entities2.png" alt=""/> Entities</p>
        </LeftDowMenu>


</LeftFrame>

    );
};

export default LeftMenu;