import { defineType, defineField } from "sanity";

export const regulation = defineType({
  name: "regulation",
  title: "Regulation",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Short title",
      description: 'Acronym / short name e.g. "CSRD", "ESPR"',
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "fullName",
      title: "Full name",
      type: "string",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          "In force",
          "Phased implementation",
          "Partially in force",
          "Proposed",
          "Withdrawn",
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "effectiveDate",
      title: "Effective / key date",
      description: "e.g. January 2025, Phase 1 2024",
      type: "string",
    }),
    defineField({
      name: "jurisdiction",
      title: "Jurisdiction",
      type: "string",
    }),
    defineField({
      name: "applies",
      title: "Applies to",
      type: "string",
    }),
    defineField({
      name: "summary",
      title: "Summary",
      description: "One-paragraph summary shown on the tracker row",
      type: "text",
      rows: 4,
      validation: (R) => R.required(),
    }),
    defineField({
      name: "body",
      title: "Full detail",
      description: "Long-form content for the regulation detail page",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "valueChainNodes",
      title: "Value Chain Nodes",
      description: "Which nodes this regulation applies to",
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
    }),
    defineField({
      name: "impactLevel",
      title: "Impact level",
      type: "string",
      options: { list: ["high", "medium", "low"] },
    }),
    defineField({
      name: "order",
      title: "Display order on tracker",
      description: "Lower number = appears first",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "status" },
  },
});
