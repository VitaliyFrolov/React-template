import { useTranslate } from "../../../shared/hooks/useTranslate";
import { Container } from "../../../shared/ui/Container";

const MainPage = () => {
    const t = useTranslate(['main']);

    return (
        <Container>
            <h1>
                {t('hello')}
            </h1>
        </Container>
    );
};

export default MainPage;