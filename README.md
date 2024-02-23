## About This Project

This is a web component for the portfolio of developers

## Getting Started

The latest version of `node`and `npm` should be installed in your environment.

### Installation

1. Clone this repository.

   ```sh
   git clone https://github.com/threedalpeng/jazzy-dalpeng
   ```

2. Install npm packages.

   ```sh
   npm install
   ```

3. Run a dev server.

   ```js
   npm run dev
   ```

## Development Guide

### How to put sample data

Yet we've not determined how to input data inside the component, so just put your test data in `/src/index.ts` like:

```typescript
const portfolio = document.querySelector("stack-portfolio")!!;
portfolio.data = /** Your Data */;
```
