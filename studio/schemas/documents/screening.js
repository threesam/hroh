export default {
    name: 'screening',
    type: 'document',
    title: 'Screening',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'date',
            type: 'datetime',
            title: 'Datetime'
        },
        {
            name: 'venue',
            title: 'Venue',
            type: 'string',
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string'
        },
        {
            name: 'image',
            type: 'mainImage',
            title: 'Image'
        }
    ]
}