import type {FetchBaseQueryError} from "@reduxjs/toolkit/query";
import {toast} from "react-toastify";

export const handleError = (error: FetchBaseQueryError) => {
    switch (error.status) {
        case 'FETCH_ERROR':
        case 'CUSTOM_ERROR':
        case 'PARSING_ERROR':
        case'TIMEOUT_ERROR':
            toast.error(error.error, {theme: 'colored'})
            break
        case 401:
        case 404:
            toast.error((error.data as { status_message: string }).status_message, {theme: 'colored'})
            break
        default:
            if (error.status >= 500 && error.status < 600) {
                toast("Server error occurred. Please try again later.", {type: "error", theme: "colored"})
            } else {
                toast("Some error occurred", {type: "error", theme: "colored"})
            }
    }

}