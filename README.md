# enterprise_playwright

Business-oriented Playwright automation framework for [OrangeHRM](https://opensource-demo.orangehrmlive.com/), built with:

- **Playwright** — browser automation and test runner
- **Cucumber (Gherkin) via `playwright-bdd`** — plain-English `Given/When/Then` feature files, readable by non-technical stakeholders, run through Playwright's own test runner (parallelism, tracing, reporting)
- **TypeScript + Page Object Model** — type-safe, maintainable locators/actions separated from test logic
- **Allure + Playwright HTML report** — rich, shareable test reports

## Current scope

- **Login** — successful login with valid credentials
- **Dashboard BVT** — browser tab title, dashboard header text, and presence of all main menu items (Admin, PIM, Leave, Time, Recruitment, My Info, Performance, Dashboard, Directory, Maintenance, Buzz)

Further modules (Admin, PIM, Leave, etc.) will be added incrementally.

## Project structure

```
features/                  Gherkin feature files (business-readable scenarios)
  login.feature
  dashboard.feature
src/
  pages/                   Page Object Model classes
    BasePage.ts
    LoginPage.ts
    DashboardPage.ts
  steps/                   Cucumber step definitions (glue code)
    login.steps.ts
    dashboard.steps.ts
  support/
    fixtures.ts            Playwright fixtures wiring page objects into steps
  config/
    env.ts                 Environment variable loader
playwright.config.ts       Playwright + BDD + reporter configuration
.env                       Local environment values (gitignored)
.env.example               Template for required environment variables
```

## Setup

```bash
npm install
npx playwright install chromium
cp .env.example .env   # adjust if needed; demo creds are public (Admin/admin123)
```

## Running tests

```bash
npm test              # generate BDD tests from features, then run headless
npm run test:headed   # run with a visible browser
npm run test:debug    # run in Playwright's debug/inspector mode
```

> Note: the suite runs with a single worker locally (`playwright.config.ts`) since the shared OrangeHRM demo server can be unreliable under concurrent sessions. Increase `workers` if running against a dedicated/local instance.

## Reports

**Playwright HTML report** (auto-generated after each run):

```bash
npm run report
```

**Allure report** (richer history/trends, requires Java for the `allure` CLI):

```bash
npm run report:allure:generate
npm run report:allure:open
```

## Adding a new scenario

1. Add/extend a `.feature` file in `features/` using business language.
2. Add any new step definitions in `src/steps/`.
3. Add/extend a Page Object in `src/pages/` for new locators/actions — never put locators directly in step definitions.
4. Run `npm test`.
