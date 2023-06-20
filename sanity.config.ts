import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: [
      {
        name: "place",
        title: "Places",
        type: "document",
        fields: [
          {
            name: "image",
            title: "Image",
            type: "image",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "adress",
            title: "Adress",
            type: "string",
            validation: (Rule) => Rule.required(),
          }
        ]
      },
      {
        name: "review",
        title: "Reviews",
        type: "document",
        readOnly: true,
        fields: [
          {
            name: "place",
            title: "Place",
            type: "reference",
            to: [{ type: "place" }],
          },
          {
            name: "user",
            title: "User",
            type: "text",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "overallRating",
            title: "Overall Rating",
            type: "number",
            validation: (Rule) => Rule.required(),
          },
          {
            name: "serviceRating",
            title: "Service Rating",
            type: "number",
            validation: (Rule) => Rule.required().max(5).min(1),
          },
          {
            name: "atmosphereRating",
            title: "Atmosphere Rating",
            type: "number",
            validation: (Rule) => Rule.required().max(5).min(1),
          },
          {
            name: "coffeeRating",
            title: "Coffee Rating",
            type: "number",
            validation: (Rule) => Rule.required().max(5).min(1),
          },
          {
            name: "locationRating",
            title: "Location Rating",
            type: "number",
            validation: (Rule) => Rule.required().max(5).min(1),
          },
          {
            name: "valueRating",
            title: "Value Rating",
            type: "number",
            validation: (Rule) => Rule.required().max(5).min(1),
          }
        ],
      }
    ],
  },
  plugins: [deskTool()],
})