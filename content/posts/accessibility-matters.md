+++
title = 'Accessibility Is Not Optional'
date = 2026-02-05T11:00:00-07:00
categories = ['Technology']
tags = ['Accessibility', 'Web Design', 'HTML']
description = 'Why web accessibility should be a core requirement, not an afterthought.'
featured_image = 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=630&fit=crop'
featured_image_alt = 'A person using accessibility features on a computer, representing inclusive web design'
featured_image_caption = 'Photo by Kon Karampelas on Unsplash'
+++

When I built this site to emulate the dense, colorful aesthetic of Japanese web design, I made a promise to myself: it would be accessible. Every decorative element, every bright color, every packed sidebar. None of it would come at the cost of usability.

## The Myth of the Trade-Off

There's a persistent myth in web design that accessibility and aesthetics are at odds. That making a site screen-reader friendly means making it boring. That sufficient color contrast means muted colors.

This is simply not true. You can have bright red headers *and* readable text. You can have dense layouts *and* proper semantic structure. You can have animated badges *and* respect `prefers-reduced-motion`.

## What This Site Does

- **Semantic HTML5** — Every element uses the correct tag. Navigation is `<nav>`, articles are `<article>`, the sidebar is `<aside>`.
- **ARIA labels** — Screen readers can navigate this site's complex layout without confusion.
- **Skip links** — Keyboard users can jump straight to content.
- **Color contrast** — Despite the vivid palette, all text meets WCAG AA contrast ratios.
- **Reduced motion** — All animations are disabled for users who prefer reduced motion.

## It's Not Extra Work

If you're building accessibility in from the start, it's not extra work. It's just *the work*. The real extra work comes from building an inaccessible site and trying to retrofit it later.

Start accessible. Stay accessible. Your future users (all of them) will thank you.
