import { defineType, defineField } from "sanity";

export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
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
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      validation: (R) => R.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Business Models",
          "Regulation",
          "Consumer",
          "Supply Chain",
          "Finance",
          "Technology",
        ],
      },
    }),
    defineField({
      name: "synopsis",
      title: "Synopsis",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "keyTakeaways",
      title: "Key Takeaways",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "valueChainNodes",
      title: "Value Chain Nodes",
      type: "array",
      of: [{ type: "string" }],
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
      name: "featured",
      title: "Featured on homepage",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
});
