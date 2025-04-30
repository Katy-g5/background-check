import { Request, Response } from "express";
import { handleError } from "./utils/error-handler";
import { createDbCandidate, getAllDbCandidates, getDbCandidateById } from "../db";
import { startWorker } from "../lib/backgroundWorker";
import prepareData from "./utils/data-parser";

export const createNewCandidate = async (request: Request, response: Response) => {
    try {
		const rawData = request.body;
        
        const candidateData = prepareData(rawData);
		
        const candidate = await createDbCandidate(candidateData);
		if (candidate) {
            startWorker(candidate);
			response.status(201).json(candidate);
      	}
    } catch (err: unknown) {
      handleError(err as { message: string }, response);
    }
};

export const getAllCandidates = async ( _: Request, response: Response) => {
    try {
        const candidates = await getAllDbCandidates();

        if (candidates) {
            response.json(candidates);
        } else {
            response.status(404).send("No candidates found");
        }
    } catch (err: unknown) {
        handleError(err as { message: string }, response);
    }
};

export const getCandidateById = async (request: Request, response: Response) => {
    try {
        const candidateId = request.params.id;
        const candidate = await getDbCandidateById(candidateId);

        if (candidate) {
            response.json(candidate);
        } else {
            response.status(404).send("Candidate not found");
        }
    } catch (err: unknown) {
        handleError(err as { message: string }, response);
    }
};


