import {toast} from "react-toastify";
import type {ZodType} from "zod";
import type {FetchBaseQueryError, NamedSchemaError} from "@reduxjs/toolkit/query";

export const zodCatch = <T extends ZodType>(schema: T) => ({
    responseSchema: schema,
    catchSchemaFailure: (err: NamedSchemaError): FetchBaseQueryError => {
        console.log(err)
        toast.error(`Zod error. Details in the console, ${err.issues}`, {theme: 'colored'})
        return {
            status: 'CUSTOM_ERROR',
            error: 'Schema validation failed',
        }
    }
})