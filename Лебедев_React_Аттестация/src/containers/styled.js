import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: ${props => props.block ? 'block' : 'flex'};
    margin-left: auto;
    margin-right: auto;
    max-width: 1170px;
    /* margin-bottom: 25px; */
    padding: 0 16px;
    align-items: center;
    background-color: ${props => props.black ? 'var(--color-black)' : '#fff'};
    justify-content: ${props => props.justifyContent ? 'space-between' : props.left ? 'left' : 'center'};
    flex-direction: ${props => props.column ? 'column' : 'row'};
`