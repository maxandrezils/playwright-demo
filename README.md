# Playwright Demo

This repository contains a simple demonstration of using Playwright for browser automation testing. Playwright is a powerful tool for automating interactions with web browsers, allowing you to write tests that simulate user actions such as clicking buttons, filling out forms, and navigating between pages.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for testing purposes.

### Prerequisites

To run the tests, you'll need to have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [npm](https://www.npmjs.com/) - Package manager for JavaScript

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/maxandrezils/playwright-demo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd playwright-demo
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

### Running the Tests

To run the automated tests using Playwright, execute the following command:

```bash
npm test
```

This command will launch the specified browser (default is Chromium) and execute the test cases defined in the `tests` directory.

### Configuration

You can configure the browser and other settings for the tests in the `playwright.config.js` file. By default, the tests are configured to run in Chromium. You can also specify other browsers such as Firefox or WebKit.

### Writing Tests

The test cases are written using TypeScript and can be found in the `tests` directory. You can create new test files or modify existing ones to suit your testing needs. Playwright provides a rich set of APIs for interacting with web pages, which you can use to simulate user actions and verify expected behavior.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Playwright](https://playwright.dev/) - Browser automation library by Microsoft
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [npm](https://www.npmjs.com/) - Package manager for JavaScript
