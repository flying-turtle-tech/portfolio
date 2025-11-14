# Portfolio Website

A stunning, modern, dark-themed developer portfolio website built with Next.js 15, React, TypeScript, and TailwindCSS.

## Features

- **Modern Dark Theme**: Sleek developer aesthetic inspired by Vercel, Linear, and Raycast
- **Smooth Animations**: Powered by Framer Motion for micro-interactions and page transitions
- **Responsive Design**: Fully responsive across all devices
- **MDX Support**: Write project details in MDX format
- **SEO Optimized**: Built-in SEO metadata and OG image generation
- **Fast Performance**: Optimized for speed with Next.js 15 features

## Tech Stack

- Next.js 15+
- React 18
- TypeScript
- TailwindCSS
- Framer Motion
- shadcn/ui
- MDX

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### Build

```bash
npm run build
npm start
```

## Customization

### Personal Information

1. **Update your name and tagline** in `components/sections/hero.tsx`
2. **Update experience details** in `components/sections/experience.tsx`
3. **Update about section** in `components/sections/about.tsx`
4. **Update skills** in `components/sections/about.tsx`
5. **Update contact links** in `components/footer.tsx` and `components/sections/contact.tsx`

### Projects

Projects are defined in `components/sections/projects.tsx`. To add or edit projects:

1. Update the `projects` array with your project details
2. Add project images to `/public/projects/` directory
3. For detailed project pages, create new routes in `app/projects/[slug]/`

### Adding MDX Project Pages

To add a new detailed project page:

1. Create a new MDX file in `app/projects/[slug]/` directory
2. Add the project slug to the `generateStaticParams` function in `app/projects/[slug]/page.tsx`
3. Write your project details using MDX syntax

Example MDX structure:

```mdx
# Project Title

## Overview
Your project overview here...

## Features
- Feature 1
- Feature 2

## Technical Details
Technical implementation details...
```

### Styling

- **Colors**: Update theme colors in `tailwind.config.ts`
- **Global styles**: Modify `app/globals.css`
- **Component styles**: Each component uses Tailwind classes

### SEO

Update SEO metadata in:
- `app/layout.tsx` - Main metadata
- `app/opengraph-image.tsx` - OG image
- `app/robots.ts` - Robots.txt
- `app/sitemap.ts` - Sitemap

Don't forget to update the base URL in these files with your actual domain.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy

### Manual Deployment

```bash
npm run build
```

The build output will be in the `.next` directory.

## Performance

This portfolio is optimized for:
- High Lighthouse scores
- Fast page loads
- Smooth animations
- SEO optimization

## License

MIT License - feel free to use this template for your own portfolio!

## Support

For issues or questions, please open an issue on GitHub.
