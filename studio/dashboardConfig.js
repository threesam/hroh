export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f74cd5a514aa02821bac257',
                  title: 'Sanity Studio',
                  name: 'hroh-studio',
                  apiId: '747c5f46-666c-4337-98ae-39e09239b9ab'
                },
                {
                  buildHookId: '5f74cd5a51d2cf2814873813',
                  title: 'Blog Website',
                  name: 'hroh',
                  apiId: '8a36f2f9-db45-4e0b-ac81-e7dfccb56c25'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/threesam/hroh',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://hroh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
