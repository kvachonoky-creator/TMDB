import {useParams} from "react-router";

export const MoviePage = () => {

    const {id} = useParams()

    console.log(id)

    return (
        <div>
            movie page =))
        </div>
    )
}