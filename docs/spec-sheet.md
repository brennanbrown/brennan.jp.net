# **brennan.jp.net** — Hugo Theme Specification
## A Faithful Recreation of Japanese Internet Aesthetic

### **Theme Overview**
A Hugo blog theme that authentically emulates the compact, text-heavy, colorful aesthetic of traditional Japanese web design (circa 1990s-2010s), optimized for modern accessibility and static site generation.

---

## **Core Design Principles**

### **1. Information Density & Layout**
- **Newspaper-style homepage**: Dense rows and columns with minimal whitespace
- **Everything above the fold**: Critical content visible without scrolling
- **No "read more" breaks**: Full post excerpts (200-300 words) on homepage
- **Multi-column layouts**: 2-3 columns on desktop, single on mobile
- **Sidebar overload**: Right sidebar packed with:
  - Recent posts (last 10-15 entries)
  - Tag cloud (all tags visible)
  - Archive calendar
  - Site statistics counter
  - Weather widget placeholder
  - Random quote rotation
  - "Currently reading" section

### **2. Typography & Text Treatment**
- **Small, compact fonts**: Base font size 12-13px
- **Tight line-height**: 1.3-1.5 for maximum density
- **Mixed font weights**: Heavy use of `<strong>` for emphasis
- **Colored text everywhere**: Inline text colors (red, blue, green) for categories/emphasis
- **Underlined links**: Traditional blue (#0000FF) underlined links
- **Text decorations**: Occasional `<blink>` equivalent (CSS animation), marquee effects for announcements

### **3. Color Palette**
**Primary Colors** (vibrant and saturated):
- Background: `#FFFFFF` or light yellow (`#FFFACD`)
- Headers: Bright red (`#FF0000`), orange (`#FF6600`), hot pink (`#FF69B4`)
- Borders: Black (`#000000`) or bright blue (`#0066FF`)
- Accent boxes: Pale pink (`#FFE4E1`), light cyan (`#E0FFFF`), pale yellow (`#FFFFE0`)

**Text Colors**:
- Body: Black (`#000000`)
- Links: Blue (`#0000EE`), visited purple (`#551A8B`)
- Category tags: Mix of red, green, orange, purple

### **4. Visual Elements**

**Borders & Boxes**:
- Thick (3-5px) solid borders around content sections
- Double borders (border-style: double) for special sections
- Dashed borders for secondary content
- Mix of colored borders (not just black)

**Decorative Elements**:
- Animated GIF support for section dividers
- Small decorative icons (stars ⭐, arrows ➡️, bullets ●)
- "NEW!" badges (animated, red text on yellow)
- Flame graphics 🔥 for "hot" posts
- Sparkle effects ✨ for featured content

**Background Patterns**:
- Optional subtle patterns (dots, lines, traditional Japanese patterns)
- Alternating row colors in lists (#FFFFFF / #F0F0F0)

### **5. Navigation & UI Components**

**Header**:
- Site title in large (24-28px), bold, colorful text with text-shadow
- Horizontal navigation bar with colored tabs/buttons
- Breadcrumb trail below header
- Animated welcome message banner

**Navigation Menu**:
- Bright colored buttons with borders
- Hover effects: color inversion or background change
- Dropdown menus with visible borders
- "Home" button styled distinctly

**Sidebar Widgets**:
- Each widget in bordered box with colored header bar
- Scrollable sections if content exceeds height
- Alternating background colors for widgets
- Widget titles in bold with background color bars

**Footer**:
- Dense multi-column footer with:
  - Site map links
  - Social media icons (small, ordered list)
  - Copyright notice
  - Hit counter (decorative, CSS-only)
  - "Best viewed in..." browser notice (ironic/nostalgic)
  - Page load time display

### **6. Content Layout**

**Blog Post Cards (Homepage)**:
- Compact rectangular boxes with borders
- Post metadata visible: date, category, tag count, reading time
- Small thumbnail image (100x100px) floated left
- Title in colored text (varies by category)
- Full excerpt with "Continue reading »" link
- Tags displayed inline with color backgrounds

**Single Post View**:
- Full-width content area (sidebar remains)
- Post metadata bar at top (date, author, categories, tags)
- Social sharing buttons (styled as compact text links)
- Related posts at bottom in boxed grid
- Comment section with thick border separator
- Previous/Next post navigation as colored buttons

**Archive Pages**:
- Table-style layout with alternating row colors
- Columns: Date | Title | Category | Tags
- Compact spacing (no thumbnails)
- Pagination as numbered buttons

### **7. Technical Features**

**Hugo-Specific**:
- Taxonomy templates for categories and tags
- Custom shortcodes for:
  - Colored text boxes
  - "NEW!" badges
  - Inline image galleries
  - Quote boxes with decorative borders
- Partial templates for reusable widgets
- Menu system with unlimited nesting

**Performance**:
- Inline critical CSS
- Minimal JavaScript (optional enhancements only)
- Optimized for fast static generation
- No external dependencies (self-contained)

**Accessibility**:
- Semantic HTML5 structure
- ARIA labels for navigation
- Skip links for screen readers
- Keyboard navigation support
- Sufficient color contrast (despite bright colors)
- Alt text support for decorative elements

**Responsive Design**:
- Mobile: Single column, stacked widgets, larger tap targets
- Tablet: Two-column layout
- Desktop: Full three-column layout
- Maintains density across breakpoints

### **8. Configuration Options (config.toml)**

```toml
[params]
  # Color scheme
  primaryColor = "#FF0000"
  secondaryColor = "#0066FF"
  backgroundColor = "#FFFFFF"
  
  # Layout options
  showSidebar = true
  sidebarPosition = "right" # or "left"
  columnCount = 3 # 2 or 3
  
  # Homepage settings
  postsPerPage = 15
  excerptLength = 300
  showThumbnails = true
  
  # Visual effects
  enableAnimations = true
  showHitCounter = true
  enableMarquee = true
  
  # Widgets
  showRecentPosts = true
  recentPostsCount = 15
  showTagCloud = true
  showArchiveCalendar = true
  showRandomQuote = true
  
  # Footer
  showSiteMap = true
  showCopyright = true
  customFooterText = "Best viewed in any browser!"
```

### **9. Asset Structure**

```
brennan.jp.net/
├── layouts/
│   ├── _default/
│   │   ├── baseof.html
│   │   ├── list.html
│   │   ├── single.html
│   ├── partials/
│   │   ├── header.html
│   │   ├── footer.html
│   │   ├── sidebar.html
│   │   ├── nav.html
│   │   ├── widgets/
│   │   │   ├── recent-posts.html
│   │   │   ├── tag-cloud.html
│   │   │   ├── archive.html
│   ├── index.html
│   ├── 404.html
├── static/
│   ├── css/
│   │   ├── main.css
│   │   ├── responsive.css
│   │   ├── animations.css
│   ├── js/
│   │   ├── optional.js (minimal)
│   ├── images/
│   │   ├── decorative/ (borders, bullets, icons)
├── archetypes/
│   ├── default.md
├── theme.toml
├── README.md
```

### **10. Typography Stack**

```css
body {
  font-family: "MS PGothic", "Osaka", "Hiragino Kaku Gothic Pro", 
               Arial, sans-serif;
  font-size: 13px;
  line-height: 1.4;
}

h1, h2, h3 {
  font-family: "MS PMincho", "Hiragino Mincho Pro", Georgia, serif;
  text-shadow: 2px 2px 0px rgba(0,0,0,0.2);
}
```

### **11. Key Differentiators**

- **No hero images**: Text and information take priority
- **Visible advertisements placeholders**: Empty bordered boxes labeled "AD SPACE"
- **Table-based aesthetics**: CSS Grid/Flexbox made to look like tables
- **RSS icon prominent**: Classic orange RSS feed button in header
- **Timestamp everything**: Post dates, update times, "last modified"
- **Counter culture**: Decorative visitor counter and page stats
- **Inline navigation**: Breadcrumbs and contextual links everywhere

---

## **Sample Homepage Wireframe**

```
┌─────────────────────────────────────────────────────────┐
│ 🌸 brennan.jp.net 🌸                        [HOME][BLOG] │
│ Queer Métis Writer & Developer              [ABOUT][RSS]│
├─────────────────────────────────────────────────────────┤
│ 🔥 NEW POST! Welcome to the Japanese Web! 🔥          │
├───────────────────────┬─────────────────────────────────┤
│ ■ Blog Posts (15)     │ ▸ RECENT POSTS                  │
│ ┌─────────────────┐   │  • Post Title One               │
│ │[img] POST TITLE │   │  • Post Title Two               │
│ │Category | 5 min │   │  • Post Title Three             │
│ │Lorem ipsum dolor│   │ ━━━━━━━━━━━━━━━━━━━━            │
│ │Continue reading»│   │ ▸ TAG CLOUD                     │
│ └─────────────────┘   │  [Hugo] [Poetry] [Tech]         │
│ ┌─────────────────┐   │  [IndieWeb] [Writing]           │
│ │[img] POST TITLE │   │ ━━━━━━━━━━━━━━━━━━━━            │
│ │... (14 more)    │   │ ▸ ARCHIVE                       │
│ └─────────────────┘   │  📅 February 2026 (12)          │
│ [1][2][3]...[Next]    │  📅 January 2026 (31)           │
└───────────────────────┴─────────────────────────────────┘
│ Site Map | About | Contact | RSS | View Counter: 142857 │
│ © 2026 Brennan Kenneth Brown | Built with Hugo          │
└─────────────────────────────────────────────────────────┘
```

---

This spec honors the Japanese web aesthetic while maintaining your commitment to accessibility, JAMstack principles, and the IndieWeb. The theme would be immediately recognizable as "that Japanese internet look" while remaining functional for modern blogging!