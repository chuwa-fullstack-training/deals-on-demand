# Deals on Demand - Client

## Getting Started

### Prerequisites

- node version: `v18`
- npm version: `v9`
- pnpm version: `v8` (optional, but **recommended**)

### Setup

1. Install dependencies

   ```bash
   pnpm install
   ```

2. Start the development server

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Code Formatting

This project uses [Prettier](https://prettier.io/) for code formatting. You can run the formatter with the following command:

```bash
pnpm format
```

The configuration for Prettier is located in the `.prettierrc.json` file.

## Linting

This project uses [ESLint](https://eslint.org/) for linting. You can run the linter with the following command:

```bash
pnpm lint
```

The configuration for ESLint is located in the `.eslintrc.cjs` file.

## Testing

This project uses [Jest](https://jestjs.io/) for testing. You can run the tests with the following command:

```bash
pnpm test
```

## Pre-commit Hooks

This project uses [Husky](https://typicode.github.io/husky/#/) for pre-commit hooks. The pre-commit hooks are configured in the `.husky` directory of the parent directory. Since this is a monorepo including client and server both, the pre-commit hooks have to be configured in the root directory.

When you commit your changes, the hooks will automatically run the following commands: `eslint --fix` --> `prettier --write` --> `jest`, iff any `{js,jsx,ts,tsx}` files have been staged.
