import { defineField, defineType } from 'sanity'

export default defineType({
    type: 'object',
    name: 'section_pricing_table',
    title: 'Pricing Table Section',
    fields: [
        defineField({
            type: 'string',
            name: 'title',
            title: 'Title',
            description: 'The title of the pricing table section.',
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
            type: 'table',
            name: 'pricing_table',
            title: 'Pricing Table',
            description: 'The pricing table data.',
        }),
        defineField({
            type: 'string',
            name: 'type',
            title: 'Object Type',
            description: 'The type of the object',
            hidden: false,
            validation: (Rule) => Rule.required(),
            options: {
                list: ['section_pricing_table'],
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
