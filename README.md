# BioAI Solutions Website

A modern, responsive corporate website for BioAI Solutions built with Hugo and modern frontend technologies.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast loading with optimized assets
- 📱 Mobile-first approach
- 🎯 SEO optimized
- 🔧 Easy to customize and maintain
- 📦 NPM-based dependency management
- 🎭 Lottie animations support

## Quick Start

### Prerequisites

- [Hugo](https://gohugo.io/installation/) (Extended version)
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bioaisolutions/bioaisolutions-website.git
   cd bioaisolutions-website
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   This will automatically:
   - Install all npm dependencies
   - Copy vendor files to the appropriate locations
   - Set up Lottie animations and other assets

3. Start development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:13131`

### Building for Production

```bash
npm run build
```

The built site will be in the `public/` directory.

## Project Structure

```txt
├── layouts/                 # HTML templates
│   ├── _default/           # Default templates
│   └── partials/           # Reusable components
├── scripts/                 # Build scripts
│   └── copy-vendor.sh      # Vendor file copy script
├── static/                  # Static files (images, favicon, etc.)
│   ├── assets/             # Assets (vendor files, images, etc.)
│   │   ├── json/           # Lottie animation files
│   │   ├── img/            # Images and icons
│   │   ├── favicon/        # Favicon files
│   │   └── vendor/         # Third-party libraries (generated)
│   └── js/                 # JavaScript files
├── hugo.toml              # Hugo configuration
├── package.json           # Node.js dependencies and scripts
├── package-lock.json      # Locked dependency versions
└── README.md             # This file
```

## Dependencies

This project uses the following third-party libraries managed via npm:

- **Bootstrap 5**: CSS framework
- **Boxicons**: Icon library
- **jQuery**: JavaScript library
- **Swiper**: Touch slider
- **Rellax**: Parallax library
- **Lottie Player**: Animation player

## Development

### Available Scripts

- `npm run dev`: Start development server with asset building
- `npm run build`: Build for production with asset building
- `npm run build:assets`: Copy all vendor files from node_modules

### Build Scripts

The project uses a single shell script for vendor file management:

- `scripts/copy-vendor.sh`: Copies all vendor libraries (boxicons, swiper, rellax, lottie, jquery) with error checking and progress indicators

### Adding New Dependencies

1. Install the package: `npm install package-name`
2. Update `scripts/copy-vendor.sh` to include the new library
3. Run `npm run build:assets` to copy the new files

## Customization

### Content and Layout

- Modify templates in `layouts/` for layout changes
- Update `hugo.toml` for site configuration
- Add images to `static/assets/img/`

### Styling

The project uses the reference site's `theme.min.css` for styling. For custom styles, consider:

- Creating a custom CSS file in `static/assets/css/`
- Modifying the theme file directly (not recommended for maintainability)

### Lottie Animations

The website includes Lottie animations in the features section. To add new animations:

1. Place JSON animation files in `static/assets/json/`
2. Update the HTML templates to include `<lottie-player>` elements
3. Ensure the Lottie Player script is loaded (already configured)

## Technologies Used

- **Hugo**: Static site generator
- **Bootstrap 5**: CSS framework
- **JavaScript**: Interactive features
- **NPM**: Dependency management
- **Lottie**: Animation support

## License

This project is proprietary to BioAI Solutions.

## Contact

For questions or support, contact: contact@bioaisolutions.com
