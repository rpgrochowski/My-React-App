import React, {FC} from 'react';
import styled from 'styled-components';
import { ContentStyle } from '../../styledHelpers/Components';


export const Rendertest: FC = () =>{

    const ArrayTest = ['a', 'b', 'c'];
    return (
        <>
        {ArrayTest.map(elem =>

            <span>{elem}</span>)}
        
        </>
    );
};

export default Rendertest;