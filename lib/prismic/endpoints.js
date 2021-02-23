import { getDataType } from './api'

export async function getRefProjects() {
  return await getDataType({
    typeName: 'ReferenceProject', model: `
    name
    studentproject
    description
    img
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
