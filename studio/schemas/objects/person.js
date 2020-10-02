export default {
    type: 'object',
    name: 'person',
    fieldsets: [
        { name: 'social', title: 'Social media handles' }
    ],
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            name: 'role',
            type: 'string',
            title: 'Role'
        },
        {
            name: 'from',
            type: 'string',
            title: 'From'
        },
        {
            title: 'Twitter',
            name: 'twitter',
            type: 'string',
            fieldset: 'social'
        },
        {
            title: 'Instagram',
            name: 'instagram',
            type: 'string',
            fieldset: 'social'
        },
        {
            title: 'Facebook',
            name: 'facebook',
            type: 'string',
            fieldset: 'social'
        }
    ]
}