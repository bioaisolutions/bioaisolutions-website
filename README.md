# BioAI Solutions Website

A modern, responsive corporate website for BioAI Solutions built with Hugo and modern frontend technologies.

## Features

- 🎨 Modern, responsive design
- ⚡ Fast loading with optimized assets
- 📱 Mobile-first approach
- 🎯 SEO optimized
- 🔧 Easy to customize and maintain

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
├── content/                 # Content files (Markdown)
├── layouts/                 # HTML templates
│   ├── _default/           # Default templates
│   └── partials/           # Reusable components
├── assets/                  # CSS, JS, and other assets
│   ├── css/                # Stylesheets
│   └── js/                 # JavaScript files
├── static/                  # Static files (images, favicon, etc.)
├── hugo.toml              # Hugo configuration
├── package.json           # Node.js dependencies

```

## Customization

### Colors and Styling

Edit `assets/css/main.css` to customize colors, fonts, and other styles.

### Content

- Update `content/_index.md` for homepage content
- Modify `hugo.toml` for site configuration
- Edit templates in `layouts/` for layout changes

### Configuration

Key configuration options in `hugo.toml`:

- `baseURL`: Your site's base URL
- `title`: Site title
- `params`: Custom parameters for contact info, etc.

## Technologies Used

- **Hugo**: Static site generator
- **Bootstrap 5**: CSS framework
- **JavaScript**: Interactive features

## License

This project is proprietary to BioAI Solutions.

## Contact

For questions or support, contact: contact@bioaisolutions.com
