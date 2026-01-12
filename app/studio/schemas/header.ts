import {defineField, defineType} from 'sanity'

export default defineType({
  type: 'object',
  name: 'header',
  title: 'Header Configuration',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Header Title',
      description: 'The title displayed in the header if no logo image added.',
    }),
    defineField({
      type: 'image',
      name: 'logo_img',
      title: 'Logo Image',
      description: 'The logo image displayed in the header.',
    }),
    defineField({
      type: 'string',
      name: 'logo_img_alt',
      title: 'Logo Image Alt Text',
      description: 'The alt text of the logo image.',
    }),
    defineField({
      type: 'boolean',
      name: 'has_nav',
      title: 'Enable Navigation Menu',
      description: 'Display the navigation menu bar in the header.',
      initialValue: true,
    }),
    defineField({
      type: 'array',
      name: 'nav_links',
      title: 'Navigation Links',
      description: 'List of navigation links.',
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
        list: ['header'],
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
