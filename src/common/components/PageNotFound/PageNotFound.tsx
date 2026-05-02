import {useNavigate} from "react-router";
import {Path} from "@/common/routing";
import {Container} from "@/common/components/Container/Container.tsx";
import s from './PageNotFound.module.css'
import {NotFound} from "@/common/components/PageNotFound/NotFound/NotFound.tsx";

export const PageNotFound = () => {
    const navigate = useNavigate();

    const onClickHandler = () => navigate(Path.Main)

    return (
        <Container>
            <div className={s.page}>
                <div className={s.code}>404</div>
                <NotFound/>
                <h1 className={s.title}>Page Not Found</h1>
                <p className={s.subtitle}>Looks like this scene was cut from the film.<br/>The page you're looking for doesn't exist.</p>
                <button className={s.btn} onClick={onClickHandler}>
                    ← Back to Main
                </button>
            </div>
        </Container>
    )
}