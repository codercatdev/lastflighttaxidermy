import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'object',
  name: 'grid_item',
  title: 'Grid Item',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'The title of the grid item.',
    }),
    defineField({
      type: 'image',
      name: 'image',
      title: 'Image',
      description: 'The image of the grid item.',
    }),
    defineField({
      type: 'string',
      name: 'image_alt',
      title: 'Image Alt Text',
      description: 'The alt text of the grid image.',
    }),
    defineField({
      type: 'text',
      name: 'content',
      title: 'Content',
      description: 'The text content of the grid item.',
    }),
    defineField({
      type: 'array',
      name: 'actions',
      title: 'Action Buttons',
      of: [{type: 'action'}],
    }),
    defineField({
      type: 'string',
      name: 'type',
      title: 'Object Type',
      description: 'The type of the object',
      hidden: false,
      validation: (Rule) => Rule.required(),
      options: {
        list: ['grid_item'],
      },
    }),
    defineField({
      type: 'string',
      name: 'stackbit_model_type',
      title: 'Stackbit Model Type',
      description: 'Stackbit model type',
      hidden: false,
      validation: (Rule) => Rule.required(),
      options: {
        list: ['object'],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
