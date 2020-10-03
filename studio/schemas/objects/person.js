export default {
    type: 'object',
    name: 'person',
    fieldsets: [
        { name: 'social', title: 'Social Media' }
    ],
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            name: 'image',
            type: 'mainImage',
            title: 'Image'
        },
        {
            name: 'role',
            type: 'string',
            title: 'Role'
        },
        {
            name: 'organization',
            type: 'string',
            title: 'Organization',
            description: 'If applicable'
        },
        {
            name: 'from',
            type: 'string',
            title: 'From'
        },
        {
            name: 'socialHandles',
            type: 'socialHandles',
            title: 'Links',
            fieldset: 'social'
        }
    ],
}