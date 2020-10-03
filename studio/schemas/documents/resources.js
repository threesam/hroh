export default {
    name: 'resources',
    type: 'document',
    title: 'Resources',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'What were these resources used for?'
        },
        {
            name: 'list',
            type: 'array',
            title: 'Resource List',
            of: [
                {
                    name: 'resource',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            type: 'string',
                            title: 'Title',
                        },
                        {
                            name: 'url',
                            type: 'url',
                            title: 'Link'
                        }
                    ]
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title
            }
        },
    }
}