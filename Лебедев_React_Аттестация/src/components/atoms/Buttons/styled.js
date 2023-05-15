import styled from "styled-components";

export const ButtonShopNow = styled.button`
border-radius: 4px;
padding: 10px;
background: var(--color-pink);
border: none;
color: #fff;
font-weight: 600;
font-size: 14px;
line-height: 21px;
width: 250px;
cursor: pointer;
height: 40px;
&:hover{
    background: var(--color-black);
    color: #fff;
}
`

export const ButtonAddToBag = styled.button`
background: #fff;
width: 100%;
border: 1px solid var(--color-black);
border-radius: 4px;
padding: 10px;
font-size: 14px;
font-weight: 500;
line-height: 21px;
color: var(--color-black);
cursor: pointer;
&:hover{
    background: var(--color-black);
    color: #fff;
}
/* &:hover{
    background: var(--color-black);
    color: #fff;
} */
`