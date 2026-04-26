import {Path} from "@/common/routing";


export const getCategoryPath = (category: string) => {
    return `${Path.Category}/${category}`;
};