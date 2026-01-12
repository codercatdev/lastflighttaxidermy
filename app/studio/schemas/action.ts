import { defineField, defineType } from 'sanity'

export default defineType({
    type: 'object',
    name: 'action',
    title: 'Action',
    fields: [
        defineField({
            type: 'string',
            name: 'label',
            title: 'Label',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            type: 'string',
            name: 'url',
            title: 'URL',
            initialValue: '#',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            type: 'string',
            name: 'style',
            title: 'Style',
            initialValue: 'link',
            validation: (Rule) => Rule.required(),
            options: {
                list: ['link', 'button', 'icon'],
            },
        }),
        defineField({
            type: 'string',
            name: 'icon',
            title: 'Icon',
            initialValue: 'dribbble',
            options: {
                list: [
                    'dribbble',
                    'facebook',
                    'github',
                    'instagram',
                    'linkedin',
                    'pinterest',
                    'twitter',
                    'vimeo',
                    'youtube',
                ],
            },
        }),
        defineField({
            type: 'boolean',
            name: 'new_window',
            title: 'Should the link open a new tab/window',
        }),
        defineField({
            type: 'boolean',
            name: 'no_follow',
            title: 'No follow',
            description: 'Add rel="nofollow" attribute to the link',
        }),
        defineField({
            type: 'string',
            name: 'type',
            title: 'Object Type',
            description: 'The type of the object',
            hidden: false,
            validation: (Rule) => Rule.required(),
            options: {
                list: ['action'],
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
            title: 'label',
        },
    },
})
