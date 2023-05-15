import styled from "styled-components";

export const Topic = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 30px;
`
export const UpBlock = styled.div`
display: flex;
`

export const DownBlock = styled.div`
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: var(--color-black)
`

export const Bloom = styled.img`
transform: scale(${props => props.reverse ? '-1, 1' : ''});

`

export const Title = styled.p`
font-weight: 700;
font-size: 24px;
line-height: 36px;
margin: 0px 10px 0px 10px;
color: var(--color-black)
`