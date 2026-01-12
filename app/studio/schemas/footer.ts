import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'object',
  name: 'footer',
  title: 'Footer Configuration',
  fields: [
    defineField({
      type: 'string',
      name: 'content',
      title: 'Footer Content',
      description: 'The copyright text displayed in the footer.',
    }),
    defineField({
      type: 'array',
      name: 'links',
      title: 'Links',
      description: 'List of links in the footer.',
      of: [{type: 'action'}],
    }),
    defineField({
      type: 'boolean',
      name: 'has_social',
      title: 'Enable Social Links',
      description: 'Display social links in the footer.',
      initialValue: true,
    }),
    defineField({
      type: 'array',
      name: 'social_links',
      title: 'Social Links',
      description: 'List of social links in the footer.',
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
        list: ['footer'],
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
      title: 'content',
    },
  },
})
