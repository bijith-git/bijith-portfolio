export default function handler(req, res) {
  const sitemapData = [
    {
      url: "https://www.bijith.in",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://www.bijith.in/#about",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.bijith.in/#contact",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
  res.setHeader("Content-Type", "application/xml");
  res.write(createSitemapXML(sitemapData));
  res.end();
}

function createSitemapXML(sitemap) {
  const urls = sitemap.map((item) => {
    return `
      <url>
        <loc>${item.url}</loc>
        <lastmod>${item.lastModified}</lastmod>
        <changefreq>${item.changeFrequency}</changefreq>
        <priority>${item.priority}</priority>
      </url>
    `;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join("")}
    </urlset>
  `;
}
