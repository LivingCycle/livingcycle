# Contributing to LivingCycle

Thank you for your interest in contributing to LivingCycle! This project aims to help people organize their daily lives through structure and resource connection.

## Code of Conduct

- Be respectful and inclusive
- Focus on what's best for users who need structure and support
- Prioritize accessibility and simplicity
- Respect user privacy and data sovereignty

## How to Contribute

### Reporting Issues
- Check existing issues first
- Provide clear reproduction steps
- Include device/browser information
- Be patient - we're all volunteers

### Suggesting Features
- Explain the problem it solves
- Consider users with limited technical skills
- Think about offline/low-bandwidth scenarios
- Align with our privacy-first principles

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Write/update tests
5. Update documentation
6. Submit a pull request

### Development Guidelines

#### Accessibility First
- Follow WCAG 2.1 AA standards
- Test with screen readers
- Ensure keyboard navigation
- Use semantic HTML

#### Performance Matters
- Keep bundle sizes small
- Optimize for slow devices
- Test on 3G connections
- Prioritize offline functionality

#### Privacy by Design
- No tracking without explicit consent
- Data stays in user's control
- Use local-first patterns
- Document data flows

#### Code Style
- TypeScript for type safety
- Clear variable names
- Comment complex logic
- Keep functions small and focused

### Testing

```bash
# Run tests
npm test

# Test offline functionality
npm run test:offline

# Accessibility testing
npm run test:a11y
```

### Documentation

- Update README for new features
- Document API changes
- Include code examples
- Keep language simple and clear

## Getting Help

- Open an issue for questions
- Join our [discussions](https://github.com/[org]/livingcycle/discussions)
- Read the [architecture docs](.plan.architecture)

## Recognition

All contributors will be recognized in our [CONTRIBUTORS.md](CONTRIBUTORS.md) file.

## Nonprofit Partnership

If you represent a nonprofit interested in operating LivingCycle, please open an issue labeled "Partnership Inquiry."

---

## About This Project

LivingCycle was initially developed with [Claude](https://claude.ai), demonstrating AI-assisted development for social good. We welcome human and AI collaborators alike to contribute to this open source project.

---

Remember: The best contribution is one that makes someone's daily life a little easier to manage.