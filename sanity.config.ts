import { defineConfig, defineField, defineType } from 'sanity'
import { deskTool } from 'sanity/desk'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: [
      defineType({
        name: "place",
        title: "Places",
        type: "document",
        fields: [
          defineField({
            name: "image",
            title: "Image",
            type: "image",
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: "adress",
            title: "Adress",
            type: "string",
            validation: (Rule) => Rule.required(),
          })
        ]
      }),
      defineType({
        name: "review",
        title: "Reviews",
        type: "document",
        readOnly: true,
        fields: [
          defineField({
            name: "place",
            title: "Place",
            type: "reference",
            to: [{ type: "place" }],
          }),
          defineField({
            name: "overallRating",
            title: "Overall Rating",
            type: "number",
            validation: (Rule) => Rule.required(),
          }),
          defineField({
            name: "serviceRating",
            title: "Service Rating",
            type: "number",
            validation: (Rule) => Rule.required().max(5).min(1),
          }),
          defineField({
            name: "atmosphereRating",
            title: "Atmosphere Rating",
            type: "number",
            validation: (Rule) => Rule.required().max(5).min(1),
          }),
          defineField({
            name: "coffeeRating",
            title: "Coffee Rating",
            type: "number",
            validation: (Rule) => Rule.required().max(5).min(1),
          }),
          defineField({
            name: "locationRating",
            title: "Location Rating",
            type: "number",
            validation: (Rule) => Rule.required().max(5).min(1),
          }),
          defineField({
            name: "valueRating",
            title: "Value Rating",
            type: "number",
            validation: (Rule) => Rule.required().max(5).min(1),
          })
        ],

      })
    ],
  },
  plugins: [deskTool()],
})