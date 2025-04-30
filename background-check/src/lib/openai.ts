import OpenAI from 'openai';
import _ from 'lodash';
import envVars from '../constants/env-vars';

export const openaiClient = new OpenAI({ apiKey: envVars.OPENAI_API_KEY });

export const promptChatCompletion = async (prompt: string, system: string, model: string) => {
	try {
		const response = await openaiClient.chat.completions.create({
			model,
			messages: [
				{
					role: 'system',
					content: system,
				},
				{
					role: 'user',
					content: prompt,
				},
			],
		});
		console.log(JSON.stringify(response));

		return _.get(response, 'choices[0].message.content',  '```json\n{error: "Failed to complete prompt."}```')
	} catch (err) {
		console.error(err);
		return 'Failed to complete prompt.';
	}
};
