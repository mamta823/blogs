import axiosFile from "../helpers/axiosfile"

const getPosts = async () => {
    return await axiosFile.get("/detail")
}
const getSinglepost = async (id) => {
    return await axiosFile.get(`/detail/${id}`)
}
const getCommentOnPost = async (payloaddata, id) => {
    return await axiosFile.put(`/detail/${id}`, payloaddata)
}
const createPost = async (payloaddata) => {
    return await axiosFile.post(`/detail`, payloaddata)
}
const deletePost = async (id) => {
    return await axiosFile.delete(`/detail/${id}`)
}
const editPost = async (id, payloaddata) => {
    return await axiosFile.put(`/detail/${id}`, payloaddata)
}
export { getPosts, getSinglepost, getCommentOnPost, createPost, deletePost, editPost }

