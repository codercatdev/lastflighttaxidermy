import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'object',
  name: 'stackbit_page_meta',
  title: 'Page meta data',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'The page title that goes into the <title> tag',
    }),
    defineField({
      type: 'string',
      name: 'description',
      title: 'Description',
      description: 'The page description that goes into the <meta name="description"> tag',
    }),
    defineField({
      type: 'array',
      name: 'robots',
      title: 'Robots',
      description: 'The items that go into the <meta name="robots"> tag',
      of: [{type: 'string'}],
      options: {
        list: [
          'all',
          'index',
          'follow',
          'noindex',
          'nofollow',
          'noimageindex',
          'notranslate',
          'none',
        ],
      },
    }),
    defineField({
      type: 'array',
      name: 'extra',
      title: 'Extra',
      description:
        'Additional definition for specific meta tags such as open-graph, twitter, etc.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'name',
              title: 'Name',
            }),
            defineField({
              type: 'string',
              name: 'value',
              title: 'Value',
            }),
            defineField({
              type: 'string',
              name: 'keyName',
              title: 'Key Name',
              initialValue: 'name',
            }),
            defineField({
              type: 'boolean',
              name: 'relativeUrl',
              title: 'Relative Url',
            }),
          ],
          preview: {
            select: {
              title: 'name',
            },
          },
        },
      ],
    }),
    defineField({
      type: 'string',
      name: 'type',
      title: 'Object Type',
      description: 'The type of the object',
      hidden: false,
      validation: (Rule) => Rule.required(),
      options: {
        list: ['stackbit_page_meta'],
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
