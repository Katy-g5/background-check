import HttpStatusCodes from "../../constants/HttpStatusCodes";
import { Response } from "express";
import { ZodError } from "zod";

export function handleError(
    err: { message: string },
    response: Response
) {
    console.log(err.message);

    let status = HttpStatusCodes.BAD_REQUEST;
    let errorMsg = err.message;

    if (err instanceof ZodError) {
        errorMsg = JSON.stringify(err.issues);
    }

    return response.status(status).json({ error: errorMsg });
}