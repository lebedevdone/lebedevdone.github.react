import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Card from "../../components/atoms/Card";
import Topic from "../../components/atoms/Topic";
import Container from "../../containers";
import { instanceAxios } from "../../core/Config/Axios";
import * as S from "./styled";
const Production = () => {
    const [product, setProduct] = useState([])
    const sliderSettings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
    }
    useEffect(() => {
        instanceAxios.get('Products').then((response) => {
            setProduct(response.data)
        })
    }, [])
    return (
        <S.Production>
            <Container block>
                <S.Content>
                    <Topic text="All Production" />
                    <S.CardWrapper>
                        <Slider {...sliderSettings}>
                            {product.map(({ img, name, desc, price }) => (
                                <Card img={img} name={name} desc={desc} price={price} />
                            ))}
                        </Slider>
                    </S.CardWrapper>
                </S.Content>
            </Container>
        </S.Production>
    )
}
export default Production