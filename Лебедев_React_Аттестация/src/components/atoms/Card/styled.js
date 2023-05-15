import styled from "styled-components";

export const Card = styled.div`
width: 290px;
display: flex;
flex-direction: column;
height: 540px;
cursor: pointer;
`
export const Image = styled.img`
object-fit: cover;
border-radius: 6px 6px 0 0;
`
export const InfoContainer = styled.div`
padding: 10px 20px 20px 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
height: 100%;
`
export const Info = styled.div`
display: flex;
flex-direction: column;
`

export const Tooltip = styled.div`
display: flex;
`

export const Title = styled.p`
font-weight: 500;
font-size: 16px;
line-height: 24px;
color: var(--color-black);
margin-bottom: 10px;
${Card}:hover & {
    color: var(--color-pink)
}
`

export const Subtitle = styled.div`
font-weight: 400;
font-size: 14px;
line-height: 22px;
color: var(--color-gray-second);
margin-bottom: 10px;
`
export const Price = styled.p`
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: var(--color-black);
margin-bottom: 10px;

`