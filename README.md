# Background Check System

This repository contains a full-stack background check system consisting of two main components:

## Projects

1. Background Check API (`background-check/`)
A Node.js backend service built with TypeScript

2. Background Check Client (`background-check-client/`)
A React-based frontend application that provides:
- User interface for background check submission
- Dashboard for checking status

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository
2. Install dependencies for both projects:
   ```bash
   # Install backend dependencies
   cd background-check
   npm install

   # Install frontend dependencies
   cd ../background-check-client
   npm install
   ```

3. Set up environment variables:
   - Configure `.env`s in both projects

4. Start the development servers:
   ```bash
   # Start backend server
   cd background-check
   npm run dev

   # Start frontend server
   cd ../background-check-client
   npm start
   ```

For more detailed information about each project, please refer to their respective README files:
- [Backend README](./background-check/README.md)
- [Frontend README](./background-check-client/README.md)
