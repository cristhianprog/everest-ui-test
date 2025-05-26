![Everest Logo](public/everest-logo.svg?raw=true 'Everest Logo')

# TODO App Challenge

Instructions for the implementation can be found in the [INSTRUCTIONS](./INSTRUCTIONS.md) doc.

## Starting the app for the first time

### `yarn install` or `npm install`

This will install all the dependencies of the project defined in `package.json`. Whenever that file changes, you will also need to re-run this command to make sure all packages are updated.

### `yarn start` or `npm start`

Opens a browser tab pointing to [http://localhost:5173](http://localhost:5173).

- Runs the app in the development mode.
- The page will reload if you make edits.
- You will also see any typing and lint errors in the console.

# ✅ Test Todo List App — React + TypeScript + Ant Design

This is a **Todo List** project developed using modern technologies from the React ecosystem. The goal of this project is to demonstrate my ability to build scalable, well-structured applications following good front-end development practices.

---

## 🏗️ Project Architecture

The project was built following an architecture based on:

- **Componentization:** Each part of the interface is isolated in reusable components.
- **Custom Hooks:** Using hooks to abstract business logic (such as task control).
- **Local State Management:** Using React Hooks (`useState`, `useEffect`) for local control, with the possibility of scaling to global solutions.
- **Design System:** Using Ant Design combined with Styled-Components, ensuring visual consistency and responsiveness.
- **Simulated Data:** Fetching data from a static JSON file, simulating an API.

---

## 🚀 Technologies and Tools Used

| Technology            | Description                                                                |
| --------------------- | -------------------------------------------------------------------------- |
| **React**             | Main library for building the interface                                    |
| **TypeScript**        | Static typing, avoiding runtime errors                                     |
| **Ant Design (AntD)** | Modern UI framework, with ready-made, responsive and accessible components |
| **Styled-Components** | CSS-in-JS, ensuring encapsulated styles in components                      |
| **Axios**             | HTTP client to simulate API consumption                                    |
| **Vercel**            | Platform used for serverless deployment                                    |
| **ESLint + Prettier** | Tools for standardization and code quality                                 |

---

## 📂 Folder Structure

src/

├── components/ # Reusable components (TodoItem, TodoList, etc)

├── hooks/ # Custom hooks (useTodos)

├── services/ # Services (mock local API)

├── types/ # TypeScript typings (TodoEntry, etc)

├── assets/ # Images, JSON, and static files

├── App.tsx # Root component

└── main.tsx # Entry to the React application
