# brennan.jp.net Theme - Example Site

This is an example site demonstrating the **brennan.jp.net** Hugo theme, which recreates the authentic aesthetic of Japanese personal websites from the 1990s-2010s era.

## Quick Start

1. **Install Hugo** (version 0.120.0 or later):
   ```bash
   # Mac
   brew install hugo
   
   # Windows
   choco install hugo
   
   # Or download from https://gohugo.io/
   ```

2. **Clone this example**:
   ```bash
   git clone https://github.com/brennanbrown/brennan.jp.net.git
   cd brennan.jp.net/exampleSite
   ```

3. **Run the site**:
   ```bash
   hugo server --themesDir ../..
   ```

4. **Visit** http://localhost:1313

## Features Demonstrated

### Layout & Design
- Dense, newspaper-style homepage
- Colorful borders and backgrounds
- Classic web elements (counters, badges, webrings)
- Responsive design for all devices

### Content Features
- Blog posts with excerpts and metadata
- Static pages (About, Contact, Colophon)
- Tag and category organization
- RSS feed generation

### Interactive Elements
- Animated marquee text
- Blinking "NEW!" badges
- Hover effects throughout
- Visitor counter simulation

### Shortcodes
- `{{< colorbox >}}` - Colored text boxes
- `{{< new-badge >}}` - NEW! indicators
- `{{< quote-box >}}` - Decorative quotes
- `{{< alert >}}` - Alert messages

## Customization

Edit `hugo.toml` to personalize:

```toml
[params]
  # Your information
  author = "Your Name"
  description = "Your site description"
  email = "your-email@example.com"
  
  # Theme colors
  primaryColor = "#FF0000"
  secondaryColor = "#0066FF"
  
  # Layout options
  showSidebar = true
  enableAnimations = true
  showHitCounter = true
```

## Theme Features

### Widget System
- Recent posts with dates
- Tag cloud with visual sizing
- Archive calendar by month
- Site statistics counter
- Random quote rotation
- Webring navigation
- 88x31 badge collection

### Accessibility
- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation
- Screen reader support
- Respects motion preferences

### Performance
- Minimal JavaScript
- Optimized CSS
- No external dependencies
- Fast static generation

## File Structure

```
exampleSite/
├── hugo.toml              # Site configuration
├── content/
│   ├── posts/             # Blog posts
│   ├── about.md           # About page
│   ├── contact.md         # Contact page
│   └── colophon.md        # Technical details
└── README.md              # This file
```

## Deployment

### Netlify (Recommended)
1. Push to GitHub
2. Connect Netlify to your repo
3. Set build command: `hugo --minify`
4. Set publish directory: `public`

### GitHub Pages
1. Enable Pages in repo settings
2. Use GitHub Actions for Hugo builds
3. Deploy from `main` branch

### Traditional Hosting
1. Run `hugo` to generate static files
2. Upload `public/` directory to your server
3. Configure your web server

## Support

- **Theme Documentation**: See main theme README
- **Hugo Documentation**: https://gohugo.io/
- **Issues**: Report on GitHub
- **Community**: Hugo forums

## License

- **Theme**: MIT License
- **Example Content**: CC BY-SA 4.0
- **Attribution**: Keep footer attribution when using theme

---

Enjoy building your Japanese-style website! 🌸✨
