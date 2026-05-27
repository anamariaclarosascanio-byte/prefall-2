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
    }),
    defineField({
      name: "valueChainNode",
      title: "Value Chain Node",
      type: "string",
      options: {
        list: [
          { title: "Raw Materials",      value: "rawmat" },
          { title: "Yarn & Fabric",      value: "spinmill" },
          { title: "Manufacturing",      value: "manufacturing" },
          { title: "Brands",             value: "brands" },
          { title: "Logistics & Retail", value: "retail" },
          { title: "Consumer",           value: "consumer" },
          { title: "Secondary Market",   value: "secondary" },
        ],
      },
      validation: (R) => R.required(),
    }),
    defineField({
      name: "hq",
      title: "Headquarters",
      type: "string",
    }),
    defineField({
      name: "stage",
      title: "Company Stage",
      type: "string",
      options: {
        list: ["Seed", "Series A", "Series B", "Series C+", "Late-stage", "Public", "Private"],
      },
    }),
    defineField({
      name: "focus",
      title: "Focus / Tag",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),
    defineField({
      name: "featured",
      title: "Featured on homepage",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "valueChainNode", media: "logo" },
  },
});
