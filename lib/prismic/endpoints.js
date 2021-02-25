import { BlogModel, RefProjectModel, PersonalProjectModel } from './models'
import { findData, getDataById, getDataType } from './api'

export const findSimilarBlogPosts = async (sim) => {
  return await findData({
    typeName: 'BlogPost',
    model: BlogModel,
    searchParam: {
      key: 'similar',
      value: sim
    }
  })
}

export const getBlogPostBySlug = async (uid) => {
  return await getDataById({
    typeName: 'BlogPost',
    model: BlogModel,
    uid
  })
}

export const getBlogPosts = async () => {
  return await getDataType({
    typeName: 'BlogPost',
    model: BlogModel
  })
}

export const getRefProjects = async () => {
  return await getDataType({
    typeName: 'ReferenceProject',
    model: RefProjectModel
  })
}

export const getPersonalProjects = async () => {
  return await getDataType({
    typeName: 'PersonalProject',
    model: PersonalProjectModel
  })
}
