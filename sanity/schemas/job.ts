import { defineType, defineField } from "sanity";

export const job = defineType({
  name: "job",
  title: "Job",
  type: "document",
  fields: [
    defineField({
      name: "role",
      title: "Role / Job Title",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "type",
      title: "Employment Type",
      type: "string",
      options: { list: ["Full-time", "Part-time", "Contract", "Freelance"] },
    }),
    defineField({
      name: "seniority",
      title: "Seniority",
      type: "string",
      options: { list: ["Junior", "Mid", "Senior", "Executive"] },
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
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "applyUrl",
      title: "Application URL",
      type: "url",
    }),
    defineField({
      name: "postedAt",
      title: "Posted at",
      type: "datetime",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "active",
      title: "Active listing",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: { title: "role", subtitle: "company" },
  },
});
