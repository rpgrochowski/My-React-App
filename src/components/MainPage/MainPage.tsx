import React, {FC, useEffect} from 'react';
import styled from 'styled-components';
import { TopBar } from '../TopBar/TopBar';
import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Rendertest } from '../MainPage/RenderTest';
import { ContentPages } from '../ContentPages/ContentPages';
import { ContentFrameExport } from '../ContentFrame/ContentFrame';
import WorkspaceView from '../Views/WorkspaceView';
import UserProfile from '../Views/UserProfile'
import Entities from '../Entities/Entities'

import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//type GetUsers = ReturnType<typeof getUsers>
//type GetSomeData = ReturnType<typeof getSomeData>

const Wrapper = styled.section``;
const Content = styled.div`
    max-width: auto;
    algin-items: center;
    display: flex;
    `;

const MainPage: FC = () =>{
    //const dispatch = useDispatch();
    //useEffect(() => {
    //    dispatch<GetUsers>(getUsers());
    //}, []);

    //po Switchu
    //<button onClick={clickHandler}>Kliknij</button>

    const sampleNumber = 6;
    return (
        <Router>
        <Wrapper>
            <TopBar />
            <Content>
                <LeftMenu />
                <Switch>
                    <Route path="/Home">
                        <ContentPages/>
                    </Route>
                    <Route path="/ContentPages">
                        <ContentPages/>
                    </Route>
                    <Route path="/UserProfile">
                        <UserProfile/>
                    </Route>
                    <Route path="/Entities">
                        <Entities/>
                    </Route>
                    <Route path="/Workspace/:id" component={WorkspaceView}>
                    </Route>
                    
                    <Route path="/">
                        <ContentFrameExport/>
                    </Route>
                    
                </Switch>
            </Content>
        </Wrapper>
        </Router>
    );
};

export default MainPage;


