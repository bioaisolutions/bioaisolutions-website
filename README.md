# BioAI Solutions

**Bioinformatics + Genomics + AI**

BioAI Solutions is a cutting-edge biotechnology company specializing in the intersection of bioinformatics, genomics, and artificial intelligence. We provide innovative solutions for genomic data analysis, personalized medicine, and AI-driven drug discovery.

## About BioAI Solutions

Our mission is to accelerate scientific discovery and improve human health through advanced computational biology and machine learning technologies. We work with research institutions, pharmaceutical companies, and healthcare providers to deliver state-of-the-art bioinformatics solutions.

### Our Services

- **Genomic Data Analysis**: Advanced pipeline for next-generation sequencing data
- **AI-Powered Drug Discovery**: Machine learning models for target identification
- **Personalized Medicine**: Precision medicine solutions for clinical applications
- **Bioinformatics Consulting**: Expert guidance for computational biology projects

## Corporate Website

This repository contains the official corporate website for BioAI Solutions, built with modern web technologies for optimal performance and user experience.

### Website Features

- 🎨 Modern, responsive design optimized for all devices
- ⚡ Fast loading with optimized assets and CDN integration
- 📱 Mobile-first approach for seamless mobile experience
- 🎯 SEO optimized for better search engine visibility
- 🔧 Easy to customize and maintain with Hugo static site generator
- 📦 NPM-based dependency management for reliable builds
- 🎭 Interactive Lottie animations for engaging user experience
- 🌙 Dark/Light theme support for user preference
- 🍪 GDPR-compliant cookie management

## Technology Stack

- **Hugo**: Static site generator for fast, secure websites
- **Bootstrap 5**: Modern CSS framework for responsive design
- **JavaScript**: Interactive features and animations
- **Lottie**: High-quality animations for web
- **NPM**: Modern dependency management
- **Boxicons**: Beautiful icon library
- **Swiper**: Touch-enabled sliders and carousels

## Quick Start

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (Extended version)
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Development Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/bioaisolutions/bioaisolutions-website.git
   cd bioaisolutions-website
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   This automatically copies vendor files and sets up all assets.

3. **Start development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser** and visit `http://localhost:13131`

### Production Build

```bash
npm run build
```

The built site will be in the `public/` directory, ready for deployment.

## Project Structure

```txt
├── layouts/                 # Hugo HTML templates
│   ├── _default/           # Default page templates
│   └── partials/           # Reusable components
├── scripts/                 # Build automation scripts
│   └── copy-vendor.sh      # Vendor file management
├── static/                  # Static assets
│   ├── assets/             # Website assets
│   │   ├── json/           # Lottie animation files
│   │   ├── img/            # Images and icons
│   │   ├── favicon/        # Favicon files
│   │   └── vendor/         # Third-party libraries
│   └── js/                 # JavaScript files
├── hugo.toml              # Hugo configuration
├── package.json           # Node.js dependencies
└── README.md             # This file
```

## Development

### Available Commands

- `npm run dev`: Start development server with live reload
- `npm run build`: Build optimized production site
- `npm run build:assets`: Copy vendor files from node_modules

### Adding New Features

1. **Content Updates**: Modify templates in `layouts/`
2. **Styling Changes**: Update `static/assets/css/custom.css`
3. **New Dependencies**: Add to `package.json` and update `scripts/copy-vendor.sh`
4. **Images**: Place in `static/assets/img/` with appropriate subdirectories

### Customization Guide

#### Content Management

- Site configuration: `hugo.toml`
- Page templates: `layouts/_default/`
- Reusable components: `layouts/partials/`

#### Styling

- Main theme: `static/assets/css/theme.min.css`
- Custom styles: `static/assets/css/custom.css`
- Responsive design: Bootstrap 5 classes

#### Animations

- Lottie files: `static/assets/json/`
- Animation player: Already configured in templates
- Add new animations by placing JSON files and updating HTML

## Dependencies

### Core Libraries

- **Bootstrap 5.3.2**: CSS framework
- **jQuery 3.7.1**: JavaScript library
- **Boxicons 2.1.4**: Icon library
- **Swiper 10.3.1**: Touch slider
- **Rellax 1.12.1**: Parallax effects
- **Lottie Player 2.0.2**: Animation player

### Build Tools

- **Hugo Extended**: Static site generator
- **NPM**: Package management
- **Shell Scripts**: Build automation

## Deployment

### Static Hosting

The built site can be deployed to any static hosting service:

- **Netlify**: Connect repository for automatic deployments
- **Vercel**: Zero-config deployment
- **GitHub Pages**: Built-in hosting for GitHub repositories
- **AWS S3**: Scalable cloud hosting
- **Traditional Web Servers**: Apache, Nginx, etc.

### Environment Variables

No environment variables required for basic deployment.

## Contributing

This is a corporate website repository. For internal contributions:

1. Create a feature branch
2. Make your changes
3. Test thoroughly with `npm run dev`
4. Submit a pull request
5. Ensure all tests pass before merging

## Support

For technical support or questions about this repository:

- **Email**: <contact@bioaisolutions.com>
- **Issues**: Use GitHub Issues for bug reports
- **Documentation**: Check Hugo documentation for template questions

## License

This project is proprietary to BioAI Solutions. All rights reserved.

---

**BioAI Solutions** - Advancing biotechnology through computational innovation.
