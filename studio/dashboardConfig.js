export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5e90615746f201a51b46daaa',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-fj9orp83',
                  apiId: '0a9e5fb2-8a2b-4150-bfcd-f28580bb1ccc'
                },
                {
                  buildHookId: '5e9061573c0e433df100d859',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-f15j812r',
                  apiId: 'e5285539-eb0f-4b12-8f3f-c6408e1b65f5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/UK090483/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-f15j812r.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
