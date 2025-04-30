import { Button, Typography } from '@mui/material';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Candidate } from '../types';
import { fetchAllCandidates, fetchCandidateById } from '../lib/candidatesFetcher';
import { InputStyled } from './InputPage';
import { ArrowDownward } from '@mui/icons-material';
import { ArrowUpward } from '@mui/icons-material';
import Status, { StatusType } from '../components/Status';


export default function OutputPage() {
  const [keywords, setKeywords] = useState<string>("");
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [filteredCandidates, setFilteredCandidates] = useState<Candidate[]>([]);
  const [sorted, setSorted] = useState<boolean>(false);
  const [statuses, setStatuses] = useState<{ [key: string]: StatusType }>({});

  useEffect(() => {
    if (sorted) {
      setFilteredCandidates(filteredCandidates.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()));
    } else {
      setFilteredCandidates(filteredCandidates.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    }
  }, [sorted, filteredCandidates]);

  const handleSingleFetch = async (id: string) => {
    setStatuses({ ...statuses, [id]: "loading" });
    const response = await fetchCandidateById(id);
    if (response.success) {
      setStatuses({ ...statuses, [id]: "success" });
      let candidate = response.data;
      let newCandidates = candidates.map((c) => {
        if (c.id === id) {
          return candidate;
        }
        return c;
      });
      setCandidates(newCandidates);
      setFilteredCandidates(newCandidates);
      setTimeout(() => {
        setStatuses({ ...statuses, [id]: null });
      }, 3000);
    } else {
      setStatuses({ ...statuses, [id]: "error" });
      setTimeout(() => {
        setStatuses({ ...statuses, [id]: null });
      }, 3000);
    }
  }

  const handleFilter = () => {
    let filtered: Candidate[] = [];
    let cleanKeyworkds = keywords.toLowerCase().split(/[ ,]+/).map((keyword) => keyword.trim());
    candidates.forEach((candidate) => {
      cleanKeyworkds.forEach((keyword) => {
        if (candidate.keywords.includes(keyword)
        || candidate.firstName.toLowerCase().includes(keyword)
        || candidate.lastName.toLowerCase().includes(keyword)) {
          filtered.push(candidate);
        }
      });
    });
    // make sure they're unique
    filtered = filtered.filter((candidate, index, self) =>
      index === self.findIndex((t) => t.id === candidate.id)
    );
    setFilteredCandidates(filtered);
  }

  const fetchCandidates = async () => {
    const response = await fetchAllCandidates();
    setCandidates(response.data);
    setFilteredCandidates(response.data);
  };

  useEffect(() => {  
    fetchCandidates();
  }, []);

  return (
    <Box sx={{ padding: "50px" }}>
      <Typography variant="h2" gutterBottom> Candidates Page </Typography>
      <p>View the output data here.</p>
      <Box sx={{ display: "flex", gap: "20px" }}>
        <InputStyled
          name="keywords"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Filter by keywords or name"
        />
        <Button variant="contained" onClick={handleFilter}>Filter</Button>
      </Box>
      <Button 
        variant="contained" 
        onClick={() => setSorted(!sorted)}
        sx={{ margin: "20px 0" }}
      >
        Sort by creation date
        {sorted ? <ArrowDownward /> : <ArrowUpward />}
      </Button>
      {filteredCandidates.map((candidate) => (
        <div key={candidate.id} style={{ marginBottom: "20px", border: "1px solid #ccc", padding: "20px", borderRadius: "5px", maxWidth: "700px" }}>
          {statuses[candidate.id] ? <Status status={statuses[candidate.id]} /> : <>
            <h3>{candidate.firstName} {candidate.lastName}</h3>
            <p>{candidate.email}</p>
            {candidate.summary !== "" && candidate.summary !== null ? 
            (<>
              <p>{candidate.summary}</p>
            </>) : (
              <>
                <p>No data available yet</p>
                <Button variant="contained" onClick={() => handleSingleFetch(candidate.id)}>Refresh</Button>
              </>
            )}
            <p>{candidate.keywords.join(', ')}</p>
            <p>{candidate.createdAt}</p>
          </>}
        </div>
      ))}
    </Box>
  );
};