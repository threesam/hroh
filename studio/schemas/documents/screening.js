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
            title: 'Date/Time',
            options: {
                dateFormat: 'MM-DD-YYYY',
                timeFormat: 'HH:mm',
            }
        },
        {
            name: 'venue',
            title: 'Venue',
            type: 'string',
        },
        {
            name: 'link',
            title: 'Link',
            type: 'url'
        },
        {
            name: 'image',
            type: 'mainImage',
            title: 'Image'
        },
        {
            name: 'laurel',
            type: 'reference',
            title: 'Laurel',
            to: [
                {
                    type: 'laurel'
                }
            ]
        }
    ]
}