import { AddToBagButton } from "../Buttons";
import * as S from "./styled";
const Card = ({ img, name, desc, price }) => {
    return (
        <S.Card>
            <S.Image src={img} alt="img" />
            <S.InfoContainer>
                <S.Info>
                    <S.Title>{name}</S.Title>
                    <S.Subtitle>{desc}</S.Subtitle>
                    <S.Price>{price}$</S.Price>
                </S.Info>
                <S.Tooltip>
                    <AddToBagButton />
                </S.Tooltip>
            </S.InfoContainer>
        </S.Card>
    )
}
export default Card