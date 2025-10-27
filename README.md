# Poulidis Premium Olive Oil Website

A modern, multilingual website for showcasing premium extra virgin olive oil from Pelion, Greece.

## Features

- 🌍 **Multi-language support**: English, Greek (Ελληνικά), and German
- 📱 **Fully responsive**: Works on desktop, tablet, and mobile devices
- 🎨 **Modern design**: Clean and professional interface
- ⚡ **Fast loading**: Lightweight HTML/CSS/JavaScript with no dependencies
- 🌐 **SEO friendly**: Semantic HTML structure

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **Features**: Key highlights (Ancient Trees, 100% Organic, Extra Virgin quality)
3. **About**: Family tradition and heritage story
4. **Production**: Step-by-step production process
5. **Contact**: Shipping information and social media links

## Local Development

### Option 1: Simple HTTP Server (Python)

```bash
cd poulidisOil
python3 -m http.server 8000
```

Then open your browser to: `http://localhost:8000`

### Option 2: Simple HTTP Server (Node.js)

```bash
cd poulidisOil
npx http-server -p 8000
```

Then open your browser to: `http://localhost:8000`

### Option 3: VS Code Live Server

If you're using Visual Studio Code:
1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 4: Any Local Web Server

You can use any web server of your choice to serve the files in the `poulidisOil` directory.

## Project Structure

```
poulidisOil/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling
├── script.js           # JavaScript for language switching and interactions
├── translations.js     # Translation strings for all languages
└── README.md           # This file
```

## Deployment

### GitHub Pages (FREE)

1. **Create a GitHub repository:**
   ```bash
   cd poulidisOil
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/poulidis-oil.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages"
   - Under "Source", select "main" branch and "/ (root)"
   - Click "Save"
   - Your site will be live at: `https://YOUR-USERNAME.github.io/poulidis-oil`

### Netlify (FREE - Recommended)

1. **Quick Deploy:**
   - Go to [netlify.com](https://www.netlify.com/)
   - Sign up/login for free
   - Click "Sites" → "Add new site" → "Deploy manually"
   - Drag and drop the `poulidisOil` folder
   - Your site will be live instantly!

2. **Continuous Deployment:**
   - Push your code to GitHub
   - Connect your GitHub repository to Netlify
   - Netlify will automatically deploy on every push

### Vercel (FREE)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   cd poulidisOil
   vercel
   ```

## Customization

### Update Social Media Links

Edit the social media links in `index.html`:

```html
<a href="https://facebook.com/YOUR_PAGE" target="_blank" class="social-link">
<a href="https://instagram.com/YOUR_ACCOUNT" target="_blank" class="social-link">
```

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #8B6914;
    --secondary-color: #2C5530;
    --accent-color: #F5DEB3;
}
```

### Add/Modify Content

- **Translations**: Edit `translations.js` to add/modify content in all languages
- **Structure**: Modify `index.html` to add/remove sections
- **Styling**: Update `styles.css` for any design changes

### Replace Placeholder Images

Replace the placeholder div in `index.html` (search for "placeholder-image") with actual images:

```html
<div class="about-image">
    <img src="images/olive-grove.jpg" alt="Ancient olive grove">
</div>
```

Add images to a `images/` folder and update the path.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- No external dependencies
- Fast loading times
- Mobile-optimized
- SEO-friendly markup

## License

This project is private property for Poulidis Premium Olive Oil.

## Support

For questions or modifications, contact the development team.

---

Built with ❤️ for Poulidis Premium Olive Oil

