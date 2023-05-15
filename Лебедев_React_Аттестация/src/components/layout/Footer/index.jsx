import { Call, Facebook, Instagram, Location, Message, Pinterest, Telegram, Twitter } from '../../../assets/Svg'
import Container from '../../../containers'
import { CategoryList } from '../../../core/Data/Footer'
import Logo from '../../atoms/Logo'
import * as S from './styled'
const Footer = () => {
    return (
        <S.Footer>
            <Container black column>
                <S.TopRow>
                    <S.SocialSvg src={Facebook}/>
                    <S.SocialSvg src={Pinterest}/>
                    <S.SocialSvg src={Twitter}/>
                    <S.SocialSvg src={Instagram}/>
                    <S.SocialSvg src={Telegram}/>
                </S.TopRow>
                <S.MiddleRow>
                    <S.Col>
                        <S.ColItem>
                            <Logo white />
                        </S.ColItem>
                        <S.ColItem>
                            <S.InfoSubtitle>Discover nature's beauty with <br /> our natural care products.</S.InfoSubtitle>
                        </S.ColItem>
                        <S.ColItem>
                            <S.TooltipItem>
                                <S.TooltipSvg src={Call} />
                                <S.TooltipTitle>+ 38 050 123 45 67</S.TooltipTitle>
                            </S.TooltipItem>
                        </S.ColItem>
                        <S.ColItem>
                            <S.TooltipItem>
                                <S.TooltipSvg src={Message} />
                                <S.TooltipTitle>bloombt@kmail.com </S.TooltipTitle>
                            </S.TooltipItem>
                        </S.ColItem>
                        <S.ColItem>
                            <S.TooltipItem>
                                <S.TooltipSvg src={Location} />
                                <S.TooltipTitle>Moscow, Russia</S.TooltipTitle>
                            </S.TooltipItem>
                        </S.ColItem>
                    </S.Col>
                    <S.Col row>
                        <S.Row>
                            {CategoryList.map((category) => (
                                <S.ColItem>
                                    <S.TooltipItem>{category.title}</S.TooltipItem>
                                    {(category.links).map((link) => (
                                        <S.TooltipItem>{link}</S.TooltipItem>
                                    ))}
                                </S.ColItem>
                            ))}
                        </S.Row>
                    </S.Col>
                    <S.Col>
                        <S.ColItem>
                            <S.InfoTitle>SIGN UP FOR EMAILS</S.InfoTitle>
                        </S.ColItem>
                        <S.ColItem>
                            <S.InfoSubtitle>Stay informed, subscribe to our <br /> newsletter now!</S.InfoSubtitle>
                        </S.ColItem>
                        <S.ColItem>
                            <S.Input placeholder='Email' type='email' />
                        </S.ColItem>
                        <S.ColItem>
                            <S.InfoSubtitle hover pointer>Subscribe →</S.InfoSubtitle>
                        </S.ColItem>
                    </S.Col>
                </S.MiddleRow>
                <S.BottomRow>
                    <S.TextGray>© 2023 Bloom Beauty </S.TextGray>
                    <S.Col row>
                        <S.Row>
                            <S.TextGray mr15>Privacy Policy</S.TextGray>
                            <S.TextGray>Terms And Conditions</S.TextGray>
                        </S.Row>
                    </S.Col>
                </S.BottomRow>
            </Container>
        </S.Footer>
    )
}
export default Footer