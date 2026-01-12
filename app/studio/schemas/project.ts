import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'project',
  title: 'Project',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'The title of the project',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'subtitle',
      title: 'Subtitle',
      description: 'The text shown just below the project title.',
    }),
    defineField({
      type: 'date',
      name: 'date',
      title: 'Date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'image',
      name: 'thumb_image',
      title: 'Image (Portfolio)',
      description: 'The image shown in the portfolio page.',
    }),
    defineField({
      type: 'string',
      name: 'thumb_image_alt',
      title: 'Image Alt Text (Portfolio)',
      description: 'The alt text of the portfolio page image.',
    }),
    defineField({
      type: 'image',
      name: 'image',
      title: 'Image (Single Project)',
      description: 'The image shown in the single project.',
    }),
    defineField({
      type: 'string',
      name: 'image_alt',
      title: 'Image Alt Text (Single Project)',
      description: 'The alt text of the single project image.',
    }),
    defineField({
      type: 'stackbit_page_meta',
      name: 'seo',
      title: 'Seo',
    }),
    defineField({
      type: 'string',
      name: 'layout',
      title: 'Layout',
      hidden: false,
      validation: (Rule) => Rule.required(),
      options: {
        list: ['project'],
      },
    }),
    defineField({
      type: 'string',
      name: 'stackbit_url_path',
      title: 'URL Path',
      description:
        'The URL path of this page relative to site root. For example, the site root page would be "/", and post page would be "posts/new-post/"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'stackbit_dir',
      title: 'Directory',
      description: 'The directory path where this file is stored',
      hidden: false,
      validation: (Rule) => Rule.required(),
      options: {
        list: ['content/pages'],
      },
    }),
    defineField({
      type: 'text',
      name: 'content',
      title: 'Content',
      description: 'Page content',
    }),
    defineField({
      type: 'string',
      name: 'stackbit_model_type',
      title: 'Stackbit Model Type',
      description: 'Stackbit model type',
      hidden: false,
      validation: (Rule) => Rule.required(),
      options: {
        list: ['page'],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
