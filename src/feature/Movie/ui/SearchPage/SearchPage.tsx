import {SearchInput} from "@/common/components/SearchInput/SearchInput.tsx";
import {useSearchMoviesQuery} from "@/feature/Movie/api/movieApi.ts";
import {useNavigate, useSearchParams} from "react-router";
import {MovieCards} from "@/common/components/MovieCards/movieCards.tsx";
import {LinearProgress} from "@/common/components/LinearProgress/LinearProgress.tsx";
import {Container} from "@/common/components/Container/Container.tsx";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {useState} from "react";
import {Path} from "@/common/routing";
import s from './SearchPage.module.css'

export const SearchPage = () => {

const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') || '';

    const [currentPage, setCurrentPage] = useState(1)

    const {data, isFetching} = useSearchMoviesQuery({query, page: currentPage});

    const onclickHandler = (title: string) => {
        setSearchParams({query: title});
        if(!title) {
            navigate(Path.Search)
        }
    }

    return (
        <Container>
            <section className={s.section}>
                {isFetching && <LinearProgress/>}
                <h2 className={s.title}>Search Results</h2>
                <SearchInput onClick={(title) => onclickHandler(title)}/>
                {query && <p className={s.hint}>Results for "{query}"</p>}

                {!query && (
                    <p className={s.hint}>Enter a movie title to start searching.</p>
                )}

                {query && data && (
                    data.results.length
                        ? <MovieCards movies={data.results}/>
                        : <p className={s.noResults}>No matches found for "{query}".</p>
                )}

                {data && data.total_pages > 1 && (
                    <Pagination
                        currentPage={data.page}
                        setCurrentPage={setCurrentPage}
                        pagesCount={data.total_pages}
                    />
                )}
            </section>
        </Container>
    )


}