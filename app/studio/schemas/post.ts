import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'document',
  name: 'post',
  title: 'Post',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      description: 'The title of the post',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'subtitle',
      title: 'Subtitle',
      description: 'The text shown just below the post title.',
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
      title: 'Image (Blog Feed)',
      description: 'The image shown in the blog feed.',
    }),
    defineField({
      type: 'string',
      name: 'thumb_image_alt',
      title: 'Image Alt Text (Blog Feed)',
      description: 'The alt text of the blog feed image.',
    }),
    defineField({
      type: 'image',
      name: 'image',
      title: 'Image (Single Post)',
      description: 'The image shown in the single post.',
    }),
    defineField({
      type: 'string',
      name: 'image_alt',
      title: 'Image Alt Text (Single Post)',
      description: 'The alt text of the single post image.',
    }),
    defineField({
      type: 'string',
      name: 'excerpt',
      title: 'Excerpt',
      description: 'The excerpt of the post displayed in the blog feed.',
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
        list: ['post'],
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
