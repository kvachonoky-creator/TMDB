import {MovieSection} from "@/common/components/MovieSection/MovieSection.tsx";
import {MovieSectionSkeleton} from "@/common/components/MovieSectionSkeleton/MovieSectionSkeleton.tsx";
import type {BaseResponse} from "@/common/types";
import s from './MainMovieSections.module.css'

type MainMovieSection = {
    title: string
    category: string
    data?: BaseResponse
    to: string
}

type Props = {
    sections: MainMovieSection[]
}

export const MainMovieSections = ({sections}: Props) => {
    return (
        <div className={s.sections}>
            {sections.map(({title, category, data, to}) => (
                data ? (
                    <MovieSection
                        key={category}
                        columns={6}
                        to={to}
                        title={title}
                        movies={data.results.slice(0, 6)}
                        mobileCarousel
                    />
                ) : (
                    <MovieSectionSkeleton
                        key={category}
                        amount={6}
                        title={title}
                        to={to}
                    />
                )
            ))}
        </div>
    )
}
