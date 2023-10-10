# Deals on Demand - Client

## Getting Started

### Prerequisites

- node version: `v18`
- npm version: `v9`
- pnpm version: `v8` (optional, but **recommended**)

### Setup

1. Install dependencies. Two ways to do this:

   ```bash
   pnpm install
   ```

   or if you stay at root directory, you can do

   ```bash
   pnpm run install:client
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

## Requirements

### Layout

1. copy the layout of the current client
2. make sure the layout is responsive

### Features

#### Authentication

back service is under construction (not required so far, will be added later)

#### Home Page

1. show the list of all the deals
2. show the list of all the categories
3. show the advertisement on the right side
4. show the search input on the top
5. show the menu and account setting button on the top right
6. show the navigation bar between top header and the list of deals
   - navigation bar includes `Top Deals` and product categories
   - clicking `Top Deals` will redirect to the home page
   - clicking one category will redirect to the category page
7. clicking `View deals` will redirect to the product page

#### Product Page

1. show the product details, including the title, description, price, images etc.
2. clicking `Buy Now` button will redirect to the product page on the original website

#### Search Page

1. show the list of all the deals that match the search query (debounced)
2. searching
   - if clicking one option from the search result, it will redirect to the product page
   - if not selecting any option, instead clicking the `Search` button, it will redirect to the search page with all products that match the search query
