# Project Guidelines for Gemini CLI

These instructions are foundational and take absolute precedence over general defaults.

## JSDoc & Documentation Standards
- **Mandatory Annotations**: All functions MUST have JSDoc blocks.
- **Side-Effect Functions**:
  - Description MUST begin with "Side-effect: ".
  - MUST include an explicit `@returns {void}` line.
- **Module Exports**: Do not use inline exports. Consolidate all exports into a single `export { ... }` block at the end of the file.
- **Imports**: Use the `node:` prefix for all built-in Node.js modules.

## Code Quality & Execution
- **Linting**: Immediately run `npx eslint . --fix` after any file modification. Fix all reported errors before proceeding.
- **Atomic Changes**: Keep commits surgical and focused on single logical changes.
- **Verification**: Always review state using `git status && git diff HEAD` before proposing commits.

## Architecture
- **State Management**: Avoid global mutable state.
- **Encapsulation**: Avoid top-level side effects; encapsulate initialization logic into explicitly called functions.
- **Security**: Use parameterized queries for all SQL operations.
