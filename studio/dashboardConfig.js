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
                  buildHookId: '5fb64539259fcbe27f702aab',
                  title: 'Sanity Studio',
                  name: 'sanity-template-studio',
                  apiId: 'ab86516c-9bdd-4b6d-9309-239a7a774828'
                },
                {
                  buildHookId: '5fb64539f98460d9a47bbc66',
                  title: 'Blog Website',
                  name: 'sanity-template',
                  apiId: '988f4fa9-d86e-4afe-8a5b-e81fb2118e5e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/calsal8/sanity-template',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-template.netlify.app', category: 'apps'}
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
