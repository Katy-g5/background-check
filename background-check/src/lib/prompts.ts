export const SystemPrompt = 'You are an online background check assistant. You are to only use the information given to you and to not infer at all.';

export const ProcessDataWithAI = (externalData: string) => {
	return `The following is a wikipedia api output of a person: ${externalData}.
	\n Return a json with the following field:
	\n "summary": (string) return a short. but informative summary of the described person.`;
};