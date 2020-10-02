export default {
    name: 'patrons',
    type: 'document',
    title: 'Patrons',
    fields: [
        {
            name: 'patron',
            type: 'array',
            title: 'Patron',
            of: [
                { type: 'string' }
            ]
        }
    ]
}