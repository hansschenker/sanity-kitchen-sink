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
                  buildHookId: '5f5376059282d6b499b0844e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-8okdu69z',
                  apiId: 'd0be8363-c40a-4d18-8598-449c3006d5a7'
                },
                {
                  buildHookId: '5f537605c1f097ecb8158689',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bpeujfhz',
                  apiId: '8264f0f6-0319-488d-b2c3-1e290dadbdf0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hansschenker/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bpeujfhz.netlify.app', category: 'apps'}
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
