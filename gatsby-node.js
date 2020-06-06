// const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const path = require("path")

exports.createPages = executePageCreation

async function executePageCreation({ graphql, actions, reporter }) {
  const { createPage } = actions
  const response = await graphql(`
    {
      allContentfulVacature(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  if (response.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  response.data.allContentfulVacature.edges.forEach(({ node }) => {
    createVacaturePages(node, createPage)
  })
}

function createVacaturePages(node, createPage, resolve) {
  const vacancyTemplate = path.resolve("./src/templates/vacature.js")
  createPage({
    path: `/vacatures/${node.slug}`,
    component: vacancyTemplate,
    context: {
      slug: node.slug,
    },
  })
}
