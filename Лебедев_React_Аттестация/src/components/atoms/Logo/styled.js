import styled from "styled-components";

export const Logo = styled.div`
display: flex;
`

export const FirstWord = styled.p`
font-size: 24px;
color: var(--color-pink);
line-height: 25px;
font-weight: 500;
margin: 0 5px 0 0;
`
export const SecontWord = styled.p`
font-size: 24px;
color: ${props => props.white ? '#fff' : 'var(--color-black)'};
line-height: 25px;
font-weight: 600;
margin: 0;
`