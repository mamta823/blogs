import axiosFile from "../helpers/axiosfile"

const getPosts = async () => {
    return await axiosFile.get("/detail")
}
const getSinglepost = async (id) => {
    return await axiosFile.get(`/detail/${id}`)
}
const comment = [
    { name: "hussain", id: 12, comment: "test commnet" }
]
const getCommentOnPost = async (id) => {
    return await axiosFile.get(`/detail/${id}/comments`, comment)
}
const createPost = async (payloaddata) => {
    return await axiosFile.post(`/detail`, payloaddata)
}
export { getPosts, getSinglepost, getCommentOnPost, createPost }

