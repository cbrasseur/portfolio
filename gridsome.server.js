// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  // api.createPages(async({
  //   graphql,
  //   createPage,
  // }) => {
  //   const { data } = await graphql(`{
  //       allPost {
  //           edges {
  //               node {
  //                   id
  //                   title
  //                   slug
  //                   excerpt
  //                   date(format: "DD/MM/YYYY")
  //               }
  //           }
  //       }
  //   }`)

  //   data.allPost.edges.forEach(({
  //       node,
  //   }) => {
  //       createPage({
  //           path: `/creations/${node.slug}`,
  //           component: './src/templates/Creation.vue',
  //           context: {
  //               recordId: node.id,
  //           },
  //       })
  //   })
  // })
}