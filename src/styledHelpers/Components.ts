import styled from 'styled-components';

export const Wrapper = styled.div`
    background: grey;
    display: flex;
    justify-content: center;
    padding: 5px;
`;

export const ContentStyle = styled.div`
    width: 300px;
    height: 300px;
    overflow: hidden;
    border: cornsilk;
    box-shadow: 10px 20px 30px gray;
    margin: 10px;
    float: left;
`;

export const DecoLin = styled.hr`
margin-left: 20px;
margin-right: 20px;
width: auto;
border-top: 1px;
border: outset;
`;

export const CommentBox = styled.div`

`;

export const CommentInfo = styled.div`
margin-left: 11px;
grid-auto-flow: row;
display: inline-flex;
`;

export const CommentFooter = styled.div`
width: 150px;
`;

export const CommentLabel = styled(ContentStyle)`
margin-top: 30px;
margin-bottom: 20px;
position: relative;
width: 900px;
height: 150px;
margin: 10px;
float: left;
display: grid;
border: cornsilk;
`;

export const IconImg = styled.img``;

export const ColumnDiv = styled.div`
float: left;
margin-left: 50px;
display: flow-root;
border: cornsilk;
`;

export const Title = styled.div`
margin: 10px;
font-size: larger;
color: gray;
text-shadow: 5px 5px 5px grey;
`;

export const ContentImage = styled.img`
width: 200px;
height: auto;
display: flow-root;
margin: 5px 5px 5px 5px;
`;