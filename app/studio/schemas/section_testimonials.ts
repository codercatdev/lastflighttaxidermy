import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'object',
  name: 'section_testimonials',
  title: 'Testimonials Section',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'The title of the section.',
    }),
    defineField({
      type: 'string',
      name: 'section_id',
      title: 'Element ID',
      description:
        'A unique identifier that can be used when linking to this section. Must not contain whitespace.',
    }),
    defineField({
      type: 'string',
      name: 'subtitle',
      title: 'Subtitle',
      description: 'The subtitle of the section.',
    }),
    defineField({
      type: 'string',
      name: 'col_number',
      title: 'Columns',
      description: 'The number of testimonials in a row.',
      initialValue: 'three',
      validation: (Rule) => Rule.required(),
      options: {
        list: ['two', 'three'],
      },
    }),
    defineField({
      type: 'array',
      name: 'testimonials',
      title: 'Testimonials',
      of: [{type: 'testimonial'}],
    }),
    defineField({
      type: 'string',
      name: 'type',
      title: 'Object Type',
      description: 'The type of the object',
      hidden: false,
      validation: (Rule) => Rule.required(),
      options: {
        list: ['section_testimonials'],
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
