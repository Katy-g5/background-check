// perform fetches to my API

const API_URL = process.env.REACT_APP_API_URL;

// create Candidate
export const createCandidate = async (candidate: any) => {
  console.log(candidate);
  const response = await fetch(`${API_URL}/create-new-candidate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(candidate),
  });

  console.log(response);
  if (!response.ok) {
    return { success: false, error: response.statusText };
  } else {
    return { success: true, error: null };
  }
};

// fetch all candidates
export const fetchAllCandidates = async () => {
  const response = await fetch(`${API_URL}/get-all-candidates`, {
    method: "GET",
  });

  console.log(response);

  if (!response.ok) {
    return { success: false, error: response.statusText, data: [] };
  } else {
    const data = await response.json();
    return { success: true, error: null, data };
  }
};

// fetch candidate by id
export const fetchCandidateById = async (id: string) => {
  const response = await fetch(`${API_URL}/candidates/${id}`, {
    method: "GET",
  });
  console.log(response);

  if (!response.ok) {
    return { success: false, error: response.statusText, data: null };
  } else {
    const data = await response.json();
    return { success: true, error: null, data };
  }
};


