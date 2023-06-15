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
export { getPosts, getSinglepost, getCommentOnPost, createPost }

