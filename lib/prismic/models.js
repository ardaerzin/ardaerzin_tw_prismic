export const BlogModel = `
  title
  content
  excerpt
  cover
  date
  category
`

export const RefProjectModel = `
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

export const PersonalProjectModel = `
  title
  excerpt
  startdate
  description
  img
`
