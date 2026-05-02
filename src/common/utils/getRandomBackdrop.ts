
import {IMAGE_BASE_URL} from "@/common/constants/constants.ts";
import type {Movie} from "@/common/types";

export const getRandomBackdrop = (array: Movie[]): string => {
    const randomIndex = Math.floor(Math.random() * array.length)
    return IMAGE_BASE_URL + array[randomIndex].backdrop_path
}