import { Bloom } from "../../../assets/Svg"
import * as S from "./styled"
const Topic = ({ text }) => {
    return (
        <S.Topic>
            <S.UpBlock>
                <S.Bloom src={Bloom}></S.Bloom>
                <S.Title>{text}</S.Title>
                <S.Bloom src={Bloom} reverse></S.Bloom>
            </S.UpBlock>
            <S.DownBlock>See All</S.DownBlock>
        </S.Topic>
    )
}
export default Topic