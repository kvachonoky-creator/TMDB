import {SearchInput} from "@/common/components/SearchInput/SearchInput.tsx";
import {useSearchMoviesQuery} from "@/feature/Movie/api/movieApi.ts";
import {useSearchParams} from "react-router";
import {MovieCards} from "@/common/components/MovieCards/movieCards.tsx";
import {LinearProgress} from "@/common/components/LinearProgress/LinearProgress.tsx";
import {Container} from "@/common/components/Container/Container.tsx";

export const SearchPage = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') || '';

    const {data, isFetching} = useSearchMoviesQuery({query}, {skip: !query});

    const onclickHandler = (title: string) => {
        setSearchParams({query: title});
    }

    return (<Container>
            <section>
                {isFetching && <LinearProgress/>}
                <h2>Search results</h2>
                <SearchInput onClick={(title) => onclickHandler(title)}/>
                <span>Results for "{query}"</span>
                {data &&
                data.results.length
                    ? <MovieCards movies={data.results}/>
                    : <span>No matches found for "{query}".</span>}
            </section>
        </Container>


    )
}