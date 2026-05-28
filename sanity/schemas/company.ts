import { defineType, defineField } from "sanity";

export const company = defineType({
  name: "company",
  title: "Company",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Company Name",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "valueChainNodes",
      title: "Value Chain Nodes",
      description: "Which node(s) this company operates at — controls where it appears on node pages and the map",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Raw Materials",      value: "raw-materials" },
          { title: "Yarn & Fabric",      value: "yarn-fabric" },
          { title: "Manufacturing",      value: "manufacturing" },
          { title: "Brands",             value: "brands" },
          { title: "Logistics & Retail", value: "logistics-retail" },
          { title: "Consumer",           value: "consumer" },
          { title: "Secondary Market",   value: "secondary-market" },
        ],
      },
      validation: (R) => R.required().min(1),
    }),

    /* ── Grid card fields ─────────────────────────────── */
    defineField({
      name: "modelDescriptor",
      title: "Model descriptor",
      description: 'Short phrase shown on the company card e.g. "Peer-to-peer luxury resale"',
      type: "string",
    }),
    defineField({
      name: "focus",
      title: "Focus tag",
      description: 'Category label e.g. "Secondary Market", "Footwear brand"',
      type: "string",
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),

    /* ── Profile meta ─────────────────────────────────── */
    defineField({
      name: "founded",
      title: "Founded",
      type: "string",
    }),
    defineField({
      name: "hq",
      title: "Headquarters",
      type: "string",
    }),
    defineField({
      name: "revenue",
      title: "Revenue",
      description: "e.g. €700M (2024 est.)",
      type: "string",
    }),
    defineField({
      name: "employees",
      title: "Employees",
      type: "string",
    }),
    defineField({
      name: "stage",
      title: "Company stage",
      type: "string",
      options: {
        list: ["Seed", "Series A", "Series B", "Series C+", "Late-stage", "Public", "Private"],
      },
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),
    defineField({
      name: "certifications",
      title: "Certifications",
      description: "e.g. B Corp, Fair Trade",
      type: "array",
      of: [{ type: "string" }],
    }),

    /* ── Gallery ──────────────────────────────────────── */
    defineField({
      name: "galleryImages",
      title: "Gallery images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    }),

    /* ── Profile body sections ────────────────────────── */
    defineField({
      name: "businessModel",
      title: "How the model works",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "companySays",
      title: "The company says",
      description: "Direct statement or quote from the company",
      type: "text",
      rows: 5,
    }),
    defineField({
      name: "prefallAnalysis",
      title: "Prefall analysis",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "regulatoryExposure",
      title: "Regulatory exposure",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "signals",
      title: "Signals",
      description: "Bullet-point signals/observations (one per item)",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "sources",
      title: "Sources",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "focus", media: "logo" },
  },
});
