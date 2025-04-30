import {Router} from "express";
import paths from "./constants/paths";
import { getAllCandidates, createNewCandidate, getCandidateById } from "./candidates";

const apiRouter = Router();
const candidateRouter = Router();

candidateRouter.post(
    paths.createNewCandidate,
    createNewCandidate
);

candidateRouter.get(
    paths.getAllCandidates,
    getAllCandidates
);

candidateRouter.get(
    paths.getCandidateById,
    getCandidateById
);

apiRouter.use("/", candidateRouter);

export default apiRouter;