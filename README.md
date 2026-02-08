# brennan.jp.net

[![Hugo Version](https://img.shields.io/badge/Hugo-0.139.4-blue)](https://gohugo.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Netlify Status](https://api.netlify.com/api/v1/badges/07bfdabd-0133-4e47-a6f4-7edfb84b6d06/deploy-status)](https://app.netlify.com/projects/brennanjpnet/deploys)

A Hugo blog theme that authentically recreates the compact, text-heavy, colorful aesthetic of traditional Japanese web design (circa 1990s–2010s), while maintaining modern accessibility and performance standards.

![Theme Screenshot](screenshot.jpg)

## [Demo](https://brennan.jp.net)

> **Note**: This is an example theme that contains actual blog posts from https://brennan.day for demonstration purposes. These posts are configured to be excluded from search engine indexing to protect the original site's SEO.

## What Makes This Theme Special

This theme captures the nostalgic charm of Japanese personal websites with:
- **Dense, newspaper-style layouts** packed with information
- **Bright, vibrant colors** and thick borders
- **Classic web elements** like webrings, 88x31 badges, and visitor counters
- **Modern accessibility** with proper semantic HTML and responsive design
- **Zero external dependencies** - completely self-hosted

## Quick Setup for Non-Technical Users

### Option 1: Netlify (Recommended - Free & Easy)

1. **Fork this repository** on GitHub
2. **Sign up for Netlify** at [netlify.com](https://netlify.com)
3. **Connect Netlify to your GitHub**:
   - Click "New site from Git"
   - Choose GitHub
   - Select your forked repository
4. **Configure build settings**:
   - Build command: `hugo --minify`
   - Publish directory: `public`
   - Click "Deploy site"
5. **Customize your site**:
   - In Netlify, go to Site settings → Build & deploy → Environment
   - Add environment variables or edit the `hugo.toml` file directly

### Option 2: GitHub Pages (Free)

1. **Fork this repository**
2. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` and folder: `/root`
3. **Set up GitHub Actions**:
   - Create `.github/workflows/deploy.yml` with Hugo build workflow
   - GitHub will automatically build and deploy your site

### Option 3: Local Development

```bash
# Install Hugo
# Mac: brew install hugo
# Windows: choco install hugo
# Or download from https://gohugo.io/

# Clone your fork
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name

# Run locally
hugo server -D

# Your site is now at http://localhost:1313
```

## Customizing Your Site

### Basic Configuration

Edit the `hugo.toml` file to personalize your site:

```toml
# Basic site info
baseURL = "https://yourname.netlify.app"
title = "Your Site Name"
languageCode = "en-us"

[params]
  # Your information
  author = "Your Name"
  description = "A short description of your site"
  email = "your-email@example.com"
  
  # Social links (optional)
  github = "yourgithub"
  mastodon = "@yourname@mastodon.social"
  
  # Theme colors (optional)
  primaryColor = "#FF0000"
  secondaryColor = "#0066FF"
```

### Adding Your First Post

1. **Create a new file** in `content/posts/` named `my-first-post.md`
2. **Add this content**:

```markdown
+++
title = "My First Post"
date = 2026-02-07T10:00:00-07:00
categories = ["Life"]
tags = ["welcome", "first-post"]
+++

Welcome to my new website! This is my first post using the Japanese Web Aesthetic theme.

## Why I Chose This Theme

I love the nostalgic feel of old Japanese websites while still having modern features...

Write your content here using normal Markdown formatting!
```

3. **Deploy** - Your post will appear automatically!

## Features

- **Authentic Japanese Design** - Dense layouts, bright colors, animated elements
- **Fully Responsive** - Works on phones, tablets, and desktops  
- **Accessible** - Screen reader friendly, keyboard navigation, high contrast
- **Lightning Fast** - No JavaScript frameworks, minimal code
- **IndieWeb Ready** - RSS feeds, semantic markup, webmentions
- **Easy to Customize** - Change colors, fonts, layout without coding

## Project Structure

```
brennan.jp.net/
├── archetypes/         # Content templates
├── content/            # Blog posts and pages
│   ├── posts/          # Blog posts
│   ├── about.md        # About page
│   ├── contact.md      # Contact page
│   └── colophon.md     # Technical details
├── layouts/            # Hugo templates
│   ├── _default/       # Default layouts
│   ├── partials/       # Reusable components
│   └── shortcodes/     # Custom Markdown extensions
├── static/             # CSS, JavaScript, images
│   ├── css/           # Stylesheets
│   └── js/            # Optional JavaScript
├── hugo.toml          # Site configuration
└── README.md          # This file
```

## Common Questions

### Do I need to know how to code?
**No!** You can customize everything by editing the `hugo.toml` file and creating Markdown files for your posts. No coding required.

### Can I use my own domain?
**Yes!** On Netlify, go to Site settings → Domain management → Add custom domain. Follow their instructions to connect your domain.

### How do I change the colors?
Edit the `primaryColor` and `secondaryColor` values in `hugo.toml`. You can use any hex color codes.

### Can I remove the sidebar?
Yes! Set `showSidebar = false` in the `[params]` section of `hugo.toml`.

### What's the visitor counter?
It's a fun retro feature that counts visits using your browser's local storage. It's not a real analytics service - just for nostalgia!

## Advanced Customization

### Adding Pages
Create new `.md` files in the `content/` folder:
- `content/my-page.md` → `yoursite.com/my-page/`
- Use the same format as blog posts but without dates

### Custom CSS
Add your own styles to `static/css/custom.css` and reference it in `hugo.toml`

### Shortcodes
Use these in your Markdown:
- `{{</* colorbox color="blue" */>}}Text here{{</* /colorbox */>}}`
- `{{</* new-badge */>}}` - Shows "NEW!" badge
- `{{</* alert type="warning" */>}}Warning message{{</* /alert */>}}`

## Hosting Options

| Service | Cost | Difficulty | Features |
|---------|------|------------|----------|
| **Netlify** | Free | Easy | Automatic deploys, custom domains, HTTPS |
| **GitHub Pages** | Free | Medium | Git-based, good for developers |
| **Vercel** | Free | Easy | Modern UI, great performance |
| **Cloudflare Pages** | Free | Easy | Fast CDN, analytics |
| **Traditional Hosting** | $5-20/month | Hard | Full control, requires setup |

## Getting Help

- **Documentation**: Check the `content/colophon.md` file for technical details
- **Issues**: Report problems on GitHub
- **Community**: Join the Hugo community forums
- **IndieWeb**: Learn about owning your content at indieweb.org

## License

- **Content**: Your content is yours (CC BY-SA 4.0 recommended)
- **Theme**: MIT License - use however you like!
- **Attribution**: Please keep the theme attribution in the footer

---

**Happy blogging!** 

This theme brings back the charm of the early web while giving you all the modern features you need. Enjoy your slice of the Japanese web aesthetic!
