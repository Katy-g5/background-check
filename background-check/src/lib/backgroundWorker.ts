
import { Candidate } from '@prisma/client';
import { promptChatCompletion } from './openai'
import { SystemPrompt, ProcessDataWithAI } from './prompts';
import { fetchCandidateBackground } from './wiki';
import { updateDbCandidate } from '../db';

export const startWorker = async (candidate: Candidate) => {
	const candidateResearched = await performBackgroundCheck(candidate);
	updateDbCandidate(candidate.id, candidateResearched);
}

const performBackgroundCheck = async (candidate: Candidate) => {
	const candidateResearched: Candidate = {
		...candidate,
	};
	const { firstName, lastName } = candidate;

	const backgroundFetched = await fetchCandidateBackground(firstName, lastName);
	
	candidateResearched.externalData = backgroundFetched;

	const response = await promptChatCompletion(ProcessDataWithAI(backgroundFetched), SystemPrompt, 'gpt-4o');

	let parsedJson;
	try {
		parsedJson = JSON.parse(response.replace(/```json\n|```/g, ''));
	} catch (error) {
		throw new Error('Failed to parse the AI respone into JSON: ' + error)
	}

	candidateResearched.summary = parsedJson.summary;
	
	return candidateResearched;
}