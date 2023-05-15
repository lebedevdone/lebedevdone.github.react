import * as S from "./styled"
const Container = ({children, justifyContent, black, column, left, block}) => {
    return(
       <S.Container justifyContent={justifyContent} black={black} column={column} left={left} block={block}>
        {children}
       </S.Container>
    )
}
export default Container