# Media Explorer

To start the development, run `pnpm run dev`. A tool called `json-server` is used to provide mock RESTful API endpoints. This project uses `pnpm` as its package manager.

<img width="452" height="630" alt="media-explorer-screenshot" src="https://github.com/user-attachments/assets/b6a81895-6102-4ded-a7d7-4ad0e5bff4b0" />

## Requirements

- Show a combined list of books and movies
- Search and filter
- Sort (not shown in wireframe)
- Load more items
- Clicking on an item

## Assumptions made

- data comes from 1 API endpoint.
- pagination is supported by the json-server tool.
- search and filtering is performed on the client-side.

## Phases

- [x] project setup
  - [x] vite + typescript
  - [x] tailwind css
  - [x] json-server
- [x] come up with (typescript) data model
- [x] decide on the UI components
  - [ ] unit test (barely)
  - [x] filterBy
  - [ ] sortBy, sortOrder
  - [ ] image dimension
- [ ] source of data considerations
  - [x] native fetch or axios
  - [x] data fetching from 1 or 2 endpoints
  - [x] pagination
