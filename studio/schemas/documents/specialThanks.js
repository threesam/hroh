export default {
    name: 'specialThanks',
    type: 'document',
    title: 'Special Thanks',
    fields: [
        {
            name: 'participants',
            type: 'array',
            title: 'Participants',
            of: [{ type: 'string' }]
        },
        {
            name: 'message',
            type: 'bodyPortableText',
            title: 'Message',
        },
    ],
    preview: {
        prepare() {
            return {
                title: 'Thanks!'
            }
        }
    }
}