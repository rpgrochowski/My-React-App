import React, {FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
import {workspaceData} from '../Database/Workspaces'

const Wrapper = styled.div`
    position: absolute;
    top: 24px;
    left: 0;
    background: white;
    padding: 16px;
    border: 1px solid;
    width: 240px;
    option{
        border: 1px solid red;
    }
`;
const InnerWrapper = styled.div`
`;

const ItemMenu = styled.div`
margin: 10px;

`;

const ItemSection = styled.div``;

export const ExpandedMenu: FC = () =>{

    const [inputText, setInputText] = useState <string>('');

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
      const text = e.target.value;
      setInputText(text);
    }


    return (
    
      <Wrapper>
        <ItemMenu ><img src="/media/icons/entities.png" /><a>Corporate</a></ItemMenu>
        <input type="text" value={inputText} onChange = {inputHandler}/>
        <InnerWrapper>
        
        <ItemSection id="platformSection">
        <ItemMenu><p>Platform</p></ItemMenu>
        {'Home'.toLowerCase().includes(inputText.toLowerCase())&&
            <ItemMenu className="platform"><img src="/media/icons/house2.png" /><a href="/">Home</a></ItemMenu>
        }
        {'Publications'.toLowerCase().includes(inputText.toLowerCase())&&
          <ItemMenu className="platform"><img src="/media/icons/Publications.png" /><a href="">Publications</a></ItemMenu>
        }     
        {'People'.toLowerCase().includes(inputText.toLowerCase())&&
          <ItemMenu className="platform"><img src="/media/icons/People.png" /><a href="">People</a></ItemMenu>
          }
        {'Entities'.toLowerCase().includes(inputText.toLowerCase())&&
          <ItemMenu className="platform"><img src="/media/icons/Entities.png" /><a href="/Entities">Entities</a></ItemMenu>
        } 
        {'Administartion'.toLowerCase().includes(inputText.toLowerCase())&&
          <ItemMenu className="platform"><img src="/media/icons/administration.png" /><a href="">Administration</a></ItemMenu>
        }
        
        </ItemSection>

        <ItemSection>
        <ItemMenu><p>Workspaces</p></ItemMenu>
        {workspaceData.map((workspace) => (
           <div>{workspace.title.toLowerCase().includes(inputText.toLowerCase())&&
          <ItemMenu><img  src={workspace.url} /><a href={"/Workspace/"+workspace.id}>{workspace.title}</a></ItemMenu>}</div>
        ))
        }
        
        </ItemSection>
          </InnerWrapper>
      </Wrapper>
    );
};


export default ExpandedMenu;