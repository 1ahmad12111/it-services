const CATEGORY_GRADIENTS: Record<string, [string, string]> = {
  "Web Development": ["#2563eb", "#1e3a8a"],
  "Software Development": ["#0f766e", "#164e63"],
  "Cybersecurity": ["#dc2626", "#1f2937"],
  "Cloud Services": ["#0284c7", "#312e81"],
  "IT Strategy": ["#0ea5e9", "#1e40af"],
  "Artificial Intelligence": ["#7c3aed", "#1d4ed8"],
  "Data Privacy": ["#1d4ed8", "#0f172a"],
  "Data Analytics": ["#0891b2", "#0f766e"],
  "IT Infrastructure": ["#475569", "#0f172a"],
  Blockchain: ["#4f46e5", "#111827"],
  "IT Management": ["#2563eb", "#334155"],
  IoT: ["#0e7490", "#115e59"],
  SaaS: ["#4f46e5", "#1e1b4b"],
  "Digital Transformation": ["#7c2d12", "#1f2937"],
  DevOps: ["#1d4ed8", "#1f2937"],
  "Edge Computing": ["#0f766e", "#134e4a"],
  "IT Service Management": ["#0369a1", "#1f2937"],
  "Enterprise Systems": ["#6d28d9", "#1f2937"],
  "API Development": ["#0f766e", "#1e3a8a"],
  "Voice Technology": ["#0891b2", "#1e293b"],
  "Emerging Technology": ["#7e22ce", "#0f172a"],
  "UX Design": ["#db2777", "#312e81"],
  "5G Technology": ["#0ea5e9", "#312e81"],
  "Green IT": ["#16a34a", "#14532d"],
  "Document Management": ["#64748b", "#1e293b"],
  "Augmented Reality": ["#2563eb", "#7c3aed"],
  "Process Automation": ["#0f766e", "#1f2937"],
  "Data Management": ["#0284c7", "#155e75"],
  Accessibility: ["#0ea5e9", "#1e40af"],
  "Business Continuity": ["#ea580c", "#1f2937"],
  "Cloud Architecture": ["#0284c7", "#1e293b"],
  "Digital Engineering": ["#2563eb", "#1f2937"],
  "Business Intelligence": ["#0891b2", "#1e293b"],
  "Mobile Development": ["#4338ca", "#0f172a"],
  "Network Security": ["#dc2626", "#111827"],
  "Managed Services": ["#1d4ed8", "#334155"],
  "Software Strategy": ["#6366f1", "#111827"],
  "AI Ethics": ["#7c3aed", "#1f2937"],
  Networking: ["#0284c7", "#1e3a8a"],
  "Legacy Modernization": ["#64748b", "#1f2937"],
  "IT Operations": ["#0f766e", "#334155"],
  CRM: ["#2563eb", "#1e40af"]
};

const DEFAULT_GRADIENT: [string, string] = ["#1d4ed8", "#1f2937"];

const escapeXml = (value: string): string =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");

const getColorsForCategory = (category: string): [string, string] =>
  CATEGORY_GRADIENTS[category] ?? DEFAULT_GRADIENT;

const splitTitle = (title: string): [string, string] => {
  const words = title.trim().split(/\s+/);
  const maxCharsPerLine = 34;
  const firstLine: string[] = [];
  const secondLine: string[] = [];

  words.forEach((word) => {
    const target = secondLine.length > 0 || firstLine.join(" ").length >= maxCharsPerLine ? secondLine : firstLine;
    target.push(word);
  });

  const lineOne = firstLine.join(" ").slice(0, 48).trim();
  const lineTwo = secondLine.join(" ").slice(0, 48).trim();
  return [lineOne, lineTwo];
};

const buildSvg = (category: string, title: string, width: number, height: number): string => {
  const [fromColor, toColor] = getColorsForCategory(category);
  const categoryText = escapeXml(category);
  const [titleLineOne, titleLineTwo] = splitTitle(title);
  const titleText = escapeXml(title);
  const lineOne = escapeXml(titleLineOne);
  const lineTwo = escapeXml(titleLineTwo);

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="${titleText}"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${fromColor}"/><stop offset="100%" stop-color="${toColor}"/></linearGradient><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="1"/></pattern><radialGradient id="glow" cx="0.8" cy="0.2" r="0.7"><stop offset="0%" stop-color="rgba(255,255,255,0.35)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/></radialGradient></defs><rect width="100%" height="100%" fill="url(#bg)"/><rect width="100%" height="100%" fill="url(#grid)"/><rect width="100%" height="100%" fill="url(#glow)"/><g opacity="0.38"><circle cx="675" cy="115" r="70" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="3"/><path d="M610 305h140M680 235v140" stroke="rgba(255,255,255,0.36)" stroke-width="3" stroke-linecap="round"/><rect x="580" y="270" width="200" height="120" rx="12" fill="none" stroke="rgba(255,255,255,0.25)" stroke-width="2"/></g><g font-family="'Segoe UI', Arial, sans-serif" fill="#fff"><text x="44" y="78" font-size="24" letter-spacing="1.2" opacity="0.9">${categoryText.toUpperCase()}</text><text x="44" y="338" font-size="30" font-weight="700" opacity="0.95">${lineOne}</text>${lineTwo ? `<text x="44" y="378" font-size="30" font-weight="700" opacity="0.95">${lineTwo}</text>` : ""}</g></svg>`;
};

export const generateBlogImage = (category: string, title: string): string => {
  const svg = buildSvg(category, title, 800, 450);
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const generateServiceImage = (serviceTitle: string, isReversed = false): string => {
  const category = isReversed ? "Service Delivery" : "Consulting";
  const svg = buildSvg(category, serviceTitle, 800, 450);
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};
