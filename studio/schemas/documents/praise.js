export default {
    name: 'praise',
    type: 'document',
    title: 'Praise',
    fields: [
        {
            name: 'reviewer',
            type: 'string',
            title: 'Reviewer'
        },
        {
            name: 'publication',
            type: 'string',
            title: 'Publication/Role'
        },
        {
            name: 'review',
            type: 'bodyPortableText',
            title: 'Review'
        },
        {
            name: 'href',
            type: 'url',
            title: 'Link'
        }
    ],
    preview: {
        select: {
            title: 'reviewer'
        },
        prepare({ title }) {
            return { title }
        }
    }
}