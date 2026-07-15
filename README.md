# The Wax Box by MC

A modern, responsive static website for a professional waxing and lash studio located in Mississauga, Ontario.

## Project Overview

This is a clean, SEO-optimized static website built with HTML, CSS, and vanilla JavaScript. The site features 9 pages covering services, pricing, location, policies, and aftercare information.

## File Structure

```
waxbox/
├── index.html              # Homepage
├── about.html              # About the studio
├── services.html           # Service categories
├── pricing.html            # Pricing information
├── location.html           # Location and hours
├── faq.html                # Frequently asked questions
├── aftercare-waxing.html   # Waxing aftercare guide
├── aftercare-lash.html     # Lash aftercare guide
├── policies.html           # Cancellation and studio policies
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   ├── components.js       # Reusable navigation and footer
│   └── main.js             # Interactive features (mobile menu, FAQ, etc.)
├── images/                 # Site images and graphics
├── robots.txt              # Search engine crawler instructions
├── sitemap.xml             # XML sitemap for SEO
└── README.md               # This file
```

## Running Locally

This is a static website — no build process or dependencies required.

### Option 1: Direct File Open
Simply open `index.html` in your web browser.

### Option 2: VS Code Live Server (Recommended)
1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` and select "Open with Live Server"
3. The site will open at `http://localhost:5500`

### Option 3: Simple HTTP Server
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit `http://localhost:8000`

## Deployment Options

### Netlify (Recommended for Beginners)
1. Drag and drop the entire `waxbox` folder into [Netlify Drop](https://app.netlify.com/drop)
2. Get an instant live URL
3. Update domain settings when ready

### GitHub Pages
1. Create a GitHub repository
2. Push all files to the `main` branch
3. Enable GitHub Pages in repository settings
4. Select `main` branch as source

### Shared Hosting (cPanel, etc.)
1. Connect via FTP/SFTP
2. Upload all files to the `public_html` or `www` directory
3. Ensure `index.html` is in the root

## Before Deploying: Checklist

- [ ] Update the domain in `robots.txt` (line 4) from `thewaxboxbymc.ca` to the actual domain
- [ ] Update all URLs in `sitemap.xml` from `https://thewaxboxbymc.ca` to the actual domain
- [ ] Compress all images in the `images/` folder using [TinyPNG](https://tinypng.com) or a similar tool
- [ ] Verify all links work and navigation is functional
- [ ] Test the mobile menu and FAQ accordion interactions
- [ ] Confirm the pricing page content is finalized (client will provide the price list)

## Content to Update Later

### Pricing Page
The pricing page currently has placeholder content. The client will provide:
- Waxing service prices
- Lash service prices
- Any package deals or promotions

### Key Files to Update
- `pricing.html` — replace placeholder pricing with actual service prices

## Key Files to Know

### `js/components.js`
Contains the reusable navigation and footer components. Update navigation links or footer contact information here.

### `js/main.js`
Handles interactive features:
- Mobile menu toggle
- FAQ accordion expand/collapse
- Smooth scrolling
- Active navigation state

### `css/styles.css`
All styling is in this single file. CSS custom properties (CSS variables) are defined at the top for easy theme adjustments.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-responsive design tested on iOS and Android
- CSS Grid and Flexbox layout (IE11 not supported)

## License

Proprietary — built for The Wax Box by MC.
