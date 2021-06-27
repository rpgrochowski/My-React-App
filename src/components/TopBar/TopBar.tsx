import React, {FC} from 'react';
import styled from 'styled-components';

import { Wrapper } from '../../styledHelpers/Components';
import { Colors } from '../../styledHelpers/Colors';
import { ExpandedMenu } from './ExpandedMenu';
import useDropdown from 'react-dropdown-hook';


const Wrapper2 = styled(Wrapper)`
    width: 100%;
    `;

const InnerWrapper = styled.div`
      width: 1200px;
      background: ${Colors.white};
      display: flex;
    `;

const MagnifierBelt = styled.div`
      margin:20px;
      border: 1px solid red;
      display: flex;
      align-items:center;
      `;

const CustomInput = styled.input`
      border: none;
      &:hover{
        outline: none;
      }
      &:focus{
        outline: none;
      }
      `;

const MenuWrapper = styled.div`
      display: flex;
      cursor: pointer;
      position: relative;
      align-items:center;
      width: 250px;
      justify-content: space-between;
      `;

const RightIcons = styled.div`
margin-top: 20px;
  margin-left: 150px;
  `;

const CustomImg = styled.img``;

const CustomLogo = styled.img`
      width: 40px;
      heigt: 40px;
      padding: 10px;
`;

const LeftSide = styled.div``;
const CunstomInput = styled.input``;

export const TopBar: FC = () =>{
  const [ wrapperRef, dropdownOpen, toggleDropdown ] = useDropdown();
  const menuHandler = () =>{
    toggleDropdown();
  };
    return (
      <Wrapper2>
        <InnerWrapper>
          <CustomLogo src="/media/logo.png" />

        
          <MenuWrapper ref={wrapperRef}>
            
            <LeftSide onClick = {menuHandler}>
              <img src="/media/icons/house.png" alt=""/>
              <span>Home</span>
              <img src="/media/icons/arrow-down.png" alt=""/>
            </LeftSide>
            {
              
              dropdownOpen &&
              <ExpandedMenu />
            }
           
          </MenuWrapper>
         
          <MagnifierBelt>

            <CustomInput type="text" placeholder = "serach text"/>
            <CustomImg src="/media/icons/search.png" alt="" title=""/>

          </MagnifierBelt>
          <RightIcons>
            <CustomImg src="/media/icons/house.png"/>
            <CustomImg src="/media/icons/comments.png"/>
            <CustomImg src="/media/icons/bell.png"/>
          </RightIcons>
        </InnerWrapper>
      </Wrapper2>
    );
};



export default TopBar;