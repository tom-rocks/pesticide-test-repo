# Pesticide Agent Context -- Chaos Zone

Read this file COMPLETELY before making any changes. It will save you from making mistakes.

## What This Project Is

A deliberately chaotic single-page website built with Express serving static HTML/CSS/JS. Deployed on Railway at https://chaos-zone-production.up.railway.app. Some visual problems are intentional (it's a chaos-themed site), so only fix what the user specifically asks about.

## File Structure

```
server.js           Express server, serves public/ on PORT (env var or 3000)
public/
  index.html        The single page -- all HTML structure
  style.css         ALL styles -- every visual property is here
  script.js         Interactive features (gallery clicks, spinning box hover, form submit)
package.json        Only dependency is express
```

There are NO other files, frameworks, or build steps. Changes to the site are always in `public/`.

## CRITICAL RULES

- NEVER run `npm install`. The dependencies are already installed on the server.
- NEVER commit `node_modules`. If it exists locally, ignore it.
- NEVER change elements the user didn't ask about. This site has intentional visual chaos.
- ALWAYS read `public/style.css` and `public/index.html` fully before making CSS changes.
- ALWAYS read the file back AFTER writing to verify your change is correct.

## CSS Selector Map

This is the mapping from visual elements to their CSS selectors. Use this to identify exactly which rule to change.

### Header (top gradient bar)
- Main title "WELCOME TO THE CHAOS ZONE": `.header h1` (color: #ffff00)
- Subtitle: `.header p` (color: #00ff88)
- Header container (the gradient background): `.header` (padding: 0 -- this is a known bug)

### Navigation Bar
- Nav background: `.navbar` (background: #f0f0f0)
- Nav links: `.navbar a` (color: #ffffff -- invisible on white, known bug)

### Hero Section
- Hero heading "We Build Digital Nightmares": `.hero-text h2` (color: #ff006e)
- Hero paragraph: `.hero-text p` (color: #b8b8b8)
- CTA button "Touch Grass": `.cta-button` (8px font, invisible text -- known bug)
- Spinning CHAOS box: `.spinning-box` (animation: spin 12s, gradient background)
- Spin animation speed hover: controlled in `script.js` lines 14-21

### About Us Section
- **Section heading "About Us"**: `.about-section h2` (color: #00ff00 -- green)
- Section background: `.about-section` (background: #2d1b69)
- Card containers: `.card` (height: 150px, overflow: hidden -- text gets cut off, known bug)
- **Card headings ("Our Mission", "Our Team", "Our Values")**: `.card h3` (color: #ff0000)
- Card text: `.card p` (color: #ccc)

### Gallery Section
- Section heading "Our Masterpieces": `.gallery-section h2` (color: #f15bb5)
- Gallery items: `.gallery-item` (colors are INLINE in index.html, not in style.css)
- Hover effect: `.gallery-item:hover` (scale + rotate)

### Testimonials
- Section heading "What People Say": `.testimonials h2` (color: #00bbf9)
- Individual testimonials: `.testimonial` (border-left: #ff006e)

### Stats Section
- Stat numbers: `.stat-number` (color: #1a0a2e -- same as background, invisible, known bug)
- Stat labels: `.stat-label` (color: #888)

### Contact Section
- Section heading "Contact Us": `.contact-section h2` (color: #fee440)
- Form inputs: `.contact-form input`, `.contact-form textarea`
- Submit button: `.submit-btn` (text same color as background -- invisible, known bug)

### Footer
- Footer container: `.footer` (margin-top: -40px -- overlaps content, known bug)

## Known Intentional Bugs

These are bugs left in on purpose for testing. Do NOT fix them unless the user specifically asks:
1. Header has zero padding
2. Nav links are white on white
3. CTA button is tiny and invisible
4. Cards cut off text (150px height + overflow hidden)
5. Stat numbers are invisible (same color as background)
6. Submit button text is invisible
7. Footer overlaps content (negative margin)
8. No responsive/mobile styles

## Lessons Learned

### The "About Us" Incident
A user pointed at the About Us section and said "this should be red". The agent changed `.card h3` (the card headings) instead of `.about-section h2` (the section heading). It took 4 attempts to get right because:
- The agent didn't read the full CSS file first
- The agent didn't verify changes after writing
- The agent changed ALL card headings when only one was referenced
- The agent claimed success without reading the file back

**Lesson**: When a user says "this" with a screenshot, look at the LARGEST/MOST PROMINENT text visible. Section headings (`h2`) are usually what people point at, not subheadings (`h3`). When in doubt, state which element you're about to change before changing it.

### Gallery Item Colors Are Inline
The gallery items (Art 1-6) have their colors set as `style="background: #color"` directly in `index.html`, NOT in `style.css`. If asked to change a gallery item color, edit the HTML, not the CSS.

### The Spinning Box
The base animation speed is in `style.css` (`.spinning-box` animation duration). The hover speed-up and the restore-on-leave speed are in `script.js`. If changing the spin speed, update BOTH files to keep them consistent.
