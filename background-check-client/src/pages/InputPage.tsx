import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { createCandidate } from '../lib/candidatesFetcher';
import Status, { StatusType } from '../components/Status';

export default function InputPage(){
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    keywords: "",
  });
  const [status, setStatus] = useState<StatusType>(null);

  const resetFormData = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      keywords: "", 
    });
  };

  const handleSubmit = async () => {
    setStatus('loading');
  
    const result = await createCandidate(formData);
    if (result.success) {
      setStatus('success');
      setTimeout(() => {
        resetFormData();
        setStatus(null);
      }, 3000);
    } else {
      setStatus('error');
      setTimeout(() => {
        setStatus(null);
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ padding: "50px" }}>
      <Typography variant="h2" gutterBottom>
        Input Page
      </Typography>
      {status ? (
        <Status status={status} />
      ) : (
      <>
        <p>Enter the candidate data here.</p>
        <form
          style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "50%" }}
          onSubmit={handleSubmit}
        >
          <InputStyled 
            name="firstName"
            value={formData.firstName} 
            onChange={handleChange}
            required={true}   
            placeholder="First Name"
          />
          <InputStyled 
            name="lastName"
            value={formData.lastName} 
            onChange={handleChange} 
            required={true} 
            placeholder="Last Name"
          />
          <InputStyled 
            name="email"
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
            required={true} 
            placeholder="Email"
          />
          <InputStyled 
            name="keywords"
            value={formData.keywords} 
            onChange={handleChange} 
            required={true} 
            placeholder="Keywords, seperated by commas"
          />
          <Button sx={{ width: "100px" }} variant="contained" type="submit">Submit</Button>
        </form>
      </>
      )}
    </Box>
  );
};


export function InputStyled(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input 
    {...props}
      style={{
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        width: "50%",
      }}
    />
  );
};