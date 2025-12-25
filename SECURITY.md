# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

Please report (suspected) security vulnerabilities to **[GitHub Security Advisories](https://github.com/atiqisrak/repos/security/advisories/new)**. You will receive a response within 48 hours. If the issue is confirmed, we will release a patch as soon as possible depending on complexity but historically within a few days.

Please include the following information in your report:

- Type of issue (e.g. buffer overflow, SQL injection, cross-site scripting, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit the issue

This information will help us triage your report more quickly.

## Security Best Practices

When using RePOS, please follow these security best practices:

- **Keep dependencies updated**: Regularly update all dependencies to their latest secure versions
- **Use HTTPS**: Always use HTTPS in production environments
- **Secure authentication**: Implement strong authentication mechanisms
- **Regular backups**: Maintain regular backups of your data
- **Monitor logs**: Regularly review application logs for suspicious activity
- **Access control**: Implement proper role-based access control
- **Data encryption**: Encrypt sensitive data both at rest and in transit

## Security Features

RePOS includes several security features:

- **Input validation**: All user inputs are validated and sanitized
- **SQL injection prevention**: Using parameterized queries
- **XSS protection**: Content Security Policy headers
- **CSRF protection**: Cross-Site Request Forgery tokens
- **Secure headers**: Security headers configured
- **Authentication**: Secure authentication mechanisms
- **Authorization**: Role-based access control

## Known Security Issues

Currently, there are no known security issues. If you discover a security vulnerability, please report it using the process above.

## Security Updates

Security updates will be announced via:

- GitHub Security Advisories
- Release notes
- Project documentation

Thank you for helping keep RePOS and our users safe!

