export default {
    name: 'cast',
    type: 'document',
    title: 'Cast',
    fields: [
        {
            name: 'person',
            type: 'person',
            title: 'Cast Member'
        },
    ],
    preview: {
        select: {
            title: 'person.name',
            organization: 'person.organization',
            home: 'person.from'
        },
        prepare({ title = 'No title', organization, home }) {
            return {
                title,
                subtitle: organization || home
            }
        }
    }
}