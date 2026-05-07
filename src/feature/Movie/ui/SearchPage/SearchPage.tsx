import {SearchInput} from "@/common/components/SearchInput/SearchInput.tsx";
import {useSearchMoviesQuery} from "@/feature/Movie/api/movieApi.ts";
import {useNavigate, useSearchParams} from "react-router";
import {LinearProgress} from "@/common/components/LinearProgress/LinearProgress.tsx";
import {Container} from "@/common/components/Container/Container.tsx";
import {Pagination} from "@/common/components/Pagination/Pagination.tsx";
import {useState} from "react";
import {Path} from "@/common/routing";
import s from './SearchPage.module.css'
import {SearchResults} from "@/feature/Movie/ui/SearchPage/SearchResults/SearchResults.tsx";

export const SearchPage = () => {

    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') || '';

    const [currentPage, setCurrentPage] = useState(1)

    const {data, isFetching} = useSearchMoviesQuery({query, page: currentPage});

    const onclickHandler = (title: string) => {
        setCurrentPage(1)

        if (!title) {
            navigate(Path.Search)
            return
        }
        setSearchParams({query: title});
    }

    return (
        <Container>
            <section className={s.section}>
                {isFetching && <LinearProgress/>}
                <h2 className={s.title}>Search Results</h2>
                <SearchInput onClick={(title) => onclickHandler(title)}/>
                <SearchResults query={query} data={data}/>

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
