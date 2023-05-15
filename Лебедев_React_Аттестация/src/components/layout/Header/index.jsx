import Container from "../../../containers"
import { NavList, TooltipList } from "../../../core/Data/Header"
import Logo from "../../atoms/Logo"
import * as S from './styled'
const Header = () => {
    return (
        <S.Header>
        <Container justifyContent>
            <Logo />
            <S.NavContainer>
                {NavList.map((item, index) => (
                    <S.NavItem key={index}>{item}</S.NavItem>
            ))}
            </S.NavContainer>
            <S.TooltipContainer>
                {TooltipList.map((item, index) => (
                    <S.TooltipItem key={index}>
                        <S.TooltipSvg src={item.svg}/>
                        <S.TooltipName>{item.name}</S.TooltipName>
                    </S.TooltipItem>
                ))}
            </S.TooltipContainer>
        </Container>
        </S.Header>
    )
}
export default Header