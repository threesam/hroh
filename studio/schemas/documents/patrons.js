export default {
    name: 'patrons',
    type: 'document',
    title: 'Patrons',
    fields: [
        {
            name: 'message',
            type: 'bodyPortableText',
            title: 'Message'
        },
        {
            name: 'patron',
            type: 'array',
            title: 'Patron',
            of: [
                { type: 'string' }
            ]
        }
    ],
    preview: {
        prepare() {
            return { title: 'Patrons' }
        }
    }
}