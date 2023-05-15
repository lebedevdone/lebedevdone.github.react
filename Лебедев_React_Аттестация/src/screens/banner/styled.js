import styled from "styled-components";

export const Banner = styled.div`
width: 100%;
position: relative;
`
export const BannerImage = styled.img`
object-fit: cover;
width: 100%;
z-index: 1;
`

export const Col = styled.div`
display: flex;
flex-direction: column;
position: absolute;
top: 25%;
`

export const Title = styled.p`
font-weight: 700;
font-size: 36px;
line-height: 54px;
text-transform: uppercase;
color: var(--color-black);
margin-bottom: 20px;
`
export const Subtitle = styled.p`
font-weight: 400;
font-size: 24px;
line-height: 36px;
color: var(--color-black);
margin-bottom: 55px;
`