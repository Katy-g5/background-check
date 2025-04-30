
import envVars from "../constants/env-vars";

const wikiURL = envVars.WIKI_API_URL;

export const fetchCandidateBackground = async (firstName: string, lastName: string) => {
    try {
        const response = await fetch(`${wikiURL}/${firstName}_${lastName}`);
        const data = await response.json();
        return data.extract;
    } catch (error) {
        console.error(`Error fetching wiki data: ${error}`);
        return null;
    }
}
