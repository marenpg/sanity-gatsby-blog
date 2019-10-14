export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5da42806850f2b6dc0d8f3c7',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-a79euh7n',
                  apiId: '2d7870d8-cae5-4b8f-a3c0-efb00fe521e0'
                },
                {
                  buildHookId: '5da42806816c815c2eee81d0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2rxmgnzy',
                  apiId: '01fed391-b02e-4f42-b566-4277a0cd9d25'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marenpg/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2rxmgnzy.netlify.com', category: 'apps'}
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
