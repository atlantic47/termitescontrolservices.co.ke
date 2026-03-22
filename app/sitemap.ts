import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://termitescontrolservices.co.ke';

  // Core Static Routes
  const staticRoutes = ['', '/about', '/contact', '/services', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Specialized Services (from app/services/[slug]/page.tsx)
  const services = [
    'pre-construction-termite-treatment',
    'post-construction-termite-treatment',
    'termite-inspection-services',
    'anti-termite-soil-treatment',
    'commercial-termite-control',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Location-based Areas (from app/areas/[slug]/page.tsx)
  const areas = ['nairobi', 'mombasa', 'kisumu', 'nakuru'].map((slug) => ({
    url: `${baseUrl}/areas/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Dynamic Blog Posts (from content/blog/*.md)
  const blogDir = path.join(process.cwd(), 'content/blog');
  let blogs: MetadataRoute.Sitemap = [];
  
  try {
    if (fs.existsSync(blogDir)) {
      const files = fs.readdirSync(blogDir);
      blogs = files
        .filter((file) => file.endsWith('.md'))
        .map((file) => {
          const slug = file.replace(/\.md$/, '');
          const filePath = path.join(blogDir, file);
          const stats = fs.statSync(filePath);
          
          return {
            url: `${baseUrl}/blog/${slug}`,
            lastModified: stats.mtime,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
          };
        });
    }
  } catch (error) {
    console.error('Error reading blogs directory for sitemap:', error);
  }

  // Combine entirely into one sitemap
  return [...staticRoutes, ...services, ...areas, ...blogs];
}
