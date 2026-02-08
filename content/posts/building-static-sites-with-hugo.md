+++
title = 'Building Static Sites with Hugo: A Practical Guide'
date = 2026-02-07T21:50:00-07:00
categories = ['Technology']
tags = ['Hugo', 'Static Sites', 'Web Development', 'Go']
description = 'Learn how to build fast, secure static sites with Hugo using practical code examples.'
featured_image = 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=630&fit=crop'
featured_image_alt = 'A laptop computer with code on the screen, representing web development and static site generation'
featured_image_caption = 'Photo by Behnam Norouzi on Unsplash'
+++

Hugo makes building static sites incredibly fast and efficient. Let's explore some practical code examples that showcase why Hugo is perfect for personal blogs and IndieWeb sites.

## Why Hugo? 

> Taken from <https://gohugo.io/>

- **Optimized for speed** Written in Go, optimized for speed and designed for flexibility. With its advanced templating system and fast asset pipelines, Hugo renders a large site in seconds, often less.
- **Flexible framework** With its multilingual support, and powerful taxonomy system, Hugo is widely used to create documentation sites, landing pages, corporate, government, nonprofit, education, news, event, and project sites.
- **Fast assets pipeline** Image processing (convert, resize, crop, rotate, adjust colors, apply filters, overlay text and images, and extract EXIF data), JavaScript bundling (tree shake, code splitting), Sass processing, great TailwindCSS support.
- **Embedded web server** Use Hugo's embedded web server during development to instantly see changes to content, structure, behavior, and presentation.

## Hugo Configuration

The heart of any Hugo site is the `hugo.toml` file. Here's a minimal but complete configuration:

```toml
baseURL = "https://yoursite.com"
languageCode = "en-us"
title = "Your Site Title"

[pagination]
  pagerSize = 15

[taxonomies]
  category = "categories"
  tag = "tags"

[params]
  description = "A personal blog built with Hugo"
  author = "Your Name"
```

## Template Structure

Hugo's template system is powerful yet simple. Here's how to create a basic layout:

```html
<!-- layouts/_default/baseof.html -->
<!DOCTYPE html>
<html lang="{{ .Site.LanguageCode }}">
<head>
  <meta charset="utf-8">
  <title>{{ .Title }} | {{ .Site.Title }}</title>
  <link rel="stylesheet" href="{{</* "css/main.css" | relURL */>}}">
</head>
<body>
  {{ partial "header.html" . }}
  <main>
    {{ block "main" . }}{{ end }}
  </main>
  {{ partial "footer.html" . }}
</body>
</html>
```

## Front Matter with YAML

Each Hugo post starts with front matter. Here's a typical example:

```yaml
---
title: "Your Post Title"
date: 2026-02-07T10:00:00-07:00
categories:
  - Technology
  - Web Development
tags:
  - Hugo
  - Static Sites
  - Go
draft: false
---
```

## Custom Shortcodes

Hugo shortcodes let you create reusable content blocks. Here's a simple alert box shortcode:

```go
<!-- layouts/shortcodes/alert.html -->
<div class="alert alert-{{ .Get "type" | default "info" }}">
  {{ .Inner | markdownify }}
</div>
```

Usage in Markdown:
```markdown
{{</* alert type="warning" */>}}
This is an important warning message!
{{</* /alert */>}}
```

## Taxonomy Templates

Display all categories with post counts:

```html
<!-- layouts/_default/taxonomy.html -->
{{ range $name, $taxonomy := .Site.Taxonomies.categories }}
  <a href="{{ $name | urlize | relURL }}">
    {{ $name }} ({{ len $taxonomy.Pages }})
  </a>
{{ end }}
```

## RSS Feed Generation

Hugo automatically generates RSS feeds. Customize the output with this template:

```xml
<!-- layouts/_default/rss.xml -->
{{- $rss := .OutputFormats.Get "rss" -}}
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>{{ .Site.Title }}</title>
    <link>{{ .Permalink }}</link>
    <description>{{ .Site.Params.description }}</description>
    {{ range .Site.RegularPages.ByDate.Reverse }}
    <item>
      <title>{{ .Title }}</title>
      <link>{{ .Permalink }}</link>
      <pubDate>{{ .Date.Format "Mon, 02 Jan 2006 15:04:05 -0700" }}</pubDate>
      <description>{{ .Summary }}</description>
    </item>
    {{ end }}
  </channel>
</rss>
```

## JavaScript Enhancements

Add minimal JavaScript for dynamic features:

```javascript
// static/js/main.js
document.addEventListener('DOMContentLoaded', function() {
  // Random quote rotation
  const quotes = [
    "The web is what you make of it.",
    "Write what should not be forgotten.",
    "First, solve the problem. Then, write the code."
  ];
  
  const quoteEl = document.querySelector('.random-quote p');
  if (quoteEl) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = randomQuote;
  }
  
  // Page load time display
  if (window.performance) {
    const loadTime = (performance.now() / 1000).toFixed(2);
    const timeEl = document.querySelector('.page-load-time');
    if (timeEl) {
      timeEl.textContent = `Page loaded in ${loadTime}s`;
    }
  }
});
```

## CSS for Japanese Web Aesthetic

Here's how to achieve that classic Japanese web look:

```css
/* Japanese-inspired dense layout */
.post-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.post-card {
  border: 2px solid #0066FF;
  padding: 8px;
  background: #FFFFFF;
}

.post-card:nth-child(even) {
  background: #F0F0F0;
}

.post-title {
  font-size: 22px;
  color: #0066FF;
  text-decoration: none;
}

.post-title:hover {
  color: #FF0000;
  text-decoration: underline;
}

/* Bright, colorful widget headers */
.widget-header {
  background: #FF69B4;
  color: #FFFFFF;
  padding: 4px 10px;
  font-weight: bold;
  font-size: 15px;
  border-bottom: 2px solid #000000;
}
```

## Build Commands

Essential Hugo commands for development and deployment:

```bash
# Development server with drafts
hugo server -D

# Build for production
hugo --minify

# Deploy to specific directory
hugo --destination /path/to/public

# Check for template errors
hugo check
```

## Performance Optimization

Hugo sites are naturally fast, but here are some optimization tips:

```yaml
# hugo.toml performance settings
[minify]
  minifyOutput = true

[build]
  writeStats = true

[imaging]
  quality = 80
  resampleFilter = "Lanczos"
```

Hugo's combination of Go performance and template flexibility makes it perfect for building personal sites that honor the IndieWeb principles while maintaining the classic web aesthetic we love.
