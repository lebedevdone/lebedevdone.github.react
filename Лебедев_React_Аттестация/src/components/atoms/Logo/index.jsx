import * as S from "./styled"
const Logo = ({white}) => {
    return (
        <S.Logo>
            <S.FirstWord>Bloom</S.FirstWord>
            <S.SecontWord white={white}>Beauty</S.SecontWord>
        </S.Logo>
    )
}
export default Logo