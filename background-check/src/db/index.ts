import { Prisma } from "@prisma/client";
import prismaClient from "./client";

export const createDbCandidate = async (candidateData: Prisma.CandidateUncheckedCreateInput) => {
  return prismaClient.candidate.create({
    data: candidateData,
  });
};

export const getAllDbCandidates = async () => {
    return prismaClient.candidate.findMany();
};

export const updateDbCandidate = async (id: string, candidateData: Prisma.CandidateUncheckedUpdateInput) => {
    return prismaClient.candidate.update({
        where: { id },
        data: candidateData,
    });
};

export const getDbCandidateById = async (id: string) => {
    return prismaClient.candidate.findUnique({
        where: { id },
    });
};