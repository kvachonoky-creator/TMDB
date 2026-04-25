import {SearchInput} from "@/common/components/searchInput/SearchInput.tsx";
import {useSearchMovieQuery} from "@/feature/Movie/api/movieApi.ts";
import {useSearchParams} from "react-router";
import {MovieCards} from "@/common/components/movieCards/movieCards.tsx";

export const SearchPage = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') || '';

    const {data} = useSearchMovieQuery({query}, {skip: !query});

    const onclickHandler = (title: string) => {
        setSearchParams({query: title});
    }

    return (
        <div>
            <h2>Search results</h2>
            <SearchInput onClick={(title) => onclickHandler(title)}/>
            <span>Results for "{query}"</span>
            {data &&
            data.results.length
                ? <MovieCards movies={data.results}/>
                : <span>No matches found for "{query}".</span>}
        </div>

    )
}