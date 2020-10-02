export default {
    name: 'specialThanks',
    type: 'document',
    title: 'Special Thanks',
    fields: [
        {
            name: 'message',
            type: 'bodyPortableText',
            title: 'Message',
        },
        {
            name: 'participants',
            type: 'array',
            title: 'Participants',
            of: [{ type: 'string' }]
        }
    ]
}