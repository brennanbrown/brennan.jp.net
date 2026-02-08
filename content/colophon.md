+++
title = 'Colophon'
layout = 'page'
description = 'Technical details and credits for this website.'
+++

## Colophon

This page contains the technical details about this website's design, tools, and philosophy.

### 🎨 Design Philosophy

This site embraces the **Japanese web aesthetic** (circa 1990s-2010s) while maintaining modern accessibility standards. Key design elements include:

- **Information density**: Compact layouts with lots of content
- **Vibrant colors**: Bright, saturated colors and thick borders
- **Typography**: Modern humanist fonts with Japanese fallbacks
- **Authentic elements**: Webrings, 88x31 badges, visitor counters

### 🛠️ Technical Stack

#### Static Site Generator
- **Hugo v0.148.2+extended** - Fast static site generator written in Go
- **No JavaScript frameworks** - Minimal JS for enhanced functionality only
- **Semantic HTML5** - Proper structure and accessibility

#### Design System
- **CSS Grid & Flexbox** - Modern layout with fallbacks
- **Custom CSS** - No frameworks, handcrafted styles
- **Responsive design** - Mobile-first approach
- **CSS animations** - Subtle effects with reduced motion support

#### Typography
- **Sans-serif**: Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro
- **Serif**: Charter, 'Bitstream Charter', 'Sitka Text', Cambria
- **Japanese fallbacks**: MS PGothic/PMincho, Osaka, Hiragino Kaku/Mincho Pro

### 🌐 IndieWeb Implementation

This site is fully IndieWeb-compatible:

#### Microformats2
- **h-entry** - Blog posts and pages
- **h-card** - Author information
- **p-name**, **e-content**, **dt-published** - Structured data

#### Protocols
- **Webmentions** - Receive responses from other sites
- **Pingbacks** - Traditional notification system
- **rel="me"** - Verified profile links
- **RSS/Atom** - Syndication feeds

### 📁 Project Structure

```
your-site/
├── content/           # Markdown content
├── layouts/           # Hugo templates
├── static/           # CSS, JS, images
├── archetypes/       # Content templates
└── hugo.toml         # Site configuration
```

### 🎯 Performance

- **Build time**: <100ms for entire site
- **Page weight**: <50KB per page
- **No external dependencies** - Self-hosted everything
- **CDN-ready** - Static assets optimized for caching

### 📜 Credits

#### Theme Development
- **Design**: {{< site-param "author" >}}
- **Development**: {{< site-param "developer" "Theme Developer" >}}
- **License**: MIT License

#### Inspirations
- **Japanese personal websites** of the 1990s-2010s
- **IndieWeb community** principles
- **Static site renaissance** movement

#### Tools & Services
- **Hugo** - Static site generator
- **Development Environment**: {{< site-param "editor" "Your preferred editor" >}}
- **Version Control**: {{< site-param "vcs" "Git" >}}

### 🔧 Custom Features

#### Shortcodes
- `{{</* colorbox */>}}` - Colored text boxes
- `{{</* new-badge */>}}` - "NEW!" indicators
- `{{</* quote-box */>}}` - Decorative quotes
- `{{</* gallery */>}}` - Image galleries
- `{{</* alert */>}}` - Alert messages

#### Widgets
- Recent posts with "NEW!" badges
- Tag cloud with weighted sizing
- Archive by month/year
- Functional visitor counter
- Webring navigation
- 88x31 badge grid

### 📊 Statistics

- **Posts**: {{< stat-count "posts" >}}
- **Categories**: {{< stat-count "categories" >}}  
- **Tags**: {{< stat-count "tags" >}}
- **Build date**: {{< build-date >}}