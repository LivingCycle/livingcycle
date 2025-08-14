# LivingCycle

**A daily life organization assistant inspired by RoomCycle's systematic approach**

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)
[![Built with Claude](https://img.shields.io/badge/Built%20with-Claude-8A2BE2)](https://claude.ai)

## About

LivingCycle helps people organize their daily lives through structure, routines, and easy access to community resources. Like RoomCycle organizes physical spaces, LivingCycle organizes daily activities and connects people to helpful services.

## Features

### 📋 Daily Structure
- Customizable daily reminders and routines
- Task checklists for common activities  
- Progress tracking and gentle encouragement
- Spontaneity feature to break routines with energy-appropriate activities

### 📞 Resource Connection
- Quick access to community services (211)
- Crisis support hotline (988)
- Vocational rehabilitation services
- Helpful scripts for making important calls
- Pre-written templates to reduce phone anxiety

### 🔒 Privacy-First Design
- Your data stays yours (Solid PODs)
- Offline-first functionality
- No tracking or analytics without consent

### ♿ Accessibility
- Mission-critical UI design principles
- Works on any device
- Optimized for low-bandwidth

## Tech Stack

- **Frontend**: Solid.js + TypeScript + Vite
- **Infrastructure**: Cloudflare Workers (Edge deployment)
- **Data**: Solid PODs (user-owned data) - planned
- **Offline**: PWA with Service Workers + IndexedDB
- **Styling**: Custom CSS with OKSolar-inspired theme

## Development

```bash
# Clone the repository
git clone https://github.com/LivingCycle/livingcycle.git

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare Workers (staging)
npm run build && npx wrangler deploy --env staging

# Deploy to production
npm run build && npx wrangler deploy
```

## Deployment

Deploy to Cloudflare Workers using the included configuration. Update `wrangler.toml` with your own account details.

## Project Status

🚧 **Early Development** - Seeking nonprofit partner for sustainable operation

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## Open Source & Nonprofit Model

LivingCycle is designed to be operated by a nonprofit organization to ensure:
- Sustainable free access for all users
- Proper liability protection
- Community-driven development
- No commercial exploitation of user data

### For Nonprofit Organizations

If your organization is interested in operating LivingCycle, please contact [contact info]. We provide:
- Complete source code and documentation
- Deployment and maintenance support
- Ongoing development collaboration

## License

GNU Affero General Public License v3.0 (AGPL-3.0) - See [LICENSE](LICENSE) for details

### Commercial Licensing

For commercial use or custom licensing arrangements, please contact the maintainers. Nonprofit organizations may use this software freely under the AGPL-3.0 terms.

## Disclaimer

LivingCycle is a life organization tool. It does not provide medical or professional counseling services. Users seeking such services should contact qualified professionals or emergency services.

## Acknowledgments

- Inspired by [RoomCycle](https://roomcycle.me)'s systematic approach to organization
- Built with privacy-first principles from the [Solid Project](https://solidproject.org)
- Designed using human factors research from mission-critical systems

---

## 🤖 Built with Claude

This project was developed with [Claude](https://claude.ai), Anthropic's AI assistant, demonstrating the potential of AI-assisted development for social good.

### AI-Assisted Development
- Architecture design and planning
- Full-stack implementation
- Accessibility and privacy-first considerations
- Documentation and code organization
- Deployment configuration

Claude helped transform user needs into a working application that provides practical life organization tools and resource connections.

---

*LivingCycle: Bringing structure to daily life*