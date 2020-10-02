export default {
    name: 'praise',
    type: 'document',
    title: 'Praise',
    fields: [
        {
            name: 'publication',
            type: 'string',
            title: 'Publication'
        },
        {
            name: 'reviewer',
            type: 'string',
            title: 'Reviewer'
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
    ]
}