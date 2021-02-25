import { getDataById, getDataType } from './api'

export const getBlogPostBySlug = async (uid) => {
  return await getDataById({
    typeName: 'BlogPost',
    model: `
      title
      content
      excerpt
      cover
      date
      category
    `,
    uid
  })
}

export const getBlogPosts = async () => {
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

export const getRefProjects = async () => {
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

export const getPersonalProjects = async () => {
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
