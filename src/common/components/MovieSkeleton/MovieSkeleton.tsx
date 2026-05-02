import Skeleton from "react-loading-skeleton";

type Props = {
    amount?: number
}

export const MovieSkeleton = ({amount = 5} : Props) => {
    return (
        Array.from({length: amount}, (_, i) =>
            <Skeleton key={i} width={188} height={282}/>)

    )
}