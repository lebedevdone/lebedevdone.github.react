import styled from "styled-components";

export const Production = styled.div`
width: 100%;
margin-top: 80px;
margin-bottom: 80px;
`

export const Content = styled.div`
display: flex;
flex-direction: column;
`

export const CardWrapper = styled.div`
 display: inline-block;
 &:not(:last-child){
    margin-right: 20px;
 }
`