import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'blog',
  title: 'Blog',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'The title of the page.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'subtitle',
      title: 'Subtitle',
      description: 'The text shown just below the page title.',
    }),
    defineField({
      type: 'boolean',
      name: 'hide_title',
      title: 'Hide page title and subtitle',
    }),
    defineField({
      type: 'string',
      name: 'col_number',
      title: 'Columns',
      description: 'The number of posts in a row.',
      initialValue: 'three',
      validation: (Rule) => Rule.required(),
      options: {
        list: ['two', 'three'],
      },
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
        list: ['blog'],
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
  singleInstance: true,
  preview: {
    select: {
      title: 'title',
    },
  },
})
