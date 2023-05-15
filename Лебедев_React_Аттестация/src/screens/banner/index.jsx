import BannerImg from "../../assets/Img/first-screen.png"
import { ShopNowButton } from "../../components/atoms/Buttons"
import Container from "../../containers"
import * as S from './styled'
const Banner = () => {
    return (
        <S.Banner>
            <S.BannerImage src={BannerImg} />
            <Container left>
                <S.Col>
                    <S.Title>Discover your inner beauty<br/>with Blossom Glow Kit</S.Title>
                    <S.Subtitle>Great gift for yourself and loved ones</S.Subtitle>
                    <ShopNowButton/>
                </S.Col>
            </Container>
        </S.Banner>
    )
}
export default Banner