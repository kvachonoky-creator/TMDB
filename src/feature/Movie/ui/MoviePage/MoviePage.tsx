import {useNavigate, useParams} from "react-router";
import {
    useGetMoviesCreditsQuery,
    useGetMoviesDetailsQuery,
    useGetMoviesSimilarQuery
} from "@/feature/Movie/api/movieApi.ts";
import {Container} from "@/common/components/Container/Container.tsx";
import s from './MoviePage.module.css'
import {MoviePageSkeleton} from "@/feature/Movie/ui/MoviePage/MoviePageSkeleton/MoviePageSkeleton.tsx";
import {MovieInfo} from "@/feature/Movie/ui/MoviePage/MovieInfo/MovieInfo.tsx";
import {CastsSection} from "@/feature/Movie/ui/MoviePage/CastsSection/CastsSection.tsx";
import {SimilarMovieSection} from "@/feature/Movie/ui/MoviePage/SimilarMovieSection/SimilarMovieSection.tsx";

export const MoviePage = () => {
    const {id} = useParams()
    const navigate = useNavigate()

    const numericId = id ? Number(id) : undefined

    const {data: movie} = useGetMoviesDetailsQuery(numericId)
    const {data: credits} = useGetMoviesCreditsQuery(numericId)
    const {data: similar} = useGetMoviesSimilarQuery(numericId)

    const onClickHandler = () => navigate(-1)

    if (!movie || !similar || !credits) {
        return (
            <Container>
                <MoviePageSkeleton/>
            </Container>
        )
    }

    return (
        <Container>
            <section className={s.section}>
                <button className={s.backBtn} onClick={onClickHandler}>Back</button>
                <MovieInfo movie={movie}/>
                <CastsSection cast={credits.cast}/>
                <SimilarMovieSection movies={similar.results}/>
            </section>
        </Container>
    )
}
