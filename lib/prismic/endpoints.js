import { getDataType } from './api'

export async function getBlogPosts() {
  return await getDataType({
    typeName: 'BlogPost',
    model: `
      title
      content
      excerpt
      cover
      date
      category
    `
  })
}

export async function getRefProjects() {
  return await getDataType({
    typeName: 'ReferenceProject', model: `
    name
    studentproject
    description
    img
    project_url {
      __typename
        ... on _ExternalLink{
          url
        }
    }
  `
  })
}

export async function getPersonalProjects() {
  return await getDataType({
    typeName: 'PersonalProject', model: `
    title
    excerpt
    startdate
    description
    img
  `
  })
}
