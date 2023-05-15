import styled from "styled-components";

export const ColItem = styled.div`
`
export const InfoSubtitle = styled.p`
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #fff;
cursor: ${props => props.pointer ? 'pointer' : 'auto'};
&:hover{
    color: ${props => props.hover ? 'var(--color-pink)' : '#fff'}
}
`
export const InfoTitle = styled.p`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #fff;
`

export const TooltipItem = styled.div`
display: flex;
color: #fff;
`
export const TextGray = styled.p`
font-weight: 500;
font-size: 14px;
line-height: 21px;
color: var(--color-gray);
margin-right: ${props => props.mr15 && '15px'};
`
export const SocialSvg = styled.img`
width: 30px;
height: 30px;
`
export const TooltipSvg = styled.img`
width: 16px;
height: 16px;
`
export const TooltipTitle = styled.p`
font-size: 16px;
font-weight: 500;
line-height: 19px;
color: #fff;
margin-left: 10px;
`
export const Input = styled.input`
padding: 10px;
border-radius: 4px;
background: #fff;
border: none;
`

export const TopRow = styled.div`
display: flex;
justify-content: center;
margin-top: 40px;
margin-bottom: 40px;
${SocialSvg}:not(:last-child){
    margin-right: 60px;
}
`

export const MiddleRow = styled.div`
display: flex;
padding-bottom: 50px;
width: 100%;
justify-content: space-between;
border-bottom: 1px solid var(--color-gray);

`
export const BottomRow = styled.div`
display: flex;
margin-top: 20px;
margin-bottom: 24px;
justify-content: space-between;
width: 100%;
`

export const Footer = styled.div`
width: 100%;
background-color: var(--color-black);
height: 390px;
`

export const Col = styled.div`
display: flex;
flex-direction: column;
${ColItem}:not(:last-child){
    margin-bottom: 10px;
}
`

export const Row = styled.div`
display: flex;
flex-direction: row;
${ColItem}:not(:last-child){
    margin-right: 36px;
}
${TooltipItem}:first-child{
    color: var(--color-gray);
    line-height: 24px;
}
${TooltipItem}:not(:first-child){
    margin-top: 10px;
}
${TooltipItem}:not(:first-child):hover{
    color: var(--color-pink);
    cursor: pointer;
}
`
