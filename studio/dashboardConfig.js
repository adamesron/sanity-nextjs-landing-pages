export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5eb8fdca55780ed59d01a19b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-usbtifme',
                  apiId: '6942da32-187c-482a-963c-4cf14cf8ffc4'
                },
                {
                  buildHookId: '5eb8fdca6b524c38c959234b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wmh7fxof',
                  apiId: '76927fa1-8f4c-4bbd-86d0-9a047e442c4d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adamesron/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wmh7fxof.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
