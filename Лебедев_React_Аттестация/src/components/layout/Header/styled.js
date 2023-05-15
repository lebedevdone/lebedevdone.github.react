import styled from "styled-components";

export const Header = styled.div`
width: 100%;
height: 80px;
`

export const NavItem = styled.p`
font-size: 16px;
font-weight: 400;
line-height: 24px;
color: var(--color-black);
cursor: pointer;
&:hover{
    color: var(--color-pink)
}
`
export const NavContainer = styled.div`
display: flex;
${NavItem}:not(:last-child){
margin-right: 40px;
}
`
export const TooltipItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
`
export const TooltipSvg = styled.img`
width: 24px;
height: 24px;
margin-bottom: 5px;
`

export const TooltipName = styled.p`
font-size: 12px;
font-weight: 400;
line-height: 18px;
color: var(--color-black);
`

export const TooltipContainer = styled.div`
display: flex;
${TooltipItem}:not(:last-child){
margin-right: 20px;
}
`
