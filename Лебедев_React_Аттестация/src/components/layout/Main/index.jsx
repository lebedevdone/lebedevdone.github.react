import Footer from "../Footer";
import Header from "../Header";
import * as S from './styled';
const MainLayout = ({ children }) => {
    return (
        <S.Wrapper>
            <Header />
            <S.Content>
                {children}
            </S.Content>
            <S.Footer>
                <Footer />
            </S.Footer>
        </S.Wrapper>
    )
}
export default MainLayout