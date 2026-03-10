# Agent Development Guidelines

This document provides a set of instructions and principles for AI agents working on this project. Adherence to these guidelines is crucial for maintaining code quality, ensuring testability, and promoting a stable development process.

## Core Instructions

1.  **Refactoring for MVC**:
    *   Agents are encouraged to refactor existing logic from `responder.js` into the `controllers/` and `models/` directories.
    *   While you should avoid removing existing utility functions, you **may** reorganize them into classes (e.g., `BaseModel`) or controller methods as part of the Phase 1 transition.
    *   Always explain your refactoring strategy before modifying user-written logic in `responder.js` or `utils/db.js`.

2.  **Use ESLint After Every File Change**:
    *   After every file modification (`write_file`, `replace`), you must immediately run `npm run lint` (or `npx eslint . --fix`) to review your edits and maintain code style consistency.
    *   All reported ESLint errors must be fixed before proceeding to the next step.

3.  **Modern APIs & Security**:
    *   **Routing**: Prefer the native `URLPattern` API (Node 23+) for new routes in `utils/router.js` over regex-based `switch` statements.
    *   **SQL Injection**: Always use `better-sqlite3`'s parameterized queries (`?` or `@param`). Never use string interpolation for SQL queries involving user input.

## Learnings from Previous Sessions

### On Testability and Code Architecture

*   **Global Mutable State**: Past iterations used a global `appData` object; current development uses `DATA_STORE` in `public/js/data.js`. Maintain this modular approach to avoid tight coupling.
*   **Top-Level Execution**: Avoid code that executes immediately upon import and has side effects (e.g., querying the DOM). Encapsulate initialization logic into functions like `handleThemeReady` that can be called explicitly.
*   **Testable Code**: Focus on:
    *   Creating **pure functions** in `utils/service.js`.
    *   **Isolating side effects** (DOM manipulation or data fetching).
    *   **Dependency Injection**: Pass database connections or service instances into class constructors to enable easier mocking in `vitest`.

### On Agent Operations

*   **Verify Changes Before Committing**: Use `git status && git diff HEAD` to carefully review all changes.
*   **Atomic Commits**: Each commit should represent a single, logical change.
*   **Precision with Tools**: Be extremely careful with tools like `replace`. Use precise, multi-line `old_string` values to avoid unintended destructive changes.

### JavaScript Style Guide

*   **JSDoc Comments**: All functions should be preceded by a JSDoc block.
*   **Module Exports**: Do not use inline exports. Instead, collect all modules to be exported in a single `export` block at the end of the file.
*   **Imports**: Use the `node:` prefix for built-in modules (e.g., `import fs from 'node:fs'`).
