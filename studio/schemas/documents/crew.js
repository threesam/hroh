export default {
    name: 'crew',
    type: 'document',
    title: 'Crew',
    fields: [
        {
            name: 'person',
            type: 'person',
            title: 'Crew Member'
        },
    ],
    preview: {
        select: {
            title: 'person.name',
            media: 'person.image',
            organization: 'person.organization',
            home: 'person.from'
        },
        prepare({ title = 'No title', media, organization, home }) {
            return {
                title,
                media,
                subtitle: organization || home
            }
        }
    }
}

