# Background Check Client

A modern React-based web application for managing background checks. Built with TypeScript and Material-UI, this client provides a user-friendly interface for handling background check processes.

## Features

- Modern, responsive UI built with Material-UI
- Type-safe development with TypeScript
- Client-side routing with React Router
- Component-based architecture
- Mock data integration for development

## Tech Stack

- React 19
- TypeScript
- Material-UI (MUI) v7
- React Router v7

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd background-check-client
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000] to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── lib/           # Utility functions and helpers
├── pages/         # Page components
├── types.ts       # TypeScript type definitions
└── App.tsx        # Main application component
```

## Development

The project uses TypeScript for type safety and better developer experience.

Create a .env file with the following:
REACT_APP_API_URL={the background-check server URL, something like [http://localhost:8080/api]}