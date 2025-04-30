# Background Check API

A RESTful API service for managing candidate background checks and analysis. This project provides endpoints for creating, retrieving, and analyzing candidate information using OpenAI's API for enhanced data processing.

## Features

- Candidate profile management
- Background check data storage and retrieval
- OpenAI-powered analysis of candidate information
- Secure API endpoints with proper validation
- PostgreSQL database integration using Prisma ORM

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- OpenAI API key
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd background-check
```

2. Install dependencies:
```bash
npm install
```

3. Set up the environment variables:
Create a `.env` file in the root directory with the following variables:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
OPENAI_API_KEY="your-openai-api-key"
PORT=3000
WIKI_API_URL=https://en.wikipedia.org/api/rest_v1/page/summary
```

4. Initialize the database:
***Check the .env file – make sure DATABASE_URL points to a safe local/test DB.
```bash
npx prisma generate
npx prisma migrate dev --name [name-of-migration]
```

## Development

To start the development server:
```bash
npm run dev
```

The server will start with hot-reloading enabled.

## Building for Production

To build the project:
```bash
npm run build
```

To start the production server:
```bash
npm start
```

## API Endpoints

- `POST api/create-new-candidate` - Create a new candidate profile
- `GET /api/get-all-candidates` - Get all candidates
- `GET /api/candidates/:id` - Get a specific candidate

## Project Structure

- `src/` - Source code directory
  - `routes/` - API route controllers
  - `lib/` - External services integrations
  - `db/` - Database related functions
  - `constants/` - Utility functions and helpers
- `prisma/` - Database schema and migrations