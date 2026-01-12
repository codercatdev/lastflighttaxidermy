import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'object',
  name: 'section_form',
  title: 'Form Section',
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
      type: 'text',
      name: 'content',
      title: 'Content',
      description: 'The text content of the section.',
    }),
    defineField({
      type: 'string',
      name: 'form_id',
      title: 'Form ID',
      description: 'A unique identifier of the form. Must not contain whitespace.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'form_action',
      title: 'Form Action',
      description:
        'The path of your custom "success" page, if you want to replace the default success message.',
    }),
    defineField({
      type: 'array',
      name: 'form_fields',
      title: 'Form Fields',
      of: [{type: 'form_field'}],
    }),
    defineField({
      type: 'string',
      name: 'submit_label',
      title: 'Submit Button Label',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'type',
      title: 'Object Type',
      description: 'The type of the object',
      hidden: false,
      validation: (Rule) => Rule.required(),
      options: {
        list: ['section_form'],
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
