# Contributing to RePOS

First off, thank you for considering contributing to RePOS! It's people like you that make RePOS such a great project.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to [GitHub Issues](https://github.com/atiqisrak/repos/issues).

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps to reproduce the problem** in as many details as possible.
* **Describe the behavior you observed** after following the steps.
* **Describe the behavior you expected** to see instead.
* **Include screenshots and animated GIFs** if possible, which show you following the described steps and clearly demonstrate the problem.

### Suggesting Enhancements

Enhancement suggestions are tracked as [GitHub issues](https://github.com/atiqisrak/repos/issues). When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description** of the suggested enhancement.
* **Provide specific examples** to demonstrate the steps.
* **Describe the current behavior** and explain which behavior you expected to see instead.
* **Explain why this enhancement would be useful** to most RePOS users.

### Pull Requests

* Fill in the required template
* Do not include issue numbers in the PR title
* Include screenshots and animated GIFs in your pull request whenever possible
* Follow the TypeScript and React styleguides
* Include thoughtfully-worded, well-structured tests
* Document new code based on the Documentation Styleguide
* End all files with a newline

## Development Process

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
5. Push to the branch (`git push origin feature/AmazingFeature`)
6. Open a Pull Request

## Coding Standards

### TypeScript

* Use TypeScript for all new files
* Follow existing code style and formatting
* Use meaningful variable and function names
* Add comments for complex logic
* Keep functions focused and single-purpose

### React Components

* Use functional components with hooks
* Keep components small and focused
* Extract reusable logic into custom hooks
* Use proper TypeScript types for props
* Follow the existing component structure

### Styling

* Use Tailwind CSS classes
* Follow the design system defined in `lib/design-system.ts`
* Maintain consistent spacing and typography
* Ensure mobile responsiveness

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

## Project Structure

```
client/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/             # Utilities and helpers
└── public/          # Static assets
```

## Testing

* Write tests for new features
* Ensure all tests pass before submitting PR
* Test on multiple browsers and devices
* Test responsive design on various screen sizes

## Documentation

* Update the README.md if needed
* Add JSDoc comments for new functions
* Update this CONTRIBUTING.md file if needed
* Keep code comments clear and concise

## Questions?

Feel free to open an issue for any questions you might have about contributing. We're here to help!

Thank you for contributing to RePOS! 🎉

