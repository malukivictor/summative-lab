# Personal Project Showcase App

A React app for showcasing personal projects. No backend - all data lives in local component state.

## Features

- View a list of projects as cards
- Search projects by title
- Add a new project via a form
- Each project links out to its GitHub repo

## Tech Stack

- React
- Vite
- Tailwind CSS

## Getting Started
npm install
npm run dev


Open the local URL Vite prints in your terminal to view the app.
## Project Structure
- `App.jsx` - top-level state and layout
- `Header.jsx` - page title
- `ProjectForm.jsx` - form to add a new project
- `SearchBar.jsx` - filters the project list by title
- `ProjectList.jsx` - renders the list of `ProjectCard`s
- `ProjectCard.jsx` - displays a single project

## Notes

Projects added through the form are stored only in memory and reset when page refresh.