import type {Movie} from "@/feature/Movie/api/movieApi.types.ts";
import {IMAGE_BASE_URL} from "@/common/constants/constants.ts";

export const getRandomBackdrop = (array: Movie[]): string => {
    const randomIndex = Math.floor(Math.random() * array.length)
    return IMAGE_BASE_URL + array[randomIndex].backdrop_path
}